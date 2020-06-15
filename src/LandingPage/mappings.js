import React from 'react';
import AboutLogo from '../Assets/About.svg';
import TechLogo from '../Assets/Tech.svg';
import SmallLogo from '../Assets/Small.svg';

const mappings = [
  {
    image: <img src={AboutLogo} alt="" height="80%" />,
    description: `I am a year 4 student in Nanyang Technological University and i'm currently studying business
              and computing. Scroll down to find out more about me - and not just the boring stuff`,
  },
  {
    image: <img src={TechLogo} alt="" height="80%" />,
    description: `i have experience working with the following languages: Go, Python, C#, Java, Javascript/Typescript and i've dabbled in
    a few others besides! Frameworks that i know include React, Redux, Docker, Keras and the .NET ecosystem!`,
  },
  {
    image: <img src={SmallLogo} alt="" height="80%" />,
    description: `In my spare time, i enjoy tinkering with various programming tools and the result of one is this website! I also enjoy solving programming puzzles on leetcode and if you wish to find out more, click on the sidebar and navigate there. When i' m not doing those, i enjoy windsurfing (some say falling).`,
  },
];

export default mappings;
