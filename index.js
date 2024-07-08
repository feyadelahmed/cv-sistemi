const express = require("express");
const ejs = require("ejs");
const session = require("express-session");
const path = require("path");
require('dotenv').config()
const authRouter = require("./routes/auth");
const mainRouter = require("./routes/main");
const cvRouter = require("./routes/cv");
const MongoStore = require('connect-mongo');

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const MONGODB_USER = process.env.MONGODB_USER;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
const MONGODB_SESSION_ADDRESS = process.env.MONGODB_SESSION_ADDRESS;
app.use(session({
    store: MongoStore.create({
        mongoUrl: `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_SESSION_ADDRESS}`,
    }),
    secret: process.env.SESSION_SECRET,
}));

app.use("/static", express.static(path.join(__dirname, "static")));

app.use("/", mainRouter);
app.use("/auth", authRouter);
app.use("/cv", cvRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
    if (err) {
        console.log("Error");
        console.log(err);
    } else {
        console.log(`Server Listening http://localhost:${PORT}`);
    }
});