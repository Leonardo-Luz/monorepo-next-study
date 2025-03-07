import { ColumnType, Generated, Insertable, Selectable, Updateable } from "kysely";

export interface DatabaseIn {
  users: UsersTable
  posts: PostsTable
}

export interface UsersTable {
  id: Generated<string>

  name: string

  login: string
  password: string

  email: string | null

  createdAt: ColumnType<Date, string | undefined, never>
  updatedAt: ColumnType<Date, string | undefined, string | undefined>
}

export type User = Selectable<UsersTable>;
export type NewUser = Insertable<UsersTable>;
export type UpdateUser = Updateable<UsersTable>;

export interface PostsTable {
  id: Generated<string>

  title: string
  text: string
  image: string | null

  userId: string

  createdAt: ColumnType<Date, string | undefined, never>
  updatedAt: ColumnType<Date, string | undefined, string | undefined>
}

export type Post = Selectable<PostsTable>;
export type NewPost = Insertable<PostsTable>;
export type UpdatePost = Updateable<PostsTable>;
