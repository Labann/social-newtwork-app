import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Post_like
 *
 */
export type Post_likeModel = runtime.Types.Result.DefaultSelection<Prisma.$Post_likePayload>;
export type AggregatePost_like = {
    _count: Post_likeCountAggregateOutputType | null;
    _min: Post_likeMinAggregateOutputType | null;
    _max: Post_likeMaxAggregateOutputType | null;
};
export type Post_likeMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    post_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Post_likeMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    post_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Post_likeCountAggregateOutputType = {
    id: number;
    user_id: number;
    post_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Post_likeMinAggregateInputType = {
    id?: true;
    user_id?: true;
    post_id?: true;
    created_at?: true;
    updated_at?: true;
};
export type Post_likeMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    post_id?: true;
    created_at?: true;
    updated_at?: true;
};
export type Post_likeCountAggregateInputType = {
    id?: true;
    user_id?: true;
    post_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Post_likeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Post_like to aggregate.
     */
    where?: Prisma.Post_likeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Post_likes to fetch.
     */
    orderBy?: Prisma.Post_likeOrderByWithRelationInput | Prisma.Post_likeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Post_likeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Post_likes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Post_likes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Post_likes
    **/
    _count?: true | Post_likeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Post_likeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Post_likeMaxAggregateInputType;
};
export type GetPost_likeAggregateType<T extends Post_likeAggregateArgs> = {
    [P in keyof T & keyof AggregatePost_like]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePost_like[P]> : Prisma.GetScalarType<T[P], AggregatePost_like[P]>;
};
export type Post_likeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Post_likeWhereInput;
    orderBy?: Prisma.Post_likeOrderByWithAggregationInput | Prisma.Post_likeOrderByWithAggregationInput[];
    by: Prisma.Post_likeScalarFieldEnum[] | Prisma.Post_likeScalarFieldEnum;
    having?: Prisma.Post_likeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Post_likeCountAggregateInputType | true;
    _min?: Post_likeMinAggregateInputType;
    _max?: Post_likeMaxAggregateInputType;
};
export type Post_likeGroupByOutputType = {
    id: string;
    user_id: string;
    post_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Post_likeCountAggregateOutputType | null;
    _min: Post_likeMinAggregateOutputType | null;
    _max: Post_likeMaxAggregateOutputType | null;
};
type GetPost_likeGroupByPayload<T extends Post_likeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Post_likeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Post_likeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Post_likeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Post_likeGroupByOutputType[P]>;
}>>;
export type Post_likeWhereInput = {
    AND?: Prisma.Post_likeWhereInput | Prisma.Post_likeWhereInput[];
    OR?: Prisma.Post_likeWhereInput[];
    NOT?: Prisma.Post_likeWhereInput | Prisma.Post_likeWhereInput[];
    id?: Prisma.StringFilter<"Post_like"> | string;
    user_id?: Prisma.StringFilter<"Post_like"> | string;
    post_id?: Prisma.StringFilter<"Post_like"> | string;
    created_at?: Prisma.DateTimeFilter<"Post_like"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Post_like"> | Date | string;
    the_liker?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    the_post_liked?: Prisma.XOR<Prisma.PostScalarRelationFilter, Prisma.PostWhereInput>;
};
export type Post_likeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    post_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    the_liker?: Prisma.UserOrderByWithRelationInput;
    the_post_liked?: Prisma.PostOrderByWithRelationInput;
};
export type Post_likeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    user_id_post_id?: Prisma.Post_likeUser_idPost_idCompoundUniqueInput;
    AND?: Prisma.Post_likeWhereInput | Prisma.Post_likeWhereInput[];
    OR?: Prisma.Post_likeWhereInput[];
    NOT?: Prisma.Post_likeWhereInput | Prisma.Post_likeWhereInput[];
    user_id?: Prisma.StringFilter<"Post_like"> | string;
    post_id?: Prisma.StringFilter<"Post_like"> | string;
    created_at?: Prisma.DateTimeFilter<"Post_like"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Post_like"> | Date | string;
    the_liker?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    the_post_liked?: Prisma.XOR<Prisma.PostScalarRelationFilter, Prisma.PostWhereInput>;
}, "id" | "user_id_post_id">;
export type Post_likeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    post_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.Post_likeCountOrderByAggregateInput;
    _max?: Prisma.Post_likeMaxOrderByAggregateInput;
    _min?: Prisma.Post_likeMinOrderByAggregateInput;
};
export type Post_likeScalarWhereWithAggregatesInput = {
    AND?: Prisma.Post_likeScalarWhereWithAggregatesInput | Prisma.Post_likeScalarWhereWithAggregatesInput[];
    OR?: Prisma.Post_likeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Post_likeScalarWhereWithAggregatesInput | Prisma.Post_likeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Post_like"> | string;
    user_id?: Prisma.StringWithAggregatesFilter<"Post_like"> | string;
    post_id?: Prisma.StringWithAggregatesFilter<"Post_like"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Post_like"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Post_like"> | Date | string;
};
export type Post_likeCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    the_liker: Prisma.UserCreateNestedOneWithoutPost_likesInput;
    the_post_liked: Prisma.PostCreateNestedOneWithoutLikesInput;
};
export type Post_likeUncheckedCreateInput = {
    id?: string;
    user_id: string;
    post_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type Post_likeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    the_liker?: Prisma.UserUpdateOneRequiredWithoutPost_likesNestedInput;
    the_post_liked?: Prisma.PostUpdateOneRequiredWithoutLikesNestedInput;
};
export type Post_likeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    post_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Post_likeCreateManyInput = {
    id?: string;
    user_id: string;
    post_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type Post_likeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Post_likeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    post_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Post_likeListRelationFilter = {
    every?: Prisma.Post_likeWhereInput;
    some?: Prisma.Post_likeWhereInput;
    none?: Prisma.Post_likeWhereInput;
};
export type Post_likeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Post_likeUser_idPost_idCompoundUniqueInput = {
    user_id: string;
    post_id: string;
};
export type Post_likeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    post_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type Post_likeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    post_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type Post_likeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    post_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type Post_likeCreateNestedManyWithoutThe_likerInput = {
    create?: Prisma.XOR<Prisma.Post_likeCreateWithoutThe_likerInput, Prisma.Post_likeUncheckedCreateWithoutThe_likerInput> | Prisma.Post_likeCreateWithoutThe_likerInput[] | Prisma.Post_likeUncheckedCreateWithoutThe_likerInput[];
    connectOrCreate?: Prisma.Post_likeCreateOrConnectWithoutThe_likerInput | Prisma.Post_likeCreateOrConnectWithoutThe_likerInput[];
    createMany?: Prisma.Post_likeCreateManyThe_likerInputEnvelope;
    connect?: Prisma.Post_likeWhereUniqueInput | Prisma.Post_likeWhereUniqueInput[];
};
export type Post_likeUncheckedCreateNestedManyWithoutThe_likerInput = {
    create?: Prisma.XOR<Prisma.Post_likeCreateWithoutThe_likerInput, Prisma.Post_likeUncheckedCreateWithoutThe_likerInput> | Prisma.Post_likeCreateWithoutThe_likerInput[] | Prisma.Post_likeUncheckedCreateWithoutThe_likerInput[];
    connectOrCreate?: Prisma.Post_likeCreateOrConnectWithoutThe_likerInput | Prisma.Post_likeCreateOrConnectWithoutThe_likerInput[];
    createMany?: Prisma.Post_likeCreateManyThe_likerInputEnvelope;
    connect?: Prisma.Post_likeWhereUniqueInput | Prisma.Post_likeWhereUniqueInput[];
};
export type Post_likeUpdateManyWithoutThe_likerNestedInput = {
    create?: Prisma.XOR<Prisma.Post_likeCreateWithoutThe_likerInput, Prisma.Post_likeUncheckedCreateWithoutThe_likerInput> | Prisma.Post_likeCreateWithoutThe_likerInput[] | Prisma.Post_likeUncheckedCreateWithoutThe_likerInput[];
    connectOrCreate?: Prisma.Post_likeCreateOrConnectWithoutThe_likerInput | Prisma.Post_likeCreateOrConnectWithoutThe_likerInput[];
    upsert?: Prisma.Post_likeUpsertWithWhereUniqueWithoutThe_likerInput | Prisma.Post_likeUpsertWithWhereUniqueWithoutThe_likerInput[];
    createMany?: Prisma.Post_likeCreateManyThe_likerInputEnvelope;
    set?: Prisma.Post_likeWhereUniqueInput | Prisma.Post_likeWhereUniqueInput[];
    disconnect?: Prisma.Post_likeWhereUniqueInput | Prisma.Post_likeWhereUniqueInput[];
    delete?: Prisma.Post_likeWhereUniqueInput | Prisma.Post_likeWhereUniqueInput[];
    connect?: Prisma.Post_likeWhereUniqueInput | Prisma.Post_likeWhereUniqueInput[];
    update?: Prisma.Post_likeUpdateWithWhereUniqueWithoutThe_likerInput | Prisma.Post_likeUpdateWithWhereUniqueWithoutThe_likerInput[];
    updateMany?: Prisma.Post_likeUpdateManyWithWhereWithoutThe_likerInput | Prisma.Post_likeUpdateManyWithWhereWithoutThe_likerInput[];
    deleteMany?: Prisma.Post_likeScalarWhereInput | Prisma.Post_likeScalarWhereInput[];
};
export type Post_likeUncheckedUpdateManyWithoutThe_likerNestedInput = {
    create?: Prisma.XOR<Prisma.Post_likeCreateWithoutThe_likerInput, Prisma.Post_likeUncheckedCreateWithoutThe_likerInput> | Prisma.Post_likeCreateWithoutThe_likerInput[] | Prisma.Post_likeUncheckedCreateWithoutThe_likerInput[];
    connectOrCreate?: Prisma.Post_likeCreateOrConnectWithoutThe_likerInput | Prisma.Post_likeCreateOrConnectWithoutThe_likerInput[];
    upsert?: Prisma.Post_likeUpsertWithWhereUniqueWithoutThe_likerInput | Prisma.Post_likeUpsertWithWhereUniqueWithoutThe_likerInput[];
    createMany?: Prisma.Post_likeCreateManyThe_likerInputEnvelope;
    set?: Prisma.Post_likeWhereUniqueInput | Prisma.Post_likeWhereUniqueInput[];
    disconnect?: Prisma.Post_likeWhereUniqueInput | Prisma.Post_likeWhereUniqueInput[];
    delete?: Prisma.Post_likeWhereUniqueInput | Prisma.Post_likeWhereUniqueInput[];
    connect?: Prisma.Post_likeWhereUniqueInput | Prisma.Post_likeWhereUniqueInput[];
    update?: Prisma.Post_likeUpdateWithWhereUniqueWithoutThe_likerInput | Prisma.Post_likeUpdateWithWhereUniqueWithoutThe_likerInput[];
    updateMany?: Prisma.Post_likeUpdateManyWithWhereWithoutThe_likerInput | Prisma.Post_likeUpdateManyWithWhereWithoutThe_likerInput[];
    deleteMany?: Prisma.Post_likeScalarWhereInput | Prisma.Post_likeScalarWhereInput[];
};
export type Post_likeCreateNestedManyWithoutThe_post_likedInput = {
    create?: Prisma.XOR<Prisma.Post_likeCreateWithoutThe_post_likedInput, Prisma.Post_likeUncheckedCreateWithoutThe_post_likedInput> | Prisma.Post_likeCreateWithoutThe_post_likedInput[] | Prisma.Post_likeUncheckedCreateWithoutThe_post_likedInput[];
    connectOrCreate?: Prisma.Post_likeCreateOrConnectWithoutThe_post_likedInput | Prisma.Post_likeCreateOrConnectWithoutThe_post_likedInput[];
    createMany?: Prisma.Post_likeCreateManyThe_post_likedInputEnvelope;
    connect?: Prisma.Post_likeWhereUniqueInput | Prisma.Post_likeWhereUniqueInput[];
};
export type Post_likeUncheckedCreateNestedManyWithoutThe_post_likedInput = {
    create?: Prisma.XOR<Prisma.Post_likeCreateWithoutThe_post_likedInput, Prisma.Post_likeUncheckedCreateWithoutThe_post_likedInput> | Prisma.Post_likeCreateWithoutThe_post_likedInput[] | Prisma.Post_likeUncheckedCreateWithoutThe_post_likedInput[];
    connectOrCreate?: Prisma.Post_likeCreateOrConnectWithoutThe_post_likedInput | Prisma.Post_likeCreateOrConnectWithoutThe_post_likedInput[];
    createMany?: Prisma.Post_likeCreateManyThe_post_likedInputEnvelope;
    connect?: Prisma.Post_likeWhereUniqueInput | Prisma.Post_likeWhereUniqueInput[];
};
export type Post_likeUpdateManyWithoutThe_post_likedNestedInput = {
    create?: Prisma.XOR<Prisma.Post_likeCreateWithoutThe_post_likedInput, Prisma.Post_likeUncheckedCreateWithoutThe_post_likedInput> | Prisma.Post_likeCreateWithoutThe_post_likedInput[] | Prisma.Post_likeUncheckedCreateWithoutThe_post_likedInput[];
    connectOrCreate?: Prisma.Post_likeCreateOrConnectWithoutThe_post_likedInput | Prisma.Post_likeCreateOrConnectWithoutThe_post_likedInput[];
    upsert?: Prisma.Post_likeUpsertWithWhereUniqueWithoutThe_post_likedInput | Prisma.Post_likeUpsertWithWhereUniqueWithoutThe_post_likedInput[];
    createMany?: Prisma.Post_likeCreateManyThe_post_likedInputEnvelope;
    set?: Prisma.Post_likeWhereUniqueInput | Prisma.Post_likeWhereUniqueInput[];
    disconnect?: Prisma.Post_likeWhereUniqueInput | Prisma.Post_likeWhereUniqueInput[];
    delete?: Prisma.Post_likeWhereUniqueInput | Prisma.Post_likeWhereUniqueInput[];
    connect?: Prisma.Post_likeWhereUniqueInput | Prisma.Post_likeWhereUniqueInput[];
    update?: Prisma.Post_likeUpdateWithWhereUniqueWithoutThe_post_likedInput | Prisma.Post_likeUpdateWithWhereUniqueWithoutThe_post_likedInput[];
    updateMany?: Prisma.Post_likeUpdateManyWithWhereWithoutThe_post_likedInput | Prisma.Post_likeUpdateManyWithWhereWithoutThe_post_likedInput[];
    deleteMany?: Prisma.Post_likeScalarWhereInput | Prisma.Post_likeScalarWhereInput[];
};
export type Post_likeUncheckedUpdateManyWithoutThe_post_likedNestedInput = {
    create?: Prisma.XOR<Prisma.Post_likeCreateWithoutThe_post_likedInput, Prisma.Post_likeUncheckedCreateWithoutThe_post_likedInput> | Prisma.Post_likeCreateWithoutThe_post_likedInput[] | Prisma.Post_likeUncheckedCreateWithoutThe_post_likedInput[];
    connectOrCreate?: Prisma.Post_likeCreateOrConnectWithoutThe_post_likedInput | Prisma.Post_likeCreateOrConnectWithoutThe_post_likedInput[];
    upsert?: Prisma.Post_likeUpsertWithWhereUniqueWithoutThe_post_likedInput | Prisma.Post_likeUpsertWithWhereUniqueWithoutThe_post_likedInput[];
    createMany?: Prisma.Post_likeCreateManyThe_post_likedInputEnvelope;
    set?: Prisma.Post_likeWhereUniqueInput | Prisma.Post_likeWhereUniqueInput[];
    disconnect?: Prisma.Post_likeWhereUniqueInput | Prisma.Post_likeWhereUniqueInput[];
    delete?: Prisma.Post_likeWhereUniqueInput | Prisma.Post_likeWhereUniqueInput[];
    connect?: Prisma.Post_likeWhereUniqueInput | Prisma.Post_likeWhereUniqueInput[];
    update?: Prisma.Post_likeUpdateWithWhereUniqueWithoutThe_post_likedInput | Prisma.Post_likeUpdateWithWhereUniqueWithoutThe_post_likedInput[];
    updateMany?: Prisma.Post_likeUpdateManyWithWhereWithoutThe_post_likedInput | Prisma.Post_likeUpdateManyWithWhereWithoutThe_post_likedInput[];
    deleteMany?: Prisma.Post_likeScalarWhereInput | Prisma.Post_likeScalarWhereInput[];
};
export type Post_likeCreateWithoutThe_likerInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    the_post_liked: Prisma.PostCreateNestedOneWithoutLikesInput;
};
export type Post_likeUncheckedCreateWithoutThe_likerInput = {
    id?: string;
    post_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type Post_likeCreateOrConnectWithoutThe_likerInput = {
    where: Prisma.Post_likeWhereUniqueInput;
    create: Prisma.XOR<Prisma.Post_likeCreateWithoutThe_likerInput, Prisma.Post_likeUncheckedCreateWithoutThe_likerInput>;
};
export type Post_likeCreateManyThe_likerInputEnvelope = {
    data: Prisma.Post_likeCreateManyThe_likerInput | Prisma.Post_likeCreateManyThe_likerInput[];
    skipDuplicates?: boolean;
};
export type Post_likeUpsertWithWhereUniqueWithoutThe_likerInput = {
    where: Prisma.Post_likeWhereUniqueInput;
    update: Prisma.XOR<Prisma.Post_likeUpdateWithoutThe_likerInput, Prisma.Post_likeUncheckedUpdateWithoutThe_likerInput>;
    create: Prisma.XOR<Prisma.Post_likeCreateWithoutThe_likerInput, Prisma.Post_likeUncheckedCreateWithoutThe_likerInput>;
};
export type Post_likeUpdateWithWhereUniqueWithoutThe_likerInput = {
    where: Prisma.Post_likeWhereUniqueInput;
    data: Prisma.XOR<Prisma.Post_likeUpdateWithoutThe_likerInput, Prisma.Post_likeUncheckedUpdateWithoutThe_likerInput>;
};
export type Post_likeUpdateManyWithWhereWithoutThe_likerInput = {
    where: Prisma.Post_likeScalarWhereInput;
    data: Prisma.XOR<Prisma.Post_likeUpdateManyMutationInput, Prisma.Post_likeUncheckedUpdateManyWithoutThe_likerInput>;
};
export type Post_likeScalarWhereInput = {
    AND?: Prisma.Post_likeScalarWhereInput | Prisma.Post_likeScalarWhereInput[];
    OR?: Prisma.Post_likeScalarWhereInput[];
    NOT?: Prisma.Post_likeScalarWhereInput | Prisma.Post_likeScalarWhereInput[];
    id?: Prisma.StringFilter<"Post_like"> | string;
    user_id?: Prisma.StringFilter<"Post_like"> | string;
    post_id?: Prisma.StringFilter<"Post_like"> | string;
    created_at?: Prisma.DateTimeFilter<"Post_like"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Post_like"> | Date | string;
};
export type Post_likeCreateWithoutThe_post_likedInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    the_liker: Prisma.UserCreateNestedOneWithoutPost_likesInput;
};
export type Post_likeUncheckedCreateWithoutThe_post_likedInput = {
    id?: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type Post_likeCreateOrConnectWithoutThe_post_likedInput = {
    where: Prisma.Post_likeWhereUniqueInput;
    create: Prisma.XOR<Prisma.Post_likeCreateWithoutThe_post_likedInput, Prisma.Post_likeUncheckedCreateWithoutThe_post_likedInput>;
};
export type Post_likeCreateManyThe_post_likedInputEnvelope = {
    data: Prisma.Post_likeCreateManyThe_post_likedInput | Prisma.Post_likeCreateManyThe_post_likedInput[];
    skipDuplicates?: boolean;
};
export type Post_likeUpsertWithWhereUniqueWithoutThe_post_likedInput = {
    where: Prisma.Post_likeWhereUniqueInput;
    update: Prisma.XOR<Prisma.Post_likeUpdateWithoutThe_post_likedInput, Prisma.Post_likeUncheckedUpdateWithoutThe_post_likedInput>;
    create: Prisma.XOR<Prisma.Post_likeCreateWithoutThe_post_likedInput, Prisma.Post_likeUncheckedCreateWithoutThe_post_likedInput>;
};
export type Post_likeUpdateWithWhereUniqueWithoutThe_post_likedInput = {
    where: Prisma.Post_likeWhereUniqueInput;
    data: Prisma.XOR<Prisma.Post_likeUpdateWithoutThe_post_likedInput, Prisma.Post_likeUncheckedUpdateWithoutThe_post_likedInput>;
};
export type Post_likeUpdateManyWithWhereWithoutThe_post_likedInput = {
    where: Prisma.Post_likeScalarWhereInput;
    data: Prisma.XOR<Prisma.Post_likeUpdateManyMutationInput, Prisma.Post_likeUncheckedUpdateManyWithoutThe_post_likedInput>;
};
export type Post_likeCreateManyThe_likerInput = {
    id?: string;
    post_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type Post_likeUpdateWithoutThe_likerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    the_post_liked?: Prisma.PostUpdateOneRequiredWithoutLikesNestedInput;
};
export type Post_likeUncheckedUpdateWithoutThe_likerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    post_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Post_likeUncheckedUpdateManyWithoutThe_likerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    post_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Post_likeCreateManyThe_post_likedInput = {
    id?: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type Post_likeUpdateWithoutThe_post_likedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    the_liker?: Prisma.UserUpdateOneRequiredWithoutPost_likesNestedInput;
};
export type Post_likeUncheckedUpdateWithoutThe_post_likedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Post_likeUncheckedUpdateManyWithoutThe_post_likedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Post_likeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    post_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    the_liker?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    the_post_liked?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["post_like"]>;
export type Post_likeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    post_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    the_liker?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    the_post_liked?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["post_like"]>;
export type Post_likeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    post_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    the_liker?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    the_post_liked?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["post_like"]>;
export type Post_likeSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    post_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type Post_likeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "post_id" | "created_at" | "updated_at", ExtArgs["result"]["post_like"]>;
export type Post_likeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    the_liker?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    the_post_liked?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
};
export type Post_likeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    the_liker?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    the_post_liked?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
};
export type Post_likeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    the_liker?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    the_post_liked?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
};
export type $Post_likePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Post_like";
    objects: {
        the_liker: Prisma.$UserPayload<ExtArgs>;
        the_post_liked: Prisma.$PostPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        post_id: string;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["post_like"]>;
    composites: {};
};
export type Post_likeGetPayload<S extends boolean | null | undefined | Post_likeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Post_likePayload, S>;
export type Post_likeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Post_likeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Post_likeCountAggregateInputType | true;
};
export interface Post_likeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Post_like'];
        meta: {
            name: 'Post_like';
        };
    };
    /**
     * Find zero or one Post_like that matches the filter.
     * @param {Post_likeFindUniqueArgs} args - Arguments to find a Post_like
     * @example
     * // Get one Post_like
     * const post_like = await prisma.post_like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Post_likeFindUniqueArgs>(args: Prisma.SelectSubset<T, Post_likeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Post_likeClient<runtime.Types.Result.GetResult<Prisma.$Post_likePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Post_like that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Post_likeFindUniqueOrThrowArgs} args - Arguments to find a Post_like
     * @example
     * // Get one Post_like
     * const post_like = await prisma.post_like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Post_likeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Post_likeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Post_likeClient<runtime.Types.Result.GetResult<Prisma.$Post_likePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Post_like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post_likeFindFirstArgs} args - Arguments to find a Post_like
     * @example
     * // Get one Post_like
     * const post_like = await prisma.post_like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Post_likeFindFirstArgs>(args?: Prisma.SelectSubset<T, Post_likeFindFirstArgs<ExtArgs>>): Prisma.Prisma__Post_likeClient<runtime.Types.Result.GetResult<Prisma.$Post_likePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Post_like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post_likeFindFirstOrThrowArgs} args - Arguments to find a Post_like
     * @example
     * // Get one Post_like
     * const post_like = await prisma.post_like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Post_likeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Post_likeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Post_likeClient<runtime.Types.Result.GetResult<Prisma.$Post_likePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Post_likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post_likeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Post_likes
     * const post_likes = await prisma.post_like.findMany()
     *
     * // Get first 10 Post_likes
     * const post_likes = await prisma.post_like.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const post_likeWithIdOnly = await prisma.post_like.findMany({ select: { id: true } })
     *
     */
    findMany<T extends Post_likeFindManyArgs>(args?: Prisma.SelectSubset<T, Post_likeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Post_likePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Post_like.
     * @param {Post_likeCreateArgs} args - Arguments to create a Post_like.
     * @example
     * // Create one Post_like
     * const Post_like = await prisma.post_like.create({
     *   data: {
     *     // ... data to create a Post_like
     *   }
     * })
     *
     */
    create<T extends Post_likeCreateArgs>(args: Prisma.SelectSubset<T, Post_likeCreateArgs<ExtArgs>>): Prisma.Prisma__Post_likeClient<runtime.Types.Result.GetResult<Prisma.$Post_likePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Post_likes.
     * @param {Post_likeCreateManyArgs} args - Arguments to create many Post_likes.
     * @example
     * // Create many Post_likes
     * const post_like = await prisma.post_like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Post_likeCreateManyArgs>(args?: Prisma.SelectSubset<T, Post_likeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Post_likes and returns the data saved in the database.
     * @param {Post_likeCreateManyAndReturnArgs} args - Arguments to create many Post_likes.
     * @example
     * // Create many Post_likes
     * const post_like = await prisma.post_like.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Post_likes and only return the `id`
     * const post_likeWithIdOnly = await prisma.post_like.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Post_likeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Post_likeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Post_likePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Post_like.
     * @param {Post_likeDeleteArgs} args - Arguments to delete one Post_like.
     * @example
     * // Delete one Post_like
     * const Post_like = await prisma.post_like.delete({
     *   where: {
     *     // ... filter to delete one Post_like
     *   }
     * })
     *
     */
    delete<T extends Post_likeDeleteArgs>(args: Prisma.SelectSubset<T, Post_likeDeleteArgs<ExtArgs>>): Prisma.Prisma__Post_likeClient<runtime.Types.Result.GetResult<Prisma.$Post_likePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Post_like.
     * @param {Post_likeUpdateArgs} args - Arguments to update one Post_like.
     * @example
     * // Update one Post_like
     * const post_like = await prisma.post_like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Post_likeUpdateArgs>(args: Prisma.SelectSubset<T, Post_likeUpdateArgs<ExtArgs>>): Prisma.Prisma__Post_likeClient<runtime.Types.Result.GetResult<Prisma.$Post_likePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Post_likes.
     * @param {Post_likeDeleteManyArgs} args - Arguments to filter Post_likes to delete.
     * @example
     * // Delete a few Post_likes
     * const { count } = await prisma.post_like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Post_likeDeleteManyArgs>(args?: Prisma.SelectSubset<T, Post_likeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Post_likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post_likeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Post_likes
     * const post_like = await prisma.post_like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Post_likeUpdateManyArgs>(args: Prisma.SelectSubset<T, Post_likeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Post_likes and returns the data updated in the database.
     * @param {Post_likeUpdateManyAndReturnArgs} args - Arguments to update many Post_likes.
     * @example
     * // Update many Post_likes
     * const post_like = await prisma.post_like.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Post_likes and only return the `id`
     * const post_likeWithIdOnly = await prisma.post_like.updateManyAndReturn({
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
    updateManyAndReturn<T extends Post_likeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Post_likeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Post_likePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Post_like.
     * @param {Post_likeUpsertArgs} args - Arguments to update or create a Post_like.
     * @example
     * // Update or create a Post_like
     * const post_like = await prisma.post_like.upsert({
     *   create: {
     *     // ... data to create a Post_like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post_like we want to update
     *   }
     * })
     */
    upsert<T extends Post_likeUpsertArgs>(args: Prisma.SelectSubset<T, Post_likeUpsertArgs<ExtArgs>>): Prisma.Prisma__Post_likeClient<runtime.Types.Result.GetResult<Prisma.$Post_likePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Post_likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post_likeCountArgs} args - Arguments to filter Post_likes to count.
     * @example
     * // Count the number of Post_likes
     * const count = await prisma.post_like.count({
     *   where: {
     *     // ... the filter for the Post_likes we want to count
     *   }
     * })
    **/
    count<T extends Post_likeCountArgs>(args?: Prisma.Subset<T, Post_likeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Post_likeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Post_like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post_likeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Post_likeAggregateArgs>(args: Prisma.Subset<T, Post_likeAggregateArgs>): Prisma.PrismaPromise<GetPost_likeAggregateType<T>>;
    /**
     * Group by Post_like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post_likeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends Post_likeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Post_likeGroupByArgs['orderBy'];
    } : {
        orderBy?: Post_likeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Post_likeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPost_likeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Post_like model
     */
    readonly fields: Post_likeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Post_like.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Post_likeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    the_liker<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    the_post_liked<T extends Prisma.PostDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PostDefaultArgs<ExtArgs>>): Prisma.Prisma__PostClient<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Post_like model
 */
export interface Post_likeFieldRefs {
    readonly id: Prisma.FieldRef<"Post_like", 'String'>;
    readonly user_id: Prisma.FieldRef<"Post_like", 'String'>;
    readonly post_id: Prisma.FieldRef<"Post_like", 'String'>;
    readonly created_at: Prisma.FieldRef<"Post_like", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Post_like", 'DateTime'>;
}
/**
 * Post_like findUnique
 */
export type Post_likeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post_like
     */
    select?: Prisma.Post_likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post_like
     */
    omit?: Prisma.Post_likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Post_likeInclude<ExtArgs> | null;
    /**
     * Filter, which Post_like to fetch.
     */
    where: Prisma.Post_likeWhereUniqueInput;
};
/**
 * Post_like findUniqueOrThrow
 */
export type Post_likeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post_like
     */
    select?: Prisma.Post_likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post_like
     */
    omit?: Prisma.Post_likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Post_likeInclude<ExtArgs> | null;
    /**
     * Filter, which Post_like to fetch.
     */
    where: Prisma.Post_likeWhereUniqueInput;
};
/**
 * Post_like findFirst
 */
export type Post_likeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post_like
     */
    select?: Prisma.Post_likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post_like
     */
    omit?: Prisma.Post_likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Post_likeInclude<ExtArgs> | null;
    /**
     * Filter, which Post_like to fetch.
     */
    where?: Prisma.Post_likeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Post_likes to fetch.
     */
    orderBy?: Prisma.Post_likeOrderByWithRelationInput | Prisma.Post_likeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Post_likes.
     */
    cursor?: Prisma.Post_likeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Post_likes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Post_likes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Post_likes.
     */
    distinct?: Prisma.Post_likeScalarFieldEnum | Prisma.Post_likeScalarFieldEnum[];
};
/**
 * Post_like findFirstOrThrow
 */
export type Post_likeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post_like
     */
    select?: Prisma.Post_likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post_like
     */
    omit?: Prisma.Post_likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Post_likeInclude<ExtArgs> | null;
    /**
     * Filter, which Post_like to fetch.
     */
    where?: Prisma.Post_likeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Post_likes to fetch.
     */
    orderBy?: Prisma.Post_likeOrderByWithRelationInput | Prisma.Post_likeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Post_likes.
     */
    cursor?: Prisma.Post_likeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Post_likes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Post_likes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Post_likes.
     */
    distinct?: Prisma.Post_likeScalarFieldEnum | Prisma.Post_likeScalarFieldEnum[];
};
/**
 * Post_like findMany
 */
export type Post_likeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post_like
     */
    select?: Prisma.Post_likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post_like
     */
    omit?: Prisma.Post_likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Post_likeInclude<ExtArgs> | null;
    /**
     * Filter, which Post_likes to fetch.
     */
    where?: Prisma.Post_likeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Post_likes to fetch.
     */
    orderBy?: Prisma.Post_likeOrderByWithRelationInput | Prisma.Post_likeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Post_likes.
     */
    cursor?: Prisma.Post_likeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Post_likes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Post_likes.
     */
    skip?: number;
    distinct?: Prisma.Post_likeScalarFieldEnum | Prisma.Post_likeScalarFieldEnum[];
};
/**
 * Post_like create
 */
export type Post_likeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post_like
     */
    select?: Prisma.Post_likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post_like
     */
    omit?: Prisma.Post_likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Post_likeInclude<ExtArgs> | null;
    /**
     * The data needed to create a Post_like.
     */
    data: Prisma.XOR<Prisma.Post_likeCreateInput, Prisma.Post_likeUncheckedCreateInput>;
};
/**
 * Post_like createMany
 */
export type Post_likeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Post_likes.
     */
    data: Prisma.Post_likeCreateManyInput | Prisma.Post_likeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Post_like createManyAndReturn
 */
export type Post_likeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post_like
     */
    select?: Prisma.Post_likeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Post_like
     */
    omit?: Prisma.Post_likeOmit<ExtArgs> | null;
    /**
     * The data used to create many Post_likes.
     */
    data: Prisma.Post_likeCreateManyInput | Prisma.Post_likeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Post_likeIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Post_like update
 */
export type Post_likeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post_like
     */
    select?: Prisma.Post_likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post_like
     */
    omit?: Prisma.Post_likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Post_likeInclude<ExtArgs> | null;
    /**
     * The data needed to update a Post_like.
     */
    data: Prisma.XOR<Prisma.Post_likeUpdateInput, Prisma.Post_likeUncheckedUpdateInput>;
    /**
     * Choose, which Post_like to update.
     */
    where: Prisma.Post_likeWhereUniqueInput;
};
/**
 * Post_like updateMany
 */
export type Post_likeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Post_likes.
     */
    data: Prisma.XOR<Prisma.Post_likeUpdateManyMutationInput, Prisma.Post_likeUncheckedUpdateManyInput>;
    /**
     * Filter which Post_likes to update
     */
    where?: Prisma.Post_likeWhereInput;
    /**
     * Limit how many Post_likes to update.
     */
    limit?: number;
};
/**
 * Post_like updateManyAndReturn
 */
export type Post_likeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post_like
     */
    select?: Prisma.Post_likeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Post_like
     */
    omit?: Prisma.Post_likeOmit<ExtArgs> | null;
    /**
     * The data used to update Post_likes.
     */
    data: Prisma.XOR<Prisma.Post_likeUpdateManyMutationInput, Prisma.Post_likeUncheckedUpdateManyInput>;
    /**
     * Filter which Post_likes to update
     */
    where?: Prisma.Post_likeWhereInput;
    /**
     * Limit how many Post_likes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Post_likeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Post_like upsert
 */
export type Post_likeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post_like
     */
    select?: Prisma.Post_likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post_like
     */
    omit?: Prisma.Post_likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Post_likeInclude<ExtArgs> | null;
    /**
     * The filter to search for the Post_like to update in case it exists.
     */
    where: Prisma.Post_likeWhereUniqueInput;
    /**
     * In case the Post_like found by the `where` argument doesn't exist, create a new Post_like with this data.
     */
    create: Prisma.XOR<Prisma.Post_likeCreateInput, Prisma.Post_likeUncheckedCreateInput>;
    /**
     * In case the Post_like was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Post_likeUpdateInput, Prisma.Post_likeUncheckedUpdateInput>;
};
/**
 * Post_like delete
 */
export type Post_likeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post_like
     */
    select?: Prisma.Post_likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post_like
     */
    omit?: Prisma.Post_likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Post_likeInclude<ExtArgs> | null;
    /**
     * Filter which Post_like to delete.
     */
    where: Prisma.Post_likeWhereUniqueInput;
};
/**
 * Post_like deleteMany
 */
export type Post_likeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Post_likes to delete
     */
    where?: Prisma.Post_likeWhereInput;
    /**
     * Limit how many Post_likes to delete.
     */
    limit?: number;
};
/**
 * Post_like without action
 */
export type Post_likeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post_like
     */
    select?: Prisma.Post_likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post_like
     */
    omit?: Prisma.Post_likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Post_likeInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Post_like.d.ts.map