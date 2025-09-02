const { model,Schema } = require("mongoose");

const itemSchemma=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },

    itemName:{
       type: String,
       required:true
    },

    category:{
        type:String,
        enum:['Headwear','Top','Bottom','Shoes','Accessories','Outwear'],
        required:true
    },

    photo:{
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