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
    <Head><title>Opt-in</title></Head>
    <Title>Opt-in</Title>
    <Meta date="December 12, 2017" />

    <P>
    I love having a smartphone with instant access to the internet, I get value from reading my Twitter feed, and Facebook is valuable to connect and coordinate
    with friends and family. But I wanted to make some changes to use these products in a more <b>opt-in way</b>. I want to be less hostage
    to the addictive design of these products. So rather than delete these accounts and apps, I've been taking some steps to use them in a
    more mindful way.  
    </P>

    <P>
    <b>iPhone:</b> I've put all my apps except for three into a single folder.
    </P>

    <Figure wide>
      <Image src="https://github.com/ahoskins/site/raw/master/resources/iphone.jpg" />
    </Figure>

    <P>
    I picked these tree apps because I frequently use them, and (I think?) have a net positive impact on my life. Spotify is my music, I love music, and I want quick
    access. Twitter is a great place to learn, get inspiration, read well-articulated perspectives. And the last app of three is Airmail, which is where all my digital letters arrive.
    </P>

    <P>
    Since all the apps are buried in a single folder, I use Spotlight search for almost everything. I open my phone with an intention to do something, and I'll use Spotlight to search for that thing. 
    I don't want to open my phone and be swiping side-to-side on my home screen admiring all my colorful apps, and getting sucked into them. I've also turned off all notification batches, because seeing the red number count bugs me and it's tedious to always be clearing them.
    </P>

    <P>
    <b>Twitter and Facebook:</b> Even though it's true that these apps are built to be addictive and controlling, I wanted a see what I could do to make me more in control, opting-in to
    where I point my attention.
    </P>

    <P>
    I built a <a href="https://chrome.google.com/webstore/detail/quieter-twitter-facebook/lmhjdnbnfcielbcincajlppehcbglpof?hl=en">chrome extension</a> that blocks the parts of these services that distract. For Twitter, this is Moments, Who to Follow,
    Trending links, and the auto-complete suggestions in search. 
    </P>

    <Figure wide>
      <Image src="https://github.com/ahoskins/site/raw/master/resources/twitter.png" />
    </Figure>

    <P>
    For the Twitter app I can't block the Trending tab, but I can change the language. So I've changed my trending location to Japan. This makes the tab content illegible, unless I spontaneously start understanding
    Japanese calligraphy.
    </P>

    <P>
    I'm also using the built-in muted words feature. Most of the words I block are political, highly emotional. 
    These words filter out a lot of the Tweets I don't care to see. All these tweets do is induce anger, frustration, and they distract from actually doing something productive.
    </P>

    <P>
    For Facebook, I've blocked most of the Explore options on the left, the Trending section (of course), Stories (they shouldn't have copied Snapchat anyways), and
    that chat sidebar.
    </P> 

    <Figure wide>
      <Image src="https://github.com/ahoskins/site/raw/master/resources/facebook.png" />
    </Figure>

    <P>
    This setup has been a big improvement for me over the past few months. <b>The aim is opt-in, rather than sucked-in.</b> I started thinking a lot about this after listening to <a href="https://www.samharris.org/podcast/item/what-is-technology-doing-to-us">this</a> conversation with
    design ethicist Tristan Harris. Where we direct our attention is a worthy concern.
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
