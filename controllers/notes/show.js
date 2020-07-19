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
    },
    showEdit:(req,res)=>{
        const qId=req.query.id;
        //const qpass=req.body.password;

        //console.log(qemail);
       let results=Notes.findOne({where:{actived:true,id:qId}}).then((results)=>{
        if(results===null){
            let message={
                error:true,
                field:'id',
                text:'Nota não encontrada'
                }
                
                res.json(message);
            }
            else{
                
                     res.json(results)
                        
         
                    }
              
               
    
            })
      

    }
}