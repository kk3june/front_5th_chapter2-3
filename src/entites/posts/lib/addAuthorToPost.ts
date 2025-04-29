import { Post } from "../posts"
import { User } from "../users"
import { getUserFromId } from "../users/helpers"

export default function addAuthorToPosts(posts: Post[], users: User[]) {
  return posts.map((post) => ({
    ...post,
    author: getUserFromId(users, post.userId.toString()),
  }))
}
