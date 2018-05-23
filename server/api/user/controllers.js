import jwt from 'jsonwebtoken';
require('dotenv').config();


/*const getPublications =(req,res)=>{
  res.status(200).json({user:req.user});
};
*/
const loginUser = (req,res)=> {
  const {email,password}=req.body;

  jwt.sign({email, password},process.env.COOKIE_SECRET, {expiresIn:'1h'}, (error,TOKEN)=> {
    if (error) return res.status(500).json({error: 'ERROR SIGNING THE TOKEN'});
    res.cookie('access_token',TOKEN,{
      maxAge: new Date(Date.now()+3600000),
      httpOnly:false,
      secure:false,
    });
    return res.status(200).json({message: 'User logged with success'});
  });
};

const logoutUser = (req,res)=> {
  res.clearCookie('access_token',req.cookies.access_token,{
    maxAge: new Date(Date.now()+3600000),
    httpOnly:false,
    secure:false,
  });
  res.status(200).json({message:'Logout with success'});
};

export {loginUser, logoutUser};
