import { Model, Types } from 'mongoose';


export type UserNameSignup = {
  firstName: string;
  lastName: string;
  middleName: string;
};

export type IUserSignup = {
  password: string;
  role: 'seller' | 'buyer';
  phoneNumber: number;
  name:UserNameSignup;
  address:string;
  budget:number;
  income:number;
};

export type UserSignupModel = Model<
IUserSignup,
  Record<string, unknown>
>;

export type IUserSignupFilters = {
  searchTerm?: string;
  seller?: Types.ObjectId;
};
