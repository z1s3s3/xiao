const fs = require('fs')
const path = require('path')
const file = path.join(__dirname, '../data/carlist.json')
const list = (req, res) => {
    // console.log(123);
    let page = req.query.page || 1;
    let size = req.query.size || 5;
    //  获取数据
    res.json(getCarData(page, size))
}
const getCarData = (page = 1, size = 5) => {
    let data = fs.readFileSync(file, 'utf-8')
    data = JSON.parse(data).list;
    let result = {
        count: data.length,
        page: page,
        size: size,
        data: [],
    }
    if (page && size) {
        result.data = data.slice((page - 1) * size, page * size)
    }
    return result
}
module.exports = {
    list,
}