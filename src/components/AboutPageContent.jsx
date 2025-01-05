import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import image from '../assets/images/LinkedIn_Photo.jpeg';
import AboutInfoItem from './AboutInfoItem';

const Style = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  a {
    font-size: 4rem;
    font-family: 'Patrick Hand', cursive;
    text-decoration: underline;
    color: var(--gray-1);
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    font-family: 'Architects Daughter', cursive;
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
    font-family: 'Patrick Hand', cursive;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
    margin-top: 10rem;
    font-family: 'Fredoka One', cursive;
  }
  @media only screen and (max-width: 768px) {
    a {
      font-size: 2.5rem;
    }
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function AboutPageContent() {
  return (
    <Style>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">Hi I'm Kavan Patel</p>
            <h2 className="about__heading">Software Engineer</h2>
            <div className="about__info">
              <PText>
              My name is Kavan Patel, and I am a 26-year-old, positive, energetic, and skilled Full Stack Developer with 4 years of professional experience, who has accumulated a varied set of skills, traits, and attributes that ensure I will do well in this profession. I have vast experience working both as an individual and as part of a team on time-sensitive, tough development projects that need exceptional creative and technical talents as well as the ability to guarantee all work is optimized across a wide variety of platforms. <br />
              <br />
              I hold a Master of Applied Computer Science from Dalhousie University, completed between September 2021 and April 2023, and a Bachelor of Engineering in Information Technology from Gujarat Technological University, completed between August 2015 and July 2019.<br/>
                <br />
                I started working as an intern at Silverwing Technologies
                Private Limited to gain an experience of corporate world, where
                I worked for 6 months in technologies like Angular, ReactJS, NodeJS, HTML, and CSS. With a robust background in Full-Stack development, I am currently working as an IT Developer II at the Canada Revenue Agency. At Canada Revenue Agency (CRA), I contributed as an IT Developer, leading the development and enhancement of modules like Trust Beneficiary, Account Balance, and Statement of Account. My work improved financial validation processes and automated workflows, significantly reducing manual interventions for over a million users. I also spearheaded REST API optimizations, achieving substantial performance gains and operational cost savings.<br />
                <br />
                Previously, at Tata Consultancy Services (TCS), I played a critical role in developing and migrating dynamic websites, including vaccine information platforms for Pfizer BioNTech during the COVID-19 pandemic. My contributions boosted site performance by 75% and streamlined workflows for clients globally.<br/>
                <br />I enjoyed the integrated nature of using technology,
                analyzing the data, understanding and using it and coming up
                with a solution. This is one of the major reasons I want to
                build my career in this field. Moving forward, I am actively seeking a full-time position in software development or a related field. I am committed to leveraging my skills for the benefit of both the organization and myself. I believe in hard work and maintain an optimistic outlook on life. I am a strong team player who excels in collaborating with coworkers, clients, and superiors to achieve project goals efficiently.<br/>
                <br />
                I thrive at the intersection of backend architecture, frontend development, and cloud computing. My toolkit includes Angular, Java, ReactJS, REST APIs, GCP, AWS, and CI/CD pipelines. Beyond work, I’m passionate about leveraging technology to solve complex problems and drive impactful results. Feel free to explore my portfolio and get in touch—I’m always excited to collaborate and innovate!
              </PText>
            </div>
            {/* <a href="https://www.linkedin.com/in/kavanpatel99/overlay/1712444352092/single-media-viewer/?profileId=ACoAACLYRg4BlWr6iVz1sEWJicFS3ZNG0AoXnaI" target="_blank" rel="noopener noreferrer">
              View Resume
            </a> */}
          </div>
          <div className="right">
            <img src={image} alt="Profile_Img" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about_info_item">
            <h1 className="about__info__heading">Education</h1>
            <br />
            <AboutInfoItem
              title="Bachelor's (2015-2019)"
              items={[
                'Government Engineering College, Gandhinagar, India',
                'Course : Information Technology',
              ]}
            />
            <br />
            <AboutInfoItem
              title="Master's (2021-2023)"
              items={[
                'Dalhousie University, Nova Scotia, Canada',
                'Course : Master of Applied Computer Science',
              ]}
            />
          </div>
          <div className="about_info_item">
            <h1 className="about__info__heading">Technical Skills</h1>
            <AboutInfoItem
              title="Programming Languages"
              items={['Java', 'JavaScript', 'Python', 'SQL']}
            />
            <br/>
            <br/>
            <AboutInfoItem
              title="Web & Frontend Technologies"
              items={['Angular', 'ReactJS', 'NodeJS', 'REST','HTML5', 'CSS3', 'Tailwind CSS', 'jQuery', 'Bootstrap4']}
            />
            <br/>
            <br/>
            <AboutInfoItem
              title="Backend, Cloud & Databases"
              items={['AWS', 'GCP', 'MySQL', 'DynamoDB', 'Firestore', 'Neo4j']}
            />
            <br/>
            <br/>
            <AboutInfoItem
              title="Tools & Version Control"
              items={['Git', 'GitLab', 'WebLogic','Docker','Maven','Jenkins','JIRA','SonarQube']}
            />
            <br/>
            <br/>
            <AboutInfoItem
              title="Software Methodologies & Design"
              items={['CI/CD','SDLC','SOLID Principles','Agile','System Requirement Specification','Test Driven Development (TDD)', 'Design Patterns']}
            />
            <br/>
            <br/>
          </div>
        </div>
      </div>
    </Style>
  );
}
