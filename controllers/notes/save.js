const fs=require('fs');
const {Notes}=require('../../models');


module.exports={
    save:(req,res)=>{
        const data={
            user:req.body.id,
            title:req.body.title,
            note:req.body.note,
            actived:true,
            createdAt:Date(),
            updatedAt:Date()
        }
        Notes.create(data).then((results)=>{
            res.json(results);
        })
    }
}