import anywhr from './Logos/anywhr_logo.png';
import ntu from './Logos/ntu.png';
import ninja from './Logos/ninja.png';
import renal from './Logos/renal_logo.png';
import lumi from './Logos/luminaire.png';
import shopee from './Logos/shopee_logo.jpg';

// this has to be in chronological order
const mappings = [
  {
    icon: anywhr,
    city: 'Singapore',
    from: 'May',
    to: 'August',
    year: '2020',
    company: 'Anywhr',
    job: 'Software Engineering Intern',
    listItems: [],
  },
  {
    icon: ninja,
    city: 'Singapore',
    from: 'June',
    to: 'August',
    year: '2019',
    company: 'Ninja Van',
    job: 'Project Management Intern',
    listItems: [
      'Utilized tensorflow to detect text and image spam',
      'Implemented an algorithm to group messages together and catalog them as a single SKU',
      'Rolled out initial phase of chatbot based marketplace',
      'Utilized matrix factorization to develop a recommendation engine in python to recommend products for buyers',
      'Utilized tensorflow to create an autoencoder as a recommendation engine for buyers',
      'Built a backend in google cloud (CloudSQL; Cloud storage; cloud compute) to automatically update tensorflow models daily and serve to front end',
      'Utilized postman for API testing',
      'Improved front-end chat bot to handle concurrent connections and to label images with correct SKU even with concurrency',
      'Implemented micro-services architecture in docker in order to migrate infrastructure from Microsoft azure to ninja van’s private cloud',
    ],
  },
  {
    icon: renal,
    city: 'Singapore',
    from: 'Apr',
    to: 'May',
    year: '2020',
    company: 'Renal Team',
    job: 'Software Development',
    listItems: [
      'Integrated machine learning models into an android application',
      'Utilized optical character recognition to smooth workflow of nurses at renal team’s dialysis center',
      'Developed android application to automatically detect textual information from pictures and forward it to Renal Team’s server, easing workflow of nurses ',
    ],
  },
  {
    icon: lumi,
    city: 'Singapore',
    from: 'Aug',
    to: 'Oct',
    year: '2017',
    company: 'Luminaire-ai',
    job: 'Software Developmnet Intern',
    listItems: [
      'Managed the Github and code repository of the project',
      'Developed software to automate poster generation based on customer preference andprior selections',
      'Deployed social media web scrapers to better understand customer profiles and effectiveness of advertising campaigns',
      'Leveraged AWS technologies (beanstalk, s3) to handle data uploading and processing',
    ],
  },
  {
    icon: shopee,
    city: 'Singapore',
    from: 'Feb',
    to: 'March',
    year: '2019',
    company: 'National Data Science Competition',
    job: 'Top 20',
    listItems: [
      'Finished in top 20',
      'Utilized tensorflow to preprocess and clean image data',
      'Utilized spacy to parse natural language and transform it into numeric data for use',
      'Built and tested various different types of neural networks – convolutional; attention based etc',
    ],
  },
];

export default mappings;
