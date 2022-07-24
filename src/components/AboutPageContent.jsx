import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import image from '../assets/images/about-sec-img.png';
import AboutInfoItem from './AboutInfoItem';
import Resume from '../assets/data/Kavan_Resume.pdf';

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
            <h2 className="about__heading">A Full Stack Developer</h2>
            <div className="about__info">
              <PText>
              My name is Kavan Patel, and I am a 25-year-old, positive, energetic, and skilled Full Stack Developer who has accumulated a varied set of skills, traits, and attributes that ensure I will do well in this profession. I have vast experience working both as an individual and as part of a team on time-sensitive, tough development projects that need exceptional creative and technical talents as well as the ability to guarantee all work is optimized across a wide variety of platforms. <br />
                <br />
                I started working as an intern at Silverwing Technologies
                Private Limited to gain an experience of corporate world, where
                I worked for 9 months in technologies like Angular 6+. Adding to
                my portfolio, I worked for 2 years at well-known MNC Tata
                Consultancy Services, where I worked as an Assistant System
                Engineer from August 2019- June 2021. I have come in touch with
                many technologies here; which helped me decide the future domain
                specialization I am interested in. <br />
                <br />I enjoyed the integrated nature of using technology,
                analyzing the data, understanding and using it and coming up
                with a solution. This is one of the major reasons I want to
                build my career in this field. Moving forward, I hope to expand
                my experience across different industries.
              </PText>
            </div>
            <a href={Resume} download="Kavan_Resume.pdf">
              Download Resume
            </a>
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
                'CGPA : 8.50',
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
              items={['Java', 'JavaScript', 'SQL']}
            />
            <br />
            <AboutInfoItem
              title="Web Technologies"
              items={['HTML5', 'CSS3', 'Bootstrap4', 'jQuery', 'ReactJS','NextJS','NodeJS']}
            />
            <br />
            <br />
            <br />
            <AboutInfoItem
              title="Database / Cloud"
              items={['MySQL', 'Amazon DynamoDB', 'Google Firestore', 'Neo4j']}
            />
            <br />
            <br/>
            <AboutInfoItem
              title="Tools"
              items={['GIT', 'GitLab', 'Docker', 'JIRA', 'MySQL Workbench', 'VS Code']}
            />
            <br />
            <AboutInfoItem
              items={['WinSCP','Postman','Eclipse','Atom','IntelliJ']}
            />
            <br />
            <br />
            <br/>
            <AboutInfoItem
              title="Software Methodologies"
              items={['SDLC','SOLID Principles','Agile','System Requirement Specification','Test Driven Development (TDD)']}
            />
            <br/>
            <br/>
            <AboutInfoItem
              title="Cloud Technologies"
              items={['Amazon Web Services (AWS)','Google Cloud Platform (GCP)']}
            />
          </div>
          <div className="about_info_item">
            <h1 className="about__info__heading">Soft Skills</h1>
            <AboutInfoItem
              title="Skills"
              items={[
                'Quick Learner',
                'Good Communication Skills',
                'Team Work',
                'Adaptability',
              ]}
            />
            <br />
            <AboutInfoItem
              items={[
                'Problem Solver',
                'Good Analytics Skills',
                'Time Management',
              ]}
            />
          </div>
        </div>
      </div>
    </Style>
  );
}
