// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fit,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  thehaps: require("../assets/thehapslogo-white.svg"),
  road: require("../assets/road.jpg"),
  roadblock: require("../assets/roadblock.jpg"),
  concert: require("../assets/concert.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  iphone: require("../assets/iphone.png"),
  addEvent: require("../assets/add_event.gif"),
  detailview: require("../assets/detailview.gif"),
  filter: require("../assets/filter.gif"),
  listview: require("../assets/listview.gif"),
  mapview: require("../assets/mapview.gif")
};

preloader(images);

const theme = createTheme({
  primary: '#40c4ff',
  // primary: "#3498DB",
  secondary: "#2C3E50"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="secondary" style={{paddingTop: '0'}}>
            <Image src={images.thehaps} height="293px"/>
            <Heading size={1} fit textColor="primary">
              Local events in your hand!
            </Heading>
            <Appear><Heading size={4} textColor="white" textFont="primary">
              http://thehapsmap.com
            </Heading></Appear>
          </Slide>
          <Slide transition={["fade"]} bgColor="black">
            <Heading size={1} caps fit textColor="secondary" textFont="primary">
              The Problem:
            </Heading>
            <Heading size={2} fit textColor="primary" textFont="primary">
              Existing event sources...
            </Heading>
            <List textColor="white">
              <Appear><ListItem>Poor User-Experience</ListItem></Appear>
              <Appear><ListItem>Incomplete</ListItem></Appear>
              <Appear><ListItem>So. Many. Ads.</ListItem></Appear>
              <Appear><ListItem>Fragmented</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["spin"]} bgImage={images.concert} bgDarken={0.75}>
            <Heading size={2} caps textColor="white" textFont="primary">
              The Solution:
            </Heading>
            <BlockQuote>
              <Quote>A central, web-based application with multiple views and a clean, snappy UI.</Quote>
              <Cite>God</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Layout>
              <Heading textColor="secondary" textFont="primary" textAlign="left" >
                FEATURES:
                <Heading size={2} textColor="primary" textFont="primary" align='flex-start flex-start' textAlign="left">
                  Map View
                  <List textColor="secondary" style={{lineHeight: '1.5', marginTop: '30px', marginRight: "20px", listStylePosition: "outside", paddingLeft: "40px"}}>
                    <Appear><ListItem>Google Maps JS API</ListItem></Appear>
                    <Appear><ListItem>Custom SVG Markers</ListItem></Appear>
                    <Appear><ListItem>Content Preview Info Windows</ListItem></Appear>
                  </List>
                </Heading>
              </Heading>
              <Image src={images.mapview} height="600px" margin="20px"/>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Layout>
              <Heading textColor="primary" textFont="primary" textAlign="left" >
                FEATURES:
                <Heading size={2} textColor="secondary" textFont="primary" align='flex-start flex-start' textAlign="left">
                  List View
                  <List textColor="primary" style={{lineHeight: '1.5', marginTop: '30px', marginRight: "20px", listStylePosition: "outside", paddingLeft: "40px"}}>
                    <Appear><ListItem>Instant Toggle List/Map</ListItem></Appear>
                    <Appear><ListItem>Sorted by Time Value</ListItem></Appear>
                    <Appear><ListItem>3 Spots to Access Filter</ListItem></Appear>
                  </List>
                </Heading>
              </Heading>
              <Image src={images.listview} height="600px" style={{marginLeft: "120px"}}/>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Layout>
              <Heading textColor="secondary" textFont="primary" textAlign="left" >
                FEATURES:
                <Heading size={2} textColor="primary" textFont="primary" align='flex-start flex-start' textAlign="left">
                  Detail View
                  <List textColor="secondary" style={{lineHeight: '1.5', marginTop: '30px', marginRight: "20px", listStylePosition: "outside", paddingLeft: "40px"}}>
                    <Appear><ListItem>Full event description</ListItem></Appear>
                    <Appear><ListItem>Secondary category</ListItem></Appear>
                    <Appear><ListItem>Get directions</ListItem></Appear>
                  </List>
                </Heading>
              </Heading>
              <Image src={images.detailview} height="600px" style={{marginLeft: "120px"}}/>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Layout>
              <Heading textColor="primary" textFont="primary" textAlign="left" >
                FEATURES:
                <Heading size={2} textColor="secondary" textFont="primary" align='flex-start flex-start' textAlign="left">
                  Filter
                  <List textColor="primary" style={{lineHeight: '1.5', marginTop: '30px', marginRight: "20px", listStylePosition: "outside", paddingLeft: "40px"}}>
                    <Appear><ListItem>Filter by date range - datepicker</ListItem></Appear>
                    <Appear><ListItem>Filter by category</ListItem></Appear>
                  </List>
                </Heading>
              </Heading>
              <Image src={images.filter} height="600px" style={{marginLeft: "120px"}}/>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Layout>
              <Heading textColor="secondary" textFont="primary" textAlign="left" >
                FEATURES:
                <Heading size={2} textColor="primary" textFont="primary" align='flex-start flex-start' textAlign="left">
                  Add Event
                  <List textColor="secondary" style={{lineHeight: '1.5', marginTop: '30px', marginRight: "20px", listStylePosition: "outside", paddingLeft: "40px"}}>
                    <Appear><ListItem>Address geocoded</ListItem></Appear>
                    <Appear><ListItem>Date + Time = Unix Timestamp</ListItem></Appear>
                  </List>
                </Heading>
              </Heading>
              <Image src={images.addEvent} height="600px" style={{marginLeft: "120px"}}/>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.roadblock} bgDarken={0.75}>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Roadblocks
            </Heading>
            <List textColor="white">
              <Appear><ListItem>Lame google maps api packages. Un-stateful!</ListItem></Appear>
              <Appear><ListItem>Avoiding map reloads.</ListItem></Appear>
              <Appear><ListItem>Markers at same location, clustering.</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.road} bgDarken={0.75}>
            <Heading size={2} caps fit textColor="white">
              Roadmap
            </Heading>
            <List textColor="white">
              <Appear><ListItem>Adding events to calendars</ListItem></Appear>
              <Appear><ListItem>Search function</ListItem></Appear>
              <Appear><ListItem>Admin backend</ListItem></Appear>
              <Appear><ListItem>Upvoting, Tags, & Comments</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Technology Stack
            </Heading>
          </Slide>
          <Slide transition={["zoom"]} bgColor="secondary">
            <Image src={images.thehaps} height="293px"/>
            <Heading size={1} fit textColor="#40c4ff">
              http://thehapsmap.com
            </Heading>
          </Slide>
          {/* <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.concert} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide> */}
        </Deck>
      </Spectacle>
    );
  }
}
