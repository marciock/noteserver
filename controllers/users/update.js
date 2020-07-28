const fs=require('fs');
const bcrypt=require('bcryptjs');
const {Users}=require('../../models');
//const { table } = require('console');

module.exports={
    update: async (req,res)=>{
        let qpass=req.body.password;
       console.log('teste '+qpass)
       // console.log(req.body.id)
       // const salt=bcrypt.genSaltSync(10);
      //  const pass=bcrypt.hashSync(qpass,salt);
               
        let table='';
        let users= await Users.findOne({where:{id:req.body.id}});
       
        
            bcrypt.compare(qpass,users.password,(err,data)=>{
                if(data===true || qpass==='' ){
                    
                    
                     table={
                        name:req.body.name,
                        lastname:req.body.lastname,
                        email:req.body.email,
                        password:users.password,
                        updatedAt:Date()
                            
                        }
              

            }
            else{
              /** const salt=bcrypt.genSaltSync(10);
                let pass=bcrypt.hashSync(qpass,salt);
                console.log(qpass) */ 
                const salt=bcrypt.genSaltSync(10);
                const pass=bcrypt.hashSync(qpass,salt);
               
                table={
                name:req.body.name,
                lastname:req.body.lastname,
                email:req.body.email,
                password:pass,
                updatedAt:Date()
                    
                }
             

            }
            
              //console.log(table);
              Users.update(table,{returning: true,
                where:{id:req.body.id}
            }).then((rows)=>{
                Users.findOne({where:{id:req.body.id}}).then((results)=>{
                    res.json(results);
                });

                
          });
       
        })
        //let results= await Users.findOne({where:{id:req.body.id}});

       // res.json(results);

    }
}