import { WhiteButton } from '@/components/button/WhiteButton';
import { Metadata } from 'next';
import '@/styles/cv.css'
import Title from '@/components/cv/Title';
import SubTitle from '@/components/cv/SubTitle';
import SectionTitle from '@/components/cv/SectionTitle';
import ExperienceItem from '@/components/cv/ExperienceItem';
import CVPlaceHolder from '@/components/cv/CVPlaceHolder';
import { experiences } from './data/experiences';
import { projects } from './data/projects';
import { educations } from './data/education';
import RightSideSection from '@/components/cv/RightSideSection';
import RightSideSubSection from '@/components/cv/RightSideSubSection';
import Image from "next/image";
import SkillsSection from '@/components/cv/Skills';
import { skills } from './data/skills';

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
            <div className='grid sm:grid-cols-3 grid-cols-1 gap-0'>
              <div className='sm:col-span-2'>
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
                      >
                      {exp.children}
                      </ExperienceItem>
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
                      >
                      {project.children}
                      </ExperienceItem>
                    ))}
                  <SectionTitle text='EDUCATION'/>
                    {educations.map((education, index) => (
                      <ExperienceItem 
                        key={index}
                        title={education.title}
                        start={education.start}
                        end={education.end ?? 'Present'}
                        companyName={education.companyName}
                        location={education.location}
                        logo={education.logo}
                      >
                      {education.children}
                      </ExperienceItem>
                    ))}
                </div>
              </div>
              <div className='bg-blue-200'>
                <div className='sm:pt-64 pt-12'>
                  <div className='flex flex-row justify-center'>
                    <div className="m-2 flex justify-center items-center">
                      <a href='https://www.credly.com/badges/34835540-4710-4243-86f0-405ab153841a/public_url' className="p-6 duration-300 flex justify-center items-center hover:scale-125">
                        <Image
                          loading="lazy"
                          src={'/aws-certified-solutions-architect-associate.png'}
                          width={132}
                          height={132}
                          quality={100}
                          alt={"logo"}>
                        </Image>
                      </a>
                    </div>
                    <div className="m-2 flex justify-center items-center">
                      <a href='https://www.credly.com/badges/608fda24-a3b3-459d-983b-c553d7dc4835/public_url' className="p-6 duration-300 flex justify-center items-center hover:scale-125">
                        <Image
                          loading="lazy"
                          src={'/aws-certified-cloud-practitioner.png'}
                          width={132}
                          height={132}
                          quality={100}
                          alt={"logo"}>
                        </Image>
                      </a>
                    </div>
                  </div>
                  <RightSideSection title='Skills & Competencies'>
                    <SkillsSection>
                      {skills.map((skill, index) => (
                        <div className='mr-2 my-1 border-black border-2 p-1 px-2 hover:bg-blue-300 hover:animate-bounce transition-colors duration-300 rounded-lg' key={index} >{skill}</div>
                      ))}
                    </SkillsSection>
                    <RightSideSubSection title='Transversal'>
                      <li>360 vision</li>
                      <li>Value driven</li>
                      <li>Teamwork</li>
                      <li>Design Thinking, OKR</li>
                    </RightSideSubSection>
                  </RightSideSection>
                  <RightSideSection title='Languages'>
                    <li>English (professional) 🇬🇧</li>
                    <li>Italian (native) 🇮🇹</li>
                  </RightSideSection>
                  <RightSideSection title='External Courses'>
                    <li>AWS - Cloud Practitioner</li>
                    <li>AWS - Solution Architect associate</li>
                    <li>Applied Web Application security, Erasmus Online</li>
                  </RightSideSection>
                </div>
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
