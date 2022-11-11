const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mycon= require('mysql');
const fileupload = require('express-fileupload');
const e = require('express');
//const { response } = require('express');

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(fileupload());

var c = mycon.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Prabhaharan@8787",
    database: "upstock"
})

c.connect(function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("db connected");
    }
});
app.post('/Signup',(request,response)=>{
    let name = request.body.name;
    let email = request.body.email;
    let password = request.body.password;
    let role = request.body.role;

    let sql = 'insert into taskin(name,password,email,role) values (?,?,?,?)';

    c.query(sql,[name,password,email,role],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"Inserted"};
            response.send(s);
        }
    })
   
});