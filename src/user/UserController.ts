import { Request, Response, Router } from 'express';

export class UserController {
  readonly router = Router();

  constructor() {
    this.router.post('/users', this.addUser.bind(this));
    this.router.get('/users', this.getUsers.bind(this));
  }

  addUser(req: Request, res: Response): void {
    res.json({
      name: req.body.name,
      cpf: req.body.cpf,
    });
  }

  getUsers(req: Request, res: Response): void {
    res.json([
      {
        name: 'Fulano',
        cpf: '00000000000',
      },
      {
        name: 'Ciclano',
        cpf: '11111111111',
      },
    ]);
  }
}
