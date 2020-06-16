// Get all items
const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query("select * from empleados", (err, rows) => {
            if(err) reject(err)
            resolve(rows)
        })
    })
}

// Get one item
const getById = (pEmpleadoId) => {
    return new Promise((resolve, reject) => {
        db.query("select * from empleados where id = ?", [pEmpleadoId], (err, rows) =>{
            if(err) reject(err)
            resolve(rows)
        })
    })
}

// Create one item
const create = (pData) => {
    return new Promise((resolve, reject) => {
        db.query("insert into empleados (nombre, dni, sexo, fecha_nacimiento, fecha_inc, salario, cargo, fk_departamento, jefe_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [pData.nombre, pData.dni, pData.sexo, pData.fecha_nacimiento, pData.fecha_inc, pData.salario, pData.cargo, pData.fk_departamento, pData.jefe_id],
        (err, result) => {
            if(err) reject(err)
            resolve(result)
        })
    })
}

// Edit one item
const edit = (pId, pData) => {
    return new Promise((resolve, reject) =>{
        db.query("update empleados set nombre = ?, dni = ?, sexo = ?, fecha_nacimiento = ?, fecha_inc = ?, salario = ?, cargo = ?, fk_departamento = ?, jefe_id = ? where id = ?",
        [pData.nombre, pData.dni, pData.sexo, pData.fecha_nacimiento, pData.fecha_inc, pData.salario, pData.cargo, pData.fk_departamento, pData.jefe_id, pId],
        (err, result) => {
            if(err) reject(err)
            resolve(result)
        })
    })
}

// Delete one item
const remove = (pId) => {
    return new Promise((resolve, reject) => {
        db.query("delete from empleados where id = ?",
        [pId],
        (err, result) => {
            if(err) reject(err)
            resolve(result)
        })
    })
}

module.exports = {
    getAll, getById, create, edit, remove
}