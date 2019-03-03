const Sequelize = require("sequelize");

const sequelize = new Sequelize("mydb", "root", "example", {
    host: "db",
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0
    }
});

User = sequelize.define("user", {
    username: Sequelize.STRING,
    userage: Sequelize.INTEGER
});

module.exports = {User: User};
