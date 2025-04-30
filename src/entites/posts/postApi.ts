import { Post, Posts } from "./types"

const postApi = {
  getPosts: async ({ limit, skip }: { limit: number; skip: number }): Promise<Posts> => {
    const response = await fetch(`/api/posts?limit=${limit}&skip=${skip}`)
    const data = await response.json()
    return data
  },

  getPostsTags: async () => {
    const response = await fetch("/api/posts/tags")
    const data = await response.json()
    return data
  },

  getPostTag: async (tag: string) => {
    const response = await fetch(`/api/posts/tag/${tag}`)
    const data = await response.json()
    return data
  },

  getPostBySearchQuery: async (searchQuery: string) => {
    const response = await fetch(`/api/posts/search?q=${searchQuery}`)
    const data = await response.json()
    return data
  },

  addPost: async (post: Post) => {
    const response = await fetch("/api/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
    const data = await response.json()
    return data
  },

  updatePost: async (id: number, post: Post) => {
    const response = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
    const data = await response.json()
    return data
  },

  deletePost: async (id: number) => {
    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    })
    const data = await response.json()
    return data
  },
}

export default postApi
