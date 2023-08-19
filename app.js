const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const app=express();
const cors = require('cors');
app.use(cors());
const todoRoutes=require('./todoRoutes');
const sequelize=require('./database');
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'/public')));
app.use(todoRoutes);
sequelize.sync().then(result=>{
    app.listen(3000);
}).catch(err=>{
    console.log(err);
})