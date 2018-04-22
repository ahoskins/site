import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'
import Meta from '../../components/post/meta'
import Snippet from '../../components/post/snippet'
import P from '../../components/post/paragraph'
import OL, { LI as OLI } from '../../components/post/numbers-list'
import Figure, { Image } from '../../components/post/figure'

export default () => (
  <Post>
    <Head><title>ClassPass</title></Head>
    <Title>ClassPass</Title>
    <Meta date="April 21, 2018" />

    <P>
    There are always layers for why we do things.
    </P>

    <P>
    Look at ClassPass's website: 
    </P>

    <Figure wide>
      <Image src="https://github.com/ahoskins/site/raw/master/resources/classpass.jpg" />
    </Figure>

    <P>
    At the most basic level why would someone signup for ClassPass? I think it's to get in shape. ClassPass would be categorized as a
    fitness tool/app.
    </P>

    <P>
    How does ClassPass convince you it's worthwile to signup? It shows people are having fun. Of course - lots of marketing does this (watch a beer commerical). It's
    playing with our primal instincts of associating the happy people to the product.
    </P>

    <P>
    And of course ClassPass has network affects, they can get the flywheel going, building clusters of users especially in major urban centers.
    </P>

    <P>
    Why is there a need for ClassPass? I'd say it's catering to those normally reluncant to do fitness, but can be pushed into the
    gym with encouragement of social pressure and signaling. Very few people have the dedicated enough to wake up at 6am, run 10 miles by
    themselves, or go to a quiet gym and do deadlifts. ClassPass is capitalizing on the mediocrity of people. It's not trying to build a product
    for those with great fitness patterns, and who have no issue at discipline in being active.
    </P>

    <P>
    By the way, I think comparisons can be made to the rise of cross-fit. Is it more about fitness, or more about a new kind of cult / signaling mechanism?
    </P>    

    <P>
    It's a good question to ask what's the signaling value of using ClassPass? I think it signals that you care about fitness. "I'm going to body-core-burner at 11am Sunday. It's 
    though ClassPass". This signals you are into fitness. To the average person it sounds better and more interesting than if you just said "I'll go to my gym"" - even though going to the gym by yourself
    could easily be a better workout.
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