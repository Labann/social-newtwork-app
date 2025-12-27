import type { Comment } from "../generated/prisma/client.js"


export type CommentWithReplies = Comment & {
  replies: CommentWithReplies[];
};

export const buildCommentTree = (
  comments: Comment[],
  rootParentId: string | null = null
): CommentWithReplies[] => {
  const childrenMap = new Map<string | null, Comment[]>();

  for (const comment of comments) {
    const pid = comment.parent_id;
    if (!childrenMap.has(pid)) {
      childrenMap.set(pid, []);
    }
    childrenMap.get(pid)!.push(comment);
  }

  
  const buildTree = (parentId: string | null): CommentWithReplies[] => {
    const children = childrenMap.get(parentId) || [];

    return children.map(comment => ({
      ...comment,
      replies: buildTree(comment.id)
    }));
  };

  // 3️⃣ Start from root (parent_id === null)
  return buildTree(rootParentId);
};
