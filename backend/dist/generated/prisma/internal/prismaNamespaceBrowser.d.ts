import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Post: "Post";
    readonly Saved_post: "Saved_post";
    readonly Comment: "Comment";
    readonly Post_like: "Post_like";
    readonly Comment_like: "Comment_like";
    readonly Follow: "Follow";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly first_name: "first_name";
    readonly last_name: "last_name";
    readonly password: "password";
    readonly username: "username";
    readonly profilePicture: "profilePicture";
    readonly bannerImg: "bannerImg";
    readonly bio: "bio";
    readonly location: "location";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const PostScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly text: "text";
    readonly images: "images";
    readonly videos: "videos";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum];
export declare const Saved_postScalarFieldEnum: {
    readonly id: "id";
    readonly post_id: "post_id";
    readonly user_id: "user_id";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Saved_postScalarFieldEnum = (typeof Saved_postScalarFieldEnum)[keyof typeof Saved_postScalarFieldEnum];
export declare const CommentScalarFieldEnum: {
    readonly id: "id";
    readonly image: "image";
    readonly text: "text";
    readonly user_id: "user_id";
    readonly post_id: "post_id";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum];
export declare const Post_likeScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly post_id: "post_id";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Post_likeScalarFieldEnum = (typeof Post_likeScalarFieldEnum)[keyof typeof Post_likeScalarFieldEnum];
export declare const Comment_likeScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly comment_id: "comment_id";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Comment_likeScalarFieldEnum = (typeof Comment_likeScalarFieldEnum)[keyof typeof Comment_likeScalarFieldEnum];
export declare const FollowScalarFieldEnum: {
    readonly id: "id";
    readonly follower_id: "follower_id";
    readonly following_id: "following_id";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type FollowScalarFieldEnum = (typeof FollowScalarFieldEnum)[keyof typeof FollowScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map