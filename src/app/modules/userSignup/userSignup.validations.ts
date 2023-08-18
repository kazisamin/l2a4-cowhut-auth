import { z } from 'zod';

const createUserSignupZodSchema = z.object({
  body: z.object({
    password: z.string({
      required_error: 'passsword is required',
    }),
    role: z.string({
      required_error: 'role is required',
    }),
    phoneNumber: z.number({
      required_error: 'phone number is required',
    }),
    name: z.object({
      firstName: z.string({
        required_error: 'First name is required',
      }),
      lastName: z.string({
        required_error: 'Last name is required',
      }),
      middleName: z.string().optional(),
    }),
    address: z.string({
      required_error: 'address is required',
    }),
    budget: z.number({
      required_error: 'budget is required',
    }),
    income: z.number({
      required_error: 'income is required',
    }),
  }),
});

const updateUserSignupZodSchema = z.object({
  body: z.object({
    phoneNumber: z.string().optional(),
    role: z.string().optional(),
    password: z.string().optional(),
    name: z.object({
      firstName: z.string().optional(),
      lastName: z.string().optional(),
      middleName: z.string().optional(),
    }).optional(),
    address: z.string().optional(),
    budget: z.number().optional(),
    income: z.number().optional(),
  }),
});

export const UserSignupValidation = {
  createUserSignupZodSchema,
  updateUserSignupZodSchema,
};
