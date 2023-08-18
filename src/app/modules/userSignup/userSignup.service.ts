import { SortOrder } from 'mongoose';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { userSignupSearchableFields } from './userSignup.constants';
import { IUserSignup, IUserSignupFilters } from './userSignup.interfaces';
import { UserSignup } from './userSignup.model';

//create single user
const createUserSignup = async (
  payload: IUserSignup
): Promise<IUserSignup | null> => {
  const result = (await UserSignup.create(payload))
  return result;
};

//getting single user
const getSingleUserSignup = async (
  id: string
): Promise<IUserSignup | null> => {
  const result = await UserSignup.findById(id)
  

  return result;
};

//getting all users
const getAllUsersSignup = async (
  filters: IUserSignupFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IUserSignup[]>> => {
  const { limit, page, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: userSignupSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $paginationOptions: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await UserSignup.find(whereConditions)
    
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await UserSignup.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

//updating user
const updateUserSignup = async (
  id: string,
  payload: Partial<IUserSignup>
): Promise<IUserSignup | null> => {
  const result = await UserSignup.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    }
  );

  return result;
};

//deleting user
const deleteUserSignup = async (
  id: string
): Promise<IUserSignup | null> => {
  const result = await UserSignup.findByIdAndDelete(id);
  return result;
};

export const UserSignupService = {
  createUserSignup,
  getSingleUserSignup,
  getAllUsersSignup,
  updateUserSignup,
  deleteUserSignup,
};
