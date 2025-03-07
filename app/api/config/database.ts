import { DatabaseIn } from "@/types";
import { Kysely, PostgresDialect } from "kysely";
import { Pool } from 'pg'

class Database {
	private database: Kysely<DatabaseIn> | undefined

	private pgDatabase = process.env.PG_DATABASE as string | 'database';
	private pgHost = process.env.PG_HOST as string | 'localhost';
	private pgUser = process.env.PG_USER as string | 'postgres';
	private pgPassword = process.env.PG_PASSWORD as unknown as string | 'postgres';
	private pgPort = process.env.PG_PORT as unknown as number | 5432;
	private pgMax = 10;

	private dialect: PostgresDialect

	constructor() {
		this.dialect = new PostgresDialect({
			pool: new Pool({
				database: this.pgDatabase,
				host: this.pgHost,
				user: this.pgUser,
				port: this.pgPort,
				password: this.pgPassword,
				max: this.pgMax,
			})
		})
	}

	public connect = () => {
		this.database = new Kysely<DatabaseIn>({
			dialect: this.dialect,
		})
	}

	public getConnection = () => {
		return this.database as Kysely<DatabaseIn>;
	}
}

export const database = new Database();
