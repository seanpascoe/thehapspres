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
  addEvent: require("../assets/add_event.gif"),
  detailview: require("../assets/detailview.gif"),
  filter: require("../assets/filter.gif"),
  listview: require("../assets/listview.gif"),
  mapview: require("../assets/mapview.gif"),
  github: require("../assets/github.png"),
  googlemap: require("../assets/googlemap.png"),
  heroku: require("../assets/heroku.png"),
  js: require("../assets/js.png"),
  materialize: require("../assets/materialize.png"),
  momentjs: require("../assets/momentjs.png"),
  mongodb: require("../assets/mongodb.png"),
  nodejs: require("../assets/nodejs.png"),
  react: require("../assets/react.png"),
  redux: require("../assets/redux.png")
};

preloader(images);

const theme = createTheme({
  primary: "#40c4ff",
  // primary: "#3498DB",
  secondary: "#2C3E50"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="secondary" style={{paddingTop: "0"}}>
            <Image src={images.thehaps} height="293px"/>
            <Appear><Heading size={4} textColor="primary" textFont="primary">
              http://thehapsmap.com
            </Heading></Appear>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} fit textColor="secondary" textFont="primary">
              What's the haps!?
            </Heading>
            <Appear><Heading size={4} textColor="white" margin="30px 0px">
              The best way to discover local events!
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
                <Heading size={2} textColor="primary" textFont="primary" align="flex-start flex-start" textAlign="left">
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
                    <Appear><ListItem>Sorted by Time</ListItem></Appear>
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
                    <Appear><ListItem>Filter by date</ListItem></Appear>
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
              <Appear><ListItem>Avoiding map reloads</ListItem></Appear>
              <Appear><ListItem>Markers at same location, clustering</ListItem></Appear>
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
          <Slide transition={["slide"]} bgColor="secondary" style={{paddingLeft: "15px !important", paddingRight: "15px !important"}}>
            <Image src={images.js} height="170px" style={{margin: "10px"}} />
            <Image src={images.github} height="170px" style={{margin: "10px"}} />
            <Image src={images.googlemap} height="170px" style={{margin: "10px"}} />
            <Image src={images.heroku} height="170px" style={{margin: "10px"}} />
            <Image src={images.materialize} height="170px" style={{margin: "10px"}} />
            <Heading size={2} caps fit textColor="primary" textFont="primary" style={{padding: "10px"}}>
              Technology Stack
            </Heading>
            <Image src={images.momentjs} height="170px" style={{margin: "10px"}}/>
            <Image src={images.mongodb} height="170px" style={{margin: "10px"}}/>
            <Image src={images.nodejs} height="170px" style={{margin: "10px"}}/>
            <Image src={images.react} height="170px" style={{margin: "10px"}}/>
            <Image src={images.redux} height="170px" style={{margin: "10px"}}/>
          </Slide>
          <Slide transition={["zoom"]} bgColor="secondary">
            <Image src={images.thehaps} height="293px"/>
            <Heading size={1} fit textColor="#40c4ff">
              http://thehapsmap.com
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
