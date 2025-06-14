import * as React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ResumePage() {
  const [pageWidth, setPageWidth] = React.useState(600);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        // Set max width for desktop, but allow shrinking on mobile
        setPageWidth(Math.min(containerRef.current.offsetWidth, 600));
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Layout>
      <Seo templateTitle='Resume' description="William Pai's Resume" />

      <main>
        <section className='bg-black'>
          <div className='layout flex min-h-screen flex-col items-center justify-center pb-16 text-left md:pb-32'>
            <div
              ref={containerRef}
              className='flex w-full max-w-[600px] flex-col items-center px-2 sm:px-0'
            >
              <Document file='/pdfs/resume.pdf'>
                <Page pageNumber={1} width={pageWidth} />
                <Page pageNumber={2} width={pageWidth} className='mt-1' />
              </Document>
              <ArrowLink href='/pdfs/resume.pdf' className='mt-2 text-white'>
                Download
              </ArrowLink>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
