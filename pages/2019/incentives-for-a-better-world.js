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
    inputs, sometimes chained on top of one another (like a Convolutional Neural Network). Single policies or environments will sway you into a particular direction.
    </P>

    <P>
    For example: in the choice of driving your car vs riding your bike, a policy that subsidizes parking will sway you towards driving. (And much to by dismay, making cities in
    North America do this. They don't in Tokyo apparently). Free parking does not mean that everyone will choose driving every time over biking, but it does play it's role
    to incentivize driving more.
    </P>

    <P>
    At an institutional level, it should be clear the affect of incentives because they are often directly measurable. A company may get a tax break to move money or invest
    in office space in a particular location in the world (see the whole Amazon HQ2 drama). A less direct and measurable example is something like universities. What is
    their incentive? They have no direct stake in their alumni future earnings. So their incentive is not to maximize future earnings of students. Whether one of their CS student becomes
    the next billion dollar founder vs working in tech support for life has no direct relation to the universities earnings. Of course, many successful students will add up to
    give their school pristige through association, and increase the chance of high alumni donations. But this is hard to measure, and has extremely lagging results spread way out over time (their alumni of today might not
    be billionaires until they are 50 years old). So I would universities in general don't have much incentive for future earnings of students. That is, traditional universities.
    </P>

    <P>
    There are recent ventures like Lambda school who have recognized this perverse misalignment of incentive. Lambda school makes the incentive for future earnings of students very explicit in
    it's business model. They charge no tuition up-front, and instead capture percent of future earnings for the next few years. To me, this is clearly better. This incentizes Lambda school
    to be actually true to their word of setting students up for successful careers. For more affirmation that Lamda school has got it right (which I strongly believe they do), follow Austin Alred on Twitter.
    He regularly reminds you of the deep sickness within traditional universities.    
    </P>

    <P>
    I'm interested in exploring what else in the world has non-optimal incentive structures. Some lose thoughts:
    </P>

    <OL>
        <OLI>
        Commission in retail jobs. This seems mostly correct because employees are motivated and directly rewarded for making a sale
        </OLI>

        <OLI>
        The free market of business in general has got it right. You will be rewarded through money for the value you capture through business. The local
        restaurant deserves the millions they can make if they become wildy popular. Similarly, founders of Uber deserve the billions they make through their venture. It's like a very successful restaurant, but at a massive more complex scale.
        involved in creating this business to be made billionaires.
        </OLI>

        <OLI>
        I feel there is some connection to incentives and good salespeople. Making a sale is usually about understanding what the buyer wants and what motivates them, 
    rather than simply explaining the product you are selling. So at a root level, sales is about finding these incentive structures in a particular other group. 
        </OLI>

        <OLI>
         I want to revisit that example above with biking and driving. One of the things that frustrates me most on a daily basis in SF is cars on the streets that I'm biking on.
         It's so absurd to me that they can drive aroud alone in those thousand pound massive pieces of metal on the streets without paying a fee everytime they use the road (especially main roads).
         We should continue having more incentives that sway towards biking or walking, and away from driving one person in a car. More scooters the better, more competition in transportation
         the better (let's go for some more privatized mass-transport like trains and other Uber-like inventions), more new models of bike ownership (like Vanmoof) the better.
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
