const { model,Schema } = require("mongoose");

const outfitSchemma=new Schema({

     user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },

    outfitName:{
       type: String,
       required:true
    },
    items: [
  {
    itemId: { type: Schema.Types.ObjectId, ref: 'Item', required: true },
    x: { type: Number, default: 0 },
    y: { type: Number, default: 0 }
  }
],

    isFavorite:{
        type: Boolean,
        default: false
    }


})

const Outfit = model("Outfit", outfitSchemma)
module.exports = Outfit