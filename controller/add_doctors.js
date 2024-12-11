const server = require("../routes/server");
const sql = require("../mod");

exports.add_doctors =  function (req, res){
    if(!req.body) {
        console.log(err)
        res.status(500)
        res.json('Err body')
        return
    }
    const name = req.body.name;
    const spec = req.body.spec;
    const price = req.body.price;
    sql.connection.query("INSERT INTO doctors (name, spec, price ) VALUES (?,?,?)", [name, spec, price], function(err, data) {
        if (err) {
            console.log(err)
            res.status(500)
            res.json('Err bd')
        } else {
            res.json('OK')
        }
    });
}

// const express = require("express");
// app.post("/add_doctor", express.json(), function (req, res) {
//     if(!req.body) {
//         console.log(err)
//         res.status(500)
//         res.json('Err body')
//         return
//     }
//     // if(!req.body) return res.sendStatus(400);
//     const name = req.body.name;
//     const spec = req.body.spec;
//     const price = req.body.price;
//     connection.query("INSERT INTO doctors (name, spec, price ) VALUES (?,?,?)", [name, spec, price], function(err, data) {
//         if(err) {
//             console.log(err)
//             res.status(500)
//             res.json('Err bd')
//         } else {
//             res.json('OK')
//         }
//
//     });
// });