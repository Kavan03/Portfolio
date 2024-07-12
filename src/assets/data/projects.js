import { v4 as uuidv4 } from 'uuid';
import ddb from '../images/ddb.PNG';
import smarticle from '../images/smarticle.png';
import genealogy from '../images/genealogy.png';
import imageportfolio from '../images/myportfolio.PNG';
import cloud from '../images/cloud.PNG';
import serverless from '../images/serverless.PNG'

const projects = [
  {
    id: uuidv4(),
    name: 'Word On Cloud - WOC (ReactJS, NodeJS, AWS, Cloud Formation)',
    duration: 'May 2022 - Jul 2022',
    desc:
      'Created a fun game with an enjoyable user experience that allows players to guess the word in a certain number of trials. Implemented a custom game mode in which the user can enter a word, create their own game, and share the created custom game link with others. Moreover, created a leaderboard that displays the top 5 people with the highest score for a given day. •	AWS Cognito was used for user authentication.  Lambda with inbuilt function URLs for the backend, AWS S3, and DynamoDB for managing the storage, and AWS EventBridge to trigger lambda to fetch a new word at certain intervals. AWS cloud formation and Elastic Beanstalk were used to deploy the application. All services were configured under the same VPC network.',
    link: 'https://github.com/Kavan03/WOC',
    img: cloud
  },
  {
    id: uuidv4(),
    name: 'Serverless B&B (ReactJS, NodeJS, AWS, GCP)',
    duration: 'May 2022 - Jul 2022',
    desc:
      'Developed multi-cloud hotel management and tour system using serverless architecture. AWS Lex chatbot was integrated with ReactJs to provide details for the room, tour, and food, and further perform room booking, ordering food, and booking a tour. •	Cognito and GCP Firestore were used for 3FA user management and authentication, AWS Lambda and GCP cloud function for the backend, AWS DynamoDB and GCP firestore for storage, GCP DataStudio for visualization, GCP BigQuery ML for tour recommendations, and GCP CloudRun to host the application.',
    link: 'https://github.com/Kavan03/ServerlessB-B',
    img: serverless
  },
  {
    id: uuidv4(),
    name: 'Distributed Database Management System (Java, GCP VM instances)',
    duration: 'Jan 2022 - Apr 2022',
    desc:
      'From the ground up, created a console-based application in Java for SQL query execution. Concurrency control for multi-user environments, SQL dump, ERD generation, log management, analytics report, and others are among the features provided.',
    link: 'https://github.com/Kavan03/Distributed-DBMS',
    img: ddb
  },
  {
    id: uuidv4(),
    name: 'Smarticle (NextJS, Spring Boot, and JPA)',
    duration: 'Jan 2022 - Mar 2022',
    desc:
      'The web app will allow registered users to read, post and like all articles, whereas unregistered users can only see public articles. Users can filter articles by authors, categories, date, or a number of likes. Furthermore, the top 5 tweets for each article are determined by the tags associated with the article. Furthermore, users can create their own tags and upload their own articles, and choose whether to make them public or private. They may also read their published articles and edit their profile.',
    link: 'https://github.com/Kavan03/Smarticle',
    img: smarticle
  },
  {
    id: uuidv4(),
    name: 'My Portfolio (React)',
    duration: 'July 2022',
    desc:
      'I wanted to present clear information about my professional experience and achievements as part of my portfolio, which highlight my experience, educational background, awards, appreciations, achievements, and certifications.',
      link: 'https://github.com/Kavan03/Kavan-s-Portfolio',
      img: imageportfolio
  },
  {
    id: uuidv4(),
    name: 'Genealogy (Java)',
    duration: 'Sept 2021',
    desc:
      'For tracking and maintaining family relationships, genealogy is well-established. This project will create a system that will link family tree data to an image repository and the metadata associated with the images. It provides details on an individual, its ancestors, descendants, pictures from a given time period, and relations with others if existed.',
    link: 'https://github.com/Kavan03/Genealogy',
    img: genealogy
  }
];

export default projects;
