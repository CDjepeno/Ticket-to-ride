import { CommentProvider } from "../CommentProvider";
import { AddComment } from '../../../core/application/useCase/comment/addComment/AddComment';
import { DeleteComment } from '../../../core/application/useCase/comment/deleteComment /DeleteComment';
import { UpdateComment } from '../../../core/application/useCase/comment/updateComment/UpdateComment';

const comentRepository = new CommentProvider();

const addCommentInteractor = new AddComment(comentRepository);
const deleteCommentInteractor = new DeleteComment(comentRepository);
const updateCommentInteractor = new UpdateComment(comentRepository);

export { addCommentInteractor, deleteCommentInteractor, updateCommentInteractor }; 