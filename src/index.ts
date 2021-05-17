import express from "express";
import http from "http";

import router from "./routes";

const app = express();
const server = http.createServer(app);

app.use("/", (req, res) => {
    return res.json("fasdfsadf");
});

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`The server is running on port ${port}`));
