import Image from 'next/image';
import React, { useRef, useState, useEffect, useCallback } from 'react'
import { MdArrowOutward } from "react-icons/md";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import uiTranslations from '../data/translations';

interface projectProps {
    title: string,
    role: string,
    description: string,
    photos: string[],
    tecnologies: string[],
    siteUri?: string,
    lang?: 'es' | 'en'
}

function Projects({ title, role, description, photos, tecnologies, siteUri, lang = 'es' }: projectProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const t = uiTranslations[lang];

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 1);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            checkScroll();
        }, 100);

        window.addEventListener('resize', checkScroll);
        return () => {
            window.removeEventListener('resize', checkScroll);
            clearTimeout(timer);
        };
    }, [photos]);

    // Handle body scroll locking
    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedIndex]);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const nextImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedIndex !== null && photos.length > 0) {
            setSelectedIndex((selectedIndex + 1) % photos.length);
        }
    }, [selectedIndex, photos.length]);

    const prevImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedIndex !== null && photos.length > 0) {
            setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
        }
    }, [selectedIndex, photos.length]);

    // Keyboard support
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === 'Escape') setSelectedIndex(null);
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, nextImage, prevImage]);

    const renderDescription = (text: string) => {
        const lines = text.split('\n');
        const elements: React.ReactNode[] = [];
        let currentList: React.ReactNode[] = [];

        lines.forEach((line, index) => {
            const trimmed = line.trim();
            // Detect lines starting with "1. ", "- ", "* "
            const listMatch = trimmed.match(/^(\d+\.|-|\*)\s+(.*)/);

            if (listMatch) {
                currentList.push(
                    <li key={`li-${index}`} className="mb-1 pl-1">
                        {listMatch[2]}
                    </li>
                );
            } else {
                if (currentList.length > 0) {
                    elements.push(
                        <ul key={`ul-${index}`} className="list-disc list-outside ml-5 mb-4 space-y-1 text-sm text-slate-400">
                            {currentList}
                        </ul>
                    );
                    currentList = [];
                }

                if (trimmed) {
                    elements.push(
                        <p key={`p-${index}`} className="mb-4 last:mb-0 text-sm text-slate-400 leading-normal">
                            {trimmed}
                        </p>
                    );
                }
            }
        });

        if (currentList.length > 0) {
            elements.push(
                <ul key="ul-final" className="list-disc list-outside ml-5 mb-4 space-y-1 text-sm text-slate-400">
                    {currentList}
                </ul>
            );
        }

        return elements;
    };

    return (
        <div className='group relative flex flex-col gap-4 pb-8 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50 pr-2'>
            <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'>
            </div>

            <div className='z-10 flex flex-col'>
                <div className='flex items-baseline justify-between'>
                    <h3>
                        {siteUri ? (
                            <a href={siteUri} target='_blank' rel="noreferrer" className='inline-flex items-baseline font-bold leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-lg'>
                                <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                                <span>{title}</span>
                                <span className='inline-block'>
                                    <MdArrowOutward className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:-translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition/none ml-1 translate-y-px' />
                                </span>
                            </a>
                        ) : (
                            <p className='font-bold leading-tight text-slate-200 text-lg'>{title}</p>
                        )}
                    </h3>
                </div>

                {role && (
                    <p className='text-sm font-semibold text-teal-300/80 mt-1 uppercase tracking-wider'>
                        {role}
                    </p>
                )}

                <div className='mt-4'>
                    {renderDescription(description)}
                </div>

                {photos && photos.length > 0 && (
                    <div className='relative mt-6 group/carousel'>
                        {/* Left Navigation Button */}
                        {canScrollLeft && (
                            <button
                                onClick={() => scroll('left')}
                                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-slate-900/80 text-teal-300 border border-teal-500/20 shadow-lg backdrop-blur-sm transition-all hover:bg-slate-800 hover:scale-110 opacity-0 group-hover/carousel:opacity-100 hidden md:block"
                                aria-label={t.ariaAnterior}
                            >
                                <FiChevronLeft size={24} />
                            </button>
                        )}

                        {/* Right Navigation Button */}
                        {canScrollRight && (
                            <button
                                onClick={() => scroll('right')}
                                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-slate-900/80 text-teal-300 border border-teal-500/20 shadow-lg backdrop-blur-sm transition-all hover:bg-slate-800 hover:scale-110 opacity-0 group-hover/carousel:opacity-100 hidden md:block"
                                aria-label={t.ariaSiguiente}
                            >
                                <FiChevronRight size={24} />
                            </button>
                        )}

                        <div
                            ref={scrollContainerRef}
                            onScroll={checkScroll}
                            className='flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide'
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {photos.map((imgUrl, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setSelectedIndex(idx)}
                                    className="relative w-72 h-44 flex-shrink-0 snap-center rounded-lg overflow-hidden border border-slate-700/50 bg-slate-950/40 cursor-pointer group-hover:border-slate-500/50 transition duration-300"
                                >
                                    <Image
                                        alt={`${title} screenshot ${idx + 1}`}
                                        src={imgUrl}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        style={{ objectFit: 'contain', objectPosition: 'center' }}
                                        className='transition-transform duration-500 group-hover:scale-105'
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Visual indicator for mobile/touch */}
                        <div className="md:hidden flex justify-center gap-1 mt-2">
                            {canScrollRight && <span className="text-[10px] text-teal-300/50 animate-pulse">{t.swipeIndicator}</span>}
                        </div>
                    </div>
                )}

                <ul className='flex flex-row mt-4 flex-wrap'>
                    {tecnologies.map((element: string, idx: number) => (
                        <li key={idx} className="flex gap-4 items-center flex-col sm:flex-row mr-1.5 mt-2">
                            <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                {element}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Modal Viewer */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-md transition-all duration-300"
                    onClick={() => setSelectedIndex(null)}
                >
                    <button
                        className="absolute top-6 right-6 z-[110] p-3 text-slate-400 hover:text-white transition-colors"
                        onClick={() => setSelectedIndex(null)}
                    >
                        <FiX size={32} />
                    </button>

                    <button
                        className="absolute left-4 z-[110] p-4 text-white/50 hover:text-white transition-all hover:scale-110 hidden md:block"
                        onClick={prevImage}
                    >
                        <FiChevronLeft size={48} />
                    </button>

                    <button
                        className="absolute right-4 z-[110] p-4 text-white/50 hover:text-white transition-all hover:scale-110 hidden md:block"
                        onClick={nextImage}
                    >
                        <FiChevronRight size={48} />
                    </button>

                    <div
                        className="relative w-[90vw] h-[80vh] flex items-center justify-center p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={photos[selectedIndex]}
                                alt={`${title} full view`}
                                fill
                                sizes="90vw"
                                style={{ objectFit: 'contain' }}
                                className="transition-all duration-300"
                            />
                        </div>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-400 text-sm font-medium bg-slate-900/50 px-4 py-1 rounded-full backdrop-blur-sm">
                            {selectedIndex + 1} / {photos.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Projects;