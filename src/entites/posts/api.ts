import { NewPost, PaginatedPosts, Post } from "./types"

export const fetchPosts = async ({ limit, skip }: { limit: number; skip: number }): Promise<PaginatedPosts> => {
  const response = await fetch(`/api/posts?limit=${limit}&skip=${skip}`)
  const data = await response.json()
  return data
}

export const fetchPostsTags = async () => {
  const response = await fetch("/api/posts/tags")
  const data = await response.json()
  return data
}

export const fetchPostTag = async (tag: string) => {
  const response = await fetch(`/api/posts/tag/${tag}`)
  const data = await response.json()
  return data
}

export const fetchPostBySearchQuery = async (searchQuery: string) => {
  const response = await fetch(`/api/posts/search?q=${searchQuery}`)
  const data = await response.json()
  return data
}

export const fetchAddPost = async (newPost: NewPost) => {
  const response = await fetch("/api/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  })
  const data = await response.json()
  return data
}

export const fetchUpdatePost = async (id: number, post: Post) => {
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  })
  const data = await response.json()
  return data
}

export const fetchDeletePost = async (id: number) => {
  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  })
  const data = await response.json()
  return data
}
