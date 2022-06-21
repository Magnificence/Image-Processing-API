import express from 'express';
import images from './api/images';
const router = express.Router();

router.use('/images', images);
router.get('/', (_req: express.Request, res: express.Response) => {
  res.status(200).send(`<h1>API is Online and Working Successfully!</h1>`);
  return;
});

export default router;
