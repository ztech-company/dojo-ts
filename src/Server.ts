import express, { Router } from 'express';

export class Server {
  readonly app = express();

  constructor(private readonly port: number, routes: Router[]) {
    routes.forEach((route) => this.app.use(route));
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`);
    });
  }
}
