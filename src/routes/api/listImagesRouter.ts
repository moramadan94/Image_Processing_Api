import express, { Response, Request } from 'express';
import fs from 'fs/promises';
import path from 'path';

const listImagesRouter = express.Router();

listImagesRouter.get('/', async (_req: Request, res: Response): Promise<void> => {
  const folderPathFullImage = `${path.resolve(__dirname, '../../../assets/full')}`;

  const files: string[] | null = await fs.readdir(folderPathFullImage).catch(() => {
    res.status(500).send('Error occured reading the images');
    return null;
  });

  if (!files) {
    return;
  }

  let htmlResponse = `
        <h1>Available images</h1>
        <p>Below you can find all images that are accessible via the route /api/images</p>
        <ul>
    `;

  files.forEach((file: string): void => {
    htmlResponse = htmlResponse + `<li>${file}</li>`;
  });

  res.status(200).send(`${htmlResponse}</ul>`);
});

export default listImagesRouter;
