const express = require("express");
const router = express.Router()

router.post('/foodData',(req,res)=>{

    try { 
        console.log(global.food_items,global.foodcaegory)
        res.send([global.food_items,global.foodcaegory])
    } catch (error) {

        console.error(error.message);
        res.send("server error")
        
    }
})

module.exports = router;