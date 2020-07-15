const fs=require('fs');
const {Notes}=require('../../models');


module.exports={
    save:(req,res)=>{
        const data={
            produto:req.body.produto,
            marca:req.body.marca,
            preco:req.body.preco
        }
        Notes.create(data).then((results)=>{
            res.redirect('/notes');
        })
    }
}