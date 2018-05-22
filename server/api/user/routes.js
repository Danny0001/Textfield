import {Router} from 'express';
import jwt from 'jsonwebtoken';
import * as UserControllers from './controllers';
require ('dotenv').config();

function verifyToken(req,res,next){
  if(!req.cookies.access_token){
    return res.status(401).json({error: 'UNAUTHORIZED, TOKEN IS EMPTY'});
  }
  const token=req.cookies.access_token;
  jwt.verify(token,process.env.COOKIE_SECRET,(error,userData)=>{
    if(error)return res.status(422).json({error});
    req.user=userData;
    next();
  });
}

const router = new Router();

router.post('/user/login', UserControllers.loginUser);
router.post('/user/logout', UserControllers.logoutUser);

export default router;
