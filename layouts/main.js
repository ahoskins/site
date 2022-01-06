import Meta from '../components/meta'
import Link from 'next/link'

export default ({ children }) => (
  <div className="main">
    <div className="logo">
      <nav>
        <Link href="/"><a>ahoskins.xyz</a></Link>
        <a className="icon" target="_blank" href="mailto:arh.hoskins@gmail.com">(contact)</a>
      </nav>
    </div>

    { children }

    { /* global styles and meta tags */ }
    <Meta />

    { /* local styles */ }
    <style jsx>{`
      .main {
        padding: 25px 50px;
      }

      .logo {
        padding-bottom: 50px;
      }

      a {
        display: inline-block;
        margin: 0 15px;
        text-decoration: none;
      }

      @media (max-width: 500px) {
        .main {
          padding: 25px 15px;
        }

        .logo {
          padding-bottom: 20px;
        }
      }
    `}</style>
  </div>
)
