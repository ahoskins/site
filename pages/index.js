import Page from '../layouts/main'
import Link from 'next/link'
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
          Adventuring in physical and digital space. Passionate about being happy. I'm currently a software engineer at Affirm where I've worked on billing systems, messaging, and growth.
          </div>
        </div>
        <br />
        <nav>
          <a target="_blank" href="https://twitter.com/_ahoskins">Twitter</a>
          <a target="_blank" href="https://www.linkedin.com/in/andrew-hoskins-05825991/">LinkedIn</a>
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
