/*import validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import User from '../models/user';


export const validateSignIn = (body) => {
    let errors = {}; //se declara error como vacio

    if(isEmpty(body.email)){        //se verifica si el email fue ingresado
      errors.email = 'Campo Requerido'
    }
    else{
      if(!validator.isEmail(body.email)){ //se verifica si el email ingresado es vaalido de acuerdo a los critero de validator
        errors.email = 'Email inválido'
      }
    }

    if (isEmpty(body.password)) {   //se verifica si la password fue ingresada
      errors.password = 'Campo Requerido'
    }
    //si fue ingresada (pass), se requiere que esta contenga entre 6 y 20 caracteres
    else if (body.password.length<6 || body.password.length>20 ) {
      errors.password = 'Contraseña de 6 a 20 caracteres'
    }
    //se retorna la respuesta de la validacion (email y password)
    return {
      errors,
      isValid: isEmpty(errors)
    }
}

export const validateSingUp = (body) => {

    let validate = validateSignIn(body); //antes de registrarse, se validan los datos ingresados

    return new Promise( (resolve, reject) => {
      if(validate.isValid){ //si los datos ingresados son validos, se procede
        User.findOne({ 'email' : body.email }) //se solicita a la bdd el campo email del body(form)
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

}*/
