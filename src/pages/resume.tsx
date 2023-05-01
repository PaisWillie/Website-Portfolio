import * as React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
  return (
    <Layout>
      <Seo templateTitle='Resume' description="William Pai's Resume" />

      <main>
        <section className='bg-black  px-96'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-left'>
            <Document file='resume.pdf'>
              <Page pageNumber={1} />
            </Document>
            <ArrowLink href='/resume.pdf' className='mt-2 text-white'>
              Download
            </ArrowLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}
