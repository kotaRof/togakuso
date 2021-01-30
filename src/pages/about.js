import * as React from 'react'
import { graphql } from 'gatsby'
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/Layout'

const AboutPage = (props) => {
  const options = {
    renderText: text => {
        return text.split('\n').reduce((children, textSegment, index) => {
            return [...children, index > 0 && <br key={index} />, textSegment];
        }, []);
    },
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => (
            <img
                src={node.data.target.fields.file["en-US"].url}
                alt='about top'
            />
        )
    },
};
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
            about
          </h1>
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <p>{documentToReactComponents(props.data.contentfulPage.body.json, options)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
      // {renderRichText(props.data.contentfulIndexPage.body, options)}
export const query = graphql`
    query AboutQuery {
      contentfulPage(slug: {eq: "about"}) {
        topImage {
          fluid(resizingBehavior: SCALE, quality: 100, maxWidth: 3000, cropFocus: CENTER) {
            src
          }
        }
        body {
          json
        }
        slug
      }
    }
  `
export default AboutPage
