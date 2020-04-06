import { Request, Response, NextFunction } from 'express';
import { get, controller, use } from './decorators';

// This will get deleted in an upcoming commit, it's for example
// purposes only.
function logger(req: Request, res: Response, next: NextFunction) {
  console.log('in the logger');
  next();
}

@controller('/')
class LoginController {
  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response): void {
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
  }
}