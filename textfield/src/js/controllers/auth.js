/*import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import validator from 'validator';
import bcrypt from 'bcrypt'
import isEmpty from 'lodash/isEmpty';
import randtoken from 'rand-token'

import User from '../models/user';
import { SECRET } from '../config/config';
import { validateSignUp, validateSignIn } from '../validate/auth'

class AuthController {

  signin(req, res) {

  let validate = validateSignIn(req.body)
  if (validate.isValid) {
    User.findOne({ email: req.body.email })
    .then((user) => {
      if(user){
        user.comparePassword(req.body.password, (err, isMatch) => {
          if (isMatch && !err) {
            const userData = {
              sub: user._id,
              email: user.email,
              role: user.role,
            }
            var refreshToken = randtoken.uid(256)
            user.refreshToken = refreshToken
            user.save()
              .then((value) => {
                jwt.sign(userData, SECRET.secret, { expiresIn: '1h' }, (err, token) => {
                  if(err){
                    return res
                            .status(500)
                            .json({ status: 'Error',
                                    errors: { _error: 'Problemas con el servidor' } })
                  }
                  else {
                    return res
                            .status(200)
                            .json({ status: 'OK',
                                    token: `JWT ${token}`,
                                    refreshToken: refreshToken,
                                    user: value });
                  }
                });
              })
              .catch((err) => {
                return res
                        .status(500)
                        .json({ status: 'Error',
                                errors: { _error: 'Problemas con el servidor' } })
              })
          }
          else {
            return res
                    .status(403)
                    .json({ status: 'Error',
                            errors: { password: 'Password Incorrecta' } });
          }
        })
      }
      else{
        return res
                .status(404)
                .json({ status: 'Error',
                        errors: { email: 'Usuario No Encontrado' } });
      }
    })
    .catch((err) => {
      return res
              .status(500)
              .json({ status: 'Error',
                      errors: { _error: 'Problemas con el servidor' } })
    })
  }
  else {
    return res
            .status(400)
            .json({ status: 'Error', errors: validate.errors });
  }

}

signup(req, res){

  validateSingUp(req.body)
    .then(({isValid}) => {
      User.create({
        email: req.body.email,
        password: req.body.password})
        .then((user) => {
          const userData = {
            sub: user._id,
            email: user.email,
            role: user.role,
          }
          var refreshToken = randtoken.uid(256)
          user.refreshToken = refreshToken
          user.save()
            .then((value) => {
              jwt.sign(userData, SECRET.secret, { expiresIn: '1h' }, (err, token) => {
                if(err){
                  return res
                          .status(500)
                          .json({ status: 'Error',
                                  errors: { _error: 'Problemas con el servidor' } })
                }
                else {
                  return res
                          .status(200)
                          .json({ status: 'OK',
                                  token: `JWT ${token}`,
                                  refreshToken: refreshToken,
                                  user: value });
                }
              });
            })
            .catch((err) => {
              return res
                      .status(500)
                      .json({ status: 'Error',
                              errors: { _error: 'Problemas con el servidor' } })
            })
        })
        .catch((err) => {
          return res
                  .status(500)
                  .json({ status: 'Error',
                            errors: { _error: 'Problemas con el servidor' } })
        })
    })
    .catch(({errors, status}) => {
      return res
              .status(status)
              .json({ status: 'Error',
                      errors: errors })
    })

}

existEmail(req, res){
  if(!req.params.email){
   return res
            .status(400)
            .json({ status: 'Error',
                    errors: { email: 'Campo Requerido' } });
  }

  if(!validator.isEmail(req.params.email)){
   return res
            .status(400)
            .json({ status: 'Error',
                    errors: { email: 'El Campo debe ser un email'} });
  }

  User.findOne({ 'email' : req.params.email })
   .then( user => {
     if(user){
       return res
                .status(400)
                .json({ status: 'Error',
                        errors: { email: 'Este Correo ya está siendo utilizado'} });
     }
     else{
       return res
                .status(200)
                .json({ status: 'OK' })
     }
  })

}

}

export default AuthController;
*/
