const { model,Schema } = require("mongoose");

const itemSchemma=new Schema({
    OutfitName:{
       type: String,
       required:true, 
    },
})

const Item = model("Item", itemSchemma)
module.exports = Item