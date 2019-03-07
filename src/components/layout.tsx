import React from 'react'
import Helmet from 'react-helmet'
import {} from '@emotion/core'
import {StaticQuery, graphql} from 'gatsby'
import {colors} from '../utils/style'

export const Layout = ({children}) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="theme-color" content={colors.viridianGreen} />
        </Helmet>
        <nav
          css={{
            borderBottom: `1px solid ${colors.viridianGreen}`,
            boxShadow: `0px 5px 10px -7px ${colors.viridianGreen}`,
            color: colors.viridianGreen,
            fontSize: '1.5rem',
            paddingLeft: '1.5rem',
          }}
        >
          Forza Monica!
        </nav>
        <>{children}</>
      </>
    )}
  />
)
