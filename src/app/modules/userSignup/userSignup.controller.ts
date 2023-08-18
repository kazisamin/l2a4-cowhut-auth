import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { userSignupFilterableFields } from './userSignup.constants';
import { IUserSignup } from './userSignup.interfaces';
import { UserSignupService } from './userSignup.service';

const createUserSignup = catchAsync(async (req: Request, res: Response) => {
  const { ...userSignupData } = req.body;
  const result = await UserSignupService.createUserSignup(
    userSignupData
  );

  sendResponse<IUserSignup>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

const getSingleUserSignup = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await UserSignupService.getSingleUserSignup(id);

  sendResponse<IUserSignup>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User fetched successfully',
    data: result,
  });
});

const getAllUsersSignup = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, userSignupFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await UserSignupService.getAllUsersSignup(
    filters,
    paginationOptions
  );

  sendResponse<IUserSignup[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const updateUserSignup = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await UserSignupService.updateUserSignup(id, req.body);

  sendResponse<IUserSignup>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully',
    data: result,
  });
});

const deleteUserSignup = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await UserSignupService.deleteUserSignup(id);

  sendResponse<IUserSignup>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted successfully',
    data: result,
  });
});

export const UserSignupController = {
  createUserSignup,
  getSingleUserSignup,
  getAllUsersSignup,
  updateUserSignup,
  deleteUserSignup,
};
