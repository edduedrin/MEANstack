var userService = require('./userService');

var getDataControllerfn = async(req,res) =>
{
    var empolyee = await userService.getDataFromDBService();
    res.send({"status":true,"data":empolyee});
}

var createUserControllerFn = async (req,res)=>{
    var status = await userService.createUserDBService(req.body);
    console.log(status);
    if(status){
        res.send({"status":true,"message":"user created successfully"});
    }else{
        res.send({"status": false, "message":"error creating user "});
    }
}


var updateUserController = async (req, res) =>
{
    console.log(req.params.id);
    console.log(req.body);

    var result = await userService.updateOneUserDBService(req.params.id,req.body);

    if(result){
        res.send({"status": true, "message":"user update"});
    }else{
        res.send({"status":false, "message":"user update failed  "})
    }
}

var deleteUserController = async (req, res) =>
{
    console.log(req.params.id);

    var result = await userService.removeUserDBService(req.params.id);

    if(result){
        res.send({"status": true, "message":"user update"});
    }else{
        res.send({"status":false, "message":"user update failed  "})
    }
}

module.exports = {getDataControllerfn, createUserControllerFn,updateUserController,deleteUserController};