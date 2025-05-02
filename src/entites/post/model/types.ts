import { User } from "../../user/model/types"

export interface PaginatedPosts {
  limit: number
  skip: number
  total: number
  posts: PaginationPost[]
}

export type PaginationPost = Omit<Post, "author">

export interface Post {
  id: number
  userId: number
  title: string
  body: string
  views: number
  tags: string[]
  reactions: Reaction
  author: User
}

export interface NewPost {
  title: string
  body: string
  userId: number
}

interface Reaction {
  likes: number
  dislikes: number
}

export interface Tag {
  slug: string
  name: string
  url: string
}

export enum DIALOG_TYPE {
  ADD_POST = "add",
  EDIT_POST = "edit",
  DETAIL_POST = "detail",
  ADD_COMMENT = "addComment",
  EDIT_COMMENT = "editComment",
  USER = "user",
}
