const Comments = require('../lib/mongo').Comments;

module.exports = {
    //新建心得体会
    create: function create(comment) {
        return Comments.create(comment).exec();
    },
    //获取用户全部联系人
    getCommentsByUid: function getCommentsByUid(uid) {
        var query = {};
        if (uid) {
            query.uid = uid;
        }
        return Comments
            .find(query)
            .exec();
    },
};