import React from 'react'
import {graphql} from 'gatsby'

import {Layout} from '../components/layout'

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
    <h1>{props.data.markdownRemark.frontmatter.heading}</h1>
    <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}} />
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
