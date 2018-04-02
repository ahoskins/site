import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'
import Meta from '../../components/post/meta'
import Snippet from '../../components/post/snippet'
import P from '../../components/post/paragraph'
import OL, { LI as OLI } from '../../components/post/numbers-list'

export default () => (
  <Post>
    <Head><title>Humane Cities</title></Head>
    <Title>Humane Cities</Title>
    <Meta date="April 1, 2018" />

    <P>
        San Francisco is a beautiful city, but it's common to hear endless complaints about problems it has. The short list:
        homelessness, bad traffic, dirty streets, and unreliable slow trains and buses.
        The city is oriented around Market Street, which provides access to most major sections of the city. This street cuts right through the densest parts of the city, 
        all the way from Castro to the Embarcadero. It's straight, wide, and fairly flat the all the way.
        Surprisingly, Market Street itself doesn't usually have much congestion. It is only slowed down by lots of traffic lights with
        busy cross-streets like Van Ness, Montgomery, and Castro. The majority of the vehicles on Market itself are
        buses, street cars, taxies/ubers, and bikes. My half-formed idea is to remove most of the pavement on Market Street
        to convert it into a long-narrow park.
    </P>

    <P>
        I'm interested in city design, and the kind of behavior and lifestyle 
        it encourages. I've been interested in related areas since a young age. When I was a kid, I imagined
        being an architect or civil engineer (or both!) - designing and building
        bridges, roadways, planning how wide streets are (I didn't realize I'd have to be involved in politics also to do this). I also loved looking at public transit maps in cities, noticing all the
        lines of where the trains go (I still do this, but for more practical reasons now). And then many years later (a couple years ago), after I read the book Happy City, my interest was sparked again. 
        After reading this book and thinking about where I've lived and where I've traveled, I realized how impactful city design really is.
    </P>

    <P>
        I grew up in Edmonton, Canada. Edmonton has the unfortunate situation of being the northernmost
        city of over 1 million people in North America. It has bitter and long winters, a few months of glorious summer,
        and lots of uncertainty with weather in-between. Edmonton's also a spread out city. It occupies a massive
        land area across the Canadian prairies, and almost everyone lives in low-density neighborhoods. People in Edmonton drive cars everywhere. 
        The city is divided by a few major freeways and a river. There is a steep river-valley, and limited bridges across the wide river. 
        In addition to the freeways interior to the city, there is a ring-road highway around the city. Most destinations within the city will involve using
        one of these big roads. These roads are entirely incompatible with bikes or scooters (speed limit is too fast), and even for motorcycles
        they are quite scary (lots of reckless driving pick-up trucks, no lane-splitting, drivers not expecting bikes). The result: everyone is owning a car, and using it a lot.
        Want to go to Yoga class? Get in the car, and head down the freeway. Go to the University? Back in the car.
    </P>

    <P>
        I hate this way of living. And I know Edmonton is far from alone in this regard. Cities like LA are the quintessential
        example of suburban sprawl and collective reliance on cars. In fact, most cities in USA and Canada are plagued with this
        same problem of over-relying on cars, and being unfriendly to all other ways of getting around. I know there are benefits
        of suburb oriented cities (big house, yard, quiet, privacy), but building cities around needing cars is wasteful and silly
        on so many levels:
    </P>

    <OL>
        <OLI>
        Pollution: the most obvious downside. Three-tons of steel hauling around one person is just stupid. The size of the
        car is designed and bought for the edge case where it's full of people and luggage - going on a road-trip or all out to dinner.
        The issue is, this is an edge case and rarely is the car full like this.
        </OLI>
        <OLI>
        Community: I love the R.I.M. "Everybody Hurts" music video. In grade 9, my english class studied this video
        for what felt like a full month. I remember finding it weird that we'd spend so much time dissecting a 5-minute music
        video, but this remains one of the most impactful pieces of work I ever studied in school. Watch the video yourself, and let the message speak for itself.
        </OLI>
        <OLI>
        Cost: cars are one of the worst investments people make. It's easy to underestimate the total cost
        before owning, and once it's bought, cars easily end up being a huge financial burden. There
        are so many layers to the cost. The unavoidable depreciation, insurance cost, accidents and maintenance, parking cost, fuel, gadgets and upgrades
        within the car like stereos or tires. It's just a horrible investment for the individual, but in many situations it is the only option.
        </OLI>
    </OL>

    <P>
        Back to San Francisco. This city already offers one of best lifestyles in the USA (if you can afford to live here). It's small geographically,
        has only one freeway through it, the roads are mostly narrow with quiet 4-way stops, and most areas are very accessible by walking or biking. But Market Street feels like it's in a weird
        situation. It's a huge chunk of cement, super wide, but mostly buses and trollies. Since there are trains running under the street with frequent stops,
        many people opt to go underground when traveling along it. There are already tons of bike traffic and food traffic on street level. And with added electic
        ride-share options like Jump Bike, Scoot, and electric scooters, the amount of pedestrians at street-level will only increase.
    </P>

    <P>
        My very under-researched, back of the napkin idea is to make Market Street between Castro and
        Embarcadero mainly a park. I would imagine it similar to the Panhandle park, the 1 block wide and 3/4 mile long extension of Golden 
        Gate park, which is covered in grass, trees, with lots of runners and bikers, rollerskating, dogs (some of the dogs might even be rollerskating), and kids. The Panhandle is awesome. Being
        1 block wide is not too narrow to be functional - it's plenty of width, and the sheltering of trees on either side makes it feel like you aren't in a busy dense city.
    </P>

    <P>
        Could this be done for Market Street? I think maybe it could. Like said above, Market street
        itself is already not particularly busy, and it's mostly buses and above ground
        trains. Under Market already runs two-layers of public trains - the slow and tiny MUNI (city train), and big and loud BART (bay area train).
        I'm imagining something like this:
    </P>

    <OL>
        <OLI>
        The only traffic on the street is one-way each direction for buses. 
        This would be on the outer edge of both sides of the street. I wish it was avoidable to have any traffic at all, but this
        seems impossible due to the number of bus routes passing along the street right now.
        </OLI>
        <OLI>
        Then in the middle would be an oversized long and narrow park. It would be lined with trees on each side, grass, foliage,
        and a paved path in the middle. The path would be for people walking or running, and bikes would have full use of the bus lanes (as they do now).
        </OLI>
        <OLI>
        Allowing some cross-streets to pass through would be the biggest issue. I think every few blocks it would be unavoidable to have a cross road. 
        Building tunnels would be prohibitively expensive, especially given California's track record for construction projects. So every few blocks there 
        would have to be an traffic light with a busy street cutting through this park and bus/bike lane paradise. From Castro to Embarcadero
        there would maybe be about about 6-8 intersections (which is about 3-4 times less than there are right now). These would be busy busy
        crossings, but since there isn't much traffic on Market, so the lights could be timed to allow heavy-flow perpendicular to Market. 
        </OLI>
    </OL>

    <P>
        The essence of all this is me craving for cities to be more humane towards people walking and biking, and discouraging
        more driving in cars. I don't like cars, and want them to go away in our modern dense cities. I think my interest and craving for this kind of city mainly comes from years of living in the car-dominated Edmonton, and my
        growing frustration with this lifestyle. And it's sad to me that this is the default way for so many cities in USA and Canada. Visiting great cities in foreign countries like Taipei, Hong Kong, Zurich has also opened me up to different
        city designs and ways of life it allows. I encourage reading Happy City for a long-form analysis on this topic.
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
