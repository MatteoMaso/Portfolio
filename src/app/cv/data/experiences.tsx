import { Experience } from "@/components/cv/ExperienceItem"

export const experiences: Experience[] = [{
  title: 'Backend Developer',
  companyName: 'Sensirion',
  start: 'Nov 2021',
  location: 'Berlin DE',
  logo: 'scs.png',
  children: [
    'Project Lead for our new Firmware architecture.',
    'Created a notification service using serverless and lambdas on AWS.',
    'Successfully migrated the entire backend tech-stack to NestJS + Typeorm.',
    'Increase our APIs integration test from 5% to 95%.'
  ],
},
{
  title: 'Software Engineer',
  companyName: 'Advertima',
  start: 'Aug 2021',
  end: 'Oct 2021',
  location: 'Berlin DE',
  logo: 'advertima.png',
  children: [
    'Facilitated the monitoring of Kafka using Prometheus to expose metrics.',
    'Configured a Grafana dashboard to improve fault detection.',
  ],
},
{
  title: 'Full Stack Software Engineer',
  companyName: 'Khymeia',
  start: 'Apr 2020',
  end: 'Jul 2021',
  location: 'Padua IT',
  logo: 'khymeia.png',
  children: [
  'Managed the software development of 100 cognitive exercises.',
  'Delivered 3 applications for clinical research projects on virtual reality, smartphone app and real-time body movement tracking.',
  'Set up the company&apos;s GitLab server to speed up the development process.',
  'Developed 3 different software dashboards to visualise custom raw medical data in a meaningful way.',
  ],
},
{
  title: 'Co-Founder',
  companyName: 'Ayuppie: lighting design platform',
  start: 'Oct 2019',
  end: 'Apr 2021',
  location: 'Treviso IT',
  logo: 'ayuppie.png',
  children: [
    'Shaped the idea and the platform by collaborating with 5 people.',
    'Launched the company online - reached 100 waiting list subscribers.',
    'Designed the crowdfunding strategy reaching 115K of investment.',
  ],
},
{
  title: 'Intern as Research Software Engineer',
  companyName: 'NEC',
  start: 'Sep 2018',
  end: 'Apr 2019',
  location: 'Heidelberg DE',
  logo: 'nec.png',
  children: [
    'Analysed the data structure design of 2 permissionless blockchains focusing on the security aspect - Bitcoin and Ethereum.',
    'Performed an entropy analysis of different types of Bitcoin data.',
    'Developed a lossless compression algorithm for Blockchain - saved 45%.',
  ],
},
]


