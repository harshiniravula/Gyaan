import { observable, action } from 'mobx';

class CommentModel {
    constructor(comment) {
        this.commentId = comment.comment_id;

        this.commenter = {

            userId: comment.commenter.user_id,

            username: comment.commenter.username,

            profilePic: comment.commenter.profile_pic,
        }
        this.commentAt = comment.comment_at;

        this.commentContent = comment.comment_content;

        this.isReacted = comment.is_reacted;

        this.repliesCount = comment.replies_count

        this.reactionsCount = comment.reactions_count

    }
}

export default CommentModel;
