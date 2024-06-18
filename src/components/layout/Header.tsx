import * as React from 'react';

import clsxm from '@/lib/clsxm';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/#about-me', label: 'About Me' },
  { href: '/#projects', label: 'Projects' },
  { href: '/experiences', label: 'Experiences' },
  { href: '/resume', label: 'Resume' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-black pb-12'>
      <div className='layout flex h-14 items-center justify-between'>
        <UnstyledLink
          href='/'
          className='font-bold text-gray-400 hover:text-white'
        >
          {/* <NextImage
            src='/images/profile-icon/notion-style-selfie-circle-fit.png'
            useSkeleton
            className='w-12'
            width='2840'
            height='2840'
            alt='PaisWillie Icon'
          /> */}
          williep.ai
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink
                  href={href}
                  className={clsxm([
                    'text-gray-400 hover:text-white',
                    label === 'About Me' && 'hidden md:block',
                  ])}
                >
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
