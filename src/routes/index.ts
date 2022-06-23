import express from 'express';
import images from './api/imageRouter';
import listImagesRouter from './api/listImagesRouter';

const routes = express.Router();

routes.use('/images', images);
routes.use('/listImages', listImagesRouter);

export default routes;
