import React,{useEffect} from 'react'
import {
  Box,
  Text,
  Flex,
  Image,
  Divider,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./project.css"
import project2 from "../../assets/freshly.png";
import project1 from "../../assets/engagebay.png";
import project3 from "../../assets/travelzone.png";

const Projects = () => {

    const projects = [
      {
        id: 1,
        heading: "EngageBay-Clone",
        description:
          "EngageBay helps growing businesses to scale faster with its affordable, integrated all-in-one marketing, sales & support software",
        techs: [
          ["bx bxl-html5", "#f1a118"],
          ["bx bxl-css3", "hsl(214, 87%, 50%,0.8)"],
          ["bx bxl-javascript", "#f7df1a"],
          ["bx bxl-react", "#11cdef"],
        ],
        link: "https://myengagebay.netlify.app/",
        github: "",
        order: ["1", "2"],
        img: project1,
      },
      {
        id: 2,
        heading: "Travelzone",
        description:
          "Travelzone is a travel agency in India provides customized packages for Holidays & Vacations.",
        techs: [
           ["bx bxl-html5", "#f1a118"],
          ["bx bxl-css3", "hsl(214, 87%, 50%,0.8)"],
          ["bx bxl-javascript", "#f7df1a"],
          ["bx bxl-react", "#11cdef"],
        ],
        link: "https://mytravelzone.netlify.app",
        github: "https://github.com/anchal4561/Travelzone",
        order: ["2", "1"],
        img: project3,
      },
      {
        id: 3,
        heading: "Freshly-Clone",
        description:
          "Freshly is a weekly subscription that delivers fresh meals.",
        techs: [
          ["bx bxl-html5", "#f1a118"],
          ["bx bxl-css3", "hsl(214, 87%, 50%,0.8)"],
          ["bx bxl-javascript", "#f7df1a"],
          ["bx bxl-react", "#11cdef"],
        ],
        link: "https://sophisticated-legs-486.netlify.app",
        github: "https://github.com/anchal4561/freshly-clone",
        order: ["1", "2"],
        img: project2,
      },
    ];


     useEffect(() => {
       Aos.init({ duration: 1000 });
     }, []);

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">The things I make</span>
      {projects.map((elem) => (
        <Flex
          className="project__box"
          key={elem.id}
          textAlign="center"
          w={{ lg: "75%", md: "80%", sm: "80%", base: "90%" }}
          m={"auto"}
          justify={"space-between"}
          mb={20}
          gap={{ md: "4", sm: "4", base: "4" }}
          boxShadow="2xl"
          p={{ lg: "10", md: "8", sm: "4", base: "4" }}
          rounded="md"
          bg="white"
          flexDirection={{
            lg: "row",
            md: "column",
            sm: "column",
            base: "column",
          }}
          background={
            "linear-gradient(35deg,hsl(189, 87%, 50%,0.2),hsl(214, 87%, 50%,0.8))"
          }
        >
          <Box
            w={{ lg: "50%", md: "100%", sm: "100%", base: "100%" }}
            m={"auto"}
            order={elem.order[0]}
          >
            <div
              style={{
                width: "100%",
                margin: "auto",
              }}
              data-aos="fade-down"
              data-aos-easing="ease-in"
            >
              <Box m={"auto"} w={{ md: "80%", sm: "90%", base: "90%" }}>
                <Heading
                  color={"var(--title-color-light)"}
                  fontWeight={"600"}
                  fontSize={{
                    sm: "var(--h2-font-size)",
                    base: "var(--h2-font-size)",
                  }}
                >
                  {elem.heading}
                </Heading>
                <Divider mt={"2"} />
                <Text mt={"3"}>{elem.description}</Text>
              </Box>
              <Grid
                mt={5}
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(2,1fr)"
                justifyContent={"center"}
                gap={3}
              >
                <GridItem rowSpan={1} colSpan={2}>
                  <Flex
                    alignItems={"center"}
                    wrap={"wrap"}
                    gap={3}
                    justifyContent={"center"}
                  >
                    <Text fontWeight={"700"}>Tech stack : </Text>
                    {elem.techs.map((tech) => (
                      <i
                        key={tech[0]}
                        className={tech[0]}
                        style={{ color: tech[1], fontSize: "40px" }}
                      ></i>
                    ))}
                  </Flex>
                </GridItem>

                <GridItem colSpan={2} rowSpan={1}>
                  <Flex gap={4} justifyContent={"center"}>
                    <a
                      href={elem.link}
                      className="button button--flex"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                      <span className="button__icon">
                        <i
                          className="bx bx-link-external"
                          style={{ color: "#ffffff" }}
                        ></i>
                      </span>
                    </a>
                    <a
                      href={elem.github}
                      className="button button--flex"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                      <span className="button__icon">
                        <i
                          className="bx bxl-github"
                          style={{ color: "#ffffff" }}
                        ></i>
                      </span>
                    </a>
                  </Flex>
                </GridItem>
              </Grid>
            </div>
          </Box>
          <Box
            w={{ lg: "50%", md: "80%", sm: "80%", base: "80%" }}
            m={"auto"}
            order={elem.order[1]}
          >
            <div
              style={{
                width: "100%",
                margin: "auto",
              }}
              data-aos="fade-up"
              data-aos-easing="ease-in"
            >
              <Box m={"auto"} w={"full"}>
                <Image w={"100%"} m={"auto"} src={elem.img} alt="Dan Abramov" />
              </Box>
            </div>
          </Box>
        </Flex>
      ))}
    </section>
  );
}

export default Projects