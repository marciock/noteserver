const fs=require('fs');
const {Notes}=require('../../models');


module.exports={
    delete:(req,res)=>{
        const data={
            
            actived:false,
            
            updatedAt:Date()
        }
        Notes.update(data,{returning: true,where:{id:req.query.id}}).then((rows)=>{
            Notes.findOne({where:{id:req.query.id}}).then((results)=>{
                res.json(results)
            })
            
        })
    }
}