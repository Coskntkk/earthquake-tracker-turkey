const app = require("express")();
const http = require("http").createServer(app);
const cors = require("cors");

const indexController = require("./controllers/indexController");

app.use(cors());
app.get("/", indexController.index);

const PORT = process.env.PORT || 3000;
http.listen(PORT, function () {
    console.log("The api is on.");
});
