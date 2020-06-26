import { PostsFeed, GetTags, PostType,SelectedPostType, DomainData,FollowingDomainPost, DomainDetails } from '../../stores/types'

interface PostsService {
  getPostsAPI: (limit:number,offset:number) => Promise<PostsFeed>
  
  getTags:(domainId:number)=>Promise<GetTags>

  getSelectedPostAPI:(requestObject: {},domainId: number,postId: number)=>Promise<SelectedPostType>
  
  getDomainsAPI:(requestObject:{})=>Promise<DomainData>

  getFollowingDomainPostsAPI:(domainId:number, limit:number, offset:number)=>Promise<Array<FollowingDomainPost>>

  getFollowingDomainDetailsAPI:(domainId:number)=>Promise<DomainDetails>

  followOrCancelDomainRequest:(status:{}, domainId:number)=>Promise<undefined|string>

  createPost:(requestObject, domainId:number)=>Promise<undefined|string>

  leaveDomain:(domainId:number)=>Promise<undefined|string>

  acceptOrRejectRequest:(requestObject:{
    request_id: number
    accept_status: string
 })=>Promise<undefined|string>

  onClickReaction:(type, id:number)=>Promise<undefined|string>
}


export default PostsService


