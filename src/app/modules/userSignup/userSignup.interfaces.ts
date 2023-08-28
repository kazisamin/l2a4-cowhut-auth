import { Model, Types } from 'mongoose';


export type UserNameSignup = {
  firstName: string;
  lastName: string;
  middleName: string;
};

export type IUserSignup = {
  password: string;
  needsPasswordChange: boolean;
  passwordChangedAt?: Date;
  role: 'seller' | 'buyer';
  phoneNumber: number;
  name:UserNameSignup;
  address:string;
  budget:number;
  income:number;
};

// export type UserSignupModel = Model<
// IUserSignup,
//   Record<string, unknown>
// >;

export type UserSignupModel = {
  isUserExist(
    phoneNumber: number
  ): Promise<Pick<IUserSignup,  'phoneNumber' | 'password' | 'role' | 'needsPasswordChange'>>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IUserSignup>;

export type IUserSignupFilters = {
  searchTerm?: string;
  seller?: Types.ObjectId;
};
