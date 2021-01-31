import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import StoryRoll from '../../components/StoryRoll'

const StoriesPage = (props) => {
  return (
    <Layout>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
              props.data.contentfulPage.topImage.fluid.src
          })`,
          backgroundPosition: `center`,
          backgroundAttachment: `fixed`,
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '150px',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
          }}
        >
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              boxShadow:
                // 'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
                  'gray 0.5rem 0px 0px, gray -0.5rem 0px 0px',
              // backgroundColor: 'rgb(255, 68, 0)',
              backgroundColor: 'gray',
              // color: 'white',
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
            }}
          >
            stories
          </h1>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="content">
            <StoryRoll />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
    query StoriesQuery {
      contentfulPage(slug: {eq: "stories"}) {
        topImage {
          fluid(resizingBehavior: SCALE, quality: 100, maxWidth: 3000, cropFocus: CENTER) {
            src
          }
        }
        slug
      }
    }
  `
export default StoriesPage
