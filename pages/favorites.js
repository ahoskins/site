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
            summary: "history of my species"
          },
          {
            name: "Waking Up",
            link: "https://www.samharris.org/podcast",
            summary: "from meditation to foreign policy"
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
            summary: "economics from many angles"
          },
          {
            name: "Happy City",
            link: "https://www.amazon.com/Happy-City-Transforming-Through-Design-ebook/dp/B009LRWHPY",
            summary: "how we build our cities matters"
          },
          {
            name: "Surely You're Joking",
            link: "https://www.amazon.com/Surely-Feynman-Adventures-Curious-Character/dp/0393316041",
            summary: "fascinating person and life, lots of good stories"
          },
          {
            name: "Come Back Frayed",
            link: "https://www.amazon.com/Come-Back-Frayed-Colin-Wright-ebook/dp/B018FRWJSK",
            summary: "travel as a way to expand perspective"
          },
          {
            name: "Antifragile",
            link: "https://www.amazon.com/dp/B0083DJWGO/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
            summary: "better understand a world we can't understand"
          },
          {
            name: "Sex at Dawn",
            link: "https://www.amazon.com/dp/B007679QTG/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
            summary: "lots of interesting history and ideas around a controversial topic"
          },
          {
            name: "The Elephant in the Brain",
            link: "https://www.amazon.com/Elephant-Brain-Hidden-Motives-Everyday/dp/0190495995",
            summary: "deception to ourselves and others, layered complex motives"
          },
          {
            name: "Dan Wang",
            link: "https://danwang.co/californian-dreams/",
            summary: "thoughtful writing, technology and culture"
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