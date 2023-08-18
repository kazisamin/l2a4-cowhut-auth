import { z } from 'zod';

const createCowZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'name is required',
    }),
    seller: z.string({
      required_error: 'seller is required',
    }),
  }),
});

const updateCowZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    seller: z.string().optional(),
  }),
});

export const CowValidation = {
  createCowZodSchema,
  updateCowZodSchema,
};
