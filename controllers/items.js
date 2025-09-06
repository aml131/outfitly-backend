const Item=require('../models/Item')


async function createItem(req,res) {
    try {
        const createdItem=await Item.create(req.body)
        res.status(201).json(createdItem)
    } catch (error) {
        console.log(error)
    }
}

async function allItems(req,res){
    try {
        const allItems = await Pet.find()
        if (allItems.length){
            res.status(200).json(allItems)
        } else {
            res.sendStatus(204)
        }
        
    } catch (err){
        console.log(err)
    }
}

async function deleteItem(req, res){
    try {
        const item = await Item.findByIdAndDelete(req.params.id)
        if (item){
            res.status(200).json(pet)
        } else {
            res.sendStatus(404)
        }
        

    } catch (err){
        res.status(500).json({error: err.message})
    }
}

module.exports={
    createItem,
    allItems,
    deleteItem
}