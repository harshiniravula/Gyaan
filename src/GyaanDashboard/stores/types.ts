export interface BasicUserDetails{
    user_id: number
    username: string
    profile_pic: string
}

export interface UserType{
    posted_by:BasicUserDetails
}

export interface CommenterType{
    commenter: BasicUserDetails
}
interface BasicDomainType{
    domain_id: number
    domain_name: string
}

export interface DomainPostType extends UserType{
  domain:BasicDomainType
}

export interface ReplyType extends CommenterType{
    comment_id: number
    comment_at: string
    comment_content:string
    is_reacted: boolean
    reactions_count: number

}
export interface CommentType extends CommenterType{
    comment_id:number
    comment_at: string
    comment_content:string
    is_reacted: boolean
    replies:Array<ReplyType>
    replies_count: number
    reactions_count: number
}

export interface Tag{
        tag_id: number
        tag_name:string
}

export interface SelectedPostType extends PostType{
    is_latest_verison_available:boolean
}


export interface PostType extends DomainPostType{
    post_id: number
    title: string
    is_reacted: boolean
    posted_at: string
    post_content: string
    reactions: {
        reactions_count: number
    },
    comments_count: number
    tags: Array<Tag>
    solution: CommentType
    comments: Array<CommentType>

  }

  export interface SuggestedDomainType extends BasicDomainType{
    is_requested: boolean
  }


  export interface DomainData{
    suggested_domains:Array<SuggestedDomainType>
    following_domains:Array<BasicDomainType> 
  }

  export interface GetTags{
      tags:Array<Tag>
  }

  export type PostsFeed = Array<PostType> 

  export interface FollowingDomainPost extends UserType{
    post_id: number
    title: string
    is_reacted: boolean
    posted_at: string
    post_content: string
    reactions: {
        reactions_count: number
    }
    comments_count: number
    tags: Array<Tag>
    solution: CommentType
    comments: Array<CommentType>
  }

  export interface DomainDetails extends BasicDomainType{
        "domain_pic": string
        "domain_experts_count": number
        "domain_experts": Array<BasicUserDetails>
        "stars_count": number
        "followers_count": number
        "posts_count": number
        "domain_description": string
        "domain_requested_users": {
        "total_requests":number
        "users":Array<BasicUserDetails>
        }
    
    
  }