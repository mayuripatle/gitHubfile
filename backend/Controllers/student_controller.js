let mysqlConnect = require("../helpers/mysql-connection");
let studentValidator = require("../Validations/student_validation");

let getstudent=(req,res)=>{

    let sql =`SELECT * from student`;

    mysqlConnect.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results);
      res.send(results)
    });
}

let addstudent= (req, res) => {

  const {error,value}=studentValidator.validateSchema(req.body)

  if (error) {
    console.log(error)
    return res.status(404).send(error.details)
  }

    let postData=req.body;
 
  let sql = `insert into student set ?`
  mysqlConnect.query(sql,postData, function (error, results, fields) {
    if (error) throw error;
    
  });
  res.send(" data is successfully inserted  into the database");

}

let deletestudent=(req,res)=>{

    let id =req.params.id;

    let sql = `delete from student where id=${id}`;

    mysqlConnect.query(sql, function (error, results, fields) {
        if (error) throw error;
        console.log("The solution is: ", results);
      });
    res.send(`user data of entered id - ${id} of author router deleted`);
}

let updatestudent=(req,res)=>{

  let id=req.params.id;
  let updateData=req.body;
  let sql = `update student set ? where id=${id}`;
  console.log(sql)
  mysqlConnect.query(sql,updateData, function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results);
    });
    res.send(`this is put method and entered id ${id} of author router`);
}

module.exports={getstudent,addstudent,deletestudent,updatestudent}