import { Schema, model } from 'mongoose';
import { IUserSignup, UserSignupModel } from './userSignup.interfaces';

const UserSignupSchema = new Schema<
IUserSignup,
  UserSignupModel
>(
  {
    password: {
      type:String,
      required: true,
    },
    role: {
      type:String,
      enum: ['seller', 'buyer'],
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    name: {
      type: {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
        middleName: {
          type: String,
          required: false,
        },
      },
      required: true,
    },
    address: {
      type:String,
      required: true,
    },
    budget: {
      type:Number,
      required: false,
    },
    income: {
      type: Number,    
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const UserSignup = model<
IUserSignup,
  UserSignupModel
>('UserSignup', UserSignupSchema);
