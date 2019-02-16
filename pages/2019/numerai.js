import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'
import Meta from '../../components/post/meta'
import Snippet from '../../components/post/snippet'
import P from '../../components/post/paragraph'
import OL, { LI as OLI } from '../../components/post/numbers-list'

export default () => (
  <Post>
    <Head><title>Numberai</title></Head>
    <Title>Numberai</Title>
    <Meta date="February 16, 2019" />  

    <P>
    In the last post, I talked a lot about the alignment of incentives for optimal outcomes. In this post, I'll expand on this idea in the context of an interesting
    company called Numerai. Numberai is a hedge fund that bridges two trendy industries: machine learning and cryptocurrencies. The company does really interesting things
    with setting up incentives in a way to optimize value for themselves and others.
    </P>

    <P>
    Numerai is a hedge fund startup. The founders had a background in traditional quantitative trading (think like Renaissance, Two Sigma, etc). Normal hedge funds work by hiring usually very educated quants to work directly
    for the hedge fund full-time and use computer programming, math, propiatary data to drive the investment decisions of their company. These companies are notoriously secretive, and employ a relatively
    small number of people. Numerai inverts this into an Uber-like model where they form a network of thousands and thousands of people who part-time participate in their business. For Numerai
    this means holding competitions for data scientests / mathematicians / anyone (there are no "hiring" requirements) to build models to make predictions based on data that Numberai gives them. These people put
    "stakes" on their predictions, which is in the form of a cryptocurrencies that the company created. If the prediction is successful, they are rewarded, and if the prediction is not, they lose the stake. It's unclear
    exactly how much the payoff could be, although I've heard anecdotally the some people have made over a million dollars on Numerai.
    </P>

    <P>
    It's really interesting where the boundaries of knowledge are in this system. To the data scientists that submit predictions, the data they receive is "hashed". So it's just symbols and numbers
    with no way to match them against measurements and entities in the real world. But it doesn't matter, because these people can still output a prediction about the data they receive from Numerai. And since the
    data is "hashed", the data scientists can't just directly trade equities that would give them a payoff. So the best they can do with the result of their models is submit a stake back on Numerai with their prediction.
    </P>

    <P>
    From within Numberai, the boundaries of knowledge are maybe even more interesting. They will receive these predictions without even knowing the models, credentials, or techniques of 
    those who submitted them. So Numerai will just use these predictions blind to any of the details that hedge funds would normally be aware of. But since the people submitting the predictions had a
    stake (money) on the line, it encourages quality. I'm unsure of how many of predictions Numerai will use in their actual trading decisions. It might be some sort of complicated weighted average or random sampling of
    possible predictions (details aren't public). In either case, Numerai captures upside from good predictions, but also the people submitting them get upside if their prediction was good.
    </P>
    
    <P>
    This is not how the traditional hedge fund industry works. I'm far from an expert, but after reading a bit it seems like these established players like Two Sigma or Renaissance
    don't do much with the newer machine learning techniques, and certainly don't use the kind of crowd-sourced and incentive games that Numberai does. It may be that a place like Renaissance is mainly only successful at this point because of a data advantage - they have stored
    decades of stock data in their database and so now even applying dated regression techniques will still lead to good results.  
    </P>

    <P>
    In the last post, I added a bullet point on how I think there should be a better model for compensation of software engineers at tech companies. Something like Numerai makes it
    seem more possible that there is room for a new model. It's elegant because it more tightly ties the actual work you produce with compensation and upside. 
    Instead of encouraging people to optimize for things like engaging in office politics, or impressing the right people to get upside (promotions, raises), Numerai is a much more pure model of rewarding the real work.
    </P>

    <P>
    It's easy to say, "wouldn't it be better if we could isolate and directly reward" something, but maybe a model like Numberai uses only works for very select types of work. Hedge funds and investing 
    are a strange world where 1% improvement is massively impactful. Would something like Numerai work for other domains like medical research? Is there anything to optimize in medical
    research where a 1% "improvement" matters? If transportation is crowdsourced to be 1% more efficient is this worthwhile? Is there a way to measure slight edges in the work that software engineers at Google do?
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
