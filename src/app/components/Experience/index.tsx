'use client';

import React from 'react';
import { Heading } from '../ui/Heading';

interface ExperienceCardProps {
  duration: string;
  title: string;
  description: string;
  theme: 'dark' | 'light';
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  duration,
  title,
  description,
  theme,
}) => {
  const cardClass = `flex flex-col p-6 rounded-3xl ${
    theme === 'dark' ? 'bg-darkgray text-white' : 'bg-gray-100 text-darkgray'
  }`;

  return (
    <div className={cardClass}>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="opacity-70 mt-4">{description}</p>
      <p className="opacity-70 mt-2">{duration}</p>
    </div>
  );
};

export const Experience: React.FC = () => {
  const experienceData: ExperienceCardProps[] = [
    {
      duration: 'Jun 2020 - Present',
      title: 'The standard chunk of Lorem Ipsum',
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      theme: 'dark',
    },
    {
      duration: 'Dec 2019 - May 2020',
      title: 'The standard chunk of Lorem Ipsum',
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      theme: 'light',
    },
    
  ];

  return (
    <div className="flex flex-col p-8 px-8 md:px-32 h-full items-center gap-12">
      <Heading>My Experience</Heading>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full">
        {experienceData.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </div>
  );
};
