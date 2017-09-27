var bcrypt = require('bcrypt');
const saltRounds = 10;

const bcryptHash = {
	hashPassword : function(plaintextPassword){
		bcrypt.genSalt(saltRounds,function(err,salt) {
			bcrypt.hash(plaintextPassword,salt,function(err,hash) {
				console.log('bcrypt hashPassword +' hash);
				return hash;
			})
		})
	},
	comparePssword: function(plaintextPassword,hash) {
		bcrypt.compare(plaintextPassword,hash,function(err,res) {
			console.log('bcrypt compare res '+res);
			return res;
		})
	}
};


module.exports = bcryptHash;