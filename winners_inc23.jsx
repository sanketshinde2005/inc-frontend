import React from "react";
import { Box, Typography } from "@mui/material";
import { EmojiEvents, Star, StarBorder } from "@mui/icons-material";
import Particles from "react-tsparticles";
import "./styles.css"; // Global styles
import "./effects.css"; // Hover effect styles

const domain_winners = [
  {
    domainName: "APPLICATION DEVELOPMENT",
    projects: [
      {
        position: "Winner",
        id: "AD - 034",
        title: "Troomate",
        college: "MKSSS Cummins College of Engineering for Women, Pune",
        participants: [
          "Aditi Bornare",
          "Arushi Dubey",
          "Rutuja Dherange",
          "Srushti Chiddarwar",
        ],
      },
      {
        position: "1st RUNNER UP",
        id: "AD - 208",
        title: "Constellation",
        college: "PICT, PUNE",
        participants: [
          "Rugved Somwanshi",
          "Ashmika Gupte",
          "Arjit Agarwal",
          "Yash Kale",
        ],
      },
      {
        position: "2nd RUNNER UP",
        id: "AD-055",
        title:
          "Bi - Directional Conversational System for Indian Sign Language",
        college: "PICT, PUNE",
        participants: [
          "Aagaaz Ali Sayed",
          "Smeet H Ramteke",
          "Syed Farhan Naqvi",
          "Aditya Kangunei",
        ],
      },
    ],
  },
  {
    domainName: "APPLICATION DEVELOPMENT",
    projects: [
      {
        position: "Winner",
        id: "AD - 034",
        title: "Troomate",
        college: "MKSSS Cummins College of Engineering for Women, Pune",
        participants: [
          "Aditi Bornare",
          "Arushi Dubey",
          "Rutuja Dherange",
          "Srushti Chiddarwar",
        ],
      },
      {
        position: "1st RUNNER UP",
        id: "AD - 208",
        title: "Constellation",
        college: "PICT, PUNE",
        participants: [
          "Rugved Somwanshi",
          "Ashmika Gupte",
          "Arjit Agarwal",
          "Yash Kale",
        ],
      },
      {
        position: "2nd RUNNER UP",
        id: "AD-055",
        title:
          "Bi - Directional Conversational System for Indian Sign Language",
        college: "PICT, PUNE",
        participants: [
          "Aagaaz Ali Sayed",
          "Smeet H Ramteke",
          "Syed Farhan Naqvi",
          "Aditya Kangunei",
        ],
      },
    ],
  },
  {
    domainName: "APPLICATION DEVELOPMENT",
    projects: [
      {
        position: "Winner",
        id: "AD - 034",
        title: "Troomate",
        college: "MKSSS Cummins College of Engineering for Women, Pune",
        participants: [
          "Aditi Bornare",
          "Arushi Dubey",
          "Rutuja Dherange",
          "Srushti Chiddarwar",
        ],
      },
      {
        position: "1st RUNNER UP",
        id: "AD - 208",
        title: "Constellation",
        college: "PICT, PUNE",
        participants: [
          "Rugved Somwanshi",
          "Ashmika Gupte",
          "Arjit Agarwal",
          "Yash Kale",
        ],
      },
      {
        position: "2nd RUNNER UP",
        id: "AD-055",
        title:
          "Bi - Directional Conversational System for Indian Sign Language",
        college: "PICT, PUNE",
        participants: [
          "Aagaaz Ali Sayed",
          "Smeet H Ramteke",
          "Syed Farhan Naqvi",
          "Aditya Kangunei",
        ],
      },
    ],
  },
];

function winners_inc23() {
  return (
    <Box className="relative overflow-hidden min-h-screen gradient-background-dark">
      {/* Particles.js Background */}
      <Particles
        id="tsparticles"
        options={{
          background: { color: { value: "#1D1836" } },
          particles: {
            color: { value: "#FFFFFF" },
            links: {
              color: "#FFFFFF",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: { enable: true, speed: 2, random: true },
            size: { value: 3, random: true },
          },
        }}
      />

      {/* Main Content */}
      <Box className="container mx-auto p-6 relative z-10 text-center">
        <Typography
          variant="h2"
          color="white"
          sx={{ fontWeight: "bold", marginBottom: 4 }}
        >
          INC 2023 WINNERS
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          {/* Intro text */}
        </Typography>
        <Typography
          variant="h4"
          color="white"
          sx={{ fontWeight: "bold", marginTop: 4 }}
        >
          CONCEPTS WINNERS
        </Typography>

        {/* Render Winners */}
        {domain_winners.map((domain) => (
          <div key={domain.domainName} className="py-6">
            <Typography
              variant="h5"
              color="white"
              sx={{ fontWeight: "bold", marginBottom: 2 }}
            >
              {domain.domainName}
            </Typography>
            <div className="grid md:grid-cols-3 gap-6">
              {domain.projects.map((project) => (
                <div key={project.id} className="card-box">
                  <div className="card-content">
                    <Typography variant="h6" color="white">
                      {project.position === "Winner" && <EmojiEvents />}
                      {project.position === "1st RUNNER UP" && <Star />}
                      {project.position === "2nd RUNNER UP" && <StarBorder />}
                      {project.position}
                    </Typography>
                    <Typography variant="body2" color="white">
                      {project.id}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="white"
                      sx={{ fontWeight: "bold" }}
                    >
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="white">
                      {project.college}
                    </Typography>
                    <ul>
                      {project.participants.map((participant, index) => (
                        <li key={index} style={{ color: "#FFFFFF" }}>
                          {participant}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Box>
    </Box>
  );
}

export default winners_inc23;
