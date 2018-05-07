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
    At the most fundamental level, what service is ClassPass? I think it's a fitness tool. ClassPass would be categorized as a
    fitness app, not a social app.
    </P>

    <P>
    But how does ClassPass convince you it's worthwile to signup? It shows people are having fun. Lots of marketing does this (watch a beer commerical). It's
    playing with our primal instincts of associating the happy people to the product. So the base level motivation (getting in shape) is very different from how it's advertised (as a social activity).
    </P>

    <P>
    This makes sense to center it around the social. ClassPass has network affects, they can get the flywheel going, building clusters of users especially in major urban centers.
    </P>

    <P>
    So who is the market for ClassPass? Is it not enough to want to be fit? Why layer on the social aspect? I'd say it's catering to those normally reluncant to do fitness, but can be pushed into the
    gym with encouragement of social pressure and signaling oppertunity. Very few people have the dedication to wake up at 6am, run 10 miles by
    themselves, or go to a quiet gym and do deadlifts and squats. So the pessimistic answer is ClassPass is capitalizing on the mediocrity of people.
    But the optimistic answer is ClassPass is expanding the market for people doing physical activity.  It's not trying to build a product
    for those with existing great fitness habbits.
    </P>

    <P>
    ClassPass can be compared to the rise of cross-fit. Is it more about fitness, or more about a new kind of cult and signaling mechanism?
    </P>    

    <P>
    What's the signaling value of using ClassPass or doing cross-fit? I think it signals that you care about fitness. "I'm going to body-core-burner at 11am Sunday. It's 
    though ClassPass". This signals you are into fitness. To the average person it sounds better and more interesting than if you just said "I'll go to my gym" - even though going to the gym by yourself
    could easily be a better workout.
    </P>

    <P>
    (Note: I think ClassPass is a good thing for the world.)
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