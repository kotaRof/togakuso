import React from 'react'
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

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
              alt='feature top'
          />
      )
  },
};

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.explanation} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '480px',
                display: 'inline-block',
              }}
            >
              <img
                  src={item.image.fluid.src}
                  style={{borderRadius: '5px'}}
                  alt='feature'
              />
            </div>
          </div>
          <p>{documentToReactComponents(item.explanation.json, options)}</p>
        </section>
      </div>
    ))}
  </div>
)


export default FeatureGrid
