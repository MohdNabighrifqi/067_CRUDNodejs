import express from 'express';
import bodyParser from 'body-parser';
import mobilroute from "./routes/mobil.js";
import mahasiswaroute from "./routes/Mahasiswa.js";

const app = express();
const port = 8000;

app.use("/mobil", mobilroute);
app.use("/mahasiswa", mahasiswaroute);
app.get("/", (req, res) => {
    console.log(["GET ROUTE"]);
    res.send("selamat Pagi");
});


app.use(bodyParser.json ());

app.listen(port, () =>
    console.log(
        `server berjalan di port : http://localhost:${port}`)
);