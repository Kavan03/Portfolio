import React from 'react';
import styled from 'styled-components';
import { MdPlace } from 'react-icons/md';

const ItemStyles = styled.div`
  padding: 2rem;
  background-color: var(--deep-dark);
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;

  .icon {
    color: var(--white);
    background-color: var(--gray-2);
    padding: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .info {
    font-family: 'Klee One', cursive;
    font-size: 2rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer; /* Ensure pointer cursor on hover */
    &:hover {
      text-decoration: underline;
    }
  }

  svg {
    width: 3.5rem;
  }

  @media only screen and (max-width: 768px) {
    .info {
      font-size: 1.8rem;
    }
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'I need text',
}) {
  const isEmail = text.includes('@');
  const isLinkedIn = text.includes('linkedin.com');

  const handleClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        {isEmail && (
          <a
            href={`mailto:${text}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleClick(`mailto:${text}`)}
          >
            {text}
          </a>
        )}
        {isLinkedIn && (
          <a
            href={text}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleClick(text)}
          >
            https://www.linkedin.com/in/kavanpatel99/
          </a>
        )}
        {!isEmail && !isLinkedIn && text}
      </div>
    </ItemStyles>
  );
}
