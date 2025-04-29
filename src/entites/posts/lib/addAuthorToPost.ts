import { getUserFromId } from "../../users/lib/getUserFromId"
import { User } from "../../users/types"
import { Post } from "../types"

export default function addAuthorToPosts(posts: Post[], users: User[]) {
  return posts.map((post) => ({
    ...post,
    author: getUserFromId(users, post.userId.toString()),
  }))
}
