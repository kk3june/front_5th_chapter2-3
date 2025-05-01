import { getUserFromId } from "../../users/lib/getUserFromId"
import { User } from "../../users/types"
import { PaginationPost, Post } from "../types"

export default function addAuthorToPosts(posts: PaginationPost[], users: User[]): Post[] {
  return posts.map((post) => ({
    ...post,
    author: getUserFromId(users, post.userId) || users[0],
  }))
}
