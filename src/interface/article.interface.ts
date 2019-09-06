import IBoxOut from "./boxout.interface"

export default interface IArticle {
  title: string
  slug: string
  standFirst: {
    standFirst: string
  }
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
