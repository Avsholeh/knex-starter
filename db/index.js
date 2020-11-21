"use strict"

require("dotenv").config()
const path = require("path")

const MySQLConnection = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
}

const MSSQLConnection = {
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
		process.env.DB_CLIENT === "mssql" ? MSSQLConnection : MySQLConnection,
	debug: process.env.NODE_ENV === "development",
})

module.exports = knex
