import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { cowFilterableFields } from './cow.constants';
import { ICow } from './cow.interfaces';
import { CowService } from './cow.service';

const createCow = catchAsync(async (req: Request, res: Response) => {
  const { ...cowData } = req.body;
  const result = await CowService.createCow(
    cowData
  );

  sendResponse<ICow>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cow created successfully',
    data: result,
  });
});

const getSingleCow = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CowService.getSingleCow(id);

  sendResponse<ICow>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cow fetched successfully',
    data: result,
  });
});

const getAllCows = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, cowFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await CowService.getAllCows(
    filters,
    paginationOptions
  );

  sendResponse<ICow[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cows fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const updateCow = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CowService.updateCow(id, req.body);

  sendResponse<ICow>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cow updated successfully',
    data: result,
  });
});

const deleteCow = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CowService.deleteCow(id);

  sendResponse<ICow>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cow deleted successfully',
    data: result,
  });
});

export const CowController = {
  createCow,
  getSingleCow,
  getAllCows,
  updateCow,
  deleteCow,
};
