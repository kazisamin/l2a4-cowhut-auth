import bcrypt from 'bcrypt';

import { Schema, model } from 'mongoose';
import config from '../../../config';
import { IUserSignup, UserSignupModel } from './userSignup.interfaces';

const UserSignupSchema = new Schema<
IUserSignup,
  UserSignupModel
  
>(
  {
    password: {
      type:String,
      required: true,
      select: 0,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    passwordChangedAt: {
      type: Date,
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
UserSignupSchema.statics.isUserExist = async function (
  phoneNumber: number
): Promise<IUserSignup | null> {
  return await UserSignup.findOne(
    { phoneNumber },
    { phoneNumber: 1, password: 1, role: 1, needsPasswordChange: 1 }
  );
};

UserSignupSchema.statics.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword);
};

UserSignupSchema.methods.changedPasswordAfterJwtIssued = function (
  jwtTimestamp: number
) {
  console.log({ jwtTimestamp }, 'hi');
};

// User.create() / user.save()
UserSignupSchema.pre('save', async function (next) {
  // hashing user password
  const userSignup = this;
  userSignup.password = await bcrypt.hash(
    userSignup.password,
    Number(config.bycrypt_salt_rounds)
  );

  if (!userSignup.needsPasswordChange) {
    userSignup.passwordChangedAt = new Date();
  }

  next();
});

export const UserSignup = model<
IUserSignup,
  UserSignupModel
>('UserSignup', UserSignupSchema);
