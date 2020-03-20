import { Router, Request, Response } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />

      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password"/>        
      </div>
      <button>Submit</button>
    </form>
  `);
});

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>You are logged in.</div>
      <a href="/logout">Logout</a>
  `);
  } else {
    res.send(`
      <div>You are not logged in.</div>
      <a href="/login">Login</a>
  `);
  }
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === 'hi@hi.com' && password === 'password') {
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    res.send('invalid email or password');
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

export { router };
