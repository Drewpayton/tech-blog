const { Comment } = require('../models')

const commentData = [{
    name: "This is some nice Tech",
    user_id: 1,
    post_id: 1
}];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;