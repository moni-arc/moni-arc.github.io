import React from 'react'
import {graphql} from 'gatsby'

import {Layout} from '../components/layout'
import {PopulatedArtworkList} from '../components/artwork-list'
import {PopulatedBlogPostList} from '../components/blog-post-list'

export const IndexPageTemplate = () => <div />

type IndexPageProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        heading: string
        subheading: string
      }
      html: string
    }
  }
}

const IndexPage = (props: IndexPageProps) => (
  <Layout>
    <h4>{props.data.markdownRemark.frontmatter.heading}</h4>
    <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}} />
    <h4>Blog</h4>
    <PopulatedBlogPostList />
    <h4>Art</h4>
    <PopulatedArtworkList />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      html
      frontmatter {
        title
        heading
        subheading
      }
    }
  }
`
