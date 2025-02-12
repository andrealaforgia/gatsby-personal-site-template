import React, { useContext } from "react"
import { graphql } from "gatsby"
import ThemeContext from "../utils/theme"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ data }) => {
  const { unemployed, firstName, lastName, occupation } = data.site.siteMetadata
  const { dark } = useContext(ThemeContext)
  return (
    <PageLayout>
      <SEO title="Home" />
      <Container className="text-center pt-5 mt-5" fluid>
        <Image
          width="260"
          height="260"
          fluid
          roundedCircle
          src={dark ? `../../icons/darth-vader.png` : `icons/r2-d2.png`}
          alt={dark ? "Darth Vader" : "R2-D2"}
        />
        {unemployed && (
          <p className="mt-2">
            <b> Hey! I am looking for new opportunities :)</b>
          </p>
        )}
        <Container className="py-0 my-0">
          <h1
            style={{
              fontSize: "5rem",
              fontWeight: "600",
            }}
          >
            <span className="first-name">{firstName}</span>&nbsp;
            <span className="last-name">{lastName}</span>
          </h1>
          <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
              }}
          >
            <i>
              <span className="occupation">{occupation}</span>
              {/*{occupation} by day,&nbsp;*/}
              {/*{dark ? `Imperial enforcer by night` : `Rebel scum by night`}*/}
            </i>
          </p>
        </Container>
        <hr className="my-3 w-25" />
        <div className="d-md-inline-flex icons-container">
          <a
            href="https://www.github.com/andrealaforgia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="icons github"
              title="GitHub"
            />
          </a>
          <a
            href="https://linkedin.com/in/andrealaforgia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="icons linkedin"
              title="LinkedIn"
            />
          </a>
          {/*<a*/}
          {/*  href="https://www.freecodecamp.org"*/}
          {/*  target="_blank"*/}
          {/*  rel="noopener noreferrer"*/}
          {/*>*/}
          {/*  <FontAwesomeIcon*/}
          {/*    icon={["fab", "free-code-camp"]}*/}
          {/*    className="icons fcc"*/}
          {/*    title="FreeCodeCamp"*/}
          {/*  />*/}
          {/*</a>*/}
          {/*<a*/}
          {/*  href="https://www.hackerrank.com/"*/}
          {/*  target="_blank"*/}
          {/*  rel="noopener noreferrer"*/}
          {/*>*/}
          {/*  <FontAwesomeIcon*/}
          {/*    icon={["fab", "hackerrank"]}*/}
          {/*    className="icons hr"*/}
          {/*    title="Hackerrank"*/}
          {/*  />*/}
          {/*</a>*/}
          {/*<a*/}
          {/*  href="mailto:johndoe@some.invalid"*/}
          {/*  target="_blank"*/}
          {/*  rel="noopener noreferrer"*/}
          {/*>*/}
          {/*  <FontAwesomeIcon*/}
          {/*    icon={["fas", "envelope"]}*/}
          {/*    className="icons mail"*/}
          {/*    title="e-mail"*/}
          {/*  />*/}
          {/*</a>*/}
          {/*<a href='/cv'>*/}
           {/* <FontAwesomeIcon*/}
             {/* icon={["fas", "file-alt"]}*/}
             {/* className="icons cv"*/}
             {/* title="My CV"*/}
           {/* />*/}
         {/* </a>*/}
        </div>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        firstName
        lastName
        occupation
      }
    }
  }
`
