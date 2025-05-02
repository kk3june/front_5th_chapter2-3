import { getUserFromId } from "../../user/lib/getUserFromId"
import { User } from "../../user/model/types"
import { PaginationPost, Post } from "../model/types"

export default function addAuthorToPosts(posts: PaginationPost[], users: User[]): Post[] {
  return posts.map((post) => ({
    ...post,
    author: getUserFromId(users, post.userId) || users[0],
  }))
}
