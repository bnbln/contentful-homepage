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
import animationData from "./Hero.json";

export default function Hero(props) {
  return (
    <Section>
      <Container>
        <Flex gap={4} variant="responsive">
          <Box width="half" style={{position: "relative", zIndex: 0}}>
            {props.image && (
              <Player
              autoplay
              loop
              src={animationData}
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 20 }}
            >
              <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
              <GatsbyImage
                alt={props.image.alt}
                image={getImage(props.image.gatsbyImageData)}
              />
            </Player>
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
