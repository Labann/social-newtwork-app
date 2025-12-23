import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Comment_like
 *
 */
export type Comment_likeModel = runtime.Types.Result.DefaultSelection<Prisma.$Comment_likePayload>;
export type AggregateComment_like = {
    _count: Comment_likeCountAggregateOutputType | null;
    _min: Comment_likeMinAggregateOutputType | null;
    _max: Comment_likeMaxAggregateOutputType | null;
};
export type Comment_likeMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    comment_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Comment_likeMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    comment_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Comment_likeCountAggregateOutputType = {
    id: number;
    user_id: number;
    comment_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Comment_likeMinAggregateInputType = {
    id?: true;
    user_id?: true;
    comment_id?: true;
    created_at?: true;
    updated_at?: true;
};
export type Comment_likeMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    comment_id?: true;
    created_at?: true;
    updated_at?: true;
};
export type Comment_likeCountAggregateInputType = {
    id?: true;
    user_id?: true;
    comment_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Comment_likeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Comment_like to aggregate.
     */
    where?: Prisma.Comment_likeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comment_likes to fetch.
     */
    orderBy?: Prisma.Comment_likeOrderByWithRelationInput | Prisma.Comment_likeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Comment_likeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comment_likes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comment_likes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Comment_likes
    **/
    _count?: true | Comment_likeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Comment_likeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Comment_likeMaxAggregateInputType;
};
export type GetComment_likeAggregateType<T extends Comment_likeAggregateArgs> = {
    [P in keyof T & keyof AggregateComment_like]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateComment_like[P]> : Prisma.GetScalarType<T[P], AggregateComment_like[P]>;
};
export type Comment_likeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Comment_likeWhereInput;
    orderBy?: Prisma.Comment_likeOrderByWithAggregationInput | Prisma.Comment_likeOrderByWithAggregationInput[];
    by: Prisma.Comment_likeScalarFieldEnum[] | Prisma.Comment_likeScalarFieldEnum;
    having?: Prisma.Comment_likeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Comment_likeCountAggregateInputType | true;
    _min?: Comment_likeMinAggregateInputType;
    _max?: Comment_likeMaxAggregateInputType;
};
export type Comment_likeGroupByOutputType = {
    id: string;
    user_id: string;
    comment_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Comment_likeCountAggregateOutputType | null;
    _min: Comment_likeMinAggregateOutputType | null;
    _max: Comment_likeMaxAggregateOutputType | null;
};
type GetComment_likeGroupByPayload<T extends Comment_likeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Comment_likeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Comment_likeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Comment_likeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Comment_likeGroupByOutputType[P]>;
}>>;
export type Comment_likeWhereInput = {
    AND?: Prisma.Comment_likeWhereInput | Prisma.Comment_likeWhereInput[];
    OR?: Prisma.Comment_likeWhereInput[];
    NOT?: Prisma.Comment_likeWhereInput | Prisma.Comment_likeWhereInput[];
    id?: Prisma.StringFilter<"Comment_like"> | string;
    user_id?: Prisma.StringFilter<"Comment_like"> | string;
    comment_id?: Prisma.StringFilter<"Comment_like"> | string;
    created_at?: Prisma.DateTimeFilter<"Comment_like"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Comment_like"> | Date | string;
    the_liker?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    the_comment?: Prisma.XOR<Prisma.CommentScalarRelationFilter, Prisma.CommentWhereInput>;
};
export type Comment_likeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    comment_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    the_liker?: Prisma.UserOrderByWithRelationInput;
    the_comment?: Prisma.CommentOrderByWithRelationInput;
};
export type Comment_likeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    user_id_comment_id?: Prisma.Comment_likeUser_idComment_idCompoundUniqueInput;
    AND?: Prisma.Comment_likeWhereInput | Prisma.Comment_likeWhereInput[];
    OR?: Prisma.Comment_likeWhereInput[];
    NOT?: Prisma.Comment_likeWhereInput | Prisma.Comment_likeWhereInput[];
    user_id?: Prisma.StringFilter<"Comment_like"> | string;
    comment_id?: Prisma.StringFilter<"Comment_like"> | string;
    created_at?: Prisma.DateTimeFilter<"Comment_like"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Comment_like"> | Date | string;
    the_liker?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    the_comment?: Prisma.XOR<Prisma.CommentScalarRelationFilter, Prisma.CommentWhereInput>;
}, "id" | "user_id_comment_id">;
export type Comment_likeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    comment_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.Comment_likeCountOrderByAggregateInput;
    _max?: Prisma.Comment_likeMaxOrderByAggregateInput;
    _min?: Prisma.Comment_likeMinOrderByAggregateInput;
};
export type Comment_likeScalarWhereWithAggregatesInput = {
    AND?: Prisma.Comment_likeScalarWhereWithAggregatesInput | Prisma.Comment_likeScalarWhereWithAggregatesInput[];
    OR?: Prisma.Comment_likeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Comment_likeScalarWhereWithAggregatesInput | Prisma.Comment_likeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Comment_like"> | string;
    user_id?: Prisma.StringWithAggregatesFilter<"Comment_like"> | string;
    comment_id?: Prisma.StringWithAggregatesFilter<"Comment_like"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Comment_like"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Comment_like"> | Date | string;
};
export type Comment_likeCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    the_liker: Prisma.UserCreateNestedOneWithoutComment_likesInput;
    the_comment: Prisma.CommentCreateNestedOneWithoutLikesInput;
};
export type Comment_likeUncheckedCreateInput = {
    id?: string;
    user_id: string;
    comment_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type Comment_likeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    the_liker?: Prisma.UserUpdateOneRequiredWithoutComment_likesNestedInput;
    the_comment?: Prisma.CommentUpdateOneRequiredWithoutLikesNestedInput;
};
export type Comment_likeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    comment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Comment_likeCreateManyInput = {
    id?: string;
    user_id: string;
    comment_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type Comment_likeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Comment_likeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    comment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Comment_likeListRelationFilter = {
    every?: Prisma.Comment_likeWhereInput;
    some?: Prisma.Comment_likeWhereInput;
    none?: Prisma.Comment_likeWhereInput;
};
export type Comment_likeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Comment_likeUser_idComment_idCompoundUniqueInput = {
    user_id: string;
    comment_id: string;
};
export type Comment_likeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    comment_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type Comment_likeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    comment_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type Comment_likeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    comment_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type Comment_likeCreateNestedManyWithoutThe_likerInput = {
    create?: Prisma.XOR<Prisma.Comment_likeCreateWithoutThe_likerInput, Prisma.Comment_likeUncheckedCreateWithoutThe_likerInput> | Prisma.Comment_likeCreateWithoutThe_likerInput[] | Prisma.Comment_likeUncheckedCreateWithoutThe_likerInput[];
    connectOrCreate?: Prisma.Comment_likeCreateOrConnectWithoutThe_likerInput | Prisma.Comment_likeCreateOrConnectWithoutThe_likerInput[];
    createMany?: Prisma.Comment_likeCreateManyThe_likerInputEnvelope;
    connect?: Prisma.Comment_likeWhereUniqueInput | Prisma.Comment_likeWhereUniqueInput[];
};
export type Comment_likeUncheckedCreateNestedManyWithoutThe_likerInput = {
    create?: Prisma.XOR<Prisma.Comment_likeCreateWithoutThe_likerInput, Prisma.Comment_likeUncheckedCreateWithoutThe_likerInput> | Prisma.Comment_likeCreateWithoutThe_likerInput[] | Prisma.Comment_likeUncheckedCreateWithoutThe_likerInput[];
    connectOrCreate?: Prisma.Comment_likeCreateOrConnectWithoutThe_likerInput | Prisma.Comment_likeCreateOrConnectWithoutThe_likerInput[];
    createMany?: Prisma.Comment_likeCreateManyThe_likerInputEnvelope;
    connect?: Prisma.Comment_likeWhereUniqueInput | Prisma.Comment_likeWhereUniqueInput[];
};
export type Comment_likeUpdateManyWithoutThe_likerNestedInput = {
    create?: Prisma.XOR<Prisma.Comment_likeCreateWithoutThe_likerInput, Prisma.Comment_likeUncheckedCreateWithoutThe_likerInput> | Prisma.Comment_likeCreateWithoutThe_likerInput[] | Prisma.Comment_likeUncheckedCreateWithoutThe_likerInput[];
    connectOrCreate?: Prisma.Comment_likeCreateOrConnectWithoutThe_likerInput | Prisma.Comment_likeCreateOrConnectWithoutThe_likerInput[];
    upsert?: Prisma.Comment_likeUpsertWithWhereUniqueWithoutThe_likerInput | Prisma.Comment_likeUpsertWithWhereUniqueWithoutThe_likerInput[];
    createMany?: Prisma.Comment_likeCreateManyThe_likerInputEnvelope;
    set?: Prisma.Comment_likeWhereUniqueInput | Prisma.Comment_likeWhereUniqueInput[];
    disconnect?: Prisma.Comment_likeWhereUniqueInput | Prisma.Comment_likeWhereUniqueInput[];
    delete?: Prisma.Comment_likeWhereUniqueInput | Prisma.Comment_likeWhereUniqueInput[];
    connect?: Prisma.Comment_likeWhereUniqueInput | Prisma.Comment_likeWhereUniqueInput[];
    update?: Prisma.Comment_likeUpdateWithWhereUniqueWithoutThe_likerInput | Prisma.Comment_likeUpdateWithWhereUniqueWithoutThe_likerInput[];
    updateMany?: Prisma.Comment_likeUpdateManyWithWhereWithoutThe_likerInput | Prisma.Comment_likeUpdateManyWithWhereWithoutThe_likerInput[];
    deleteMany?: Prisma.Comment_likeScalarWhereInput | Prisma.Comment_likeScalarWhereInput[];
};
export type Comment_likeUncheckedUpdateManyWithoutThe_likerNestedInput = {
    create?: Prisma.XOR<Prisma.Comment_likeCreateWithoutThe_likerInput, Prisma.Comment_likeUncheckedCreateWithoutThe_likerInput> | Prisma.Comment_likeCreateWithoutThe_likerInput[] | Prisma.Comment_likeUncheckedCreateWithoutThe_likerInput[];
    connectOrCreate?: Prisma.Comment_likeCreateOrConnectWithoutThe_likerInput | Prisma.Comment_likeCreateOrConnectWithoutThe_likerInput[];
    upsert?: Prisma.Comment_likeUpsertWithWhereUniqueWithoutThe_likerInput | Prisma.Comment_likeUpsertWithWhereUniqueWithoutThe_likerInput[];
    createMany?: Prisma.Comment_likeCreateManyThe_likerInputEnvelope;
    set?: Prisma.Comment_likeWhereUniqueInput | Prisma.Comment_likeWhereUniqueInput[];
    disconnect?: Prisma.Comment_likeWhereUniqueInput | Prisma.Comment_likeWhereUniqueInput[];
    delete?: Prisma.Comment_likeWhereUniqueInput | Prisma.Comment_likeWhereUniqueInput[];
    connect?: Prisma.Comment_likeWhereUniqueInput | Prisma.Comment_likeWhereUniqueInput[];
    update?: Prisma.Comment_likeUpdateWithWhereUniqueWithoutThe_likerInput | Prisma.Comment_likeUpdateWithWhereUniqueWithoutThe_likerInput[];
    updateMany?: Prisma.Comment_likeUpdateManyWithWhereWithoutThe_likerInput | Prisma.Comment_likeUpdateManyWithWhereWithoutThe_likerInput[];
    deleteMany?: Prisma.Comment_likeScalarWhereInput | Prisma.Comment_likeScalarWhereInput[];
};
export type Comment_likeCreateNestedManyWithoutThe_commentInput = {
    create?: Prisma.XOR<Prisma.Comment_likeCreateWithoutThe_commentInput, Prisma.Comment_likeUncheckedCreateWithoutThe_commentInput> | Prisma.Comment_likeCreateWithoutThe_commentInput[] | Prisma.Comment_likeUncheckedCreateWithoutThe_commentInput[];
    connectOrCreate?: Prisma.Comment_likeCreateOrConnectWithoutThe_commentInput | Prisma.Comment_likeCreateOrConnectWithoutThe_commentInput[];
    createMany?: Prisma.Comment_likeCreateManyThe_commentInputEnvelope;
    connect?: Prisma.Comment_likeWhereUniqueInput | Prisma.Comment_likeWhereUniqueInput[];
};
export type Comment_likeUncheckedCreateNestedManyWithoutThe_commentInput = {
    create?: Prisma.XOR<Prisma.Comment_likeCreateWithoutThe_commentInput, Prisma.Comment_likeUncheckedCreateWithoutThe_commentInput> | Prisma.Comment_likeCreateWithoutThe_commentInput[] | Prisma.Comment_likeUncheckedCreateWithoutThe_commentInput[];
    connectOrCreate?: Prisma.Comment_likeCreateOrConnectWithoutThe_commentInput | Prisma.Comment_likeCreateOrConnectWithoutThe_commentInput[];
    createMany?: Prisma.Comment_likeCreateManyThe_commentInputEnvelope;
    connect?: Prisma.Comment_likeWhereUniqueInput | Prisma.Comment_likeWhereUniqueInput[];
};
export type Comment_likeUpdateManyWithoutThe_commentNestedInput = {
    create?: Prisma.XOR<Prisma.Comment_likeCreateWithoutThe_commentInput, Prisma.Comment_likeUncheckedCreateWithoutThe_commentInput> | Prisma.Comment_likeCreateWithoutThe_commentInput[] | Prisma.Comment_likeUncheckedCreateWithoutThe_commentInput[];
    connectOrCreate?: Prisma.Comment_likeCreateOrConnectWithoutThe_commentInput | Prisma.Comment_likeCreateOrConnectWithoutThe_commentInput[];
    upsert?: Prisma.Comment_likeUpsertWithWhereUniqueWithoutThe_commentInput | Prisma.Comment_likeUpsertWithWhereUniqueWithoutThe_commentInput[];
    createMany?: Prisma.Comment_likeCreateManyThe_commentInputEnvelope;
    set?: Prisma.Comment_likeWhereUniqueInput | Prisma.Comment_likeWhereUniqueInput[];
    disconnect?: Prisma.Comment_likeWhereUniqueInput | Prisma.Comment_likeWhereUniqueInput[];
    delete?: Prisma.Comment_likeWhereUniqueInput | Prisma.Comment_likeWhereUniqueInput[];
    connect?: Prisma.Comment_likeWhereUniqueInput | Prisma.Comment_likeWhereUniqueInput[];
    update?: Prisma.Comment_likeUpdateWithWhereUniqueWithoutThe_commentInput | Prisma.Comment_likeUpdateWithWhereUniqueWithoutThe_commentInput[];
    updateMany?: Prisma.Comment_likeUpdateManyWithWhereWithoutThe_commentInput | Prisma.Comment_likeUpdateManyWithWhereWithoutThe_commentInput[];
    deleteMany?: Prisma.Comment_likeScalarWhereInput | Prisma.Comment_likeScalarWhereInput[];
};
export type Comment_likeUncheckedUpdateManyWithoutThe_commentNestedInput = {
    create?: Prisma.XOR<Prisma.Comment_likeCreateWithoutThe_commentInput, Prisma.Comment_likeUncheckedCreateWithoutThe_commentInput> | Prisma.Comment_likeCreateWithoutThe_commentInput[] | Prisma.Comment_likeUncheckedCreateWithoutThe_commentInput[];
    connectOrCreate?: Prisma.Comment_likeCreateOrConnectWithoutThe_commentInput | Prisma.Comment_likeCreateOrConnectWithoutThe_commentInput[];
    upsert?: Prisma.Comment_likeUpsertWithWhereUniqueWithoutThe_commentInput | Prisma.Comment_likeUpsertWithWhereUniqueWithoutThe_commentInput[];
    createMany?: Prisma.Comment_likeCreateManyThe_commentInputEnvelope;
    set?: Prisma.Comment_likeWhereUniqueInput | Prisma.Comment_likeWhereUniqueInput[];
    disconnect?: Prisma.Comment_likeWhereUniqueInput | Prisma.Comment_likeWhereUniqueInput[];
    delete?: Prisma.Comment_likeWhereUniqueInput | Prisma.Comment_likeWhereUniqueInput[];
    connect?: Prisma.Comment_likeWhereUniqueInput | Prisma.Comment_likeWhereUniqueInput[];
    update?: Prisma.Comment_likeUpdateWithWhereUniqueWithoutThe_commentInput | Prisma.Comment_likeUpdateWithWhereUniqueWithoutThe_commentInput[];
    updateMany?: Prisma.Comment_likeUpdateManyWithWhereWithoutThe_commentInput | Prisma.Comment_likeUpdateManyWithWhereWithoutThe_commentInput[];
    deleteMany?: Prisma.Comment_likeScalarWhereInput | Prisma.Comment_likeScalarWhereInput[];
};
export type Comment_likeCreateWithoutThe_likerInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    the_comment: Prisma.CommentCreateNestedOneWithoutLikesInput;
};
export type Comment_likeUncheckedCreateWithoutThe_likerInput = {
    id?: string;
    comment_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type Comment_likeCreateOrConnectWithoutThe_likerInput = {
    where: Prisma.Comment_likeWhereUniqueInput;
    create: Prisma.XOR<Prisma.Comment_likeCreateWithoutThe_likerInput, Prisma.Comment_likeUncheckedCreateWithoutThe_likerInput>;
};
export type Comment_likeCreateManyThe_likerInputEnvelope = {
    data: Prisma.Comment_likeCreateManyThe_likerInput | Prisma.Comment_likeCreateManyThe_likerInput[];
    skipDuplicates?: boolean;
};
export type Comment_likeUpsertWithWhereUniqueWithoutThe_likerInput = {
    where: Prisma.Comment_likeWhereUniqueInput;
    update: Prisma.XOR<Prisma.Comment_likeUpdateWithoutThe_likerInput, Prisma.Comment_likeUncheckedUpdateWithoutThe_likerInput>;
    create: Prisma.XOR<Prisma.Comment_likeCreateWithoutThe_likerInput, Prisma.Comment_likeUncheckedCreateWithoutThe_likerInput>;
};
export type Comment_likeUpdateWithWhereUniqueWithoutThe_likerInput = {
    where: Prisma.Comment_likeWhereUniqueInput;
    data: Prisma.XOR<Prisma.Comment_likeUpdateWithoutThe_likerInput, Prisma.Comment_likeUncheckedUpdateWithoutThe_likerInput>;
};
export type Comment_likeUpdateManyWithWhereWithoutThe_likerInput = {
    where: Prisma.Comment_likeScalarWhereInput;
    data: Prisma.XOR<Prisma.Comment_likeUpdateManyMutationInput, Prisma.Comment_likeUncheckedUpdateManyWithoutThe_likerInput>;
};
export type Comment_likeScalarWhereInput = {
    AND?: Prisma.Comment_likeScalarWhereInput | Prisma.Comment_likeScalarWhereInput[];
    OR?: Prisma.Comment_likeScalarWhereInput[];
    NOT?: Prisma.Comment_likeScalarWhereInput | Prisma.Comment_likeScalarWhereInput[];
    id?: Prisma.StringFilter<"Comment_like"> | string;
    user_id?: Prisma.StringFilter<"Comment_like"> | string;
    comment_id?: Prisma.StringFilter<"Comment_like"> | string;
    created_at?: Prisma.DateTimeFilter<"Comment_like"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Comment_like"> | Date | string;
};
export type Comment_likeCreateWithoutThe_commentInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    the_liker: Prisma.UserCreateNestedOneWithoutComment_likesInput;
};
export type Comment_likeUncheckedCreateWithoutThe_commentInput = {
    id?: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type Comment_likeCreateOrConnectWithoutThe_commentInput = {
    where: Prisma.Comment_likeWhereUniqueInput;
    create: Prisma.XOR<Prisma.Comment_likeCreateWithoutThe_commentInput, Prisma.Comment_likeUncheckedCreateWithoutThe_commentInput>;
};
export type Comment_likeCreateManyThe_commentInputEnvelope = {
    data: Prisma.Comment_likeCreateManyThe_commentInput | Prisma.Comment_likeCreateManyThe_commentInput[];
    skipDuplicates?: boolean;
};
export type Comment_likeUpsertWithWhereUniqueWithoutThe_commentInput = {
    where: Prisma.Comment_likeWhereUniqueInput;
    update: Prisma.XOR<Prisma.Comment_likeUpdateWithoutThe_commentInput, Prisma.Comment_likeUncheckedUpdateWithoutThe_commentInput>;
    create: Prisma.XOR<Prisma.Comment_likeCreateWithoutThe_commentInput, Prisma.Comment_likeUncheckedCreateWithoutThe_commentInput>;
};
export type Comment_likeUpdateWithWhereUniqueWithoutThe_commentInput = {
    where: Prisma.Comment_likeWhereUniqueInput;
    data: Prisma.XOR<Prisma.Comment_likeUpdateWithoutThe_commentInput, Prisma.Comment_likeUncheckedUpdateWithoutThe_commentInput>;
};
export type Comment_likeUpdateManyWithWhereWithoutThe_commentInput = {
    where: Prisma.Comment_likeScalarWhereInput;
    data: Prisma.XOR<Prisma.Comment_likeUpdateManyMutationInput, Prisma.Comment_likeUncheckedUpdateManyWithoutThe_commentInput>;
};
export type Comment_likeCreateManyThe_likerInput = {
    id?: string;
    comment_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type Comment_likeUpdateWithoutThe_likerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    the_comment?: Prisma.CommentUpdateOneRequiredWithoutLikesNestedInput;
};
export type Comment_likeUncheckedUpdateWithoutThe_likerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    comment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Comment_likeUncheckedUpdateManyWithoutThe_likerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    comment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Comment_likeCreateManyThe_commentInput = {
    id?: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type Comment_likeUpdateWithoutThe_commentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    the_liker?: Prisma.UserUpdateOneRequiredWithoutComment_likesNestedInput;
};
export type Comment_likeUncheckedUpdateWithoutThe_commentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Comment_likeUncheckedUpdateManyWithoutThe_commentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Comment_likeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    comment_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    the_liker?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    the_comment?: boolean | Prisma.CommentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["comment_like"]>;
export type Comment_likeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    comment_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    the_liker?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    the_comment?: boolean | Prisma.CommentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["comment_like"]>;
export type Comment_likeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    comment_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    the_liker?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    the_comment?: boolean | Prisma.CommentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["comment_like"]>;
export type Comment_likeSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    comment_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type Comment_likeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "comment_id" | "created_at" | "updated_at", ExtArgs["result"]["comment_like"]>;
export type Comment_likeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    the_liker?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    the_comment?: boolean | Prisma.CommentDefaultArgs<ExtArgs>;
};
export type Comment_likeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    the_liker?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    the_comment?: boolean | Prisma.CommentDefaultArgs<ExtArgs>;
};
export type Comment_likeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    the_liker?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    the_comment?: boolean | Prisma.CommentDefaultArgs<ExtArgs>;
};
export type $Comment_likePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Comment_like";
    objects: {
        the_liker: Prisma.$UserPayload<ExtArgs>;
        the_comment: Prisma.$CommentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        comment_id: string;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["comment_like"]>;
    composites: {};
};
export type Comment_likeGetPayload<S extends boolean | null | undefined | Comment_likeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Comment_likePayload, S>;
export type Comment_likeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Comment_likeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Comment_likeCountAggregateInputType | true;
};
export interface Comment_likeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Comment_like'];
        meta: {
            name: 'Comment_like';
        };
    };
    /**
     * Find zero or one Comment_like that matches the filter.
     * @param {Comment_likeFindUniqueArgs} args - Arguments to find a Comment_like
     * @example
     * // Get one Comment_like
     * const comment_like = await prisma.comment_like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Comment_likeFindUniqueArgs>(args: Prisma.SelectSubset<T, Comment_likeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Comment_likeClient<runtime.Types.Result.GetResult<Prisma.$Comment_likePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Comment_like that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Comment_likeFindUniqueOrThrowArgs} args - Arguments to find a Comment_like
     * @example
     * // Get one Comment_like
     * const comment_like = await prisma.comment_like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Comment_likeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Comment_likeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Comment_likeClient<runtime.Types.Result.GetResult<Prisma.$Comment_likePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Comment_like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Comment_likeFindFirstArgs} args - Arguments to find a Comment_like
     * @example
     * // Get one Comment_like
     * const comment_like = await prisma.comment_like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Comment_likeFindFirstArgs>(args?: Prisma.SelectSubset<T, Comment_likeFindFirstArgs<ExtArgs>>): Prisma.Prisma__Comment_likeClient<runtime.Types.Result.GetResult<Prisma.$Comment_likePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Comment_like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Comment_likeFindFirstOrThrowArgs} args - Arguments to find a Comment_like
     * @example
     * // Get one Comment_like
     * const comment_like = await prisma.comment_like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Comment_likeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Comment_likeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Comment_likeClient<runtime.Types.Result.GetResult<Prisma.$Comment_likePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Comment_likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Comment_likeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comment_likes
     * const comment_likes = await prisma.comment_like.findMany()
     *
     * // Get first 10 Comment_likes
     * const comment_likes = await prisma.comment_like.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const comment_likeWithIdOnly = await prisma.comment_like.findMany({ select: { id: true } })
     *
     */
    findMany<T extends Comment_likeFindManyArgs>(args?: Prisma.SelectSubset<T, Comment_likeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Comment_likePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Comment_like.
     * @param {Comment_likeCreateArgs} args - Arguments to create a Comment_like.
     * @example
     * // Create one Comment_like
     * const Comment_like = await prisma.comment_like.create({
     *   data: {
     *     // ... data to create a Comment_like
     *   }
     * })
     *
     */
    create<T extends Comment_likeCreateArgs>(args: Prisma.SelectSubset<T, Comment_likeCreateArgs<ExtArgs>>): Prisma.Prisma__Comment_likeClient<runtime.Types.Result.GetResult<Prisma.$Comment_likePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Comment_likes.
     * @param {Comment_likeCreateManyArgs} args - Arguments to create many Comment_likes.
     * @example
     * // Create many Comment_likes
     * const comment_like = await prisma.comment_like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Comment_likeCreateManyArgs>(args?: Prisma.SelectSubset<T, Comment_likeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Comment_likes and returns the data saved in the database.
     * @param {Comment_likeCreateManyAndReturnArgs} args - Arguments to create many Comment_likes.
     * @example
     * // Create many Comment_likes
     * const comment_like = await prisma.comment_like.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Comment_likes and only return the `id`
     * const comment_likeWithIdOnly = await prisma.comment_like.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Comment_likeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Comment_likeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Comment_likePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Comment_like.
     * @param {Comment_likeDeleteArgs} args - Arguments to delete one Comment_like.
     * @example
     * // Delete one Comment_like
     * const Comment_like = await prisma.comment_like.delete({
     *   where: {
     *     // ... filter to delete one Comment_like
     *   }
     * })
     *
     */
    delete<T extends Comment_likeDeleteArgs>(args: Prisma.SelectSubset<T, Comment_likeDeleteArgs<ExtArgs>>): Prisma.Prisma__Comment_likeClient<runtime.Types.Result.GetResult<Prisma.$Comment_likePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Comment_like.
     * @param {Comment_likeUpdateArgs} args - Arguments to update one Comment_like.
     * @example
     * // Update one Comment_like
     * const comment_like = await prisma.comment_like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Comment_likeUpdateArgs>(args: Prisma.SelectSubset<T, Comment_likeUpdateArgs<ExtArgs>>): Prisma.Prisma__Comment_likeClient<runtime.Types.Result.GetResult<Prisma.$Comment_likePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Comment_likes.
     * @param {Comment_likeDeleteManyArgs} args - Arguments to filter Comment_likes to delete.
     * @example
     * // Delete a few Comment_likes
     * const { count } = await prisma.comment_like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Comment_likeDeleteManyArgs>(args?: Prisma.SelectSubset<T, Comment_likeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Comment_likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Comment_likeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comment_likes
     * const comment_like = await prisma.comment_like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Comment_likeUpdateManyArgs>(args: Prisma.SelectSubset<T, Comment_likeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Comment_likes and returns the data updated in the database.
     * @param {Comment_likeUpdateManyAndReturnArgs} args - Arguments to update many Comment_likes.
     * @example
     * // Update many Comment_likes
     * const comment_like = await prisma.comment_like.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Comment_likes and only return the `id`
     * const comment_likeWithIdOnly = await prisma.comment_like.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends Comment_likeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Comment_likeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Comment_likePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Comment_like.
     * @param {Comment_likeUpsertArgs} args - Arguments to update or create a Comment_like.
     * @example
     * // Update or create a Comment_like
     * const comment_like = await prisma.comment_like.upsert({
     *   create: {
     *     // ... data to create a Comment_like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment_like we want to update
     *   }
     * })
     */
    upsert<T extends Comment_likeUpsertArgs>(args: Prisma.SelectSubset<T, Comment_likeUpsertArgs<ExtArgs>>): Prisma.Prisma__Comment_likeClient<runtime.Types.Result.GetResult<Prisma.$Comment_likePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Comment_likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Comment_likeCountArgs} args - Arguments to filter Comment_likes to count.
     * @example
     * // Count the number of Comment_likes
     * const count = await prisma.comment_like.count({
     *   where: {
     *     // ... the filter for the Comment_likes we want to count
     *   }
     * })
    **/
    count<T extends Comment_likeCountArgs>(args?: Prisma.Subset<T, Comment_likeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Comment_likeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Comment_like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Comment_likeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Comment_likeAggregateArgs>(args: Prisma.Subset<T, Comment_likeAggregateArgs>): Prisma.PrismaPromise<GetComment_likeAggregateType<T>>;
    /**
     * Group by Comment_like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Comment_likeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends Comment_likeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Comment_likeGroupByArgs['orderBy'];
    } : {
        orderBy?: Comment_likeGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Comment_likeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComment_likeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Comment_like model
     */
    readonly fields: Comment_likeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Comment_like.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Comment_likeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    the_liker<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    the_comment<T extends Prisma.CommentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CommentDefaultArgs<ExtArgs>>): Prisma.Prisma__CommentClient<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Comment_like model
 */
export interface Comment_likeFieldRefs {
    readonly id: Prisma.FieldRef<"Comment_like", 'String'>;
    readonly user_id: Prisma.FieldRef<"Comment_like", 'String'>;
    readonly comment_id: Prisma.FieldRef<"Comment_like", 'String'>;
    readonly created_at: Prisma.FieldRef<"Comment_like", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Comment_like", 'DateTime'>;
}
/**
 * Comment_like findUnique
 */
export type Comment_likeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment_like
     */
    select?: Prisma.Comment_likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment_like
     */
    omit?: Prisma.Comment_likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Comment_likeInclude<ExtArgs> | null;
    /**
     * Filter, which Comment_like to fetch.
     */
    where: Prisma.Comment_likeWhereUniqueInput;
};
/**
 * Comment_like findUniqueOrThrow
 */
export type Comment_likeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment_like
     */
    select?: Prisma.Comment_likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment_like
     */
    omit?: Prisma.Comment_likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Comment_likeInclude<ExtArgs> | null;
    /**
     * Filter, which Comment_like to fetch.
     */
    where: Prisma.Comment_likeWhereUniqueInput;
};
/**
 * Comment_like findFirst
 */
export type Comment_likeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment_like
     */
    select?: Prisma.Comment_likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment_like
     */
    omit?: Prisma.Comment_likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Comment_likeInclude<ExtArgs> | null;
    /**
     * Filter, which Comment_like to fetch.
     */
    where?: Prisma.Comment_likeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comment_likes to fetch.
     */
    orderBy?: Prisma.Comment_likeOrderByWithRelationInput | Prisma.Comment_likeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Comment_likes.
     */
    cursor?: Prisma.Comment_likeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comment_likes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comment_likes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Comment_likes.
     */
    distinct?: Prisma.Comment_likeScalarFieldEnum | Prisma.Comment_likeScalarFieldEnum[];
};
/**
 * Comment_like findFirstOrThrow
 */
export type Comment_likeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment_like
     */
    select?: Prisma.Comment_likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment_like
     */
    omit?: Prisma.Comment_likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Comment_likeInclude<ExtArgs> | null;
    /**
     * Filter, which Comment_like to fetch.
     */
    where?: Prisma.Comment_likeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comment_likes to fetch.
     */
    orderBy?: Prisma.Comment_likeOrderByWithRelationInput | Prisma.Comment_likeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Comment_likes.
     */
    cursor?: Prisma.Comment_likeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comment_likes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comment_likes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Comment_likes.
     */
    distinct?: Prisma.Comment_likeScalarFieldEnum | Prisma.Comment_likeScalarFieldEnum[];
};
/**
 * Comment_like findMany
 */
export type Comment_likeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment_like
     */
    select?: Prisma.Comment_likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment_like
     */
    omit?: Prisma.Comment_likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Comment_likeInclude<ExtArgs> | null;
    /**
     * Filter, which Comment_likes to fetch.
     */
    where?: Prisma.Comment_likeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comment_likes to fetch.
     */
    orderBy?: Prisma.Comment_likeOrderByWithRelationInput | Prisma.Comment_likeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Comment_likes.
     */
    cursor?: Prisma.Comment_likeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comment_likes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comment_likes.
     */
    skip?: number;
    distinct?: Prisma.Comment_likeScalarFieldEnum | Prisma.Comment_likeScalarFieldEnum[];
};
/**
 * Comment_like create
 */
export type Comment_likeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment_like
     */
    select?: Prisma.Comment_likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment_like
     */
    omit?: Prisma.Comment_likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Comment_likeInclude<ExtArgs> | null;
    /**
     * The data needed to create a Comment_like.
     */
    data: Prisma.XOR<Prisma.Comment_likeCreateInput, Prisma.Comment_likeUncheckedCreateInput>;
};
/**
 * Comment_like createMany
 */
export type Comment_likeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comment_likes.
     */
    data: Prisma.Comment_likeCreateManyInput | Prisma.Comment_likeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Comment_like createManyAndReturn
 */
export type Comment_likeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment_like
     */
    select?: Prisma.Comment_likeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment_like
     */
    omit?: Prisma.Comment_likeOmit<ExtArgs> | null;
    /**
     * The data used to create many Comment_likes.
     */
    data: Prisma.Comment_likeCreateManyInput | Prisma.Comment_likeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Comment_likeIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Comment_like update
 */
export type Comment_likeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment_like
     */
    select?: Prisma.Comment_likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment_like
     */
    omit?: Prisma.Comment_likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Comment_likeInclude<ExtArgs> | null;
    /**
     * The data needed to update a Comment_like.
     */
    data: Prisma.XOR<Prisma.Comment_likeUpdateInput, Prisma.Comment_likeUncheckedUpdateInput>;
    /**
     * Choose, which Comment_like to update.
     */
    where: Prisma.Comment_likeWhereUniqueInput;
};
/**
 * Comment_like updateMany
 */
export type Comment_likeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Comment_likes.
     */
    data: Prisma.XOR<Prisma.Comment_likeUpdateManyMutationInput, Prisma.Comment_likeUncheckedUpdateManyInput>;
    /**
     * Filter which Comment_likes to update
     */
    where?: Prisma.Comment_likeWhereInput;
    /**
     * Limit how many Comment_likes to update.
     */
    limit?: number;
};
/**
 * Comment_like updateManyAndReturn
 */
export type Comment_likeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment_like
     */
    select?: Prisma.Comment_likeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment_like
     */
    omit?: Prisma.Comment_likeOmit<ExtArgs> | null;
    /**
     * The data used to update Comment_likes.
     */
    data: Prisma.XOR<Prisma.Comment_likeUpdateManyMutationInput, Prisma.Comment_likeUncheckedUpdateManyInput>;
    /**
     * Filter which Comment_likes to update
     */
    where?: Prisma.Comment_likeWhereInput;
    /**
     * Limit how many Comment_likes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Comment_likeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Comment_like upsert
 */
export type Comment_likeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment_like
     */
    select?: Prisma.Comment_likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment_like
     */
    omit?: Prisma.Comment_likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Comment_likeInclude<ExtArgs> | null;
    /**
     * The filter to search for the Comment_like to update in case it exists.
     */
    where: Prisma.Comment_likeWhereUniqueInput;
    /**
     * In case the Comment_like found by the `where` argument doesn't exist, create a new Comment_like with this data.
     */
    create: Prisma.XOR<Prisma.Comment_likeCreateInput, Prisma.Comment_likeUncheckedCreateInput>;
    /**
     * In case the Comment_like was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Comment_likeUpdateInput, Prisma.Comment_likeUncheckedUpdateInput>;
};
/**
 * Comment_like delete
 */
export type Comment_likeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment_like
     */
    select?: Prisma.Comment_likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment_like
     */
    omit?: Prisma.Comment_likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Comment_likeInclude<ExtArgs> | null;
    /**
     * Filter which Comment_like to delete.
     */
    where: Prisma.Comment_likeWhereUniqueInput;
};
/**
 * Comment_like deleteMany
 */
export type Comment_likeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Comment_likes to delete
     */
    where?: Prisma.Comment_likeWhereInput;
    /**
     * Limit how many Comment_likes to delete.
     */
    limit?: number;
};
/**
 * Comment_like without action
 */
export type Comment_likeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment_like
     */
    select?: Prisma.Comment_likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment_like
     */
    omit?: Prisma.Comment_likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Comment_likeInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Comment_like.d.ts.map