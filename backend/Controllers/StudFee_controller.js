let mysqlConnect = require("../helpers/mysql-connection");
let StudFeeValidator = require("../Validations/StudFee_validation")

let getstudFee=(req,res)=>{

    let sql =`SELECT * from author`;

    mysqlConnect.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results);
      res.send(results)
    });
}

let addstudFee= (req, res) => {

  const {error,value}=StudFeeValidator.validateSchema(req.body)

  if (error) {
    console.log(error)
    return res.status(404).send(error.details)
  }

    let postData=req.body;
 
  let sql = `insert into authors set ?`
  mysqlConnect.query(sql,postData, function (error, results, fields) {
    if (error) throw error;
    
  });
  res.send(" data is successfully inserted  into the database");

}

let deletestudFee=(req,res)=>{

    let id =req.params.id;

    let sql = `delete from authors where id=${id}`;

    mysqlConnect.query(sql, function (error, results, fields) {
        if (error) throw error;
        console.log("The solution is: ", results);
      });
    res.send(`user data of entered id - ${id} of author router deleted`);
}

let updatestudFee=(req,res)=>{

  let id=req.params.id;
  let updateData=req.body;
  let sql = `update authors set ? where id=${id}`;
  console.log(sql)
  mysqlConnect.query(sql,updateData, function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results);
    });
    res.send(`this is put method and entered id ${id} of author router`);
}

module.exports={getstudFee,addstudFee,deletestudFee,updatestudFee}