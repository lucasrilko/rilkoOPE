const mysql = require('mysql')

const connMySQL = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mrt1',
    database: 'MRT',
    port: 3306,
    multipleStatements: true

});

module.exports = () => {
    return connMySQL;
}