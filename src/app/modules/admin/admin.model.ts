import { Schema, model } from 'mongoose';
import { AdminModel, IAdmin } from './admin.interface';

const AdminSchema = new Schema<
IAdmin,
  AdminModel
>(
  {
    password: {
      type:String,
      required: true,
    },
    role: {
      type:String,
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
    
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Admin = model<
IAdmin,
AdminModel
>('Admin', AdminSchema);
