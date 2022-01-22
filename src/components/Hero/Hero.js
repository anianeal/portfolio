import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section ro nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My name is Ania, I love sea otters and coding.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.instagram.com/sxerocker168/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;