var cloudDB = require('./cloudDB');
const squel = require('squel');
const table = 'users';
var db = new cloudDB();
var userManage =  {
	createUser : function(user,res){
		if(!user.username || !user.password) {
			console.log('error user name or password empty');
			return false;
		}else {
			var sql = squel.insert().into(table)
			.set('login',user.name)
			.set('password',user.password).toString();
			console.log('createUser sql = ' + sql);
			cloudDB.query(sql,function(err,rows){
				if(err)
					throw err;
				console.log(rows);
				res.send(rows)
			});
			cloudDB.end();
		}
	}
};

module.exports = userManage;