const Sequlizer = require('sequelize')

const sequelize = new Sequlizer('db_mng','root','root',{
  dialect:"mysql",
  host: "localHost",
})

module.exports = sequelize