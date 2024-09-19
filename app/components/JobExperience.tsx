/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

function JobExperience({startDate, endDate, title, description, stack}:any) {
    const tecnologies = stack;
  return (
    <div className='flex flex-col md:flex-row text-slate-200 gap-6 mt-9 lg:hover:bg-gray-700 lg:hover:rounded-2xl pr-2 sm:p-6 '>
        <div className='flex flex-row gap-1 text-slate-400 text-sm pt-1'>
            <span>{startDate}</span>
            <span>-</span>
            <span>{endDate}</span>
        </div>
        <div className=' w-full lg:w-3/5 flex flex-col'>
            <h4 className='font-medium text-xl'>{title}</h4>
            <p className='mt-2 text-sm leading-normal'>
                {description}
            </p>
            <ul className='flex flex-row mt-2 flex-wrap'>
                {tecnologies.map((element: string, idx: number) => (
                    <li key={idx} className="flex gap-4 items-center flex-col sm:flex-row mr-1.5 mt-2">
                        <a
                            className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                        > 
                            {element}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default JobExperience