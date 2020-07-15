module.exports=(Sequelize, DataType)=>{
    const Users=Sequelize.define('Users',{
        id:{
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
            type:DataType.INTEGER,
        },
        name:{
            allowNull:false,
           
            type:DataType.STRING,
        },
        lastname:{
            allowNull:false,
           
            type:DataType.STRING,
        },
        email:{
            allowNull:false,
           
            type:DataType.STRING,
        },
        password:{
            allowNull:false,
            type:DataType.STRING,
        },
        actived:{
            allowNull:false,
            type:DataType.BOOLEAN,
        },
        createdAt:{
            allowNull:false,
            type:DataType.DATE,
        },
        updatedAt:{
            allowNull:false,
            type:DataType.DATE,
        },

    },{})
    return Users;
}