const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'studentdb',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err) {
    console.log('The Connection To The DB Has Succeded.');
    }
    else{
    console.log(' The DB Connection Has Failed \n Error : ' + JSON.stringify(err, undefined, 2));
    }
});


app.listen(3000, ()=>console.log('The Express Server Is Running On The Port Number: 3000'));

//Get all students
app.get('/student',(req,res)=>{
    mysqlConnection.query('SELECT * FROM students', (err, rows, fields)=>{
        if (!err) {
            res.send(rows);
            }
            else{
            console.log(err);
            }
    })
});

//Get an student
app.get('/student/:id',(req,res)=>{
    mysqlConnection.query('SELECT * FROM students WHERE ID = ?',[req.params.id],(err, rows, fields)=>{
        if (!err) {
            res.send(rows);
            }
            else{
            console.log(err);
            }
    })
});

//Delete a student
app.delete('/student/:id',(req,res)=>{
    mysqlConnection.query('DELETE FROM students WHERE ID = ?',[req.params.id],(err, rows, fields)=>{
        if (!err) {
            res.send('Deleted Successfully.');
            }
            else{
            console.log(err);
            }
    })
});

//Insert an student
app.post('/student',(req,res)=>{
    let emp = req.body;
    var sql = "SET @id = ?; SET @firstName = ?;SET @lastName = ?; SET @year = ?; SET @age = ?; SET @major = ?; SET @gpa = ?; \
    CALL StudentAddOrEdit(@id,@firstName,@lastName,@year,@age,@major,@gpa)";
    mysqlConnection.query(sql,[emp.id, emp.firstName, emp.lastName, emp.year, emp.age, emp.major, emp.gpa],(err, rows, fields)=>{
        if (!err) {
            rows.forEach(element => {
                if(element.constructor == Array)
                res.send('Inserted student id : '+element[0].id);
            });
            }
            else{
            console.log(err);
            }
    })
});

//Update an student
app.put('/student',(req,res)=>{
    let emp = req.body;
    var sql = "SET @id = ?;SET @firstName = ?;SET @lastName = ?; SET @year = ?; SET @age = ?; SET @major = ?; SET @gpa = ?;\
    CALL StudentAddOrEdit(@id,@firstName,@lastName,@year,@age,@major,@gpa);";
    mysqlConnection.query(sql,[emp.id, emp.firstName, emp.lastName, emp.year, emp.age, emp.major, emp.gpa],(err, rows, fields)=>{
        if (!err) {
            res.send('Updated Success');
            }
            else{
            console.log(err);
            }
    })
});





































