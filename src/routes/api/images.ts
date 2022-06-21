import express from 'express';
import { imageExistsFull, imageExistsThumb } from '../../file';
import resizer from '../../resizer';
const router = express.Router();

type Query = {
  filename: string;
  width: string;
  height: string;
};

function validateQuery(query: Query): string | boolean {
  if (query.filename === null || query.filename === undefined || query.filename.length === 0) {
    return 'Incorrect Image Name!';
  }
  if (
    query.width === null ||
    query.width === undefined ||
    parseInt(query.width) < 0 ||
    query.width.length === 0
  ) {
    return 'Incorrect Image Width!';
  }
  if (
    query.height === null ||
    query.height === undefined ||
    parseInt(query.height) < 0 ||
    query.height.length === 0
  ) {
    return 'Incorrect Image Height!';
  }
  return false;
}

router.get('/', async (req: express.Request, res: express.Response): Promise<void> => {
  const query = req.query as Query;
  const queryValidation = validateQuery(query);
  if (!queryValidation) {
    const imagePathFull = imageExistsFull(query.filename);
    if (imagePathFull) {
      const imagePathThumb = imageExistsThumb(
        query.filename,
        parseInt(query.width),
        parseInt(query.height)
      );
      if (imagePathThumb) {
        res.status(200).sendFile(imagePathThumb);
        return;
      } else {
        const resizedImage = await resizer(
          query.filename,
          parseInt(query.width),
          parseInt(query.height)
        );
        if (resizedImage) {
          res.status(200).sendFile(resizedImage);
          return;
        } else {
          res.status(400).send('Image could not be resized!');
          return;
        }
      }
    } else {
      res.status(404).send('Error! Image does not exist!');
      return;
    }
  } else {
    res.status(400).send(queryValidation);
    return;
  }
});

export default router;
