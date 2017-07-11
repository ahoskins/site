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
            <b>Summary:</b> I'm a software engineer. I like exploring, learning, and making things. I live in San Francisco.
          </div>
          <div className="section">
            <b>Work stuff:</b> I work at a place called <a className="no-margin" target="_blank" href="https://mesosphere.com">Mesosphere</a>. 
            We're <i>not</i> located in the sky, <i>but</i> we do build software that might help others get there. At Mesosphere, I 
            help build the UI for the datacenter operating system (DC/OS).
          </div>
          <div className="section">
            <b>Other stuff:</b> Many of the things I make can be found on <a className="no-margin" target="_blank" href="https://www.github.com/ahoskins">GitHub.</a> I
              like listening to podcasts on a variety of subjects and reading my kindle - some <Link href="/favorites"><a className="no-margin">favorites.</a></Link> When
              offline, I like to get out and see new <a className="no-margin" target="_blank" href="https://www.instagram.com/andrew.hoskins">places.</a> I'm               
              a pretty uncompromising optimist, this is an exciting world, and I'm very grateful to live in this time and place!
          </div>
        </div>
        <br />
        <nav>
          <a target="_blank" href="https://twitter.com/arhhoskins">Twitter</a>
          <Link href="/writing"><a>Writing</a></Link>
          <a target="_blank" href="https://www.linkedin.com/in/andrew-hoskins-05825991/">Linkedin</a>
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
