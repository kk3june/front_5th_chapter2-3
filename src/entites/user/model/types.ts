export interface User {
  id: number
  username: string
  image?: string
  fullName?: string
  firstName?: string
  lastName?: string
  age?: number
  email?: string
  phone?: string
  company?: Company
  address?: Address
}

interface Address {
  address: string
  city: string
  state: string
}

interface Company {
  title: string
  name: string
}
