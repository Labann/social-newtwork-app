export interface IUser{
    id: string
    email:  string
    first_name: string
    last_name: string
    password: string
    username: string
    profilePicture: string
    bannerImg: string
    bio: string
    comments: string
    posts: IPost[]
    location: string
    post_likes: IPost_like[]
    comment_likes: IComment_like[]
    saved_posts: ISaved_post[]
    followers: IFollow[]
    following: IFollow[]
}


export interface IPost{
  id : string
  user_id : string
  text : string
  images : string[]
  videos : string[]
  likes: IPost_like[]
  comments: IComment[]
  saved_posts: ISaved_post[]
  created_at: string
  updated_at: string
}

export interface ISaved_post{
  id : string
  post: IPost 
  post_id : string
  the_saver:  IUser
  user_id : string
  created_at: string
  updated_at: string
}
export interface IComment{
  id : string
  parent?: IComment
  parent_id? : string
  image? : string
  text? : string
  author: IUser
  user_id : string
  replies: IComment[]
  likes: IComment_like[]
  the_post: IPost
  post_id : string
  created_at: string
  updated_at: string
}
export interface IPost_like{
  id : string
  the_liker: IUser 
  user_id : string
  the_post_liked: IPost 
  post_id : string
  created_at: string 
  updated_at: string
}

export interface IComment_like{
  id : string
  the_liker: IUser 
  user_id : string
  the_comment: IComment
  comment_id : string
  
  created_at: string
  updated_at: string
}


export interface IFollow{
  id : string 
  follower: IUser 
  following: IUser
  follower_id : string
  following_id : string
  created_at: string
  updated_at: string
}