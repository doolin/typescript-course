import express, { Request, Response } from 'express';

const app = express();

app.get('/', (request: Request, response: Response) => {
  response.send(`
    <div>
      <h1>Hi there!</h1>
    </div>
  `);
})

app.listen(3000, () => {
  console.log('Listening on port 3000');
});