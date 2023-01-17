import { CommentBuilderRepository } from "../builder/comment/CommentBuilderRepository";
import {
  addCommentInteractorForTest,
  deleteCommentInteractorForTest,
  updateCommentInteractorForTest,
} from "../builder/adapters/commentAdapter";

describe("Comment UseCase test", () => {
  it("Should register a new comment", async () => {
    const comment = CommentBuilderRepository.commentStub();

    const result = await addCommentInteractorForTest.execute(comment, 1);

    expect(result).toBe("comment added");
  });

  it("Should delete a comment", async () => {
    const commentStub = CommentBuilderRepository.commentStub();

    const result = await deleteCommentInteractorForTest.execute(commentStub.id);

    expect(result.comment).toBe("comment deleted");
  });

  it("Should be update comment", async () => {
    const commentStub = CommentBuilderRepository.commentStub();

    const result = await updateCommentInteractorForTest.execute(
      commentStub,
      commentStub.id
    );

    expect(result).toBe("ticket updated");
  });
});
