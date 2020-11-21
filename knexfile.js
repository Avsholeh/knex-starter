require("dotenv").config()

module.exports = {
	development: {
		client: process.env.DB_CLIENT,
		connection: {
			database: process.env.DB_NAME,
			user: process.env.DB_USER,
			password: process.env.DB_PASS,
		},
		migrations: {
			directory: "./db/migrations/development",
			tableName: process.env.KNEX_TABLENAME,
		},
	},

	production: {
		client: process.env.DB_CLIENT,
		connection: {
			database: process.env.DB_NAME,
			user: process.env.DB_USER,
			password: process.env.DB_PASS,
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			directory: "./db/migrations/production",
			tableName: process.env.KNEX_TABLENAME,
		},
	},
}
