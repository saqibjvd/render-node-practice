const express = require("express");
const app = express();
const port = 3000;

let count = 0;

app.get("/", function (req, res){
res.send("hello you are the code your future" + (count = count + 1));
})




app.listen(3000, function () {
  console.log(`Server is listening on port ${port}. Ready to accept requests!`);
});