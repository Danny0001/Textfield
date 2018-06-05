import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import arrayUniquePlugin from 'mongoose-unique-array'
import { ROLE_CLIENT, ROLE_MANAGER, ROLE_ADMIN } from '../config/roles'

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    lowecase: true,
    unique: true,
    required:true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: [ROLE_CLIENT, ROLE_MANAGER, ROLE_ADMIN],
    default: ROLE_CLIENT,
  },
  refreshToken: {
    type: String
  },
},{ timestamps: true });

UserSchema.plugin(arrayUniquePlugin);

//compara password
UserSchema.methods.comparePassword = function(pw, cb){
  bcrypt.compare(pw, this.password, function(err, isMatch){
    if (err) {
      return cb(err);
    }
    return cb(null, isMatch);
  });
};

export default mongoose.model('User', UserSchema)
