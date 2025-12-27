import type { Comment } from "../generated/prisma/client.js";
export type CommentWithReplies = Comment & {
    replies: CommentWithReplies[];
};
export declare const buildCommentTree: (comments: Comment[], rootParentId?: string | null) => CommentWithReplies[];
//# sourceMappingURL=getCommentsRecursively.d.ts.map