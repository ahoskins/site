export default ({ children }) => (
  <h1>
    <a href="#">{ children }</a>
    <style jsx>{`
      h1 {
        font: 18px Helvetica Neue, Helvetica,
          Arial, "Lucida Grande", sans-serif;
        font-weight: 500;
        margin-bottom: 10px;
      }

      a {
        color: grey;
        text-decoration: none;
      }

      a:after {
        display: none;
      }
    `}</style>
  </h1>
)
