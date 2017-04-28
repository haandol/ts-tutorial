import * as express from 'express';

import { PirateController } from './apps/pirate/controller';

const app: express.Application = express();
const port: number = 3000;

app.use('/pirate', PirateController);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
