import express from 'express';

export class Server {
  readonly app = express();

  constructor(private readonly port: number) {
    this.app.get('/', (req, res) => {
      res.send('Hello Donus!');
    });
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`);
    });
  }
}
