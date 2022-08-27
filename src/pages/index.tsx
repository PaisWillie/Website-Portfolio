import Image from 'next/image';
import * as React from 'react';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main>
        <Header />
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <h1 className='mb-2'>Willie Pai</h1>
            <p className='mb-2'>Software Engineering Student</p>
            <div className='mb-10 flex flex-row justify-center'>
              <p className='mr-5'>
                <ArrowLink href='/about-me'>Learn more</ArrowLink>
              </p>
              <p>
                <ArrowLink href='/resume'>Resume</ArrowLink>
              </p>
            </div>
            <Image
              className='pointer-events-none'
              src='/../images/notion-style-selfie.svg'
              alt='Notion-styled self portrait'
              width={400}
              height={400}
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
