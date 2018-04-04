/*import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import arrayUniquePlugin from 'mongoose-unique-array'

const UserSchema = new mongoose.Schema({
  email: {
    type: String,    //tipo string
    lowecase: true,   //mimnuscula
    unique: true,   //debe ser unico
    required:true,   //es obligatorio llenar
  },
  password: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String
  },
},{ timestamps: true });

UserSchema.plugin(arrayUniquePlugin);

//Quita los atributos de las consultas

UserSchema.method('toJSON', function() {
  let user = this.toObject();
  delete user.salt;
  delete user.hash;
  delete user.__v;
  delete user.password;
  delete user.refreshToken;
  return user;
});

// Guardar pwd encriptado en la BD

UserSchema.pre('save', function(next){
  var user = this;
  if (this.isModified('password') || this.isNew){
    bcrypt.genSalt(10, function(err, salt){
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function(err,hash){
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});
/*
// comparacion del pwd

UserSchema.methods.comparePassword = function(pw, cb){
  bcrypt.compare(pw, this.password, function(err, isMatch){
    if (err) {
      return cb(err);
    }
    return cb(null, isMatch);
  });
};

UserSchema.pre('remove', function(next) {
    // Remove all the assignment docs that reference the removed User.
    this.model('Device').remove({ users: this._id }, next);
});

export default mongoose.model('User', UserSchema)*/
