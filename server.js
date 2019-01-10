const express = require("express");

const app  = express();
const port = (process.env.PORT || 5000);

require("./DB").setConnection()
.then(() => console.log("MongoDB Connected!!!"))
.catch(error => console.log(error));

app.use(express.urlencoded({extended: false}));
app.use(express.json());



app.use((req, res, next) => {
    return res.status(404).json({Error: "Error 404 - Page Not Found"});
});

app.listen(port, () => console.log(`Server Started On Port ${port}`));