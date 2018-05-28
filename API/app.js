const express = require('express')
const app = express()
const mysql = require("mysql");  
// const cors = require('cors');
// app.use(cors());

// TEST
// app.get('/', (req, res) => res.send('786'))  
// sara code listening ke line ke pehle hona chaiye
// app.listen(3000, () => console.log('Example app listening on port 3000!'))


// ========================================
// (1) Make connection.
//=========================================
// yeh connection ki object banni hai json format maine.  matlab phone li line ki service kharidi hai.
var connection = mysql.createConnection({
    port: 3306,
    host:"localhost",
    user: "root",
    password: "humzas",
    database: "taskdb"
});
//  (2) yahan par line activate kiya. so you can make and receive call anytime. next- jab query karenge tab actual call hoga
// activate karne ke time pe checking ho rahi hai ke agar koi error aae to error mgs dena
connection.connect(function(err){
    if(err){
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// ====================================================================
// (3) Make routes. Pehle humne connection banaya, ab route ban rahe hai
// this-  jab query karenge tab actual call hoga
// ====================================================================
// pehli default route
    app.get('/', function(req, res){
         res.send('786yaali')
    })

// tasks route 
    app.get('/tasks', function(req, res) {
        // var tasks = {"Done":"786 yali madad"} yeh hard code query ki hai
        // res.send(tasks)
//  
        var qry = "SELECT * from tasks"
        connection.query(qry, [], function(err, result) {
            console.log(result);
            // res.send(result);
        });
    })

    



app.listen(3000, () => console.log('Example app listening on port 3000!'))
// END