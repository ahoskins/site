import Meta from '../components/meta'
import Link from 'next/prefetch'

export default ({ children }) => (
  <div className="main">
    <div className="logo">
      <nav>
        <Link href="/"><a>hoskinsa.ca</a></Link>
        <a className="icon" target="_blank" href="mailto:andrew@andrewhoskins.ca">Mail</a>
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
