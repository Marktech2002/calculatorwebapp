
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true})) // to handle details from html forms

app.listen(3000, ()=> {
    console.log("server is live")  // server set up
});

app.post("/" , (req, res)=> {  // handles post request on homepage
     var num1 = Number(req.body.num1);
     var num2 =  Number(req.body.num2);
     var result = num1 + num2 ;
    res.send("The answer is" + result);
});


app.get("/" , (req , res) => {       // homepage routes
    res.sendFile(__dirname + "/index.html")
});


app.get("/bmicalculator" , (req ,res)=> {
    res.sendFile(__dirname + "/bmicalculator.html")
  
});

app.post("/bmicalculator" , (req , res)=> {
    var height = parseFloat(req.body.height) ;
    var weight = parseFloat(req.body.weight) ;
    var bmiResult = weight / (height * height);
    res.send("The result of the bmi calculator " + bmiResult);
});