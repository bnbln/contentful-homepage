import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import {
  Box,
  ButtonList,
  Container,
  Flex,
  Heading,
  Kicker,
  Section,
  Subhead,
  Text,
} from "./ui"
import animationdata from "./Hero.json";

export default function Hero(props) {
  return (
    <Section>
      <Container>
        <Flex gap={4} variant="responsive">
          <Box width="half" style={{position: "relative", zIndex: 0}}>
            {props.image && (
              <>
              <Player
              autoplay
              loop
              src={animationdata}
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 20, outline: "10px solid #ffd500" }}
            >
              <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
            <GatsbyImage
            alt={props.image.alt}
            image={getImage(props.image.gatsbyImageData)}
          />
              </>
            )}
          </Box>
          <Box width="half">
            <Heading as="h1">
              {props.kicker && <Kicker>{props.kicker}</Kicker>}
              {props.h1}
            </Heading>
            <Subhead as="h2">{props.subhead}</Subhead>
            <Text as="p">{props.text}</Text>
            <ButtonList links={props.links} />
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageHeroContent on HomepageHero {
    id
    kicker
    h1: heading
    subhead
    text
    links {
      id
      href
      text
    }
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
