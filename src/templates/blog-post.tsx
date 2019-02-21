import {graphql} from 'gatsby'

export const BlogPostTemplate = () => <div />

type BlogPostProps = {
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

const BlogPost = (props: BlogPostProps) => (
  <div>
    <h1>{props.data.markdownRemark.frontmatter.heading}</h1>
  </div>
)

export default BlogPost

export const pageQuery = graphql`
  query BlogPostTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "blog-post"}}) {
      frontmatter {
        title
        heading
        subheading
      }
    }
  }
`
