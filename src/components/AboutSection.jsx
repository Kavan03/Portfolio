import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import SectionTitle from './SectionTitle';
import Button from './Button';
import Img from '../assets/images/home.JPG';

const Style = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    margin-top: -80px;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  .img_css {
    height: 700px;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;
export default function AboutSection() {
  return (
    <Style>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let Me Introduce Myself"
            heading="About Me"
          />
          <PText>
          Hi, I’m Kavan! With a Master’s in Applied Computer Science from Dalhousie University and 4 years of experience at CRA and TCS, I specialize in building scalable, efficient software solutions. At CRA, I led the development of key modules like Trust Beneficiary, Account Balance, Authorization Request, Submit Documents and more, streamlining workflows for over a million users and optimizing REST APIs to save costs. At TCS, I enhanced vaccine information platforms for Pfizer BioNTech, boosting performance by 75% and improving global accessibility. Proficient in Angular, Java, ReactJS, and cloud technologies, I’m passionate about solving complex problems and delivering impactful results.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnlink="/projects" btntext="Works" />
            <Button btnlink="/about" btntext="Read More" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="img_css" src={Img} alt="" />
        </div>
      </div>
    </Style>
  );
}
