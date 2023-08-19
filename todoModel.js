const Sequelize=require('sequelize');
const sequelize=require('./database')
const Todo=sequelize.define('Todo',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  itemName:Sequelize.STRING,
  description:Sequelize.STRING

})
module.exports=Todo;