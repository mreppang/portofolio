const express = require("express");
const router = express.Router();

router.get("/api/hero", (req, res) => {
  res.json({
    nama: "M.Revan Adi Suntama",
    peran: "Fullstack Web Developer",
    deskripsi:
      "Saya seorang siswa XII RPL 1 di SMK Telkom Makassar yang sedang belajar membuat aplikasi web menggunakan Express.js.",
  });
});

module.exports = router;