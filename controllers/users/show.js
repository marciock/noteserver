const fs=require('fs');
const {Users}=require('../../models');

module.exports={
    show:(req,res)=>{
        Users.findAll({
             where: { actived:true } ,
            attributes:['id','name','lastname','password','createdAt','updatedAt'],
            
        }).then((results)=>{
            //res.render('produtos/produtos',{data:results});
            res.json(results);
        })
    }
}