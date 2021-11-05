import { InMemoryCommentRepository } from '../builder/InMemoryCommentRepository';
import { CommentBuilderRepository } from '../builder/CommentBuilderRepository';

describe('Comment UseCase test', () => {
  it("Should register a new comment", () => {
    const memory = new InMemoryCommentRepository();
    const commentStub = CommentBuilderRepository.commentStub();
    const result = memory.saveComment(commentStub);

    expect(result).resolves.toEqual("comment added");
  });

  it("Should delete a comment", () => {
    const memory = new InMemoryCommentRepository();
    const commentStub = CommentBuilderRepository.commentStub();
    memory.saveComment(commentStub)

    const result = memory.deleteComment(commentStub.id);

    expect(result).resolves.toEqual("comment deleted");
  });
})