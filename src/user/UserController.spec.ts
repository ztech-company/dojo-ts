import request from 'supertest';
import { Server } from '../Server';
import { UserController } from './UserController';

describe('UserController', () => {
  const userController = new UserController();
  const routes = [userController.router];
  const server = new Server(0, routes);

  describe('GET /users', () => {
    it('should list user', () => {
      return request(server.app)
        .get('/users')
        .expect(200)
        .expect((res: Response) => {
          expect(res.body).toMatchSnapshot();
        });
    });
  });
});
