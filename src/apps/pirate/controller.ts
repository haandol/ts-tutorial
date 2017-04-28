import { Router, Request, Response } from 'express';

import { db } from '../../domain/db';
import { Pirate } from '../../domain/models';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  let data: Pirate[] = db.query();
  res.send(JSON.stringify(data));
});

router.get('/:name', (req: Request, res: Response) => {
  let { name } = req.params;
  let data: Pirate[] = db.query(name);
  res.send(JSON.stringify(data));
});

export const PirateController: Router = router;
