import isEmpty from 'lodash/isEmpty'
import mongoose from 'mongoose';

const ROLE_CLIENT = 'Client',
  ROLE_MANAGER = 'Manager',
  ROLE_ADMIN = 'Admin'

  const UserRole = (req) => {
    if(req.params.idUser == req.user._id && (req.user.role === ROLE_CLIENT || req.user.role === ROLE_MANAGER)){
      return true;
    }

    if (req.user.role === ROLE_ADMIN) {
      return true;
    }
  }
  const AdminRole = (req) => {
    if (req.user.role === ROLE_ADMIN) {
      return true;
    }
  }

  const AdminMaganerRole = (req) => {
    if (req.user.role === ROLE_ADMIN || req.user.role === ROLE_MANAGER) {
      return true;
    }
  }

  export { ROLE_CLIENT, ROLE_MANAGER, ROLE_ADMIN }
  export { UserRole, AdminRole, AdminMaganerRole }
