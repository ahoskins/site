import Page from '../layouts/main'
import Link from 'next/prefetch'
import Head from 'next/head'

export default () => (
  <Page>
    <Head>
      <title>Andrew Hoskins</title>
    </Head>

    <div className="home">
      <div className="main">
        <h2>Andrew Hoskins</h2>
        <div>
          <div className="section">
          Adventurer in physical and digital space.
          </div>
          <div className="section">
          I love to be able to think of something and build it. That's why I got into software. I moved to San Francisco after school in Edmonton, Canada because
          it was the best place for this type of idea realization.
          </div>
          <div className="section">
          I've worked as an engineer at Affirm, Shopify and Mesosphere on a wide range of teams -- product engineering, growth engineering, backend systems, frontend, and a bit of infrastructure.
          </div>
          <div className="section">
          Work can be fun, but something of your own is exhilarating. My latest side hussle, Supermind, attained <a className="no-margin" target="_blank" href="https://www.lifehacker.jp/2020/04/lht_supermind.html">popularity in Japan</a> helping people learn English using spaced-repetition.
          </div>
          <div className="section">
          I'm always interested in talking new projects and ideas -- shoot me an email to connect.
          </div>
        </div>
        <br />
        <nav>
          <a target="_blank" href="https://twitter.com/_ahoskins">Twitter</a>
          <a target="_blank" href="https://www.linkedin.com/in/andrew-hoskins-05825991/">LinkedIn</a>
          <a target="_blank" href="https://github.com/ahoskins">GitHub</a>
        </nav>
      </div>
    </div>

    <style jsx>{`
      .home {
        display: flex;
        justify-content: center;
      }

      .main {
        width: 40%;
      }

      @media (max-width: 950px) {
        .main {
          width: 70%;
        }
      }

      @media (max-width: 600px) {
        .main {
          width: 100%;
          margin: 0 10px;
        }
      }

      h2 {
        font-size: 20x;
        font-weight: normal;
        text-align: center;
        margin-bottom: 30px;
      }

      nav {
        margin-top: 20px;
        text-align: center;
      }

      a {
        display: inline-block;
        margin: 0 15px;
        text-decoration: none;
      }

      .no-margin {
        margin: 0px !important;
      }

      .section {
        margin-bottom: 10px;
        border-bottom: 1px solid #d3d3d3;
        padding-bottom: 10px;
      }
    `}</style>
  </Page>
)
