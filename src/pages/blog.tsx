import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main>
        <section className='bg-black pb-24 md:px-24 lg:px-48 xl:px-96'>
          <div className='layout items-left flex min-h-screen flex-col justify-start text-left'>
            Hello world!
          </div>
        </section>
      </main>
    </Layout>
  );
}
