"use strict"

require("dotenv").config()
const path = require("path")

MySQL_Connection = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
}

MSSQL_Connection = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	options: {
		instanceName: process.env.DB_INSTANCE,
		encrypt: false,
		enableArithAbort: false,
	},
}

const knex = require("knex")({
	client: process.env.DB_CLIENT,
	connection:
		process.env.DB_CLIENT === "mssql" ? MSSQL_Connection : MySQL_Connection,
	debug: process.env.NODE_ENV === "development",
})

knex.debug = true

module.exports = knex
