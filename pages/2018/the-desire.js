import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'
import Meta from '../../components/post/meta'
import Snippet from '../../components/post/snippet'
import P from '../../components/post/paragraph'
import OL, { LI as OLI } from '../../components/post/numbers-list'

export default () => (
  <Post>
    <Head><title>The Desire</title></Head>
    <Title>The Desire</Title>
    <Meta date="August 11, 2018" />  

    <P>
    A couple years ago when I was living alone for the first time on an 8-month internship, I was very into
    weekend programming side-projects. Maybe it was the location where I was living (4 hour drive from home in a small town
    outside Calgary). Maybe it was because it was the first time I ever lived alone. Maybe it was just the phase
    of my life (middle of University degree, finally specializing into more than "engineering" broadly). It was probably a combination of all the above. Whatever it was, during this period of time I started to really
    value the idea of using free-open time. Until that point, many years of my life had mostly been jammed full of commitments -
    I played a lot of sports, going between games and practices in high school. I didn't have significant chunks 
    of time on many days or nights where I could decide exactly how to fill that time. But there is one caveat. I believe
    in producting work output, or focused learning on some self-determined topic during that time. I hate the idea
    of draining all the time in a night or weekend by binging a TV show (I don't care about the lost social utility of watching
    these shows and movies). I believe in filling this time with extra work or learning that's precisely what you are drawn to.
    </P>

    <P>
    During those 8-months, I was drawn to learning as much as I could as possible about computer science and practical engineering
    skills. So this took the form of mostly either 1) reading on these topics (either blogs, Quora, books like SICP, Secrets of JavaScript Ninja) or 2)
    building shippable projects. Shippable projects is why I naturally gravitated towards web programming languages. I remember
    many weekends getting home from work on Friday, and so so excited to have two full days to work on building something
    I could commit to GitHub, publish on Pypy, or a website. I was inspired by people like John Resig, Zach Holman, Jordan Scales - who
    had online personalities and portfolios I admired. 
    </P>

    <P>
    This was also the phase of my life when I first got the idea
    of the city where I want my next internship to be. For some, the aim is more broadly to be in California, but for me it was to be in
    San Francisco. In retrospect I think wanting San Francisco specifically is because I like exploring big cities combined with the
    current small town I was living (30k people, a few restaurants worth going to, more deer on the streets than people after 9pm).
    </P>

    <P>
    While this period of my life was in some ways defined by deciding my next goal was San Francisco,
    it was also defined by this feeing of distance from this goal and being a sort of an outsider to this Californian tech world. I very happy
    during this time, but on these weekend in front of the computer, obsessively learning and building projects, I always felt like
    an underdog to it all. I had very few peers aiming for the same thing (most of my fellow interns were from the closest city to this
    town, and planned on returning after graduation or going to another company locally).
    </P>
    
    <P>
    But as I learnt about more engineering during all this open-free-time, learnt about the tech world, and about San Francsico, I had an ever-building desire 
    to make this dream of breaking into San Francisco actually happen. The idea shifted from the soft "dreamy" dream-world,
    where I didn't really know how hard it would be to get there...to something I felt was very in reach. I remember many many nights
    listening to the almost-all-very-inspiring dream-pop Beach House albums, loud, reading or coding on my computer, wondering what was
    possible with the next few years of my life. To this day, I love Beach House and what it represents for me. Even now, it takes me to back to this 
    feeling of forming dreams, hard-work, execution on them.
    </P>

    <P>
    So this post is really about dreams, and the desire to fulfill them. Letting them start fuzzy and extremely daunting. Allowing yourself
    to feel like an outsider to this dream reality. And using open-time to work hard. Then, waking up one day to realize the dreams no longer dreams,
    but your reality.
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
