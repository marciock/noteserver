const fs=require('fs');
const {Notes}=require('../../models');


module.exports={
    update:(req,res)=>{
        const data={
            user:req.body.user,
            title:req.body.title,
            note:req.body.note,
            actived:true, 
            createdAt:req.body.createdAt,         
            updatedAt:Date()
        }
        Notes.update(data,{where:{id:req.body.id}}).then((rows)=>{
            
                res.json(rows)
           
            
        })
    }
}