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
            name: "Sapiens",
            link: "https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316095",
            summary: "history of how our species progressed"
          },
          {
            name: "Waking Up",
            link: "https://www.samharris.org/podcast",
            summary: "many-topic podcast"
          },
          {
            name: "Melting Asphalt",
            link: "http://www.meltingasphalt.com/",
            summary: "long-form essays, often ambiguous open endings "
          },
          {
            name: "The Alchemist",
            link: "https://www.amazon.com/Alchemist-Paulo-Coelho/dp/0061122416m/",
            summary: "hero's journey, short and quotable classic"
          },
          {
            name: "Bret Victor",
            link: "http://worrydream.com/",
            summary: "lofty futurist ideas and computer utopia"
          },
          {
            name: "Siddhartha",
            link: "https://www.amazon.com/Siddhartha-Hermann-Hesse/dp/0553208845",
            summary: "journey of life, adventure, growth"
          },
          {
            name: "Conversations with Tyler",
            link: "https://www.mercatus.org/commentary/conversations-tyler",
            summary: "economics/society from many angles"
          },
          {
            name: "Happy City",
            link: "https://www.amazon.com/Happy-City-Transforming-Through-Design-ebook/dp/B009LRWHPY",
            summary: "how we build our cities/countries matters"
          },
          {
            name: "Surely You're Joking",
            link: "https://www.amazon.com/Surely-Feynman-Adventures-Curious-Character/dp/0393316041",
            summary: "fascinating person and life"
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
        position: relative;
      }

      a {
        margin-right: 30px;
        text-decoration: none;
        display: inline-block;
      }

      .summary {
        color: #999;
      }

      @media (min-width: 950px) {
        .summary {
          position: absolute;
          left: 250px;
        }
      }

      @media (max-width: 600px) {
        .summary {
          text-size: 9px;
        }
        a {
          display: block;
        }
      }
    `}</style>
  
  </div>
)