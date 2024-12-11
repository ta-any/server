// const user =  {
//     "id": "uuid",
//     "phone": "+7 913 743 24 35",
//     "name": "Иван",
//     "email": "ivan@example.com",
//     "gender": "male"
// }

const server = require("../routes/server");
const sql = require("../mod");

exports.add_patient = function (req, res) {
    if(!req.body) {
        console.log(err)
        res.status(500)
        res.json('Err body')
        return
    }
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const gender = req.body.gender;
    sql.connection.query("INSERT INTO patients (name, phone, email, gender ) VALUES (?,?,?,?)",
        [name, phone, email, gender], function(err, data) {
            if(err) {
                console.log(err)
                res.status(500)
                res.json('Err bd')
            } else {
                res.json('OK')
            }
        });
};