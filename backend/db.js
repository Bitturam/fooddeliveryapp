const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Bittu-123:19MI31027123@cluster0.ne4ik1n.mongodb.net/gofoodmern?retryWrites=true&w=majority'
const mongoDB =async() =>{



await mongoose.connect(mongoURI,{useNewurlparser:true},async(err,result) =>{

    if(err) console.group("---",err)
    else{
    console.log("connected");
const fetched_data =await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(async function(err,data){

            const foodCategory =await mongoose.connection.db.collection("foodcaegory");
            foodCategory.find({}).toArray(function(err,catData){

                if(err) console.log(err);
         else
            {   
                global.food_items =data;
                global.foodcaegory =catData;
            }
            })
            
            
            // if(err) console.log(err);
            // else
            // {   
            //     global.food_items =data;
              

            // } 
        })
    }
});

}

module.exports =mongoDB;
