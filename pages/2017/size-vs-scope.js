import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'
import Meta from '../../components/post/meta'
import Snippet from '../../components/post/snippet'
import P from '../../components/post/paragraph'
import OL, { LI as OLI } from '../../components/post/numbers-list'

export default () => (
  <Post>
    <Head><title>Size vs Scope</title></Head>
    <Title>Size vs Scope</Title>
    <Meta date="December 17, 2017" />

    <P>
    From the first seven months of full-time work as a software engineer, I've learnt lots about the process
    of code review and writing mergeable pull requests (PRs). Some thoughts:
    </P>

    <OL>
        <OLI>
        Lines of code is often a bad measure of complexity. A better way I like to think of it is "surface area". Imagine the entire codebase as a huge mesh of connections and capibilities. Then notice how much of the mesh is being affected by this pull request. Sometimes all 500 lines of a PR is isolated in its own segment of the mesh, connected to the rest by a single strand. This makes it easy to reason about and test. Sometimes 10 line PRs are a minefield of affects, tugging at every piece of the mesh. These are hell.  
        </OLI>
        <OLI>
        Testibility is extremely important. Adding a bunch of code without an interface to test against puts reviewers in a tough position. Are they suppose to just trust that this code is precisely what's needed?
        </OLI>
        <OLI>
        Descriptions on PRs are way more important than we think. Be as terse as possible (no one likes unnecessary reading), make use of text formatting, and include testing instructions. Include something visual (image or gif)
 if you can. People like watching mini demos.
        </OLI>
        <OLI>
        Review comments are gifts. It's no ones full-time job to review your code. Be gracious, polite, and appreciative of all suggestions - agree or not. 
        </OLI>
    </OL>

    <P>
    Quick PR cycles make everyone happy, feeling productive, and fresh. Make pull requests last like bananas, not fine wines.
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
