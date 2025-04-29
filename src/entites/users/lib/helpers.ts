import { User } from "../types"

export const getUserFromId = (users: User[], id: string) => {
  return users.find((user) => user.id === id)
}
