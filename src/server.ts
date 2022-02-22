import express, { Router } from 'express';
import connectToDatabase from './models/connection';

class App {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  public startServer(PORT = 3001) {
    connectToDatabase();

    return this.app.listen(
      process.env.PORT || PORT,
      () => console.log(`Server running here 👉 http://localhost:${PORT}`),
    );
  }

  public addRouter(router: Router) {
    this.app.use(router);
  }

  public getApp() {
    return this.app;
  }
}

export default App;
