export const buildCommentTree = (comments, rootParentId = null) => {
    const childrenMap = new Map();
    for (const comment of comments) {
        const pid = comment.parent_id;
        if (!childrenMap.has(pid)) {
            childrenMap.set(pid, []);
        }
        childrenMap.get(pid).push(comment);
    }
    const buildTree = (parentId) => {
        const children = childrenMap.get(parentId) || [];
        return children.map(comment => ({
            ...comment,
            replies: buildTree(comment.id)
        }));
    };
    // 3️⃣ Start from root (parent_id === null)
    return buildTree(rootParentId);
};
//# sourceMappingURL=getCommentsRecursively.js.map