import { SortOrder } from 'mongoose';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { adminSearchableFields } from './admin.constant';
import { IAdmin, IAdminFilters } from './admin.interface';
import { Admin } from './admin.model';

//create single admin
const createAdmin = async (
  payload: IAdmin
): Promise<IAdmin | null> => {
  const result = (await Admin.create(payload))
  return result;
};

//getting single admin
const getSingleAdmin = async (
  id: string
): Promise<IAdmin | null> => {
  const result = await Admin.findById(id)
  

  return result;
};

//getting all admins
const getAllAdmins = async (
  filters: IAdminFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IAdmin[]>> => {
  const { limit, page, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: adminSearchableFields.map(field => ({
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

  const result = await Admin.find(whereConditions)
    
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Admin.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

//updating admin
const updateAdmin = async (
  id: string,
  payload: Partial<IAdmin>
): Promise<IAdmin | null> => {
  const result = await Admin.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    }
  );

  return result;
};

//deleting admin
const deleteAdmin = async (
  id: string
): Promise<IAdmin | null> => {
  const result = await Admin.findByIdAndDelete(id);
  return result;
};

export const AdminService = {
  createAdmin,
  getSingleAdmin,
  getAllAdmins,
  updateAdmin,
  deleteAdmin,
};
