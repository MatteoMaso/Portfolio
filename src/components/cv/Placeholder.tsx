import '@/styles/cv.css'
import Title from './Title'
import SubTitle from './SubTitle'
import SectionTitle from './SectionTitle'
import ExperienceItem from './ExperienceItem';

export default function CvPlaceHolder() {
  return (
    <div className='sheets'>
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-2 bg-red-200'>
          <div className='grid grid-cols-1 m-14'>
            <Title text='Matteo Maso'/>
            <SubTitle text='Software Engineer'/>
            <SectionTitle text='SUMMARY'/>
            <div>I was born a curious problem solver and trained as a software engineer.
  For the past 2.5 years I've helped SCS to scale and for 6 month I have been the project leader for the development of the company new IoT platform.
  Previously, I developed five applications for clinical research projects in the healthcare industry. In 2020 I co-founded a startup in the lighting design sector.</div>
            <SectionTitle text='EXPERIENCE'/>
            <ExperienceItem title='Backend Developer' start='Nov 2021'>
              <li>Project Lead for our new Firmware architecture.</li>
              <li>Created a notification service using serverless and lambdas on AWS</li>
              <li>Successfully migrated the entire backend tech-stack to NestJS + Typeorm.</li>
              <li>Increase our APIs integration test from 5% to 95%.</li>
            </ExperienceItem>
            <SectionTitle text='PROJECT'/>
            <SectionTitle text='EDUCATION'/>
          </div>
        </div>
        <div className='bg-blue-200'>
          02
        </div>
      </div>
    </div>
  );
};