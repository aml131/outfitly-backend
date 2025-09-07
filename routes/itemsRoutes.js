const router=require('express').Router()
const itemsController=require('../controllers/items')

router.get('/',itemsController.allItems)
router.post('/add',itemsController.createItem)
router.delete('/delete/:id',itemsController.deleteItem)

module.exports = router