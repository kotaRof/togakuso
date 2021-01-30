import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/Layout'
import StoryRoll from '../components/StoryRoll'

const IndexPage = (props) => {
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
                alt='top'
            />
        )
    },
};
  // const {bodyRichText} = ;
  // const a = documentToReactComponents(props.data.contentfulIndexPage.body.raw);
  return (
    <Layout>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
              props.data.contentfulPage.topImage.fluid.src
          })`,
          backgroundPosition: `center`,
          backgroundAttachment: `scroll`,
        }}
      >
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <p>{documentToReactComponents(props.data.contentfulPage.body.json, options)}</p>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <StoryRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/stories">
                        Read more
                      </Link>
                    </div>
                  </div>
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
    query MyQuery {
      contentfulPage(slug: {eq: "index"}) {
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
export default IndexPage
