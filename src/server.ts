import express, { Router } from 'express';
import connectToDatabase from './models/connection';

class App {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  public startServer(port = 3001) {
    connectToDatabase();

    return this.app.listen(
      process.env.PORT || port,
      () => console.log('estamos online'),
    );
  }

  public addRouter(router: Router) {
    this.app.use(router);
  }
}

export default App;
