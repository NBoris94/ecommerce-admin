export type Img = {
  src: string
  alt?: string
  width: string | number
  height: string | number
}

export type SEO = {
  seoTitle?: string
  seoDescription?: string
  seoKeywords?: string
}

export type OpenGraph = {}

export interface IBaseEntity {
  id: string
  name: string
  createdDate?: Date
  modifiedDate?: Date
  seo?: SEO
  openGraph?: OpenGraph
}
