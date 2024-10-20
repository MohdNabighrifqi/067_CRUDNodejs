import express, { Router } from "express";

const router = express.Router();

const mahasiswa =[
    {
    nama: "Zaki", 
    kelas: "B",
    nim: 20220140077,
    angkatan: 2022,
    },
    {
    nama: "Jodi",
    kelas: "B",
    nim: 20220140060,
    tahun: 2022,
    },
];

router.get("/", (req, res) =>{
    res.send(mahasiswa);
});

export default router;