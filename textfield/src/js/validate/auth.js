import validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import User from '../models/user';


const validateSignIn = (body) => {
    let errors = {};

    if(isEmpty(body.email)){
      errors.email = 'Campo Requerido'
    }
    else{
      if(!validator.isEmail(body.email)){
        errors.email = 'Email inválido'
      }
    }

    if (isEmpty(body.password)) {
      errors.password = 'Campo Requerido'
    }
    else if (body.password.length<6 || body.password.length>20 ) {
      errors.password = 'Contraseña de 6 a 20 caracteres'
    }

    return {
      errors,
      isValid: isEmpty(errors)
    }
}

const validateSingUp = (body) => {

    let validate = validateSignIn(body);

    return new Promise( (resolve, reject) => {
      if(validate.isValid){
        User.findOne({ 'email' : body.email })
          .then( user => {
            if(user){
              validate.errors.email = 'Este email está siendo utilizado por un usuario'
              reject({
                errors: validate.errors,
                status: 400,
              })
            }
            else{
              resolve({
                isValid: true
              })
            }
          })
          .catch((err) => {
            validate.errors._error = 'Problemas con el servidor'
            reject({
              errors: validate.errors,
              status: 500,
            })
          })
      }
      else{
        reject({
          errors: validate.errors,
          status: 400,
        })
      }
    })

}

export { validateSignUp }
