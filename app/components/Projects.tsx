import Image from 'next/image';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

interface projectProps {
    title: string,
    description: string,
    imageUrl: string,
    tecnologies: string[],
    siteUri: string,
}

function Projects({title, description, imageUrl, tecnologies, siteUri}: projectProps) {
  return (
    <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 pr-2'>
        <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'>
        </div>
        <div className='z-10 sm:order-2 sm:col-span-6'>
            <h3>
                <a href={siteUri} target='_blank' className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base'>
                    <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                    <span>{title}</span>
                    <span className='inline-block'>App           
                        <MdArrowOutward className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:-translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition/none ml-1 translate-y-px' />
                    </span>
                </a>
            </h3>
            <p className='mt-2 text-sm text-slate-400 leading-normal'>
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
        <Image alt='Build a spotify connected app nesline course marketing card' width={200} height={48} src={imageUrl} className='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1' />
    </div>
  )
}

export default Projects