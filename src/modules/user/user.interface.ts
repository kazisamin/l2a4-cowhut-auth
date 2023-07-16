import { Model } from 'mongoose'

export type IUser = {
  id: string
  role: string
  password: string
  // seller?: Types.ObjectId | ISeller
  // buyer?: Types.ObjectId | IBuyer
}

export type UserModel = Model<IUser, Record<string, unknown>>
