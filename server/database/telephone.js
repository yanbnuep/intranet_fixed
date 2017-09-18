const db = require('./setting');
const squel = require('squel');

const table = "[INTRANET].[dbo].[TEL_ORDER_VW]";

const searchConstructor = function searchConstructor(res){
  const sql = squel.select().field("DISTINCT DEPT").field('DIVCODE').from(table).where("DEPT != 'null'").order('DIVCODE').toString();
  console.log(sql);
  try{
      db.request().query(sql,function(err,result){
        if(err) throw err;
        console.log(JSON.stringify(result));
        res.send(result);
      })
  }catch(err){
    console.log('error in searchConstructor'+ err);
  }
};


const telephoneSearch = function (req,res,tap) {
  searchConstructor(res);
};

module.exports = telephoneSearch;