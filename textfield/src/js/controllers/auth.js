import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import validator from 'validator';
import bcrypt from 'bcrypt'
import isEmpty from 'lodash/isEmpty';
import randtoken from 'rand-token'

import User from '../models/user';
import { SECRET } from '../config/config';
import { validateSignUp } from '../validate/auth'
class AuthController {

}

export default AuthController;
