


const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitDB", {
    useNewUrlParser: true
}).then(()=>{
    console.log("Successfully connected to the database");
    
}).catch((err)=>{
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
    
})

// mongoose.connect(dbConfig.url, {
//     useNewUrlParser: true,
//   })
//   .then(() => {
//     console.log("Successfully connected to the database");
//   })
//   .catch((err) => {
//     console.log("Could not connect to the database. Exiting now...", err);
//     process.exit();
//   });


// // to check conncetion
// const con=mongoose.connection;
// con.on("open",function(){
//    
//     console.log("connceted to datbase");

//     }
// })

const fruitSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please check,no name enter"]
    },
    rating:{
        type:Number,
        min:1,
        max:10
    },
    review: String
});

const Froot = mongoose.model("Fruit", fruitSchema);

const fruit = new Froot({
    name:"yuraj",
    rating: 7,
    review: "prety solid fruit"
});

const frrot = new Froot({
    name: "xyz",
    rating: 8,
    review: "okayy"
});

const peopleSchema = new mongoose.Schema({
    name: String,
    work: String,
    favFroot:fruitSchema
});


const people = mongoose.model("People", peopleSchema);
const people1 = new people({
    name: "vishal",
    work: "engg"
})
const people2 = new people({
    name: "vishal2",
    work: "engg"
});
 const people3 = new people({
    name: "vishal3",
    work: "engg"
});
 const people4 = new people({
    name: "vishal4",
    work: "engg"
});
const people5 = new people({
    name: "vishal4",
    work: "engg"
});
const people6=new people({
    name:"amy",
    work:"dr",
    favFroot:frrot
});
// people6.save();
// people.insertMany([people5],function(e){
// if(e){
//     console.log(e);
// }else{
//     console.log("sucessfull saved");
// }
// });
// people.deleteMany({name:"amy"},function(e){
//     if(e){
//         console.log(e);
//     }
//     else{
//         console.log("deleted sucefully");
//     }
// })
people.find(function(err,Allpeople){
    if(err){
        console.log(err);
    }else{
    Allpeople.forEach(element => {
       console.log(element); 
    });
    }
})
// fruit.save();

// Froot.deleteOne({name:"green"},function(e){
//     if(e){
//         console.log(e)
//     }else{
//         console.log("succfully deleted ");
//     }
// // })
// Froot.updateOne({name:"golu"}, {rating:5},function(e){
//     if(e){
//         console.log(e)
//     }else{
//         console.log("succfully updated ");
//     }
// })

// Froot.find(function(err,All){
//     if(err){
//         console.log(err);
//     }else{
//     All.forEach(element => {
//        console.log(element); 
//     });
//     }
// })


// fruit.save();