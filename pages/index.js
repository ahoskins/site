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
        <br />
        <div>
        I like <b>exploring</b>, <b>learning</b>, and <b>making things</b>. 
        <br />
        Living in San Francisco is amazing for seeing new <a className="no-margin" target="_blank" href="https://www.instagram.com/andrew.hoskins">places</a>. 
        <br />
        I'm a big fan of listening to podcasts, and reading my kindle and blogs - some <a className="no-margin" target="_blank" href="/favourites">favourites</a>. 
        <br />
        Many of the things I make can be found on <a className="no-margin" target="_blank" href="https://www.github.com/ahoskins">GitHub</a>.
        <br />
        <br />
        I’m an optimist, and very grateful to live in this time and place.
        <br />
        <br />
        I work as a software engineer at <a className="no-margin" target="_blank" href="https://mesosphere.com">Mesosphere</a>.
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
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;
      }

      .main {
        text-align: center;
        margin: 0 50px;
      }

      h2 {
        font-size: 20x;
        font-weight: normal;
      }

      nav {
        margin-top: 20px;
      }

      a {
        display: inline-block;
        margin: 0 15px;
        text-decoration: none;
      }

      .no-margin {
        margin: 0px !important;
      }
    `}</style>
  </Page>
)
