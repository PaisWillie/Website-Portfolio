import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Divider, IconButton } from '@mui/material';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main>
        <section className='bg-black pb-24 md:px-24 lg:px-48 xl:px-96'>
          <div className='layout flex min-h-screen flex-col justify-start text-left'>
            <h1 className='text-2xl text-white md:text-4xl'>
              Software Developer
            </h1>
            <a id='about-me' />
            <h1 className='text-2xl text-white md:text-4xl'>
              creating thoughtful,
            </h1>
            <h1 className='text-2xl text-white md:text-4xl'>
              intuitive mobile & web apps.
            </h1>
            <p className='mt-6 text-base text-gray-400 md:mt-12 md:text-lg'>
              I&apos;m Willie, a Canadian 4th year software engineering student
              at McMaster University. My passion lies in crafting user-friendly
              mobile and web applications, where simplicity and usability are at
              the forefront of design. I believe that a well-designed user
              interface is integral to delivering an exceptional user
              experience, and I love implementing this principle in my work.
            </p>
            <p className='mt-3 text-base text-gray-400 md:mt-6 md:text-lg'>
              I&apos;m currently looking for a co-op internship starting in
              Summer 2025 or full-time in Summer 2026. If you&apos;re interested
              in working together, feel free to reach out!
            </p>
            <div className='my-8 -ml-3 flex-row'>
              <IconButton
                href='https://www.linkedin.com/in/willie-pai/'
                target='blank'
              >
                <LinkedInIcon className='text-gray-400' />
              </IconButton>
              <IconButton href='https://github.com/PaisWillie' target='blank'>
                <GitHubIcon className='text-gray-400' />
              </IconButton>
              <IconButton href='mailto:paiw@mcmaster.ca' target='blank'>
                <EmailIcon className='text-gray-400' />
              </IconButton>
              <ArrowLink href='/resume' className='ml-6 text-gray-400'>
                My Resume
              </ArrowLink>
            </div>
            <a id='projects' />
            <Divider className='bg-white' />
            <div className='mt-24'>
              <div className='flex flex-col items-center gap-8 md:flex-row md:justify-between'>
                <NextImage
                  useSkeleton
                  className='mb-6 w-full md:mb-0 md:w-5/12'
                  src='/images/cabpool/cabpool-stacked.jpg'
                  width='1094'
                  height='1314'
                  alt='Cabpool Destination Select & Status'
                />
                <div className='w-full text-left text-right md:w-7/12 md:text-right'>
                  <UnderlineLink
                    href='https://github.com/PaisWillie/Cabpool-Frontend/'
                    target='_blank'
                  >
                    <h2 className='text-white'>Cabpool</h2>
                  </UnderlineLink>
                  <h5 className='text-gray-400'>
                    Taxi + Carpooling. You get the jist.
                  </h5>
                  <p className='text-sm italic text-gray-600'>
                    React Native, TypeScript, Node.js, Express.js, Firebase,
                    Google Maps API
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-24'>
              <div className='flex flex-col items-center gap-8 md:flex-row md:justify-between'>
                <div className='w-7/12 text-left'>
                  <UnderlineLink
                    href='https://github.com/PaisWillie/WaveDirect-App'
                    target='_blank'
                  >
                    <h2 className='text-white'>WaveDirect App</h2>
                  </UnderlineLink>
                  <h5 className='text-gray-400'>
                    2x hackathon winner.
                    <br />
                    Built for WaveDirect ISP customers.
                  </h5>
                  <p className='text-sm italic text-gray-600'>
                    Flutter, Dart, Google Maps API
                  </p>
                </div>
                <NextImage
                  useSkeleton
                  className='mb-6 w-full md:mb-0 md:w-5/12'
                  src='/images/wavedirect-app/wavedirect-stacked.jpg'
                  width='798'
                  height='942'
                  alt='WaveDirect App Startup and Home Screen'
                />
              </div>
            </div>
            <div className='mt-24'>
              <div className='flex flex-col items-center gap-8 md:flex-row md:justify-between'>
                <NextImage
                  useSkeleton
                  className='w-7/12'
                  src='/images/cosy-pos/cosy-pos-stacked.jpg'
                  width='1810'
                  height='1246'
                  alt='CosyPOS Menu'
                />
                <div className='mb-6 w-full text-right md:mb-0 md:w-5/12'>
                  <UnderlineLink
                    href='https://github.com/PaisWillie/Cosy-POS'
                    target='_blank'
                  >
                    <div className='flex flex-row items-end'>
                      <p className='ml-2 mr-3 text-sm text-gray-700'>(WIP)</p>
                      <h2 className='text-white'>Cosy POS</h2>
                    </div>
                  </UnderlineLink>
                  <h5 className='text-gray-400'>
                    A modernized point-of-sale system, right from your own iPad.
                  </h5>
                  <p className='text-sm italic text-gray-600'>
                    Flutter, Dart, Node.js, Express.js, Firebase
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
