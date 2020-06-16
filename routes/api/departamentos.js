const router = require('express').Router()
const departModel = require('../../models/departamentos')

router.get('/', async (req, res) => {
    try{
        const rows = await departModel.getAll()
        res.json(rows)
    } catch(err) {
        res.status(500).json({error: err.message})
    }
})

router.get('/:id', async(req, res) => {
    try{
        const row = await departModel.getById(req.params.id)
        res.json(row)
    }catch(err) {
        res.status(500).json({error: err.message})
    }
})

router.post('/', async(req, res) => {
    try{
        const result = await departModel.create(req.body)
        if(result.affectedRows >= 1 ){
            res.json({success: 'item was created'})
        }else{
            res.json({error: 'item was not created'})
        }
    } catch(err) {
        res.status(500).json({error: err.message})
    }
    
})

router.put('/:id', async(req, res) => {
    try{
        const result = await departModel.edit(req.params.id, req.body)
        if(result.affectedRows >= 1){
            res.json({success: 'item was changed'})
        }else{
            res.json({error: 'item was not changed'})
        }
    } catch(err) {
        res.status(500).json({error: err.message})
    }
})

router.delete('/:id',async (req, res) => {
    try{
        const result = await departModel.remove(req.params.id)
        if(result.affectedRows >= 1){
            res.json({success: 'item was deleted'})
        }else{
            res.json({error: 'item was not deleted'})
        }
    } catch(err) {
        res.status(500).json({error: err.message})
    }
})
module.exports = router