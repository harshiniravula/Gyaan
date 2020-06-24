import { PostObject } from '../../stores/types'

interface PostsService {
  getPostsAPI: (limit:number,offset:number) => Promise<Array<PostObject>>

}


export default PostsService


