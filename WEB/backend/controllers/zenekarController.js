const pool = require("../db/pool");

const getZenekarok = async (req, res) => {
const [rows] =
await pool.query(
"SELECT * FROM zenekarok"
);
res.json(rows);
};

const getStilusok = async (req, res) => {
const [rows] =
await pool.query(
"SELECT * FROM stilusok"
);
res.json(rows);
};

const ujZenekar = async (req, res) => {
const {
nev,
stilus_id,
orszag,
varos,
aktiv_evek,
tagok,
legsikeresebb_album,
kep_url
} = req.body;

if (
!nev ||
!stilus_id ||
!orszag ||
!varos
) {
return res
.status(400)
.json("Hiányos adatok");
}
const [result] =
await pool.query(
`
INSERT INTO zenekarok
(
nev,
stilus_id,
orszag,
varos,
aktiv_evek,
tagok,
legsikeresebb_album,
kep_url
)
VALUES
(?, ?, ?, ?, ?, ?, ?, ?)

`,

[
nev,
stilus_id,
orszag,
varos,
aktiv_evek,
tagok,
legsikeresebb_album,
kep_url
]
);
res.status(201).json({
id: result.insertId
});
};

module.exports = {
getZenekarok,
getStilusok,
ujZenekar
};