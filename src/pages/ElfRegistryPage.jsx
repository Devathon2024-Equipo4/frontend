import React from 'react'
import CardElf from '@/components/elf-registry/CardElf'
import DialogElf from '@/components/elf-registry/DialogElf'


const ElfRegistryPage = () => {
  return (
    <div className='w-full min-h-[calc(100vh-64px)] bg-gray pt-10 pb-10 px-10 sm:px-30 lg:px-40 flex flex-col justify-center items-center'>
      <h1 className="text-stiletto text-3xl font-MountainsOfChristmas text-center font-bold mb-10">
        Registro laboral de Duendes
      </h1>
    <div className='w-full flex flex-col items-end'>
    <DialogElf className="align-end"/>
    </div>
    <CardElf/>

    </div>
  )
}

export default ElfRegistryPage