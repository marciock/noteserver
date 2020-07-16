const fs=require('fs');
const bcrypt=require('bcryptjs');
const {Users}=require('../../models');


module.exports={
    save:(req,res)=>{
        const salt=bcrypt.genSaltSync(10);
        let pass=bcrypt.hashSync(req.body.password,salt);
        const data={
            name:req.body.name,
            lastname:req.body.lastname,
            email:req.body.email,
            password:pass,
            actived:true,
            createdAt:Date(),
            updatedAt:Date()
        }
        Users.create(data).then((results)=>{
            res.json(results);
        })
    }
}