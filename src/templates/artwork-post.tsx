import {graphql} from 'gatsby'

export const ArtworkPostTemplate = () => <div />

type ArtworkPostProps = {
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

const ArtworkPost = (props: ArtworkPostProps) => (
  <div>
    <h1>{props.data.markdownRemark.frontmatter.heading}</h1>
  </div>
)

export default ArtworkPost

export const pageQuery = graphql`
  query ArtworkPostTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "artwork-post"}}) {
      frontmatter {
        title
        heading
        subheading
      }
    }
  }
`
