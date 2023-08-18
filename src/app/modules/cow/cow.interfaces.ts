import { Model, Types } from 'mongoose';
import { IUserSignup } from '../userSignup/userSignup.interfaces';

export type ICow = {
  name: string;
  age: number;
  price: number;
  location:'Dhaka' | 'Chattogram' | 'Barishal' | 'Rajshahi' | 'Sylhet' | 'Comilla' | 'Rangpur' | 'Mymensingh';
  breed:'Brahman' | 'Nellore' | 'Sahiwal' | 'Gir' | 'Indigenous' | 'Tharparkar' | 'Kankrej';
  weight:number;
  label:'for sale'|'sold out';
  category: 'Dairy ' |'Beef' | 'DualPurpose';
  seller: Types.ObjectId | IUserSignup;
};

export type CowModel = Model<
  ICow,
  Record<string, unknown>
>;

export type ICowFilters = {
  searchTerm?: string;
  seller?: Types.ObjectId;
};
