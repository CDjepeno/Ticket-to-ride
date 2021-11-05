import { InMemoryCommentRepository } from '../builder/InMemoryCommentRepository';
import { CommentBuilderRepository } from '../builder/CommentBuilderRepository';
describe('Comment UseCase test', () => {
  it("Should register a new ticket", () => {
    const memory = new InMemoryCommentRepository();
    const userStub = CommentBuilderRepository.ticketStub();
    const result = memory.saveComment(userStub);

    expect(result).resolves.toEqual("comment added");
  });
})