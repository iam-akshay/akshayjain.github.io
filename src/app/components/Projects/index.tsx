'use client';

import React from 'react';
import { Heading } from '../ui/Heading';
import Tag from '../ui/Tag';

interface ProjectCardProps {
  duration: string;
  title: string;
  description: string;
  technologies: string[];
  theme: 'dark' | 'light';
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  duration,
  title,
  description,
  technologies,
  theme,
}) => {
  return (
    <div
      className={`flex p-12 rounded-3xl ${
        theme === 'dark' ? 'bg-darkgray text-white' : 'bg-gray-100 text-darkgray'
      }`}
    >
      <div className="w-1/4">
        <p>{duration}</p>
      </div>
      <div className="flex flex-col gap-6 flex-1">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{description}</p>
        <div className="flex gap-4">
          {technologies.map((tech, index) => (
            <Tag key={index} theme={theme}>
              {tech}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const projectData: ProjectCardProps[] = [
    {
      duration: '2021 - 2024',
      title: 'The standard chunk of Lorem Ipsum',
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      technologies: ['Layout', 'Sample', 'Content', 'Looking'],
      theme: 'dark',
    },
    {
      duration: '2021 - 2024',
      title: 'The standard chunk of Lorem Ipsum',
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      technologies: ['Layout', 'Sample', 'Content', 'Looking'],
      theme: 'light',
    },
    // {
    //   duration: '2021 - 2024',
    //   title: 'The standard chunk of Lorem Ipsum',
    //   description:
    //     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    //   technologies: ['Layout', 'Sample', 'Content', 'Looking'],
    //   theme: 'dark',
    // },
  ];

  return (
    <div className="flex flex-col p-8 px-32 h-full items-center gap-12">
      <Heading>My Projects</Heading>
      <div className="flex flex-col gap-12">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};
