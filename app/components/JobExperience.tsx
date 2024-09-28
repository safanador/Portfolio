/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

function JobExperience({startDate, endDate, title, description, stack}:any) {
    const tecnologies = stack;
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
            <span>{startDate}</span>
            <span>-</span>
            <span>{endDate}</span>
        </header>
        <div className='z-10 sm:col-span-6'>
            <h3 className='font-medium leading-snug text-slate-200'>
                <div>
                    <a className='class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"' href="#" target='_blank'>
                        <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                        <span>{title}</span>
                    </a>
                </div>
            </h3>
            <p className='mt-2 text-sm text-slate-400 leading-normal'>
                {description}
            </p>
            <ul className='flex mt-2 flex-wrap'>
                {tecnologies.map((element: string, idx: number) => (
                    <li key={idx} className="mr-1.5 mt-2">
                        <div
                            className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                        > 
                            {element}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default JobExperience