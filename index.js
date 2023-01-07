require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

const personRoutes = require("./routes/personRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/person', personRoutes);


app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello, Express!" });
});


mongoose
  .connect(process.env.DBURL)
  .then(() => {
    const port = process.env.PORT || 3000;

    console.log("Connecting to MongoDB");

    app.listen(port, () => {
      console.log(`Server listening on https://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
