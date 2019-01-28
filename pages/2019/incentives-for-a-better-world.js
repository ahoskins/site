import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'
import Meta from '../../components/post/meta'
import Snippet from '../../components/post/snippet'
import P from '../../components/post/paragraph'
import OL, { LI as OLI } from '../../components/post/numbers-list'

export default () => (
  <Post>
    <Head><title>Incentives for a Better World</title></Head>
    <Title>Incentives for a Better World</Title>
    <Meta date="January 27, 2019" />  

    <P>
    I've recently been struck with how significant "incentive design" is for shaping behavior of people and institutions. A choice made is some weighted function of many
    inputs, sometimes layered on top of one another (reminds me sort of like a <a target="_blank" href="https://en.wikipedia.org/wiki/Convolutional_neural_network">Convolutional Neural Network</a>). These inputs can be ranging from government policies, weather, genetics, etc, and they all add up to sway you into a particular direction.
    </P>

    <P>
    For example: in the choice of driving your car vs riding your bike, a policy that subsidizes parking will sway you towards driving. (And much to by dismay, many cities in
    North America do this by enforcing minimum parking requirements. They don't in <a target="_blank" href="https://medium.com/land-buildings-identity-and-values/tokyo-does-not-subsidise-its-transport-system-98f064f097b3">Tokyo!</a>). Free parking does not mean that everyone will choose driving every time over biking, but it does play its role
    to incentivize more driving.
    </P>

    <P>
    At an institutional/corporate level, the affect of incentives are sometimes clearly directly measurable. A company may get a tax break to move money or invest
    in office space in a particular location in the world (see the whole Amazon HQ2 drama!). But sometimes the incentives are a bit less direct and measurable. For example: traditional universities. What is
    their incentive? They have no direct stake in their alumni future earnings. So their incentive is not to maximize future earnings of students. Whether one of their CS student becomes
    the next billion dollar founder vs working in tech support for life has no direct relation to the universities earnings. It is true many successful students will add up to
    give their school pristige through association, and increase the chance of high alumni donations (and I think this only really applies at the top ~1% of school because of unusual concentration of high-performers). But the impact of alumni success on university earnings is hard to measure because it has extremely lagging results spread way out over time (their alumni of today might not
    be millionaires/billionaires until they are 50 years old). So I would say universities in general don't have a main incentive for future earnings of students. However, some non-traditional universities have flipped this!
    </P>

    <P>
    There are recent ventures like Lambda school who have recognized this perverse misalignment of incentive. Lambda school makes the incentive for future earnings of students very explicit in
    it's business model. They charge no tuition up-front, and instead capture percent of future earnings for the next few years. To me, this is clearly more optimal. This incentizes Lambda school
    to be actually true to their word of setting students up for successful careers. For more affirmation that Lamda school has got it right (which I strongly believe they do), follow <a target="_blank" href="https://twitter.com/AustenAllred">Austin on Twitter.</a>
    He regularly reminds us of the deep sickness within traditional universities.    
    </P>

    <P>
    I'm interested in exploring what else in the world has non-optimal incentive structures. Some loose thoughts about this topic in general (I'll likely append to this list over time):
    </P>

    <OL>
        <OLI>
        Commission in retail jobs. This seems mostly correct because employees are motivated and directly rewarded for making a sale. It seems like this kind of incentive structure
        could and maybe should be better implemented in other types of jobs (fast food, nursing, engineers). As something I'm familiar with, I think it's actually quite an inefficiency that software engineers don't
        usually get bonuses / "commission" (there are many ways to measure tangible business impact) as a main form of compensation. I don't know if this would cause strange secondary effects, but I think doing something to motivate
        engineers more towards "what's better for the company" rather than the often current bias towards "what's the more interesting problem to work on".
        </OLI>

        <OLI>
        Free market capitalism (in general) has got it right for incentive. You will be rewarded through money for the value you capture through business. The local
        restaurant deserves the millions they can make if they become wildy popular. Similarly, founders of Uber deserve the billions they make through their business. I don't see any issue with scaling up the level of success from millions to billions.
        </OLI>

        <OLI>
        I feel there is some connection to incentives and good salespeople. Making a sale is usually about understanding what the buyer wants and what motivates them, 
    rather than simply explaining the product you are selling. So at a root level, sales is about finding the buyer's incentive structures and exploiting them. 
        </OLI>

        <OLI>
         I want to revisit that example above with biking and driving. One of the things that frustrates me most on a daily basis in SF is cars on the streets that I'm biking on.
         It's absurd to me that they drive aroud alone in those thousand pound pieces of metal on the streets without paying a fee for using the roads (especially main roads shared with bikes and pedestians).
         We should continue having more incentives that sway towards biking or walking, and away from driving your own car in cities. More scooters the better, more competition in transportation
         the better (let's go for some more privatized mass-transport like trains and other Uber-like inventions), more new models of bike ownership (like <a target="_blank" href="https://www.vanmoof.com/en_us/plus">Vanmoof!</a>) the better.
        </OLI>
    </OL>


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
