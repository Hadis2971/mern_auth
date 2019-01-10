const express  = require("express");
const passport = require("passport"); 

const app  = express();
const port = (process.env.PORT || 5000);

const usersRouter = require("./API/auth");
const clientErrorHandler = require("./errorHandling/clientErrors");
const catchAllHandler    = require("./errorHandling/catchAll");

require("./DB").setConnection()
.then(() => console.log("MongoDB Connected!!!"))
.catch(error => console.log(error));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(passport.initialize());
require("./Config/passportConfig")(passport);

app.use("/api/auth", usersRouter);
app.use(clientErrorHandler);
app.use(catchAllHandler);

app.use((req, res, next) => {
    return res.status(404).json({Error: "Error 404 - Page Not Found"});
});

app.listen(port, () => console.log(`Server Started On Port ${port}`));