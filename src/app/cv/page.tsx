import { WhiteButton } from '@/components/button/WhiteButton';
import { Metadata } from 'next';
import '@/styles/cv.css'
import Title from '@/components/cv/Title';
import SubTitle from '@/components/cv/SubTitle';
import SectionTitle from '@/components/cv/SectionTitle';
import ExperienceItem from '@/components/cv/ExperienceItem';
import CVPlaceHolder from './placeHolder';
import { experiences } from './data/experiences';
import { projects } from './data/projects';

export const metadata: Metadata = {
  title: 'Matteo Maso - CV',
  description: 'Matteo Maso\'s CV',
}

export default function CVPage() {

  return (
    <div>
      <div className="flex flex-col mx-auto">
        <div className='md:p-9 px-1 py-5 md:m-14 m-0'>
          <CVPlaceHolder>
            <div className='grid grid-cols-3 gap-0'>
              <div className='col-span-2'>
                <div className='grid grid-cols-1 m-10'>
                  <Title text='Matteo Maso'/>
                  <SubTitle text='Software Engineer'/>
                  <SectionTitle text='SUMMARY'/>
                  <div>I was born a curious problem solver and trained as a software engineer.
        For the past 2.5 years I&apos;ve helped SCS to scale and for 6 month I have been the project leader for the development of the company new IoT platform.
        Previously, I developed five applications for clinical research projects in the healthcare industry. In 2020 I co-founded a startup in the lighting design sector.</div>
                  <SectionTitle text='EXPERIENCE'/>
                    {experiences.map((exp, index) => (
                      <ExperienceItem 
                        key={index}
                        title={exp.title}
                        start={exp.start}
                        end={exp.end ?? 'Present'}
                        companyName={exp.companyName}
                        location={exp.location}
                        logo={exp.logo}
                        children={exp.children}
                      />
                    ))}
                  <SectionTitle text='PROJECT'/>
                    {projects.map((project, index) => (
                      <ExperienceItem 
                        key={index}
                        title={project.title}
                        start={project.start}
                        end={project.end ?? 'Present'}
                        companyName={project.companyName}
                        location={project.location}
                        logo={project.logo}
                        children={project.children}
                      />
                    ))}
                  <SectionTitle text='EDUCATION'/>
                </div>
              </div>
              <div className='bg-blue-200'>
                02
              </div>
            </div>
          </CVPlaceHolder>
        </div>
        <div className='w-full bg-blue-700 sticky bottom-0'>
          <div className='grid grid-cols-1 place-items-center p-3'>
            <WhiteButton btnContent="Download" btnRef="cv1.pdf"/>
          </div>
        </div>
      </div>
    </div>
  );
};
