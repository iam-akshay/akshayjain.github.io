import { portfolioData } from '@/app/services/portfolioData';
import React from "react";
import Tag from '../ui/Tag';

const Header: React.FC = () => {
  const { first_name, last_name } = portfolioData.personal_info;
  return (
    <header className="flex justify-between items-center p-5 uppercase">
      <div className='text-sm font-bold'>
        <h1>{first_name}</h1>
        <h1>{last_name}</h1>
      </div>
      <nav>
        <ul className="text-sm flex space-x-2 font-semibold">
          <li><Tag variant='outlined'>Story</Tag></li>
          <li><Tag>Workflow</Tag></li>
          <li><Tag>Projects</Tag></li>
          <li><Tag>Experience</Tag></li>
          <li><Tag>Contacts</Tag></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
