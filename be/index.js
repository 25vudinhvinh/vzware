const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes");
app.use(express.json());

app.listen(port, () => {
    console.log(`Server chạy tại http://localhost:${port}`);
});

app.use("/", routes);
