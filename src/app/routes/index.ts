import express from 'express';
import { AdminRoutes } from '../modules/admin/admin.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { CowRoutes } from '../modules/cow/cow.routes';
import { UserSignupRoutes } from '../modules/userSignup/userSignup.routes';

const router = express.Router();

const moduleRoutes = [
 
  {
    path: '/cows',
    route: CowRoutes,
  },
  {
    path: '/users',
    route: UserSignupRoutes,
  },
  // {
  //   path: '/users',
  //   route: UserSignupRoutes,
  // },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  
  
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
