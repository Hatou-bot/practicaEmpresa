const router = require('express').Router()
const empleModel = require('../../models/empleados')

router.get('/', async (req, res) => {
    try{
        const rows = await empleModel.getAll()
        res.json(rows)
    } catch(err) {
        res.status(500).json({error: err.message})
    }
})

router.get('/:id', async (req, res) => {
    try{
        const row = await empleModel.getById(req.params.id)
        res.json(row)
    } catch(err) {
        res.status(500).json({error: err.message})
    }
})

router.post('/', async(req, res) => {
    try{
        const result = await empleModel.create(req.body)
        if(result.affectedRows >= 1){
            res.json({success: 'Empleado was creado'})
        }else{
            res.json({error: 'Creation failed'})
        }
    }catch(err) {
        res.status(500).json({error: err.message})
    }
})

router.put('/:id', async(req, res) => {
    try{
        const result = await empleModel.edit(req.params.id, req.body)
        if(result.affectedRows >= 1){
            res.json({success: 'Empleado was modificado'})
        }else{
            res.json({error: 'Edit failed'})
        }
    }catch(err) {
        res.status(500).json({error: err.message})
    }
})

router.delete('/:id', async(req, res) => {
    try{
        const result = await empleModel.remove(req.params.id)
        if(result.affectedRows >= 1){
            res.json({success: 'Empleado was borrado'})
        }else{
            res.json({error: 'Delete failed'})
        }
    }catch(err) {
        res.status(500).json({error: err.message})
    }
})
module.exports = router