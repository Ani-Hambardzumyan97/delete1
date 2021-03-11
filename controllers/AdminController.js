
const { UserModel } = require("../models/UserModel")
class AdminController{
   async AdminView(req,res){
        let users=await UserModel.find()
      
        res.render("admin",{users})
    }
    async deleteadmin(req,res){
        let id=req.params.id
   
        let result= await UserModel.deleteOne({_id:id})
       
        res.json({count:result.n})
        
    }

}

module.exports=new AdminController()