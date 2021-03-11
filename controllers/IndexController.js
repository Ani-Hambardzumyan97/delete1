const { UserModel } = require("../models/UserModel")

class IndexController{
  home(req,res){
       
        res.render("index")
    }
}

module.exports=new IndexController()