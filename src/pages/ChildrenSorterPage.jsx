import ButtonBack from '@/components/ButtonBack';
import ChildrenList from '@/components/children-sorter/ChildrenList';
import React from 'react'

const ChildrenSorterPage = () => {
  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-gray pt-10 pb-10 px-10 sm:px-30 lg:px-40">
      <h1 className="text-stiletto text-6xl font-MountainsOfChristmas text-center font-bold">
        Clasificador de niños
      </h1>
      <ButtonBack/>
      <ChildrenList/>
    </div>
  );
};

export default ChildrenSorterPage;