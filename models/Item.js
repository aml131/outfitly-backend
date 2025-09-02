const { model,Schema } = require("mongoose");

const itemSchemma=new Schema({
    ItemName:{
       type: String,
       required:true
    },

    Category:{
        type:String,
        enum:['Headwear','Top','Bottom','Shoes','Acceseeories','Outwear'],
        required:true
    },

    Photo:{
        type:String,
    },

    isFavorite:{
        type:Boolean,
        default:false
    },

    wornHowOften:{
        type:Number
    }

})

const Item = model("Item", itemSchemma)
module.exports = Item