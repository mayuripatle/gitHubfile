let mysqlConnect = require("../helpers/mysql-connection");
let courseValidator = require("../Validations/Courses_validation")

let getcourses=(req,res)=>{

    let sql =`SELECT * from courses`;
    mysqlConnect.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results);
      res.send(results)
    });
     
}
let addcourses= (req, res) => {

  const {error,value}=courseValidator.validateSchema(req.body)

  if (error) {
    console.log(error)
    return res.status(404).send(error.details)
  }


    let {course_name,course_descr,status}=req.body;
    console.log(req.body);

    let sql =`insert into courses (course_name,course_descr,status)
     values ("${course_name}","${course_descr}","${status}", now())`;
     console.log(sql)

    mysqlConnect.query(sql, function (error, results, fields) {
        if (error){
            console.log(sql)
            throw error;
        } 

      });
    res.send(" data is successfully inserted  into the database");

}
let deletecourses=(req,res)=>{

    let id =req.params.id;
    console.log(id)

    let sql = `delete from courses where id=${id}`;
    mysqlConnect.query(sql, function (error, results, fields) {
        if (error) throw error;
        console.log("The solution is: ", results);
      });
    res.send(`user data of entered id - ${id} of courses router deleted`);
}

let updatecourses=(req,res)=>{
    let id=req.params.id;
    let updateData=req.body;
    let sql = `update courses set ? where id=${id}`;
    console.log(sql)
    mysqlConnect.query(sql,updateData, function (error, results, fields) {
        if (error) throw error;
        console.log("The solution is: ", results);
      });
    res.send(`this is put method and entered id ${id} of courses router`);
}

module.exports={getcourses,addcourses,deletecourses,updatecourses}