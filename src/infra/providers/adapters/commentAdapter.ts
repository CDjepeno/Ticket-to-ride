import { CommentProvider } from "../CommentProvider";
import { AddComment } from '../../../core/application/useCase/comment/addComment/AddComment';
import { DeleteComment } from '../../../core/application/useCase/comment/deleteComment /DeleteComment';

const comentRepository = new CommentProvider();

const addCommentInteractor = new AddComment(comentRepository);
const deleteCommentInteractor = new DeleteComment(comentRepository);

export { addCommentInteractor, deleteCommentInteractor }; 