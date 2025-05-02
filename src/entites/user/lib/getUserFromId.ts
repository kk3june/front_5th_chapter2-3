import { User } from "../model/types"

export const getUserFromId = (users: User[], id: number) => {
  return users.find((user) => user.id === id)
}
