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
            <b>Summary:</b> I'm a software engineer in the day (sometimes at night). I'm interested in many ideas and experiences. I like <a className="no-margin" target="_blank" href="https://www.instagram.com/andrew.hoskins">exploring</a>, <Link href="/favorites"><a className="no-margin">learning</a></Link>, and <a className="no-margin" target="_blank" href="https://www.github.com/ahoskins">making things</a>. I live in San Francisco, but was raised in western Canada.
          </div>
          <div className="section">
            <b>Work stuff:</b> I work at Affirm.
          </div>
          <div className="section">
            <b>Other stuff:</b>
            <ul>
              <li>Fundamentally an optimist, even though it doesn't always appear that way</li>   
              <li>Wandering the streets of a new city is a great way to spend a day</li>           
              <li>City design is deeply important in affecting how people live daily</li>
              <li>Learning approach is, "throw me into the deep end, and I'll improve over time"</li>              
              <li>Love travel, but bad at learning new language and remembering names or details</li>          
              <li>If feeling tired / unmotivated, getting outside in the sun always helps</li>      
              <li>Cheap street food (where cooking can be seen and smelled) is often the best food</li>  
              <li>A small portion of people do most of the original thinking for society, others follow</li>       
              <li>People should be more aware of cognitive biases</li> 
              <li>We should be more keenly aware of incentive structures</li>             
              <li>Gratitude is underrated, even though it's cliche</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
            </ul>
          </div>
        </div>
        <br />
        <nav>
          <a target="_blank" href="https://twitter.com/_ahoskins">Twitter</a>
          <Link href="/writing"><a>Writing</a></Link>
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
