const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.set("views", "./views");

app.get("/", (req, res) => {
  const data = {
    title: "Example Handlebars",
    users: [
      { name: "Camal", age: 25 },
      { name: "Tural", age: 30 },
      { name: "Kamran", age: 35 },
    ],
  };
  res.render("index", data);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is on http://localhost:${PORT}`);
});
