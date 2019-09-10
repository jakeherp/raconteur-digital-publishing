import IArticle from "./article.interface"
import IInfographic from "./infographic.interface"
import ISponsored from "./sponsored.interface"
import IContributor from "./contributor.interface"
import IFooter from "./footer.interface"

export default interface IReport {
  data: {
    contentfulReport: {
      title: string
      slug: string
      color: string
      headerColor: string
      hypeAnimation: {
        hypeId: string
        format: string
      }
      featuredImage: {
        fluid: any
      }
      sponsoredBy: ISponsored
      articles: IArticle[] | IInfographic[]
      footerText: IFooter
      contributors: IContributor[]
    }
  }
}
