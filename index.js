require("dotenv").config()
const db = require("./db")

db.select("*")
	.from(process.env.DB_NAME + ".skd_spd")
	.then((result) => console.log(result))
