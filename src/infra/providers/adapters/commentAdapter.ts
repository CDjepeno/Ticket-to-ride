import { CommentProvider } from "../CommentProvider";
import { AddComment } from '../../../core/application/useCase/comment/addComment/AddComment';

const comentRepository = new CommentProvider();

const addCommentInteractor = new AddComment(comentRepository);

export { addCommentInteractor }; 