let mysqlConnect = require("../helpers/mysql-connection");
let trainerValidator = require("../Validations/Trainer_validation");

let gettrainer=(req,res)=>{

    let sql =`SELECT * from category`;
  mysqlConnect.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
    res.send(results)
  });
   
}
let addtrainer=(req, res) => {
    
  const {error,value}=trainerValidator.validateSchema(req.body)

  if (error) {
    console.log(error)
    return res.status(404).send(error.details)
  }


    let catData=req.body;
 
  let sql = `insert into post set ?`
  mysqlConnect.query(sql,catData, function (error, results, fields) {
    if (error) throw error;
    
  });
  res.send(" data is successfully inserted  into the database");

}

let deletetrainer=(req,res)=>{

   let id =req.params.id;
    console.log(id)

    let sql = `delete from comment where id=${id}`;
    mysqlConnect.query(sql, function (error, results, fields) {
        if (error) throw error;
        console.log("The solution is: ", results);
      });
    res.send(`user data of entered id - ${id} of category router deleted`);
}

let updatetrainer=(req,res)=>{
  let id=req.params.id;
  let updateData=req.body;
  let sql = `update category set ? where id=${id}`;
  console.log(sql)
  mysqlConnect.query(sql,updateData, function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results);
    });
    res.send(`this is put method and entered id ${id} of category router`);
}

module.exports={gettrainer,addtrainer,deletetrainer,updatetrainer}