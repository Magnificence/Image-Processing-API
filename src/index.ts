import express from 'express';
//import images from './routes/api/images';
import routes from './routes/routes';
const app = express();

app.use(express.json());
app.use('/api', routes);

app.listen(5000, () => {
  console.log('Listening on PORT: 5000');
});

//app.use('/api/images', images);

export default app;
