import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserSignupController } from './userSignup.controller';
import { UserSignupValidation } from './userSignup.validations';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(
    UserSignupValidation.createUserSignupZodSchema
  ),
  UserSignupController.createUserSignup
);

router.get('/:id', UserSignupController.getSingleUserSignup);

router.get('/', UserSignupController.getAllUsersSignup);

router.patch(
  '/:id',
  validateRequest(
    UserSignupValidation.updateUserSignupZodSchema
  ),
  UserSignupController.updateUserSignup
);

router.delete(
  '/:id',
  UserSignupController.deleteUserSignup
);

export const UserSignupRoutes = router;