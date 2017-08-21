import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'
import Meta from '../../components/post/meta'
import P from '../../components/post/paragraph'
import Code from '../../components/post/code'
import { H2, H3 } from '../../components/post/heading'

export default () => (
  <Post>
    <Head><title>UI Component Considerations</title></Head>
    <Title>UI Component Considerations</Title>
    <Meta date="August 13, 2017" />

    <P>
    UI component libraries have gotten very popular in the frontend world with tons of companies open-sourcing their libraries
    these days. And there are many similarities between them. They’ll typically contain the same kitchen sink of 
    components: things like buttons, checkboxes, text inputs, lists, and layout/structure components. They'll have some kind of
    isolated CSS design, using something like CSS modules or CSS directly in JavaScript. But the interesting thing to focus our
    attention on is the differences between these UI component libraries, because our goal as an industry (and as individuals) is to keep
    critiquing and improving.
    </P>

    <P>
    At the core, a UI component library is about building an abstraction for developers. Instead of constructing our page with <Code>&lt;div&gt;</Code> and <Code>&lt;a&gt;</Code> and
    allowing arbitrary CSS and properties, we want to work in a nice semantic API using components like <Code>&lt;Pane&gt;</Code> and <Code>&lt;Button&gt;</Code> offering only the
    variants we need. But there’s lots of questions to ask when designing these abstractions. Should the components wrap basic HTML elements like 
    headings? Should the components automatically optimize for accessibility? Is custom CSS allowed to be passed into components?
    </P>

    <P>
    A quick aside on the "science" of this all. The above is just a sample of questions with non-obvious answers. 
    And different UI component libraries may answer these questions in (sometimes subtly) different ways, with good reason for
    each approach.
    It would be great if there was a universal science to this all. If we could create a type of A/B test, measure some kind of output, and ultimately
    arrive at a conclusion for the perfectly optimal UI component library. But this stuff is largely about trying to minimize cognitive load of
    developers, allow the codebase to scale with a growing team, change with an evolving product, and much more. There’s a lot of variables, and many 
    are hard or impossible to measure. So! There we have it - it’s not a science at all.
    </P>

    <H2>Example</H2>

    <P>
    But science of not, let’s look at this question about accessibility. Should the components automatically optimize for 
    accessibility? A tangible example:
    </P>

    <P>
    Say we want a button component and link component. From a visual perspective, we usually think of buttons as looking like this:
    </P>

    <P>
    <button>button</button>
    </P>

    <P>
    And links like this:
    </P>

    <P>
    <a>link</a>
    </P>

    <P>
    But from an accessibility perspective, there’s a more discrete difference. A <Code>&lt;a&gt;</Code> should always contain a valid “href”
    pointing somewhere, whereas a <Code>&lt;button&gt;</Code> is used for triggering an action on the page and cannot container an “href”. With 
    this in mind, there a few ways to design components for buttons and links.
    </P>

    <H3>Option A: visual-centric API approach</H3>

    <P>
    Make components <Code>&lt;ui_button&gt;</Code> and <Code>&lt;ui_link&gt;</Code>. Give each component an <b>optional</b> “href” property. 
    If passed a valid value as the “href”, the component will render into a <Code>&lt;a&gt;</Code> tag because this is consistent with accessibility standards.
    If there is not “href” property passed, render into a <Code>&lt;button&gt;</Code> tag.
    </P>


    <P>
    <b>Pro:</b> in a big codebase, a link <Code>&lt;a&gt;</Code> might sometimes be styled to look like buttons. This API makes this easy because 
    the “href” can simply be passed to the <Code>&lt;ui_button&gt;</Code> component.
    </P>

    <P>
    <b>Con:</b> It’s a bit awkward and strange to accept a property “href” into a component called <Code>&lt;ui_button&gt;</Code>.
    </P>

    <H3>Option B: markup-centric API approach</H3>

    <P>
    Make components <Code>&lt;ui_button&gt;</Code> and <Code>&lt;ui_link&gt;</Code>. Require <Code>&lt;ui_link&gt;</Code> to pass something 
    valid in the “url” property, but disallow the "url" property in buttons. The <Code>&lt;ui_button&gt;</Code> component will always render 
    into a <Code>&lt;button&gt;</Code> tag, and <Code>&lt;ui_link&gt;</Code> will always render into a <Code>&lt;a&gt;</Code>.
    </P>

    <P>
    <b>Pro:</b> more intuitive API where <Code>&lt;ui_button&gt;</Code> and <Code>&lt;ui_link&gt;</Code> will always render <Code>&lt;button&gt;</Code> 
    and <Code>&lt;link&gt;</Code> tags, respectively. 
    </P>

    <P>
    <b>Con:</b> in our big codebase with links <Code>&lt;a&gt;</Code> that want to look like buttons, this won’t be possible unless we allow custom CSS styles in 
    <Code> &lt;ui_link&gt;</Code> or extend the API to include all the button styles.
    </P>

    <H2>Conclusion</H2>

    <P>
    There is probably also an option C and D, or a way to tweak and improve option A, etc, etc. The point is, as far as I can tell, 
    there isn’t an obviously correct way to design UI component APIs, especially when considering added factors like accessibility. 
    Maybe someday when the overlord AI has conquered this field and makes a science out of it, we’ll have some concrete recommendations 
    on this stuff. But until then, keep criticizing those UI components and striving to improve.
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
