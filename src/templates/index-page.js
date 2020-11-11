import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  concert,
  description,
  intro
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
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
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'gray 0.5rem 0px 0px, gray -0.5rem 0px 0px',
            backgroundColor: 'gray',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <p>{mainpitch.description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="content">
                  <div className="tile">
                    <h1 className="title">About</h1>
                  </div>
                  <div className="tile">
                    <h3 className="title">インスタレーション</h3>
                  </div>
                  <div className="tile">
                    <p>日程　｜2021.1.28(Thu)-2021.1.29(Fri)</p>
                  </div>
                  <div className="tile">
                    <p>時間　｜10:00-18:00</p>
                  </div>
                  <div className="tile">
                    <p>会場　｜100BAN STUDIO（神戸　三ノ宮）</p>
                  </div>
                  <div className="tile">
                    <p>住所　｜兵庫県神戸市。。。</p>
                  </div>
                  <div className="tile">
                    <p>入場料｜無料（投げ銭制）</p>
                  </div>
                </div>
                <div className="content">
                  <div className="tile">
                    <h3 className="title">コンサート</h3>
                  </div>
                  <div className="tile">
                    <p>第一回｜2021.1.30(Sat)19:30-20:30</p>
                  </div>
                  <div className="tile">
                    <p>第二回｜2021.1.31(Sun)14:00-15:00</p>
                  </div>
                  <div className="tile">
                    <p>会場　｜100BAN STUDIO（神戸　三ノ宮）</p>
                  </div>
                  <div className="tile">
                    <p>住所　｜兵庫県神戸市。。。</p>
                  </div>
                  <div className="tile">
                    <p>入場料｜xxx円</p>
                  </div>
                </div>
                <div className="content">
                  <div className="tile">
                    <h3 className="title">インターネット配信</h3>
                  </div>
                  <div className="tile">
                    <p>日時　｜イベント開催日時（生配信）</p>
                  </div>
                  <div className="tile">
                    <p>サイト｜Youtube URL</p>
                  </div>
                  <div className="tile">
                    <p>入場料｜無料（投げ銭制）</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/about">
                      More
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
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
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  concert: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        concert={frontmatter.concert}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        concert
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
