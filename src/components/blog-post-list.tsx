import React from 'react'
import {graphql, Link, StaticQuery} from 'gatsby'

type BlogPostListProps = {
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

const BlogPostList = (props: BlogPostListProps) => (
  <div>
    {props.data.allMarkdownRemark.edges.map((edge, key) => (
      <Link key={key} to={edge.node.fields.slug}>
        {edge.node.frontmatter.title}
      </Link>
    ))}
  </div>
)

export const PopulatedBlogPostList = () => (
  <StaticQuery
    query={graphql`
      query BlogPostListQuery {
        allMarkdownRemark(
          sort: {order: DESC, fields: [frontmatter___date]}
          filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
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
    render={data => <BlogPostList data={data} />}
  />
)
