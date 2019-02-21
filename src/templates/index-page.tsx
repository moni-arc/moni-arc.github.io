import {graphql} from 'gatsby'

export const IndexPageTemplate = () => <div />

type IndexPageProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        heading: string
        subheading: string
      }
    }
  }
}

const IndexPage = (props: IndexPageProps) => (
  <div>
    <h1>{props.data.markdownRemark.frontmatter.heading}</h1>
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        title
        heading
        subheading
      }
    }
  }
`
