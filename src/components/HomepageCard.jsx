import React from 'react'
import { Link } from 'react-router-dom';

const HomepageCard = ({route, title}) => {
  return (
    <div className='min-w-[400px] mb-4'>
      <Link to={route}>
        <div className="bg-akaroa  rounded-lg py-5 px-4 border-plantation border-2 hover:bg-akaroa/50 hover:border-white">
          <p className="font-DynaPuff text-plantation text-2xl text-center">{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default HomepageCard