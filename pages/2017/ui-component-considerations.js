import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'
import Meta from '../../components/post/meta'
import P from '../../components/post/paragraph'
import Code from '../../components/post/code'
import { Ref, FootNotes, Note } from '../../components/post/footnotes'

export default ({ views }) => (
  <Post>
    <Head><title>UI Component Considerations</title></Head>
    <Title>UI Component Considerations</Title>
    <Meta date="February 4, 2017" views={ views } />

    <P>
        Hello there.
    </P>
  </Post>
)

const links = [
  'http://elm-lang.org/blog/compiler-errors-for-humans',
  'https://i.imgur.com/OANtEbP.jpg',
  'http://fb.me/react-warning-keys',
  'http://php.net/manual/en/keyword.paamayim-nekudotayim.php#69537'
]