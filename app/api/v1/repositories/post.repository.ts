import { database } from "../../config/database";
import { UpdatePost, NewPost, Post } from "@/types";

class Repository {
	private connection = database.getConnection();

	public findPostById = async (id: string) =>
		await this.connection.selectFrom('posts')
			.where('posts.id', '=', id)
			.selectAll()
			.executeTakeFirst();

	public findposts = async (criteria: Partial<Post>) => {
		let query = this.connection.selectFrom('posts')

		if (criteria.text)
			query = query.where('posts.text', '=', criteria.text)

		if (criteria.title !== undefined)
			query = query.where(
				'posts.title',
				criteria.title === null ? 'is' : '=',
				criteria.title
			)

		if (criteria.createdAt)
			query = query.where('posts.createdAt', '=', criteria.createdAt)


		if (criteria.updatedAt)
			query = query.where('posts.updatedAt', '=', criteria.updatedAt)

		return await query.selectAll().execute()
	}

	public createPost = async (create: NewPost) =>
		await this.connection.insertInto('posts')
			.values(create)
			.returningAll()
			.executeTakeFirstOrThrow()

	public updatePost = async (id: string, update: UpdatePost) =>
		await this.connection.updateTable('posts')
			.set(update)
			.where('posts.id', '=', id)
			.execute()

	public deletePost = async (id: string) =>
		await this.connection.deleteFrom('posts')
			.where('posts.id', '=', id)
			.returningAll()
			.executeTakeFirst()
}

const repository = new Repository()
