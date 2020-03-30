import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send('Not permitted');
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

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route, logged in user');
});

export { router };

// Dude says to not write anything out in a previous video,
// then uses that code as a basis for the current video.
// This won't work but I'm too pissed off to rewatch the entire
// 8 minute video and type all the code out.

function post(routeName) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    router.post(routeName, target[key]);
  }
}

function use(middleware: any) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    
  }
}