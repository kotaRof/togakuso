import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
// import PreviewCompatibleImage from './PreviewCompatibleImage'

import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

class StoryRoll extends React.Component {
  render() {
    const { edges: posts } = this.props.data.allContentfulStory
    return (
      <div className="columns is-multiline">
      {posts &&
        posts.map(({ node: post }) => (
          <div className="is-parent column is-6" key={post.id}>
            <article
              className={`blog-list-item tile is-child box notification is-featured`}
            >
              <header>
                <img
                  style={{borderRadius: '5px'}}
                  src={post.topImage.fluid.src}
                  alt='featured thumbnail'
                />
                <p className="post-meta">
                  <Link
                    className="title has-text-primary is-size-4"
                    to={`/stories/${post.slug}`}
                  >
                    {post.title}
                  </Link>
                  <span> &bull; </span>
                  <span className="subtitle is-size-5 is-block">
                    {post.date}
                  </span>
                </p>
              </header>
              <p>
                {documentToPlainTextString(post.body.json).substr(0,400)}
                <br />
                <br />
                <Link className="button" to={`/stories/${post.slug}`}>
                  Keep Reading →
                </Link>
              </p>
            </article>
          </div>
        ))}
      </div>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
query StoryRollQuery {
  allContentfulStory(sort: {order: DESC, fields: date}) {
    edges {
      node {
        id
        slug
        title
        date(formatString: "MMMM DD, YYYY")
        topImage {
          fluid(maxWidth: 300 maxHeight: 150) {
            src
          }
        }
        body {
          json
        }
      }
    }
  }
}

    `}
    render={(data, count) => <StoryRoll data={data} count={count} />}
  />
)
