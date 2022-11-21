const express = require('express');
const app = express();
const port = 3000;
const programmingLanguagesRouter = require("./routes/programmingLanguages");

// MIDDLEWARE
app.use(express.json()); // a built express middleware that convert request body to JSON (relevant for POST/PUT/PATCH)
app.use(express.urlencoded({extended: true})); // just like express.json() converts request body to JSON, it also carries out some other functionalities like: converting form-data to JSON etc.

// ROUTES
app.get("/", (req, res) => {
    res.json({ message: "ok"});
});
app.use("/programming-languages", programmingLanguagesRouter);

// ERROR HANDLER MIDDLEWARE
app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});

// LISTEN ON PORT X
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});