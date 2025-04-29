import { User } from "../users/types"

export interface Posts {
  limit: number
  skip: number
  total: number
  posts: Post[]
}

export interface Post {
  id: number
  userId: number
  title: string
  body: string
  views: number
  tags: string[]
  reactions: Reaction
  author?: User
}

interface Reaction {
  likes: number
  dislikes: number
}
