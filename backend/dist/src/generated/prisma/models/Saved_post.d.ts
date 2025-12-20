import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Saved_post
 *
 */
export type Saved_postModel = runtime.Types.Result.DefaultSelection<Prisma.$Saved_postPayload>;
export type AggregateSaved_post = {
    _count: Saved_postCountAggregateOutputType | null;
    _min: Saved_postMinAggregateOutputType | null;
    _max: Saved_postMaxAggregateOutputType | null;
};
export type Saved_postMinAggregateOutputType = {
    id: string | null;
    post_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Saved_postMaxAggregateOutputType = {
    id: string | null;
    post_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Saved_postCountAggregateOutputType = {
    id: number;
    post_id: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Saved_postMinAggregateInputType = {
    id?: true;
    post_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
};
export type Saved_postMaxAggregateInputType = {
    id?: true;
    post_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
};
export type Saved_postCountAggregateInputType = {
    id?: true;
    post_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Saved_postAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Saved_post to aggregate.
     */
    where?: Prisma.Saved_postWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Saved_posts to fetch.
     */
    orderBy?: Prisma.Saved_postOrderByWithRelationInput | Prisma.Saved_postOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Saved_postWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Saved_posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Saved_posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Saved_posts
    **/
    _count?: true | Saved_postCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Saved_postMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Saved_postMaxAggregateInputType;
};
export type GetSaved_postAggregateType<T extends Saved_postAggregateArgs> = {
    [P in keyof T & keyof AggregateSaved_post]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSaved_post[P]> : Prisma.GetScalarType<T[P], AggregateSaved_post[P]>;
};
export type Saved_postGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Saved_postWhereInput;
    orderBy?: Prisma.Saved_postOrderByWithAggregationInput | Prisma.Saved_postOrderByWithAggregationInput[];
    by: Prisma.Saved_postScalarFieldEnum[] | Prisma.Saved_postScalarFieldEnum;
    having?: Prisma.Saved_postScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Saved_postCountAggregateInputType | true;
    _min?: Saved_postMinAggregateInputType;
    _max?: Saved_postMaxAggregateInputType;
};
export type Saved_postGroupByOutputType = {
    id: string;
    post_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Saved_postCountAggregateOutputType | null;
    _min: Saved_postMinAggregateOutputType | null;
    _max: Saved_postMaxAggregateOutputType | null;
};
type GetSaved_postGroupByPayload<T extends Saved_postGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Saved_postGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Saved_postGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Saved_postGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Saved_postGroupByOutputType[P]>;
}>>;
export type Saved_postWhereInput = {
    AND?: Prisma.Saved_postWhereInput | Prisma.Saved_postWhereInput[];
    OR?: Prisma.Saved_postWhereInput[];
    NOT?: Prisma.Saved_postWhereInput | Prisma.Saved_postWhereInput[];
    id?: Prisma.StringFilter<"Saved_post"> | string;
    post_id?: Prisma.StringFilter<"Saved_post"> | string;
    user_id?: Prisma.StringFilter<"Saved_post"> | string;
    created_at?: Prisma.DateTimeFilter<"Saved_post"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Saved_post"> | Date | string;
    post?: Prisma.XOR<Prisma.PostScalarRelationFilter, Prisma.PostWhereInput>;
    the_saver?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type Saved_postOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    post_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    post?: Prisma.PostOrderByWithRelationInput;
    the_saver?: Prisma.UserOrderByWithRelationInput;
};
export type Saved_postWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    post_id_user_id?: Prisma.Saved_postPost_idUser_idCompoundUniqueInput;
    AND?: Prisma.Saved_postWhereInput | Prisma.Saved_postWhereInput[];
    OR?: Prisma.Saved_postWhereInput[];
    NOT?: Prisma.Saved_postWhereInput | Prisma.Saved_postWhereInput[];
    post_id?: Prisma.StringFilter<"Saved_post"> | string;
    user_id?: Prisma.StringFilter<"Saved_post"> | string;
    created_at?: Prisma.DateTimeFilter<"Saved_post"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Saved_post"> | Date | string;
    post?: Prisma.XOR<Prisma.PostScalarRelationFilter, Prisma.PostWhereInput>;
    the_saver?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "post_id_user_id">;
export type Saved_postOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    post_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.Saved_postCountOrderByAggregateInput;
    _max?: Prisma.Saved_postMaxOrderByAggregateInput;
    _min?: Prisma.Saved_postMinOrderByAggregateInput;
};
export type Saved_postScalarWhereWithAggregatesInput = {
    AND?: Prisma.Saved_postScalarWhereWithAggregatesInput | Prisma.Saved_postScalarWhereWithAggregatesInput[];
    OR?: Prisma.Saved_postScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Saved_postScalarWhereWithAggregatesInput | Prisma.Saved_postScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Saved_post"> | string;
    post_id?: Prisma.StringWithAggregatesFilter<"Saved_post"> | string;
    user_id?: Prisma.StringWithAggregatesFilter<"Saved_post"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Saved_post"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Saved_post"> | Date | string;
};
export type Saved_postCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    post: Prisma.PostCreateNestedOneWithoutSaved_postsInput;
    the_saver: Prisma.UserCreateNestedOneWithoutSaved_postsInput;
};
export type Saved_postUncheckedCreateInput = {
    id?: string;
    post_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type Saved_postUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    post?: Prisma.PostUpdateOneRequiredWithoutSaved_postsNestedInput;
    the_saver?: Prisma.UserUpdateOneRequiredWithoutSaved_postsNestedInput;
};
export type Saved_postUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    post_id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Saved_postCreateManyInput = {
    id?: string;
    post_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type Saved_postUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Saved_postUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    post_id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Saved_postListRelationFilter = {
    every?: Prisma.Saved_postWhereInput;
    some?: Prisma.Saved_postWhereInput;
    none?: Prisma.Saved_postWhereInput;
};
export type Saved_postOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Saved_postPost_idUser_idCompoundUniqueInput = {
    post_id: string;
    user_id: string;
};
export type Saved_postCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    post_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type Saved_postMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    post_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type Saved_postMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    post_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type Saved_postCreateNestedManyWithoutThe_saverInput = {
    create?: Prisma.XOR<Prisma.Saved_postCreateWithoutThe_saverInput, Prisma.Saved_postUncheckedCreateWithoutThe_saverInput> | Prisma.Saved_postCreateWithoutThe_saverInput[] | Prisma.Saved_postUncheckedCreateWithoutThe_saverInput[];
    connectOrCreate?: Prisma.Saved_postCreateOrConnectWithoutThe_saverInput | Prisma.Saved_postCreateOrConnectWithoutThe_saverInput[];
    createMany?: Prisma.Saved_postCreateManyThe_saverInputEnvelope;
    connect?: Prisma.Saved_postWhereUniqueInput | Prisma.Saved_postWhereUniqueInput[];
};
export type Saved_postUncheckedCreateNestedManyWithoutThe_saverInput = {
    create?: Prisma.XOR<Prisma.Saved_postCreateWithoutThe_saverInput, Prisma.Saved_postUncheckedCreateWithoutThe_saverInput> | Prisma.Saved_postCreateWithoutThe_saverInput[] | Prisma.Saved_postUncheckedCreateWithoutThe_saverInput[];
    connectOrCreate?: Prisma.Saved_postCreateOrConnectWithoutThe_saverInput | Prisma.Saved_postCreateOrConnectWithoutThe_saverInput[];
    createMany?: Prisma.Saved_postCreateManyThe_saverInputEnvelope;
    connect?: Prisma.Saved_postWhereUniqueInput | Prisma.Saved_postWhereUniqueInput[];
};
export type Saved_postUpdateManyWithoutThe_saverNestedInput = {
    create?: Prisma.XOR<Prisma.Saved_postCreateWithoutThe_saverInput, Prisma.Saved_postUncheckedCreateWithoutThe_saverInput> | Prisma.Saved_postCreateWithoutThe_saverInput[] | Prisma.Saved_postUncheckedCreateWithoutThe_saverInput[];
    connectOrCreate?: Prisma.Saved_postCreateOrConnectWithoutThe_saverInput | Prisma.Saved_postCreateOrConnectWithoutThe_saverInput[];
    upsert?: Prisma.Saved_postUpsertWithWhereUniqueWithoutThe_saverInput | Prisma.Saved_postUpsertWithWhereUniqueWithoutThe_saverInput[];
    createMany?: Prisma.Saved_postCreateManyThe_saverInputEnvelope;
    set?: Prisma.Saved_postWhereUniqueInput | Prisma.Saved_postWhereUniqueInput[];
    disconnect?: Prisma.Saved_postWhereUniqueInput | Prisma.Saved_postWhereUniqueInput[];
    delete?: Prisma.Saved_postWhereUniqueInput | Prisma.Saved_postWhereUniqueInput[];
    connect?: Prisma.Saved_postWhereUniqueInput | Prisma.Saved_postWhereUniqueInput[];
    update?: Prisma.Saved_postUpdateWithWhereUniqueWithoutThe_saverInput | Prisma.Saved_postUpdateWithWhereUniqueWithoutThe_saverInput[];
    updateMany?: Prisma.Saved_postUpdateManyWithWhereWithoutThe_saverInput | Prisma.Saved_postUpdateManyWithWhereWithoutThe_saverInput[];
    deleteMany?: Prisma.Saved_postScalarWhereInput | Prisma.Saved_postScalarWhereInput[];
};
export type Saved_postUncheckedUpdateManyWithoutThe_saverNestedInput = {
    create?: Prisma.XOR<Prisma.Saved_postCreateWithoutThe_saverInput, Prisma.Saved_postUncheckedCreateWithoutThe_saverInput> | Prisma.Saved_postCreateWithoutThe_saverInput[] | Prisma.Saved_postUncheckedCreateWithoutThe_saverInput[];
    connectOrCreate?: Prisma.Saved_postCreateOrConnectWithoutThe_saverInput | Prisma.Saved_postCreateOrConnectWithoutThe_saverInput[];
    upsert?: Prisma.Saved_postUpsertWithWhereUniqueWithoutThe_saverInput | Prisma.Saved_postUpsertWithWhereUniqueWithoutThe_saverInput[];
    createMany?: Prisma.Saved_postCreateManyThe_saverInputEnvelope;
    set?: Prisma.Saved_postWhereUniqueInput | Prisma.Saved_postWhereUniqueInput[];
    disconnect?: Prisma.Saved_postWhereUniqueInput | Prisma.Saved_postWhereUniqueInput[];
    delete?: Prisma.Saved_postWhereUniqueInput | Prisma.Saved_postWhereUniqueInput[];
    connect?: Prisma.Saved_postWhereUniqueInput | Prisma.Saved_postWhereUniqueInput[];
    update?: Prisma.Saved_postUpdateWithWhereUniqueWithoutThe_saverInput | Prisma.Saved_postUpdateWithWhereUniqueWithoutThe_saverInput[];
    updateMany?: Prisma.Saved_postUpdateManyWithWhereWithoutThe_saverInput | Prisma.Saved_postUpdateManyWithWhereWithoutThe_saverInput[];
    deleteMany?: Prisma.Saved_postScalarWhereInput | Prisma.Saved_postScalarWhereInput[];
};
export type Saved_postCreateNestedManyWithoutPostInput = {
    create?: Prisma.XOR<Prisma.Saved_postCreateWithoutPostInput, Prisma.Saved_postUncheckedCreateWithoutPostInput> | Prisma.Saved_postCreateWithoutPostInput[] | Prisma.Saved_postUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.Saved_postCreateOrConnectWithoutPostInput | Prisma.Saved_postCreateOrConnectWithoutPostInput[];
    createMany?: Prisma.Saved_postCreateManyPostInputEnvelope;
    connect?: Prisma.Saved_postWhereUniqueInput | Prisma.Saved_postWhereUniqueInput[];
};
export type Saved_postUncheckedCreateNestedManyWithoutPostInput = {
    create?: Prisma.XOR<Prisma.Saved_postCreateWithoutPostInput, Prisma.Saved_postUncheckedCreateWithoutPostInput> | Prisma.Saved_postCreateWithoutPostInput[] | Prisma.Saved_postUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.Saved_postCreateOrConnectWithoutPostInput | Prisma.Saved_postCreateOrConnectWithoutPostInput[];
    createMany?: Prisma.Saved_postCreateManyPostInputEnvelope;
    connect?: Prisma.Saved_postWhereUniqueInput | Prisma.Saved_postWhereUniqueInput[];
};
export type Saved_postUpdateManyWithoutPostNestedInput = {
    create?: Prisma.XOR<Prisma.Saved_postCreateWithoutPostInput, Prisma.Saved_postUncheckedCreateWithoutPostInput> | Prisma.Saved_postCreateWithoutPostInput[] | Prisma.Saved_postUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.Saved_postCreateOrConnectWithoutPostInput | Prisma.Saved_postCreateOrConnectWithoutPostInput[];
    upsert?: Prisma.Saved_postUpsertWithWhereUniqueWithoutPostInput | Prisma.Saved_postUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: Prisma.Saved_postCreateManyPostInputEnvelope;
    set?: Prisma.Saved_postWhereUniqueInput | Prisma.Saved_postWhereUniqueInput[];
    disconnect?: Prisma.Saved_postWhereUniqueInput | Prisma.Saved_postWhereUniqueInput[];
    delete?: Prisma.Saved_postWhereUniqueInput | Prisma.Saved_postWhereUniqueInput[];
    connect?: Prisma.Saved_postWhereUniqueInput | Prisma.Saved_postWhereUniqueInput[];
    update?: Prisma.Saved_postUpdateWithWhereUniqueWithoutPostInput | Prisma.Saved_postUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?: Prisma.Saved_postUpdateManyWithWhereWithoutPostInput | Prisma.Saved_postUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: Prisma.Saved_postScalarWhereInput | Prisma.Saved_postScalarWhereInput[];
};
export type Saved_postUncheckedUpdateManyWithoutPostNestedInput = {
    create?: Prisma.XOR<Prisma.Saved_postCreateWithoutPostInput, Prisma.Saved_postUncheckedCreateWithoutPostInput> | Prisma.Saved_postCreateWithoutPostInput[] | Prisma.Saved_postUncheckedCreateWithoutPostInput[];
    connectOrCreate?: Prisma.Saved_postCreateOrConnectWithoutPostInput | Prisma.Saved_postCreateOrConnectWithoutPostInput[];
    upsert?: Prisma.Saved_postUpsertWithWhereUniqueWithoutPostInput | Prisma.Saved_postUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: Prisma.Saved_postCreateManyPostInputEnvelope;
    set?: Prisma.Saved_postWhereUniqueInput | Prisma.Saved_postWhereUniqueInput[];
    disconnect?: Prisma.Saved_postWhereUniqueInput | Prisma.Saved_postWhereUniqueInput[];
    delete?: Prisma.Saved_postWhereUniqueInput | Prisma.Saved_postWhereUniqueInput[];
    connect?: Prisma.Saved_postWhereUniqueInput | Prisma.Saved_postWhereUniqueInput[];
    update?: Prisma.Saved_postUpdateWithWhereUniqueWithoutPostInput | Prisma.Saved_postUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?: Prisma.Saved_postUpdateManyWithWhereWithoutPostInput | Prisma.Saved_postUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: Prisma.Saved_postScalarWhereInput | Prisma.Saved_postScalarWhereInput[];
};
export type Saved_postCreateWithoutThe_saverInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    post: Prisma.PostCreateNestedOneWithoutSaved_postsInput;
};
export type Saved_postUncheckedCreateWithoutThe_saverInput = {
    id?: string;
    post_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type Saved_postCreateOrConnectWithoutThe_saverInput = {
    where: Prisma.Saved_postWhereUniqueInput;
    create: Prisma.XOR<Prisma.Saved_postCreateWithoutThe_saverInput, Prisma.Saved_postUncheckedCreateWithoutThe_saverInput>;
};
export type Saved_postCreateManyThe_saverInputEnvelope = {
    data: Prisma.Saved_postCreateManyThe_saverInput | Prisma.Saved_postCreateManyThe_saverInput[];
    skipDuplicates?: boolean;
};
export type Saved_postUpsertWithWhereUniqueWithoutThe_saverInput = {
    where: Prisma.Saved_postWhereUniqueInput;
    update: Prisma.XOR<Prisma.Saved_postUpdateWithoutThe_saverInput, Prisma.Saved_postUncheckedUpdateWithoutThe_saverInput>;
    create: Prisma.XOR<Prisma.Saved_postCreateWithoutThe_saverInput, Prisma.Saved_postUncheckedCreateWithoutThe_saverInput>;
};
export type Saved_postUpdateWithWhereUniqueWithoutThe_saverInput = {
    where: Prisma.Saved_postWhereUniqueInput;
    data: Prisma.XOR<Prisma.Saved_postUpdateWithoutThe_saverInput, Prisma.Saved_postUncheckedUpdateWithoutThe_saverInput>;
};
export type Saved_postUpdateManyWithWhereWithoutThe_saverInput = {
    where: Prisma.Saved_postScalarWhereInput;
    data: Prisma.XOR<Prisma.Saved_postUpdateManyMutationInput, Prisma.Saved_postUncheckedUpdateManyWithoutThe_saverInput>;
};
export type Saved_postScalarWhereInput = {
    AND?: Prisma.Saved_postScalarWhereInput | Prisma.Saved_postScalarWhereInput[];
    OR?: Prisma.Saved_postScalarWhereInput[];
    NOT?: Prisma.Saved_postScalarWhereInput | Prisma.Saved_postScalarWhereInput[];
    id?: Prisma.StringFilter<"Saved_post"> | string;
    post_id?: Prisma.StringFilter<"Saved_post"> | string;
    user_id?: Prisma.StringFilter<"Saved_post"> | string;
    created_at?: Prisma.DateTimeFilter<"Saved_post"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Saved_post"> | Date | string;
};
export type Saved_postCreateWithoutPostInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    the_saver: Prisma.UserCreateNestedOneWithoutSaved_postsInput;
};
export type Saved_postUncheckedCreateWithoutPostInput = {
    id?: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type Saved_postCreateOrConnectWithoutPostInput = {
    where: Prisma.Saved_postWhereUniqueInput;
    create: Prisma.XOR<Prisma.Saved_postCreateWithoutPostInput, Prisma.Saved_postUncheckedCreateWithoutPostInput>;
};
export type Saved_postCreateManyPostInputEnvelope = {
    data: Prisma.Saved_postCreateManyPostInput | Prisma.Saved_postCreateManyPostInput[];
    skipDuplicates?: boolean;
};
export type Saved_postUpsertWithWhereUniqueWithoutPostInput = {
    where: Prisma.Saved_postWhereUniqueInput;
    update: Prisma.XOR<Prisma.Saved_postUpdateWithoutPostInput, Prisma.Saved_postUncheckedUpdateWithoutPostInput>;
    create: Prisma.XOR<Prisma.Saved_postCreateWithoutPostInput, Prisma.Saved_postUncheckedCreateWithoutPostInput>;
};
export type Saved_postUpdateWithWhereUniqueWithoutPostInput = {
    where: Prisma.Saved_postWhereUniqueInput;
    data: Prisma.XOR<Prisma.Saved_postUpdateWithoutPostInput, Prisma.Saved_postUncheckedUpdateWithoutPostInput>;
};
export type Saved_postUpdateManyWithWhereWithoutPostInput = {
    where: Prisma.Saved_postScalarWhereInput;
    data: Prisma.XOR<Prisma.Saved_postUpdateManyMutationInput, Prisma.Saved_postUncheckedUpdateManyWithoutPostInput>;
};
export type Saved_postCreateManyThe_saverInput = {
    id?: string;
    post_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type Saved_postUpdateWithoutThe_saverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    post?: Prisma.PostUpdateOneRequiredWithoutSaved_postsNestedInput;
};
export type Saved_postUncheckedUpdateWithoutThe_saverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    post_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Saved_postUncheckedUpdateManyWithoutThe_saverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    post_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Saved_postCreateManyPostInput = {
    id?: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type Saved_postUpdateWithoutPostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    the_saver?: Prisma.UserUpdateOneRequiredWithoutSaved_postsNestedInput;
};
export type Saved_postUncheckedUpdateWithoutPostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Saved_postUncheckedUpdateManyWithoutPostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Saved_postSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    post_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
    the_saver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["saved_post"]>;
export type Saved_postSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    post_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
    the_saver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["saved_post"]>;
export type Saved_postSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    post_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
    the_saver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["saved_post"]>;
export type Saved_postSelectScalar = {
    id?: boolean;
    post_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type Saved_postOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "post_id" | "user_id" | "created_at" | "updated_at", ExtArgs["result"]["saved_post"]>;
export type Saved_postInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
    the_saver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type Saved_postIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
    the_saver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type Saved_postIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    post?: boolean | Prisma.PostDefaultArgs<ExtArgs>;
    the_saver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $Saved_postPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Saved_post";
    objects: {
        post: Prisma.$PostPayload<ExtArgs>;
        the_saver: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        post_id: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["saved_post"]>;
    composites: {};
};
export type Saved_postGetPayload<S extends boolean | null | undefined | Saved_postDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Saved_postPayload, S>;
export type Saved_postCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Saved_postFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Saved_postCountAggregateInputType | true;
};
export interface Saved_postDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Saved_post'];
        meta: {
            name: 'Saved_post';
        };
    };
    /**
     * Find zero or one Saved_post that matches the filter.
     * @param {Saved_postFindUniqueArgs} args - Arguments to find a Saved_post
     * @example
     * // Get one Saved_post
     * const saved_post = await prisma.saved_post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Saved_postFindUniqueArgs>(args: Prisma.SelectSubset<T, Saved_postFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Saved_postClient<runtime.Types.Result.GetResult<Prisma.$Saved_postPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Saved_post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Saved_postFindUniqueOrThrowArgs} args - Arguments to find a Saved_post
     * @example
     * // Get one Saved_post
     * const saved_post = await prisma.saved_post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Saved_postFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Saved_postFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Saved_postClient<runtime.Types.Result.GetResult<Prisma.$Saved_postPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Saved_post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_postFindFirstArgs} args - Arguments to find a Saved_post
     * @example
     * // Get one Saved_post
     * const saved_post = await prisma.saved_post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Saved_postFindFirstArgs>(args?: Prisma.SelectSubset<T, Saved_postFindFirstArgs<ExtArgs>>): Prisma.Prisma__Saved_postClient<runtime.Types.Result.GetResult<Prisma.$Saved_postPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Saved_post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_postFindFirstOrThrowArgs} args - Arguments to find a Saved_post
     * @example
     * // Get one Saved_post
     * const saved_post = await prisma.saved_post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Saved_postFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Saved_postFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Saved_postClient<runtime.Types.Result.GetResult<Prisma.$Saved_postPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Saved_posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_postFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Saved_posts
     * const saved_posts = await prisma.saved_post.findMany()
     *
     * // Get first 10 Saved_posts
     * const saved_posts = await prisma.saved_post.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const saved_postWithIdOnly = await prisma.saved_post.findMany({ select: { id: true } })
     *
     */
    findMany<T extends Saved_postFindManyArgs>(args?: Prisma.SelectSubset<T, Saved_postFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Saved_postPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Saved_post.
     * @param {Saved_postCreateArgs} args - Arguments to create a Saved_post.
     * @example
     * // Create one Saved_post
     * const Saved_post = await prisma.saved_post.create({
     *   data: {
     *     // ... data to create a Saved_post
     *   }
     * })
     *
     */
    create<T extends Saved_postCreateArgs>(args: Prisma.SelectSubset<T, Saved_postCreateArgs<ExtArgs>>): Prisma.Prisma__Saved_postClient<runtime.Types.Result.GetResult<Prisma.$Saved_postPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Saved_posts.
     * @param {Saved_postCreateManyArgs} args - Arguments to create many Saved_posts.
     * @example
     * // Create many Saved_posts
     * const saved_post = await prisma.saved_post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Saved_postCreateManyArgs>(args?: Prisma.SelectSubset<T, Saved_postCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Saved_posts and returns the data saved in the database.
     * @param {Saved_postCreateManyAndReturnArgs} args - Arguments to create many Saved_posts.
     * @example
     * // Create many Saved_posts
     * const saved_post = await prisma.saved_post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Saved_posts and only return the `id`
     * const saved_postWithIdOnly = await prisma.saved_post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Saved_postCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Saved_postCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Saved_postPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Saved_post.
     * @param {Saved_postDeleteArgs} args - Arguments to delete one Saved_post.
     * @example
     * // Delete one Saved_post
     * const Saved_post = await prisma.saved_post.delete({
     *   where: {
     *     // ... filter to delete one Saved_post
     *   }
     * })
     *
     */
    delete<T extends Saved_postDeleteArgs>(args: Prisma.SelectSubset<T, Saved_postDeleteArgs<ExtArgs>>): Prisma.Prisma__Saved_postClient<runtime.Types.Result.GetResult<Prisma.$Saved_postPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Saved_post.
     * @param {Saved_postUpdateArgs} args - Arguments to update one Saved_post.
     * @example
     * // Update one Saved_post
     * const saved_post = await prisma.saved_post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Saved_postUpdateArgs>(args: Prisma.SelectSubset<T, Saved_postUpdateArgs<ExtArgs>>): Prisma.Prisma__Saved_postClient<runtime.Types.Result.GetResult<Prisma.$Saved_postPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Saved_posts.
     * @param {Saved_postDeleteManyArgs} args - Arguments to filter Saved_posts to delete.
     * @example
     * // Delete a few Saved_posts
     * const { count } = await prisma.saved_post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Saved_postDeleteManyArgs>(args?: Prisma.SelectSubset<T, Saved_postDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Saved_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_postUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Saved_posts
     * const saved_post = await prisma.saved_post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Saved_postUpdateManyArgs>(args: Prisma.SelectSubset<T, Saved_postUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Saved_posts and returns the data updated in the database.
     * @param {Saved_postUpdateManyAndReturnArgs} args - Arguments to update many Saved_posts.
     * @example
     * // Update many Saved_posts
     * const saved_post = await prisma.saved_post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Saved_posts and only return the `id`
     * const saved_postWithIdOnly = await prisma.saved_post.updateManyAndReturn({
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
    updateManyAndReturn<T extends Saved_postUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Saved_postUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Saved_postPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Saved_post.
     * @param {Saved_postUpsertArgs} args - Arguments to update or create a Saved_post.
     * @example
     * // Update or create a Saved_post
     * const saved_post = await prisma.saved_post.upsert({
     *   create: {
     *     // ... data to create a Saved_post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Saved_post we want to update
     *   }
     * })
     */
    upsert<T extends Saved_postUpsertArgs>(args: Prisma.SelectSubset<T, Saved_postUpsertArgs<ExtArgs>>): Prisma.Prisma__Saved_postClient<runtime.Types.Result.GetResult<Prisma.$Saved_postPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Saved_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_postCountArgs} args - Arguments to filter Saved_posts to count.
     * @example
     * // Count the number of Saved_posts
     * const count = await prisma.saved_post.count({
     *   where: {
     *     // ... the filter for the Saved_posts we want to count
     *   }
     * })
    **/
    count<T extends Saved_postCountArgs>(args?: Prisma.Subset<T, Saved_postCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Saved_postCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Saved_post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_postAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Saved_postAggregateArgs>(args: Prisma.Subset<T, Saved_postAggregateArgs>): Prisma.PrismaPromise<GetSaved_postAggregateType<T>>;
    /**
     * Group by Saved_post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_postGroupByArgs} args - Group by arguments.
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
    groupBy<T extends Saved_postGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Saved_postGroupByArgs['orderBy'];
    } : {
        orderBy?: Saved_postGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Saved_postGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaved_postGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Saved_post model
     */
    readonly fields: Saved_postFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Saved_post.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Saved_postClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    post<T extends Prisma.PostDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PostDefaultArgs<ExtArgs>>): Prisma.Prisma__PostClient<runtime.Types.Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    the_saver<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Saved_post model
 */
export interface Saved_postFieldRefs {
    readonly id: Prisma.FieldRef<"Saved_post", 'String'>;
    readonly post_id: Prisma.FieldRef<"Saved_post", 'String'>;
    readonly user_id: Prisma.FieldRef<"Saved_post", 'String'>;
    readonly created_at: Prisma.FieldRef<"Saved_post", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Saved_post", 'DateTime'>;
}
/**
 * Saved_post findUnique
 */
export type Saved_postFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_post
     */
    select?: Prisma.Saved_postSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Saved_post
     */
    omit?: Prisma.Saved_postOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Saved_postInclude<ExtArgs> | null;
    /**
     * Filter, which Saved_post to fetch.
     */
    where: Prisma.Saved_postWhereUniqueInput;
};
/**
 * Saved_post findUniqueOrThrow
 */
export type Saved_postFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_post
     */
    select?: Prisma.Saved_postSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Saved_post
     */
    omit?: Prisma.Saved_postOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Saved_postInclude<ExtArgs> | null;
    /**
     * Filter, which Saved_post to fetch.
     */
    where: Prisma.Saved_postWhereUniqueInput;
};
/**
 * Saved_post findFirst
 */
export type Saved_postFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_post
     */
    select?: Prisma.Saved_postSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Saved_post
     */
    omit?: Prisma.Saved_postOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Saved_postInclude<ExtArgs> | null;
    /**
     * Filter, which Saved_post to fetch.
     */
    where?: Prisma.Saved_postWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Saved_posts to fetch.
     */
    orderBy?: Prisma.Saved_postOrderByWithRelationInput | Prisma.Saved_postOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Saved_posts.
     */
    cursor?: Prisma.Saved_postWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Saved_posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Saved_posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Saved_posts.
     */
    distinct?: Prisma.Saved_postScalarFieldEnum | Prisma.Saved_postScalarFieldEnum[];
};
/**
 * Saved_post findFirstOrThrow
 */
export type Saved_postFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_post
     */
    select?: Prisma.Saved_postSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Saved_post
     */
    omit?: Prisma.Saved_postOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Saved_postInclude<ExtArgs> | null;
    /**
     * Filter, which Saved_post to fetch.
     */
    where?: Prisma.Saved_postWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Saved_posts to fetch.
     */
    orderBy?: Prisma.Saved_postOrderByWithRelationInput | Prisma.Saved_postOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Saved_posts.
     */
    cursor?: Prisma.Saved_postWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Saved_posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Saved_posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Saved_posts.
     */
    distinct?: Prisma.Saved_postScalarFieldEnum | Prisma.Saved_postScalarFieldEnum[];
};
/**
 * Saved_post findMany
 */
export type Saved_postFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_post
     */
    select?: Prisma.Saved_postSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Saved_post
     */
    omit?: Prisma.Saved_postOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Saved_postInclude<ExtArgs> | null;
    /**
     * Filter, which Saved_posts to fetch.
     */
    where?: Prisma.Saved_postWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Saved_posts to fetch.
     */
    orderBy?: Prisma.Saved_postOrderByWithRelationInput | Prisma.Saved_postOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Saved_posts.
     */
    cursor?: Prisma.Saved_postWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Saved_posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Saved_posts.
     */
    skip?: number;
    distinct?: Prisma.Saved_postScalarFieldEnum | Prisma.Saved_postScalarFieldEnum[];
};
/**
 * Saved_post create
 */
export type Saved_postCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_post
     */
    select?: Prisma.Saved_postSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Saved_post
     */
    omit?: Prisma.Saved_postOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Saved_postInclude<ExtArgs> | null;
    /**
     * The data needed to create a Saved_post.
     */
    data: Prisma.XOR<Prisma.Saved_postCreateInput, Prisma.Saved_postUncheckedCreateInput>;
};
/**
 * Saved_post createMany
 */
export type Saved_postCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Saved_posts.
     */
    data: Prisma.Saved_postCreateManyInput | Prisma.Saved_postCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Saved_post createManyAndReturn
 */
export type Saved_postCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_post
     */
    select?: Prisma.Saved_postSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Saved_post
     */
    omit?: Prisma.Saved_postOmit<ExtArgs> | null;
    /**
     * The data used to create many Saved_posts.
     */
    data: Prisma.Saved_postCreateManyInput | Prisma.Saved_postCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Saved_postIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Saved_post update
 */
export type Saved_postUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_post
     */
    select?: Prisma.Saved_postSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Saved_post
     */
    omit?: Prisma.Saved_postOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Saved_postInclude<ExtArgs> | null;
    /**
     * The data needed to update a Saved_post.
     */
    data: Prisma.XOR<Prisma.Saved_postUpdateInput, Prisma.Saved_postUncheckedUpdateInput>;
    /**
     * Choose, which Saved_post to update.
     */
    where: Prisma.Saved_postWhereUniqueInput;
};
/**
 * Saved_post updateMany
 */
export type Saved_postUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Saved_posts.
     */
    data: Prisma.XOR<Prisma.Saved_postUpdateManyMutationInput, Prisma.Saved_postUncheckedUpdateManyInput>;
    /**
     * Filter which Saved_posts to update
     */
    where?: Prisma.Saved_postWhereInput;
    /**
     * Limit how many Saved_posts to update.
     */
    limit?: number;
};
/**
 * Saved_post updateManyAndReturn
 */
export type Saved_postUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_post
     */
    select?: Prisma.Saved_postSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Saved_post
     */
    omit?: Prisma.Saved_postOmit<ExtArgs> | null;
    /**
     * The data used to update Saved_posts.
     */
    data: Prisma.XOR<Prisma.Saved_postUpdateManyMutationInput, Prisma.Saved_postUncheckedUpdateManyInput>;
    /**
     * Filter which Saved_posts to update
     */
    where?: Prisma.Saved_postWhereInput;
    /**
     * Limit how many Saved_posts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Saved_postIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Saved_post upsert
 */
export type Saved_postUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_post
     */
    select?: Prisma.Saved_postSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Saved_post
     */
    omit?: Prisma.Saved_postOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Saved_postInclude<ExtArgs> | null;
    /**
     * The filter to search for the Saved_post to update in case it exists.
     */
    where: Prisma.Saved_postWhereUniqueInput;
    /**
     * In case the Saved_post found by the `where` argument doesn't exist, create a new Saved_post with this data.
     */
    create: Prisma.XOR<Prisma.Saved_postCreateInput, Prisma.Saved_postUncheckedCreateInput>;
    /**
     * In case the Saved_post was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Saved_postUpdateInput, Prisma.Saved_postUncheckedUpdateInput>;
};
/**
 * Saved_post delete
 */
export type Saved_postDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_post
     */
    select?: Prisma.Saved_postSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Saved_post
     */
    omit?: Prisma.Saved_postOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Saved_postInclude<ExtArgs> | null;
    /**
     * Filter which Saved_post to delete.
     */
    where: Prisma.Saved_postWhereUniqueInput;
};
/**
 * Saved_post deleteMany
 */
export type Saved_postDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Saved_posts to delete
     */
    where?: Prisma.Saved_postWhereInput;
    /**
     * Limit how many Saved_posts to delete.
     */
    limit?: number;
};
/**
 * Saved_post without action
 */
export type Saved_postDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_post
     */
    select?: Prisma.Saved_postSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Saved_post
     */
    omit?: Prisma.Saved_postOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Saved_postInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Saved_post.d.ts.map