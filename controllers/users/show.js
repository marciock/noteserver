const fs=require('fs');
const {Users}=require('../../models');
const bcrypt=require('bcryptjs');

module.exports={
    show:(req,res)=>{
        Users.findAll({
             where: { actived:true } ,
            attributes:['id','name','lastname','password','createdAt','updatedAt'],
            
        }).then((results)=>{
            //res.render('produtos/produtos',{data:results});
            res.json(results);
        })
    },
    checkLogin:(req,res)=>{
        const qemail=req.body.email;
        const qpass=req.body.password;

        console.log(qemail);
       let results=Users.findOne({where:{actived:true,email:qemail}}).then((results)=>{
        if(results===null){
            let message={
                error:true,
                field:'email',
                text:'Email não encontrado'
                }
                
                res.json(message);
            }
            else{
                bcrypt.compare(qpass,results.password,(err,data)=>{
                    if(data===true){

                        let message={error:false};
                        let obj=Object.assign(message,results.dataValues);
                       // res.json(results);
                        res.json(obj);
                    }
                    else{
                     let message={
                         error:true,
                         field:'password',
                         text:'Senha não confere'
                         }
                     
                         res.json(message);
         
                    }
               });
               
    
            }
       });
       
       
        
    }
}