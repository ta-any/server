const express = require('express')
const app = express()
const router =  express.Router()
const PORT = 8080

router.get('/about', (req, res) => {
    res.send("Tst")
})

app.use(router)

const server = require("./routes/server.js");
app.use("/server", server);



// app.post("/add_patient", express.json(), function (req, res) {
//     if(!req.body) {
//         console.log(err)
//         res.status(500)
//         res.json('Err body')
//         return
//     }
//     // if(!req.body) return res.sendStatus(400);
//     const name = req.body.name;
//     const phone = req.body.phone;
//     const email = req.body.email;
//     const gender = req.body.gender;
//     connection.query("INSERT INTO patients (name, phone, email, gender ) VALUES (?,?,?,?)",
//         [name, phone, email, gender], function(err, data) {
//         if(err) {
//             console.log(err)
//             res.status(500)
//             res.json('Err bd')
//         } else {
//             res.json('OK')
//         }
//         // res.redirect("/");
//     });
// });

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


app.listen(PORT, function (err) {
    if (err) throw err;
    console.log("Server listening on PORT", PORT);
    console.log('http://localhost:8080/server/add_patient')
})



