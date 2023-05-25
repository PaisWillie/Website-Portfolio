import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Divider, IconButton } from '@mui/material';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import * as React from 'react';
import { useRef } from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

export default function ParallaxHome() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const parallax = useRef<IParallax>(null!);

  return (
    <Layout>
      <Seo />

      <main>
        <section className='min-h-screen w-full bg-black'>
          <Parallax ref={parallax} pages={3.6}>
            <ParallaxLayer
              offset={0}
              className='text-left md:px-24 lg:px-48 xl:px-96'
            >
              <h1 className='text-white'>Software Developer</h1>
              <a id='about-me' />
              <h1 className='text-white'>creating thoughtful,</h1>
              <h1 className='text-white'>intuitive mobile & web apps.</h1>
              <p className='mt-12 text-gray-400'>
                I&apos;m Willie, a Canadian 4th year software engineering
                student at McMaster University. My passion lies in crafting
                user-friendly mobile and web applications, where simplicity and
                usability are at the forefront of design. I believe that a
                well-designed user interface is integral to delivering an
                exceptional user experience, and I love implementing this
                principle in my work.
              </p>
              <p className='mt-6 text-gray-400'>
                I&apos;m currently looking for an 8 or 12-month co-op internship
                starting in Fall 2023. If you&apos;re interested in working
                together, feel free to reach out!
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
            </ParallaxLayer>
            <ParallaxLayer
              offset={0.7}
              speed={-0.3}
              onClick={() => parallax.current.scrollTo(0.7)}
              className='text-left md:px-24 lg:px-48 xl:px-96'
            >
              <div className='flex flex-row items-center justify-between'>
                <NextImage
                  useSkeleton
                  draggable={false}
                  className='w-5/12'
                  src='/images/cabpool/cabpool-stacked.jpg'
                  width='1094'
                  height='1314'
                  alt='Cabpool Destination Select & Status'
                />
                <div className='w-7/12 text-right'>
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
            </ParallaxLayer>
            <ParallaxLayer
              offset={1.95}
              speed={0.1}
              onClick={() => parallax.current.scrollTo(1.75)}
              className='text-left md:px-24 lg:px-48 xl:px-96'
            >
              <div className='flex flex-row items-center justify-between'>
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
                  draggable={false}
                  className='w-5/12'
                  src='/images/wavedirect-app/wavedirect-stacked.jpg'
                  width='798'
                  height='942'
                  alt='WaveDirect App Startup and Home Screen'
                />
              </div>
              {/* </div> */}
            </ParallaxLayer>
            <ParallaxLayer
              offset={2.75}
              speed={-0.1}
              onClick={() => parallax.current.scrollTo(2.75)}
              className='text-left md:px-24 lg:px-48 xl:px-96'
            >
              <div className='flex flex-row items-center justify-between'>
                <NextImage
                  useSkeleton
                  draggable={false}
                  className='w-7/12'
                  src='/images/cosy-pos/cosy-pos-stacked.jpg'
                  width='1810'
                  height='1246'
                  alt='CosyPOS Menu on iPad Pro 11" and 12"'
                />
                <div className='w-5/12 text-right'>
                  <UnderlineLink
                    href='https://github.com/PaisWillie/Cosy-POS'
                    target='_blank'
                  >
                    <div className='flex flex-row items-end'>
                      <p className='ml-2 mr-3 text-sm text-gray-700'>(WIP)</p>
                      <h2 className='text-white'>CosyPOS</h2>
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
            </ParallaxLayer>
          </Parallax>
        </section>
      </main>
    </Layout>
  );
}
