import React from 'react'
import {graphql, Link, StaticQuery} from 'gatsby'

type ArtworkListProps = {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          id: string
          fields: {
            slug: string
          }
          frontmatter: {
            title: string
            templateKey: string
            date: string
          }
        }
      }[]
    }
  }
}

const ArtworkList = (props: ArtworkListProps) => (
  <div>
    {props.data.allMarkdownRemark.edges.map((edge, key) => (
      <Link key={key} to={edge.node.fields.slug}>
        {edge.node.frontmatter.title}
      </Link>
    ))}
  </div>
)

export const PopulatedArtworkList = () => (
  <StaticQuery
    query={graphql`
      query ArtworkListQuery {
        allMarkdownRemark(
          sort: {order: DESC, fields: [frontmatter___date]}
          filter: {frontmatter: {templateKey: {eq: "artwork-post"}}}
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                postDate(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={data => <ArtworkList data={data} />}
  />
)
