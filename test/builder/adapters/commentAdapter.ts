import { AddComment } from '../../../src/core-domain/application/useCase/comment/addComment/AddComment';
import { DeleteComment } from '../../../src/core-domain/application/useCase/comment/deleteComment /DeleteComment';
import { UpdateComment } from '../../../src/core-domain/application/useCase/comment/updateComment/UpdateComment';
import { InMemoryCommentRepository } from '../comment/InMemoryCommentRepository';


const comentRepository = new InMemoryCommentRepository();

const addCommentInteractorForTest = new AddComment(comentRepository);
const deleteCommentInteractorForTest = new DeleteComment(comentRepository);
const updateCommentInteractorForTest = new UpdateComment(comentRepository);

export { addCommentInteractorForTest, deleteCommentInteractorForTest, updateCommentInteractorForTest }; 