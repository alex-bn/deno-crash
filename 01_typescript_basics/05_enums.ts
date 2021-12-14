enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

function isAdmin(c: UserRole) {
  if (c === UserRole.ADMIN) {
    return true;
  }
  return false;
}

const role: UserRole = UserRole.USER;
console.log(role);
// console.log(isAdmin());
