import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import ContactFooter from './ContactFooter';

const Styles = styled.div`
  padding-top: 8rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    text-align: center;
    margin-top: 5rem;
    background-color: var(--dark-bg);
    padding: 1rem 0;
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
      .footer__col1 .para {
        max-width: 100%;
      }
      .copyright {
        .container {
          div {
            margin-top: 0;
          }
        }
      }
    }
  }
`;

export default function FooterSection() {
  return (
    <Styles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Kavan Patel</h1>
          <PText>
          Software Engineer
          </PText>
        </div>
        <div className="footer__col2">
          <ContactFooter
            heading="Important Links"
            Links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <ContactFooter
            heading="Contact Details"
            Links={[
              { title: '+1-902-989-6376', path: 'tel:+1-902-989-6376' },
              {
                title: 'kavanp193@gmail.com',
                path: 'mailto:kavanp193@gmail.com',
              },
              {
                title: 'Canada',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <ContactFooter
            heading="Social Links"
            Links={[
              { title: 'Gmail', path: 'mailto:kavanp193@gmail.com' },
              {
                title: 'LinkedIN',
                path: 'https://www.linkedin.com/in/kavan-patel-77a945143',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2022 - Kavan Patel | Software Engineer</PText>
        </div>
      </div>
    </Styles>
  );
}
