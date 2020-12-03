import { Server } from './Server';
import { UserController } from './user/UserController';

const userController = new UserController();
const routes = [userController.router];

const server = new Server(3000, routes);
server.start();
