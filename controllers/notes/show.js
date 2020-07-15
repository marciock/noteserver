const fs=require('fs');
const {Notes}=require('../../models');

module.exports={
    show:(req,res)=>{
        Notes.findAll({
             where: { actived:true } ,
            attributes:['id','user','title','note','createdAt','updatedAt'],
            include:['u']
        }).then((results)=>{
            //res.render('produtos/produtos',{data:results});
            res.json(results);
        })
    }
}