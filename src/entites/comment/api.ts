import { CommentType, NewComment } from "./model/types"

export const fetchCommentsByPostId = async (postId: number) => {
  const response = await fetch(`/api/comments/post/${postId}`)
  const data = await response.json()
  return data
}

export const fetchAddComment = async (comment: NewComment) => {
  const response = await fetch("/api/comments/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  })
  const data = await response.json()

  return data
}

export const fetchUpdateComment = async (id: number, comment: CommentType) => {
  const response = await fetch(`/api/comments/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  })
  const data = await response.json()
  return data
}

export const fetchDeleteComment = async (id: number) => {
  const response = await fetch(`/api/comments/${id}`, {
    method: "DELETE",
  })
  const data = await response.json()
  return data
}

export const fetchLikeComment = async (id: number, likes: number) => {
  const response = await fetch(`/api/comments/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ likes: likes + 1 }),
  })
  const data = await response.json()
  return data
}
