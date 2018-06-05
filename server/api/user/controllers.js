import jwt from 'jsonwebtoken';
import User from '../../models/user';
require('dotenv').config();


/*const getPublications =(req,res)=>{
  res.status(200).json({user:req.user});
};
*/
var cookieParser = require('cookie-parser');

const loginUser = (req,res)=> {
//  const {email,password}=req.body;
  User.login({
            email: req.body.email,
            password: req.body.password
        },

  //Aqui va la validacion

  UserRepository.login(email, password)

  .then(logged => {
    if(logged) { // login correcto
      res.session.user = { email };
      res.jsonp({ success: true });
    }
}
  .then((user) =>{
    if(user){

      user.comparePassword(req.body.password, (err, isMatch) =>{
        if(isMatch && !err){
          const userData = {
            sub: user._id,
            email: user.email,
            role: user.role,
          }
          var refreshToken = randtoken.uid(256)
          user.refreshToken = refreshToken
          user.save()
          .then((value) => {
            jwt.sign({email, password},process.env.COOKIE_SECRET, {expiresIn:3600000}, (error,TOKEN)=> {
              if (error){
                return res
                  .status(500)
                  .json({error: 'ERROR SIGNING THE TOKEN'});
              }else{
                res.cookie('access_token',TOKEN,{
                  expires: new Date(Date.now()+(3600*1000)),
                  httpOnly:true,
                  secure:true,
                });
              }
              return res.status(200).json({message: 'User logged with success'});
            });
          })
          .catch((err) => {
            return res
              .status(500)
              .json({error: 'ERROR SIGNING THE TOKEN'});
          })
        }
        else {
          return res
          .status(403)
          .json({error: 'PASSWORD ERROR'});
        }
      })
    }
    else{
      return res
      .status(404)
      .json({error: 'USER ERROR'});
    }
  })
  .catch((err) =>{
    return res
    .status(500)
    .json({error: 'ERROR SIGNING THE TOKEN'});
  })
};

/*
const loginUser = (req,res)=> {
const {email,password}=req.body;
jwt.sign({email, password},process.env.COOKIE_SECRET, {expiresIn:3600000}, (error,TOKEN)=> {
  if (error) return res.status(500).json({error: 'ERROR SIGNING THE TOKEN'});
  res.cookie('access_token',TOKEN,{
    expires: new Date(Date.now()+(3600*1000)),
    httpOnly:true,
    secure:true,
    });
}
}
*/
const logoutUser = (req,res)=> {
  res.clearCookie('access_token',req.cookies.access_token,{
    expires: new Date(Date.now()+(3600*1000)),
    httpOnly:true,
    secure:true,
  });

  res.status(200).json({message:'Logout with success'});
};

export {loginUser, logoutUser};
