import express, { Request, Response } from 'express';
import next from 'next';

const port: number = parseInt(process.env.PORT as string, 10) || 3000;
const dev: boolean = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Define custom server-side routes here
  server.get('/api/data', (req: Request, res: Response) => {
    res.json({ data: 'Your data here' });
  });

  // Handle all other routes with Next.js
  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
