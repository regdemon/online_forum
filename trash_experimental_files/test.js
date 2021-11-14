const {Schema} = mongoose

//User Functionality
// userCrud.create({
//     email_id: "raghav123@gmail.com",
//     name: "Raghav Goyal",
//     password: "abcdef@$#",
//     total_score: 0
// });

userCrud.getbyId(Schema.Types.ObjectId("618ec01d45131c8e82eca4ec"));

//User Functionality
app.get("/createUser",(req, res)=>{
    userCrud.create({
        email_id: "raghav123@gmail.com",
        name: "Raghav Goyal",
        password: "abcdef@$#",
        total_score: 0
    });
    res.send("added user");
});

app.get("/findUser",async (req,res)=>{
    let user = await userCrud.getById(mongoose.Types.ObjectId('618ec3cd4b5d6022b0fc13bd'));
    if(!user)res.send("No user found")
    else res.send(user)
});

app.get("/updateUser",(req,res)=>{
    userCrud.updateById(
        mongoose.Types.ObjectId('618ec3cd4b5d6022b0fc13be'), 
        {email_id: 'raghavgoyal@hotmail.com',  total_score: 10}
    );
    res.send("Updation")
});


app.get("/deleteUser",(req,res)=>{
    userCrud.deleteById(
        mongoose.Types.ObjectId("618ec3cd4b5d6022b0fc13bd"), 
    );
    res.send("Deletion")
});