import Meta from '../components/meta'
import Link from 'next/prefetch'

export default ({ children }) => (
  <div className="main">
    <div className="logo">
      <Link href="/"><a>andrewhoskins.ca</a></Link>{" "}
      <a className="icon" target="_blank" href="mailto:andrew@andrewhoskins.ca">✉</a>
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

      .icon {
        font-size: 22px;
      }

      a {
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
