const fs=require('fs');
const {Notes}=require('../../models');


module.exports={
    delete:(req,res)=>{
        const data={
            
            actived:false,
            
            updatedAt:Date()
        }
        Notes.update(data,{where:{id:req.body.id}}).then((rows)=>{
            Notes.findOne({where:{id:req.body.id}}).then((results)=>{
                res.json(results)
            })
            
        })
    }
}