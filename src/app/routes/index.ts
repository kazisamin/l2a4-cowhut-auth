import express from 'express';
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
  {
    path: '/auth',
    route: UserSignupRoutes,
  },
  
  
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
