const express = require("express");

const app  = express();
const port = (process.env.PORT || 5000);

require("./DB").setConnection()
.then(() => console.log("MongoDB Connected!!!"))
.catch(error => console.log(error));



app.listen(port, () => console.log(`Server Started On Port ${port}`));