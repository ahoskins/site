import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'
import Meta from '../../components/post/meta'
import Snippet from '../../components/post/snippet'
import P from '../../components/post/paragraph'
import OL, { LI as OLI } from '../../components/post/numbers-list'

export default () => (
  <Post>
    <Head><title>The 1-1</title></Head>
    <Title>The 1-1</Title>
    <Meta date="August 20, 2017" />

    <Snippet>
        <P>
        “So, how’s it going?"
        </P>

        <P>
        “Good, good, yeah it’s going well.”
        </P>

        <P>
        “Nice, happy to hear.”
        </P>

        <P>
        “Yeah, getting things done and I feel the team is working really well together.”
        </P>

        <P>
        “Awesome, I've been happy with how things are going too.”
        </P>

        <P>
        …
        </P>

        <P>
        …
        </P>
    </Snippet>

    <P>
    The 1-1 is hard. It’s not that the above (imagine extrapolated for the whole 1-1) is entirely 
    bad conversation - it might be valuable to have these kind of positive and generic check-ins - but I always strive for 
    better, more stimulating conversations. But I find that consistently achieving this is quite difficult. 
    It’s even harder when the 1-1 is scheduled in the middle of a day of coding, the mind still in problem-solving-mode, not talking-mode.
    If effort isn't put in, a scheduled 1-1 can become a very transactional interaction with both sides just wanting to get through it and back
    to normal work.
    </P>

    <P>
    But a good 1-1 can be incredibly valuable to help grow as an engineer, and also provide a perfect opportunity to
    better know and understand another human being. Here’s the basic tips I try to follow for making the 1-1 as valuable as possible:
    </P>

    <OL>
        <OLI>
        Come prepared with 3-4 tangible topics to cover. Write them down concisely before the meeting - it’ll help with recall and focusing on these topics.
        </OLI>
        <OLI>
        Explicitly ask for feedback. Ask for feedback from something more specific if getting nothing valuable for an answer. 
        </OLI>
        <OLI>
        Don’t be afraid to change the topic. It’s not suppose to be a continuous flowing conversation, and getting side-tracked can consume too much time. Keep an eye on the time, and try to fit in all intended topics.
        </OLI>
        <OLI>
        If you walk somewhere out of the office, try to avoid somewhere loud and busy. It makes it hard to talk and hear, and is distracting.
        </OLI>
        <OLI>
        And finally (and the hardest) try to be your most honest and unguarded self. This will vary and evolve depending on the relationship with the manager, but hopefully over time openness increases (linearly, at worst). 
        </OLI>
    </OL>

    <P>
    Short list, but I think it’s a useful framework to enable productive 1-1 conversations. Just like any conversation, 
    it’s a bit of a learned art, practice helps a lot, and it’s always a work in progress.
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
