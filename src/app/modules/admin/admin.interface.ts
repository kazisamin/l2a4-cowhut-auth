import { Model, Types } from 'mongoose';


export type UserNameAdmin = {
  firstName: string;
  lastName: string;
  middleName: string;
};

export type IAdmin = {
  password: string;
  role: string;
  phoneNumber: number;
  name:UserNameAdmin;
  address:string;
 
};

export type AdminModel = Model<
IAdmin,
  Record<string, unknown>
>;

export type IAdminFilters = {
  searchTerm?: string;
  seller?: Types.ObjectId;
};
