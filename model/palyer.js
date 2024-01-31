const sequelize = require("../util/database");
const Sequlizer = require("sequelize");

const player = sequelize.define("players", {
  id: {
    type: Sequlizer.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequlizer.STRING,
  },
  matches: Sequlizer.INTEGER,
  fifty: Sequlizer.INTEGER,
  hundreds: Sequlizer.INTEGER,
  age: Sequlizer.INTEGER,
  dob: Sequlizer.DATE,
  profile: Sequlizer.TEXT,
  birthplace: Sequlizer.STRING,
  career: Sequlizer.TEXT,
  score: Sequlizer.INTEGER,
  avg: Sequlizer.DOUBLE,
  wicket: Sequlizer.INTEGER,
});

module.exports = player;
