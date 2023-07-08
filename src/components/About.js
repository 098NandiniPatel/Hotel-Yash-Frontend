import React from "react";
import { Stack } from "@mui/material";
import './about.css'
const About = () => {
    return (
        <Stack className="about"
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
        >
            <div className="left">
                <h1>HOTEL EMOJI INN</h1>
                <h3>SPREADING SMILES</h3>
                <p>Experience the Burst of Emotions with the first theme based hotel in NAINITAL. Serving you a feast of vibrant grids of emojies all around. <br />
                    WE WELCOME YOU <span>❤</span><br />
                    Close the doors, put on your cozy clothes and open the cozy blankets. When was the last time you actually felt this way? “cute and cozy” at the same place. Located in the foothills of DEV BHOOMI Uttarakhand , EMOJI INN serves you with the warmth of emotions. <br />
                    Your stay at EMOJI INN will be a whole new experience that will make you feel at home.</p>
            </div>
            <div className="right">
                <img src="https://hotelemojiinn.com/wp-content/uploads/2018/07/WhatsApp-Image-2022-08-23-at-11.07.21-AM-1.jpeg" alt="" />
            </div>
        </Stack>
    );
};

export default About;
