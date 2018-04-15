import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'
import Meta from '../../components/post/meta'
import Snippet from '../../components/post/snippet'
import P from '../../components/post/paragraph'
import OL, { LI as OLI } from '../../components/post/numbers-list'

export default () => (
  <Post>
    <Head><title>Dreams</title></Head>
    <Title>Dreams</Title>
    <Meta date="April 15, 2018" />

    <P>
    It takes a lot of effort for the mind to not be highly influenced by the 
surroundings. The mind is not an immutable device that can be locked 
in place, with consistent ways of thinking over time. Our minds are so 
fragile that something as basic as weather has influences us. Where we live, and who we spend time with are probably the biggest influences that will affect our truest nature.
    </P>

    <P>
I like to think of the mind is a giant, always changing mathematical function.
The function definition is always being re-written by everything that affects a person in any way. 
These range from the biological factors - like DNA, food, parasites, disease - to the experienced factors like, family, friends, location. So our mind is a function, it’s influenced by much, and we can say the purpose of this function is to solve goals. A goal is the input to the function (anything as simple as deciding what to eat, to deciding where to live), and the output of the function is the "answer" to the goal (either an absolute decision, or could just be deciding to do nothing).
</P>

    <P>
With this all in mind, I think it's interesting that the concept of having "dreams" are often framed as an immutable characteristic of a person.  People often encourage others to "look back at what they wanted to do when they were a young child", and pursue that. A common interview or counseling discussion will often result in something said like:  “what do you want in 5 / 10 / 20 years”? I don’t think it’s valuable to answer this question on such a long time horizon.

It's kind of ridiculous to think that just because you wanted something in the past
or want something now, that you will always want it. If you agree with the previous sentence, then you should agree that a dream you had a decade ago should not bind you to working towards that dream today.  We should be okay with letting many dreams come and go. It's proof of the ever-changing "function" your mind is.
</P>

    <P>
When we answer the question, "what are my dreams?", it's easy to be highly influenced by the past self.  
We’ll feel the urge to retrieve many of the dreams we had in the past. We remember ourselves as a 10 year old child, 
and recite, ”I wanted to be a professional athlete”. But what use does this have? It’s not important what we wanted when we were 10 years old. We should operate from what we want right now. 
Dreams from past shouldn't be dreams in the present, but we often feel the urge to retain them.
</P>

    <P>
But on the other extreme, we also can be overly influenced by recency. Maybe we just got back from a 1-month trip across Europe. We come back, and tell people "I dream to quit my job, and travel full-time, working part-time along the way". Maybe this is actually a dream, and something you want. But in the current moment, you're being highly influenced by the recent memories and mindset developed while on your trip. 
</P>

    <P>
    We need to find a balance between the two poles. One pole is overly biased from recency of experience, or the current environment. The other poll is holding on to ideals and dreams from the past for too long, even with the addition of new relevant knowledge and experience. 
    </P>
    <P>
When thinking of my own dreams, I like to ask a simple question for each dream. For each dream, ask how long has this been a dream for? Just notice the answer to this question, and iterate the dream, refine the broader list, maybe throw some away, add some. And no matter how complete the list feels, don't nail it to the wall. 
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
