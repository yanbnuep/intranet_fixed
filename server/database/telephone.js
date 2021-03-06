const cloudDB = require('./cloudDB');
const squel = require('squel');

const table = "[INTRANET].[dbo].[TEL_ORDER_VW]";

const searchConstructor = function searchConstructor(res){
  const sql = squel.select().field("DISTINCT DEPT").from(table).where("DEPT != 'null'").toString();
  try{
      db.request().query(sql,function(err,result){
        if(err) throw err;
        return result;
      })
  }catch(err){
    console.log('error in searchConstructor'+ err);
  }
};


const telephoneSearch = function (req,res,tap) {
  searchConstructor(res);
};


module.exports = telephoneSearch;