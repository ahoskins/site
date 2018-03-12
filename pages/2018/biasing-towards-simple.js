import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'
import Meta from '../../components/post/meta'
import Snippet from '../../components/post/snippet'
import P from '../../components/post/paragraph'
import OL, { LI as OLI } from '../../components/post/numbers-list'

export default () => (
  <Post>
    <Head><title>Biasing Towards Simple</title></Head>
    <Title>Biasing Towards Simple</Title>
    <Meta date="March 10, 2018" />

    <Snippet>
    <P>
    "Just buy FAANG stocks."
    </P>
    </Snippet>    

    <P>
    I have a problem with advice that simple.
    </P>

    <P>
    FAANG refers to the five most popular, trendy tech stocks - Facebook, Apple, Amazon, Netflix,
    and Google. Of course, these are all great businesses. They either earn enormous profits already (Apple, Facebook, Google),
    or are rising empires investing heavily (Amazon, Netflix). 
    </P>
    
    <P>
    But something else in common is how simple it
    is for the general public to superficially understand each business. They are all business to consumer companies with products that
    virtually everyone has used. Within this group of five they also have some of the most iconic founders of this century (Jobs, Zuckerberg, Bezos).
    To sum it up: these companies are culturally flashy and intellectually easy - and they make some of the least esoteric products in existence. 
    </P>

    <P>
    And they deserve high stock prices.
    </P>

    <P>
    But here's catch: when something is easy to understand, it biases to be overcrowded. This can be applied to many domains.
    </P>

    <P>
    Startups. Meal delivery is a simple sounding problem to solve. Everyone eats, and everyone has experienced frustration
    in getting quality food in a timely way. It's easy to think you understand meal delivery.
    </P>

    <P>
    Venture capital. Firms will be at least slightly biased towards funding products they would use. This will result in over-investing in things like $200/month subscription virtual assistent software - because the investors themselves are the perfect users for this product. 
    </P>

    <P>
    Sports. How long does it take to explain 90% of the rules that matter in most popular sports? About 20 seconds. There is a bias
    against complicated sports becoming popular.
    </P>

    <P>
    And, stocks. Back to FAANG. These companies are biased towards being popular because of their relative simplicity. In a market there is a forcing function towards the simple, and neglect of the complicated and poorly understand. The bias will operate at a number of levels:
    </P>

    <OL>
        <OLI>
        It's easy to talk about FAANG stocks. This is caused by Parkinson’s law of triviality (also known as bike shedding). This relates to the tendency for groups of people to give disproportionate attention to the simpler topics.
        </OLI>

        <OLI>
        The incentives for online media and news is to maximize clicks and views. It's wiser to report on Netflix than Salesforce.
        </OLI>

        <OLI>
        As individual investors, we often like to at least feel like we understand what we're buying. 
        </OLI>
    </OL>

    <P>
    My takeaway from this - play to your strengths, and don't be a sheep.
    </P>

    <style jsx>{`
        a {
            cursor: pointer
        }
        a:hover {
            text-decoration: underline
        }
        a:after {
            display: none
        }
    `}</style>
</Post>
)
