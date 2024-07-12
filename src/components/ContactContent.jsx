import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';
import { FaLinkedin } from 'react-icons/fa'; // Import LinkedIn icon from react-icons/fa

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align content horizontally */
  text-align: center; /* Center align text */
`;

const ContactSectionWrapper = styled.div`
  margin-top: 7rem;
  display: flex;
  gap: 5rem;
  justify-content: center; /* Center align content horizontally */
  position: relative;
`;

// const LineSeparator = styled.div`
//   position: absolute;
//   content: '';
//   width: 2px;
//   height: 50%;
//   background-color: var(--gray-1);
//   left: 50%;
//   top: 30%;
//   transform: translate(-50%, -50%);
// `;

const ContactContent = styled.div`
  max-width: 500px;
  width: 100%;
  text-align: left; /* Align text to the left within the container */
`;


const ContactSection = () => {

  const linkedInProfile = 'https://www.linkedin.com/in/kavan-patel-77a945143/';
  
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="Let's Get Connected" />
        <ContactSectionWrapper>
          <ContactContent>
            <ContactInfoItem icon={<MdLocalPhone />} text="+1-902-989-6376" />
            <ContactInfoItem icon={<MdEmail />} text="kavanp193@gmail.com" />
            <ContactInfoItem icon={<FaLinkedin />} text={linkedInProfile} />
            <ContactInfoItem text="Canada" />
          </ContactContent>
          {/* Optionally add the line separator */}
          {/* <LineSeparator /> */}
        </ContactSectionWrapper>
      </div>
    </ContactSectionStyle>
  );
};

export default ContactSection;