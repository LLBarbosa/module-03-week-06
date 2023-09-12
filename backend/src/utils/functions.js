const bcrypt = require('bcrypt');

function encryptPassword(user){
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, salt);
}

module.exports = { encryptPassword }