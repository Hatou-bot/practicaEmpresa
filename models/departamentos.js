// Get all items
const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query("select * from departamento", (err, rows) => {
            if(err) reject(err)
            resolve(rows)
        })
    })
}

// Get one item
const getById = (pDepartId) => {
    return new Promise((resolve, reject) => {
        db.query("select * from departamento where id = ?", [pDepartId], (err, rows) => {
            if(err) reject(err)
            resolve(rows[0])
        })
    })
}

// Create one item
const create = (pData) => {
    return new Promise((resolve, reject) => {
        db.query("insert into departamento (nombre, ciudad) values (?, ?)", 
        [pData.nombre, pData.ciudad],
        (err, result) => {
            if(err) reject(err)
            resolve(result)
        })
    })
}

// Edit one item
const edit = (pId, pData) => {
    return new Promise((resolve, reject) => {
        db.query("update departamento set nombre = ?, ciudad = ? where id = ?",
        [pData.nombre, pData.ciudad, pId],
        (err, result) => {
            if(err) reject(err)
            resolve(result)
        })
    })
}

// Delete one item
const remove = (pId) => {
    return new Promise((resolve, reject) => {
        db.query("delete from departamento where id = ?", 
        [pId],
        (err, result) => {
            if(err) reject(err)
            resolve(result)
        })
    })
}

module.exports =  {
    getAll, getById, create, edit, remove,
}