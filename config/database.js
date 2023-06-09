const mogoose = require('mongoose')

//const { DATABASE } = process.env.

module.exports = () => {
    // mogoose.connect("mongodb://localhost/ecommerce")
    mogoose.connect("mongodb://127.0.0.1:27017/ecommercez")
        .then(() => console.log('DB Connection Successfull'))
        .catch(err => console.log(err.message))
}