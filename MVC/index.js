const express = require("express");
const app = express();
const PORT = 5001;
const userRouter = require("./routes/users.route.js");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

app.use(userRouter);

app.listen(PORT, () => {
    console.log("Server running at http://localhost:"+PORT);
});

