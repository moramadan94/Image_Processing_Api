import express, { Request, Response, Application } from 'express';
import fs from 'fs';
import path from 'path';
import routes from './routes/index';
const app: Application = express();
const port = 3000;
app.use('/api', routes);
app.get('/', (req: Request, res: Response): void => {
  res.status(200).send('Server is working!');
  //redirect to api image after run app directly
  // http://localhost:3000/api/images/?filename=fjord&height=300&width=300
});

app.listen(port, (): void => {
  const thumbPath = path.resolve(__dirname, '../src/assets/thumb');
  if (!fs.existsSync(thumbPath)) {
    fs.mkdirSync(thumbPath);
  }
  console.log(`Server is working! , Running on port ${port}`);
});

export default app;
