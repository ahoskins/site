import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'
import Meta from '../../components/post/meta'
import Snippet from '../../components/post/snippet'
import P from '../../components/post/paragraph'
import OL, { LI as OLI } from '../../components/post/numbers-list'

export default () => (
  <Post>
    <Head><title>The Uncomfotable Truth of Salary</title></Head>
    <Title>The Uncomfotable Truth of Salary</Title>
    <Meta date="August 11, 2018" />  

    <P>
    It makes us a bit uncomfortable to think about, but salary of a job is rarely in proportion to how difficult it is.
    We like to think we can be paid within the exact amount that is fair for us on the ladder of job skills, but fairness as a function of
    skill alone rarely exists.
    </P>

    <P>
    Why is it that an intern software engineer can get commonly paid $40-$50 / hour (in Silicon Valley), but the same age / same amount of
    school / same high school grades / equivalent resume journalism student will be unpaid in their internship. In this case
    maybe you could try to make the argument - "well, software engineering is harder, that student had to work more to get that
    internship than the journalism version of that 20 year old". And sure, even if on average engineering is a harder program with
    higher entrance grades (which it likely is), the infinitely different salaries of internship still can't 
    be explained by this purist "difficulty of job" metric. In this particular case, a weird kind of "luck" is the biggest factor
    that actually determines your starting salary. This is a "luck" of your interests and natural strength. It just happens to be that the people who enjoy writing for and while loops and messing with CSS
    are rewarded very highly by our current world.
    </P>

    <P>
    Many engineers in Silicon Valley seem to talk about (brag) how their job is actually
    very easy. And not just easy because they are given 3 meals a day, fully-stocked kitchen, unlimited vacation, office dogs (for better
    or for worse), and better snacks than most single grocery stores could supply. But engineers often say it's easy in the way that the actual tasks and work itself is often surprisingly simple. I've
    heard it explained as "my job is mostly pattern matching". (In software engineering, pattern matching refers to just looking for
    chunks of text that all need slight editing. The editing itself is usually pretty trival - something like adding a few of the same
    characters in 100 places in a codebase, or removing something in 70 places). I've pattern matched for $40 an hour as an intern,
    and I've pattern matched for over $40 an hour as a full-time engineer. So these people bragging about their jobs
    being easy most of the time, are right. 
    </P>
    
    <P>
    And just a quick aside: can this kind of pattern matching be automated? Answer: not really. With better developer tools some of these chores can be sped up (and some can indeed be eliminated),
    but there will always be a certain set of tasks that are just above the level of automation, and
    way below of the level of rigorous thinking.
    </P>

    <P>
    So let's back to the idea of salary/compensation matching the difficulty of the job. Let's compare some really contrasting
    job titles now. Imagine a top-level managerial role in a big tech company. Imagine this person's
    day in your mind. Now think of a call-center worker living in the mid-west. Think of their day. What does the tech company mid-level leader do? They easily
    could find themselves in a role where they just delegate work, and would self-admit to their job being easier than many people who work
    for them, or work for the person who works for them. They will likely be obligated to answer to emails off-hours, and put in the time when it matters (an occasional late-night, unxpected interruption on the weekend),
    but many days could be very enjoyable. Maybe they will head in after a round of golf in the morning, maybe another day
    they will leave early to go to their kid's soccer game. Now imagine the call-center worker. Everyday is basically the same. You come in the buliding at the same
    time. If your bus was late due to circumstances you can't control, you'll probably get yelled at by someone with an alias "boss". You sit in
    some chair in a big bland basic building. You're forced to pay $2 for bad quality coffee at the on-site vending machine because
    it's all the time you're break will afford you. You have to be getting rejections all day from people on the other end of the phone.
    </P>

    <P>
    One conclusion from this is something like what the movie 'Sorry to Bother You' seems to be pushing. It calls for some kind of revolt
    against the management who are exploiting them. While I agree that these workers may be underpaid and undervalued as individuals,
    I'm pretty unconvinced by the revolting and demanding drastically higher (or equal?) compensation. Just because the director of finance
    may have an "easy job" now, doesn't mean the whole path to that job has been easy. And that brings me back to the original ideal: people are not compensated for the difficulty of what they do in the present job. 
    What did it take to get that cushy high-paying director job? Maybe it was 10 years of working as an individual contributer at other top companies.
    </P>

    <P>
    There in asymmetries everywhere in the world. Payoffs can be huge in many any domain - think of the most successful athletes and entrepreneurs for
    the most extreme examples. And payoffs will not be linear within a domain. So as much as it would give us a sense of justice and satisfaction, it would be shocking if
    something like salary scaled in proportion with difficulty and skill needed to do a particular job.
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
