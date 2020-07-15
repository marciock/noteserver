module.exports=(Sequelize, DataType)=>{
    const Notes=Sequelize.define('Notes',{
        id:{
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
            type:DataType.INTEGER,
        },
        user:{
            allowNull:false,
           
            type:DataType.INTEGER,
        },
        title:{
            allowNull:false,
            type:DataType.STRING,
        },
        note:{
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
    Notes.associate=(models)=>{
        Notes.belongsTo(models.Users,{
            foreignKey:'user',
            targetKey:'id',
            as:'u'
        })
    }
    return Notes;
}