import { z } from 'zod';

const createAdminZodSchema = z.object({
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
    })
    
  }),
});

const updateAdminZodSchema = z.object({
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
   
  }),
});

export const AdminValidation = {
  createAdminZodSchema,
  updateAdminZodSchema,
};
