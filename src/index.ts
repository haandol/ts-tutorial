import * as http from "http";
import * as express from "express";
import * as socketIO from "socket.io";

import { Message } from './domain/message';

class Server {

  public app: express.Express;

  private server: http.Server;
  private io: any;

  constructor(port: number = 3000) {
    this.app = express();
    this.server = http.createServer(this.app);
    this.io = socketIO(this.server);

    this.init(port);
  }

  private init(port: number): void {
    this.server.listen(port, () => {
      console.log('Listening port %s', port);
    });

    this.io.on('connect', (socket: any) => {
      socket.on('message', (message: Message) => {
        this.io.emit('message', JSON.stringify(message));
      });
    });
  }
  
}

const server = new Server();
export default server.app;
