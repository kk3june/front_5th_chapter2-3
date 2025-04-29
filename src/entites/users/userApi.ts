export const fetchUser = async (id: string) => {
  const response = await fetch(`/api/users/${id}`)
  const data = await response.json()
  return data
}

export const fetchUsers = async () => {
  const response = await fetch("/api/users?limit=0&select=username,image")
  const data = await response.json()
  return data
}
