import { Sequelize } from "sequelize";
const db = new Sequelize('tutorialdb', 'root', 'admin',{
host:'localhost',
dialect:'mysql'
});

export default db;