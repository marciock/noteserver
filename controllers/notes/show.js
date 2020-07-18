const fs=require('fs');
const {Notes}=require('../../models');

module.exports={
    show:(req,res)=>{
        let id=req.query.user;
        Notes.findAll({
             where: { actived:true,user:id } ,
            attributes:['id','user','title','note','createdAt','updatedAt'],
            include:['u']
        }).then((results)=>{
            //res.render('produtos/produtos',{data:results});
            res.json(results);
        })
    }
}