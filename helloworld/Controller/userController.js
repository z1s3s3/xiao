const userlist = function (req, res, next) {
    res.json({
        code: 200,
        msg: '获取成功',
        list: [
            {
                id: '001',
                idcard: '1',
                brand: '奥迪',
                model: 'A4',
                year: '2019',
                color: '黑色',
                thumbnail: 'https://img1.baidu.com/it/u=1054209633,2776264710&fm=26&fmt=auto&gp=0.jpg',
                createTime: '2021-04-01',
                updateTime: '2021-04-01',
                deleteTime: '2021-04-01'
            }, {
                id: '002',
                idcard: '2',
                brand: '奔驰',
                model: 'C200',
                year: '2019',
                color: '黑色',
                thumbnail: 'https://img1.baidu.com/it/u=1054209633,2776264710&fm=26&fmt=auto&gp=0.jpg',
                createTime: '2021-04-01',
                updateTime: '2021-04-01',
                deleteTime: '2021-04-01',
            }
        ]
    })
}
// 函数添加一个新用户
const addUser = (req, res) => {
    console.log(req.body);

}
// 删除用户
const deleteUser = (req, res) => {
    // 假设用户ID作为路由参数传递
    const userId = req.params.id;
    // 在数组中查找用户的索引
    const index = users.findIndex(user => user.id === userId);
    if (index !== -1) {
        // 找到的用户，从数组中删除
        users.splice(index, 1);
        // 用成功信息回复
        res.json({
            code: 200,
            msg: "删除成功"
        });
    } else {
        // 未找到用户，请用错误消息进行响应
        res.status(404).json({
            code: 404,
            msg: "用户未找到"
        });
    }
};

module.exports = {
    userlist,
    deleteUser,
    addUser,
};