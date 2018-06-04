import jwt from 'jsonwebtoken';
require('dotenv').config();


/*const getPublications =(req,res)=>{
  res.status(200).json({user:req.user});
};
*/
const loginUser = (req,res)=> {
  const {email,password}=req.body;

  jwt.sign({email, password},process.env.COOKIE_SECRET, {expiresIn:3600000}, (error,TOKEN)=> {
    if (error) return res.status(500).json({error: 'ERROR SIGNING THE TOKEN'});
    res.cookie('access_token',TOKEN,{
      expires: new Date(Date.now()+(3600*1000)),
      httpOnly:true,
      secure:true,
    });
    return res.status(200).json({message: 'User logged with success'});
  });
};

const logoutUser = (req,res)=> {
  res.clearCookie('access_token',req.cookies.access_token,{
    expires: new Date(Date.now()+(3600*1000)),
    httpOnly:true,
    secure:true,
  });
  res.status(200).json({message:'Logout with success'});
};

export {loginUser, logoutUser};
