import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'
import Meta from '../../components/post/meta'
import Snippet from '../../components/post/snippet'
import P from '../../components/post/paragraph'
import OL, { LI as OLI } from '../../components/post/numbers-list'

export default () => (
  <Post>
    <Head><title>Travel</title></Head>
    <Title>Travel</Title>
    <Meta date="May 25, 2018" />

    <P>
    Travel. In this post, I’ll try to summarize my thoughts on why I like to do it.
    </P>

    <P>
    First, I think it’s necessary to acknowledge how my childhood affected my desire and enjoyment of travel. I was lucky to grow up with a family who had the opportunity to travel. For one, we have family living in Switzerland, so we had reason to visit Europe every few years. My parents also went through the effort of planning an adventurous trip to China when I was in high school. I’m very thankful for this because it opened me up to the exciting Asian world (today I find Asia most interesting place to learn about and travel to).
    </P>

    <P>
    So of course my experience travelling growing up had an impact on my desire to travel as an adult. I do think a certain portion of the adult population (those who have the money to travel) simply doesn’t because they never experienced it growing up, so they continually undervalue travel. I’m not sure how big this group is (I know many people in it!), but I know I do not belong in this group.
    </P>

    <P>
    I’ll arrange the rest of this post into five further “hypothesis” into why I personally have the desire to travel now. 
    </P>

    <P>
    Hypothesis one: it’s just because I Travelled when I was growing up with my family. This is rather simple. My brain might just be wired to desire trips to far away countries on a regular basis, because this is what I did for years growing up.
    </P>

    <P>
    Hypothesis two: it might be a core human desire to explore, and this desire is expressed strongly in many people (like me). This is sort of an evolutionary argument, claiming that humans “just are” wanting to see new things. I think of this video: http://www.erikwernquist.com/wanderers/. I do think humans are meant to explore. We have a natural desire to go behind where we can see. Travel on airplanes is an obvious manifestation of this urge. 
    </P> 

    <P>
    Hypothesis three: I have short attention span, relentless curiosity on many levels, and travel is just that manifested into geographical locations. This could be an interesting one. I do have a seemingly never-ending urge to know more, and not fall back to complacency. I hate the idea of just “saving” money rather than doing things, or falling for the trap that of being stuck in a job / location. I love the feeling of “accomplishment” of knowing more, and being able to have an opinion of places based on personal experience.
    </P>

    <P>
    Hypothesis four: It’s social signalling, basically trying to raise social capital. Social capital can be traded for many things - a job, friends, relationships. There’s no doubt this is happening as a by-product of travel anyways. Travel experience generally makes someone appear of higher social status. Whether it is the main motivation is the question (I think not for me, but there is something strangely satisfying about Instagram likes and comments on travel photos).
    </P>

    <P>
    Hypothesis 	five: I’m focused on optimizing all the future present moments to be as interesting as possible, and when travelling it helps with this goal. I do think moment-by-moment, travel is generally more enjoyable than the moments of a more routine day (but not always the case!). I do think new things, unknown, or being afraid, decompresses time - and I like this. A week vacation just feels much longer than the typical work week in the office. Travel works against the tendency to zombie around. But I do think that in ordinary life (like living somewhere with a normal job), I think some randomness, and spontaneity can do the same. Even as simple as a new biking route to the office can help a lot.
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
