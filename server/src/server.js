const app = require("./index");
const cors = require("cors");
const connect = require('./configs/db');
app.use(cors({origin:"*"}))
app.listen(5000, async() => {

    await connect();
    console.log("listening at port:5000");
});