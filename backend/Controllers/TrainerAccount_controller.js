let mysqlConnect = require("../helpers/mysql-connection");
let traineAccValidator = require("../Validations/TraineAcc_validation");

let getTraineAcc=(req,res)=>{

    let sql =`SELECT * from trainer_account`;
  mysqlConnect.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
    res.send(results)
  });
   
}
let addTraineAcc=(req, res) => {
    
  const {error,value}=traineAccValidator.validateSchema(req.body)

  if (error) {
    console.log(error)
    return res.status(404).send(error.details)
  }


    let catData=req.body;
 
  let sql = `insert into trainer_account set ?`
  mysqlConnect.query(sql,catData, function (error, results, fields) {
    if (error) throw error;
    
  });
  res.send(" data is successfully inserted  into the database");

}

let deleteTraineAcc=(req,res)=>{

   let id =req.params.id;
    console.log(id)

    let sql = `delete from trainer_account where id=${id}`;
    mysqlConnect.query(sql, function (error, results, fields) {
        if (error) throw error;
        console.log("The solution is: ", results);
      });
    res.send(`user data of entered id - ${id} of trainer_account router deleted`);
}

let updateTraineAcc=(req,res)=>{
  let id=req.params.id;
  let updateData=req.body;
  let sql = `update trainer_account set ? where id=${id}`;
  console.log(sql)
  mysqlConnect.query(sql,updateData, function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results);
    });
    res.send(`this is put method and entered id ${id} of trainer_account router`);
}

module.exports={getTraineAcc,addTraineAcc,deleteTraineAcc,updateTraineAcc}