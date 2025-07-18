'use client';

import {useActiveHash} from '@/hooks/useActiveHash';
import React from 'react';
import {PiLaptopLight} from 'react-icons/pi';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {useThemeContext} from '@/context/ThemeContext';
import Image, {StaticImageData} from 'next/image';
import zalandoLogo from '@/public/images/experience/zalando.webp';
import vesselxLogo from '@/public/images/experience/vesselx.webp';
import {elapsedTimeString} from '@/helper/helper';


export default function Experience() {
  const {ref} = useActiveHash('Experience');
  const {theme} = useThemeContext();

  const experiencesData: Array<{
    title: string,
    employmentType: string,
    company: string,
    companyLogo: StaticImageData,
    location: string,
    locationType: 'On-site' | 'Hybrid' | 'Remote',
    description: React.ReactElement,
    startDate: Date
    endDate: Date | 'Present'
  }> = [
    {
      title: 'Software Engineer',
      employmentType: 'Full-time',
      company: 'Zalando',
      companyLogo: zalandoLogo,
      location: 'Berlin, Berlin, Germany',
      locationType: 'Hybrid',
      description:
        <ul className='list-disc list-inside'>
          <li>Aim to drive greater technical ownership by initiating and leading high-impact projects, mentoring junior engineers, and promoting best practices to deliver scalable, reliable solutions that support Zalando’s business goals.</li>
        </ul>,
      startDate: new Date(2025, 5),
      endDate: 'Present'
    },
    {
      title: 'Junior Software Engineer',
      employmentType: 'Full-time',
      company: 'Zalando',
      companyLogo: zalandoLogo,
      location: 'Berlin, Berlin, Germany',
      locationType: 'Hybrid',
      description:
        <ul className='list-disc list-inside'>
          <li>Proactively expanded domain knowledge across multiple Zalando services, increasing team capacity and reducing reliance on senior guidance.</li>
          <li>Led and delivered key backend engineering projects in close collaboration with design and product teams, resulting in improved customer satisfaction and enhanced product reliability.</li>
          <li>Modernized critical platform components and supported the smooth migration away from legacy systems, reducing technical debt and increasing system maintainability.</li>
          <li>Championed adoption of modern platforms and practices, facilitating seamless migration away from legacy systems.</li>
          <li>Enhanced team effectiveness by actively participating in code reviews, sharing knowledge, and supporting continuous improvement.</li>
        </ul>,
      startDate: new Date(2024, 6),
      endDate: new Date(2025, 4)
    },
    {
      title: 'Junior Software Engineer',
      employmentType: 'Apprenticeship',
      company: 'Zalando',
      companyLogo: zalandoLogo,
      location: 'Berlin, Berlin, Germany',
      locationType: 'Hybrid',
      description:
        <ul className='list-disc list-inside'>
          <li>Developed and maintained backend features, APIs, and tools in close collaboration with senior engineers, following best practices in code quality, testing, and version control.</li>
          <li>Participated in the full software development lifecycle, including requirements gathering, implementation, testing, deployment, and support.</li>
          <li>Gained experience with agile methodologies, CI/CD workflows, and collaborative development environments.</li>
          <li>Enhanced problem-solving skills by tackling a variety of coding, debugging, and optimization tasks across multiple microservices and technology stacks.</li>
          <li>Built strong communication and teamwork capabilities by working with cross-functional teams, gathering feedback, and contributing to a collaborative engineering culture.</li>
        </ul>,
      startDate: new Date(2021, 7),
      endDate: new Date(2024, 5)
    },
    {
      title: 'Intern',
      employmentType: 'Internship',
      company: 'Vessel X',
      companyLogo: vesselxLogo,
      location: 'İzmir, İzmir, Turkey',
      locationType: 'Hybrid',
      description:
        <ul className='list-disc list-inside'>
          <li>Engineered a robust, serverless infrastructure using Google Cloud Platform and PostgreSQL in support of an autonomous water surface cleaning vessel project.</li>
          <li>Designed and implemented backend logic and database integrations in Python for real-time data processing and device communications.</li>
          <li>Collaborated closely with multidisciplinary teams, aligning infrastructure with project requirements and best practices in cloud computing.</li>
          <li>Conducted research and contributed to architectural decisions, ensuring high reliability and efficiency of deployed systems.</li>
          <li>Gained practical experience in cloud-native development, enhancing problem-solving abilities and technical communication skills.</li>
        </ul>,
      startDate: new Date(2023, 5),
      endDate: new Date(2023, 7)
    }];

  return (
    <section
      ref={ref}
      className='mb-24 sm:mb-40 scroll-mt-28'
      id='experience'
    >
      <h2 className='text-3xl font-medium mb-8 text-center'>Experience</h2>
      <VerticalTimeline lineColor={theme === 'light' ? 'rgb(229, 231, 235)' : 'rgba(229, 231, 235, .2)'}
                        animate={false}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              className=''
              contentStyle={{
                background:
                  theme === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(3, 7, 18, 0.75)',
                boxShadow: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.03) 0px 10px 15px -3px, rgba(0, 0, 0, 0.03) 0px 4px 6px -4px',
                border: 'none',
                borderRadius: '0.5rem',
                textAlign: 'left',
                padding: '1.5rem 2rem'
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.6rem solid rgba(255, 255, 255, 1)'
                    : '0.6rem solid rgba(3, 7, 18, 1)'
              }}
              date={`${item.startDate.toLocaleDateString('en', {
                year: 'numeric',
                month: 'short'
              })} - ${item.endDate != 'Present' ? item.endDate.toLocaleDateString('en', {
                year: 'numeric',
                month: 'short'
              }) : item.endDate} · ${elapsedTimeString(item.startDate, item.endDate)}`}
              dateClassName='!opacity-100 !font-normal !text-sm'
              icon=<PiLaptopLight/>
              iconClassName='!shadow-none !border-none !bg-white dark:!bg-gray-950'
            >
              <h3 className='!font-medium !text-xl'>{item.title}</h3>
              <div className='flex items-center mt-2'>
                <Image
                  src={item.companyLogo.src}
                  alt={item.company}
                  width='32'
                  height='32'
                  placeholder='blur'
                  className='h-8 w-8'
                />
                <div className='ml-2'>
                  <p className='!font-normal !text-sm !mt-0'>{item.company} · {item.employmentType}</p>
                  <p className='!font-normal !text-sm !mt-0'>{item.location} · {item.locationType}</p>
                </div>
              </div>
              <p className='!font-normal !text-base !leading-8 !mt-4'>{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
