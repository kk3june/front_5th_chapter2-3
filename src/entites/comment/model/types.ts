import { User } from "../users/types"

export interface NewComment {
  userId: number
  body: string
  postId: number | null
}

export interface CommentType {
  body: string
  id: number
  likes: number
  postId: number
  user: User
}
