import { database } from "../../config/database";
import { UpdateUser, NewUser, User } from "@/types";

class Repository {
	private connection = database.getConnection();

	public findUserById = async (id: string) =>
		await this.connection.selectFrom('users')
			.where('users.id', '=', id)
			.selectAll()
			.executeTakeFirst();

	public findUsers = async (criteria: Partial<User>) => {
		let query = this.connection.selectFrom('users')

		if (criteria.name)
			query = query.where('users.name', '=', criteria.name)

		if (criteria.email !== undefined)
			query = query.where(
				'users.email',
				criteria.email === null ? 'is' : '=',
				criteria.email
			)

		if (criteria.createdAt)
			query = query.where('users.createdAt', '=', criteria.createdAt)


		if (criteria.updatedAt)
			query = query.where('users.updatedAt', '=', criteria.updatedAt)

		return await query.selectAll().execute()
	}

	public createUser = async (create: NewUser) =>
		await this.connection.insertInto('users')
			.values(create)
			.returningAll()
			.executeTakeFirstOrThrow()

	public updateUser = async (id: string, update: UpdateUser) =>
		await this.connection.updateTable('users')
			.set(update)
			.where('users.id', '=', id)
			.execute()

	public deleteUser = async (id: string) =>
		await this.connection.deleteFrom('users')
			.where('users.id', '=', id)
			.returningAll()
			.executeTakeFirst()
}

const repository = new Repository()
