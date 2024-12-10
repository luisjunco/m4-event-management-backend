import { Request, Response, NextFunction } from 'express';
import { Router } from 'express';

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json("All good in here");
});


router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});


export default router;
