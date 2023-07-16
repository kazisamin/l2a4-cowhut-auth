import { Error } from 'mongoose'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateUserId } from './user.utils'
import config from '../../config/index'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await generateUserId()
  user.id = id

  //default password
  if (!user.password) {
    user.password = config.default_seller_pass as string
  }

  const createdUser = await User.create(user)

  if (!createUser) {
    throw new Error('Failed to create user!')
  }
  return createdUser
}
export const UserService = {
  createUser,
}
