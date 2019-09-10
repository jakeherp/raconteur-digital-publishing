import IPost from "./post.interface"
import IBoxOut from "./boxout.interface"

export default interface IArticle extends IPost {
  featuredImage: {
    fluid: any
  }
  author: {
    name: string
  }
  content: {
    json: any
  }
  boxOut: IBoxOut
}
