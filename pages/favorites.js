import Page from '../layouts/main'
import Link from 'next/prefetch'
import Head from 'next/head'

export default () => (
  <Page>
    <Head>
      <title>Favorites</title>
    </Head>
    <div className="posts">
      {
        [
          {
            name: "Waking Up",
            link: "https://www.samharris.org/podcast",
            summary: "podcast going deep into many topics"
          },
          {
            name: "Melting Asphalt",
            link: "http://www.meltingasphalt.com/",
            summary: "ambiguous long-form essays"
          },
          {
            name: "The Alchemist",
            link: "https://www.amazon.com/Alchemist-Paulo-Coelho/dp/0061122416m/",
            summary: "hero's journey, short, quotable"
          },
          {
            name: "Bret Victor",
            link: "http://worrydream.com/",
            summary: "lofty futurist ideas/vision"
          },
          {
            name: "Sapiens",
            link: "https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316095",
            summary: "cohesive history of how humans progressed"
          },
          {
            name: "Siddhartha",
            link: "https://www.amazon.com/Siddhartha-Hermann-Hesse/dp/0553208845",
            summary: "journey of life, adventure"
          },
          {
            name: "Conversations with Tyler",
            link: "https://www.mercatus.org/commentary/conversations-tyler",
            summary: "economics from many angles"
          },
          {
            name: "Happy City",
            link: "https://www.amazon.com/Happy-City-Transforming-Through-Design-ebook/dp/B009LRWHPY",
            summary: "dissects how we build our cities/countries"
          },
          {
            name: "Surely You're Joking, Mr. Feynman",
            link: "https://www.amazon.com/Surely-Feynman-Adventures-Curious-Character/dp/0393316041",
            summary: "fascinating person"
          },
        ]
        .map(({name, link, summary}) => (
          <Favorite 
            name={name} 
            link={link} 
            summary={summary} 
          />
        ))
      }
    </div>
  </Page>
)

const Favorite = ({name, link, summary}) => (
  <div className="favorite">
    <a target="_blank" href={link}>{name}</a>
    <span className="summary">{summary}</span>
    
    <style jsx>{`
      .favorite {
        margin-bottom: 10px;
        margin-left: 40px;
      }

      a {
        margin-right: 30px;
        text-decoration: none;
        display: inline-block;
      }

      .summary {
        color: #999;
      }

      @media (max-width: 600px) {
        .summary {
          display: none;
        }
      }
    `}</style>
  
  </div>
)