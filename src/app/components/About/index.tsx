import { portfolioData } from '@/app/services/portfolioData';
import React from "react";
import Tag from '../ui/Tag';

const About: React.FC = () => {
  return (
    <div className="flex justify-between gap-32 p-5 items-center h-full">
      <div className="flex-1 flex flex-col justify-center gap-4 items-end">
        <Tag className="uppercase text-[24px]" variant='outlined'>Lorem</Tag>
        <h1 className="text-[100px] leading-tight tracking-wide uppercase font-medium">Lorem Ips simply dummy</h1>
        <div className="text-gray-400 flex gap-12">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      <div className="flex-shrink-0 w-1/3 p-5">
        <div className="h-[600px] w-full bg-gray-300 rounded-xl"></div>
      </div>
    </div>
  );
};

export default About;
