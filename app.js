const path = require("path");

const express = require("express");

const bodyParser = require("body-parser");

const sequelize = require("./util/database");

const app = express();

app.set("view engine", "ejs");
app.set("views", "view");

const tableRoute = require("./route/playerRoutes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/player", tableRoute);

app.use("/", (req,res,next)=>{
  res.render('index',{
    path:'/index',
    pageTitle:"Add new player",
    isEdit:false
  })
});

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found", path: "/404" });
});

sequelize
  // .sync({force:true})
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("server is running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
