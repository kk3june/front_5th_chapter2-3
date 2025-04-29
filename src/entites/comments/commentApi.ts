export const commentApi = {
  getCommentsByPostId: async (postId: number) => {
    const response = await fetch(`/api/comments/post/${postId}`)
    const data = await response.json()
    return data
  },

  addComment: async (comment: Comment) => {
    const response = await fetch("/api/comments/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    })
    const data = await response.json()
    return data
  },

  updateComment: async (id: number, comment: Comment) => {
    const response = await fetch(`/api/comments/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    })
    const data = await response.json()
    return data
  },

  deleteComment: async (id: number) => {
    const response = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    })
    const data = await response.json()
    return data
  },

  likeComment: async (id: number, likes: number) => {
    const response = await fetch(`/api/comments/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: likes + 1 }),
    })
    const data = await response.json()
    return data
  },
}
