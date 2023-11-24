import { Application } from 'express';
import studentRoutes from '../modules/student/student.route'

const routes = [
  {
    path: "/students",
    handler: studentRoutes,
  },
];

const setRoutes = (app: Application) => {
  routes.forEach((route) => {
    // console.log(route.path, route.handler);
    app.use(route.path, route.handler);
  });
};

export default setRoutes