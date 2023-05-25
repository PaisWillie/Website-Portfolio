import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

const Experiences = () => {
  return (
    <Layout>
      <Seo templateTitle='Resume' description="William Pai's Resume" />

      <main>
        <section className='bg-black  px-96'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-left'>
            <div className='flex w-full flex-row'>
              <NextImage
                draggable={false}
                src='/images/insidedesk/insidevault.jpg'
                alt='InsideVault'
                width={658}
                height={1494}
                className='w-5/12'
              />
              <div className='flex w-7/12 flex-col items-end justify-center pl-12 text-right text-white'>
                <h1>InsideDesk Inc.</h1>
                <h3>Software Engineer</h3>
                <span className='text-gray-400'>Internship - 2022</span>
                <p className='pt-8'>
                  InsideVault — a password vault dedicated for clients to track,
                  filter, and autofill insurance portal passwords based on
                  hundreds of offices and customer tax ID. I fully designed the
                  UI and helped build the frontend from scratch. Built with
                  React.js.
                </p>
                <p className='pt-8'>
                  InsideAssist — a claim follow-up software that uses AI and
                  machine learning to maximize claim collection. I contributed
                  to the new design, added new features, and developed front-end
                  ci/cd pipeline testing. Built with Angular.js, Python Flask,
                  and AWS.
                </p>
                <ArrowLink
                  href='https://www.insidedesk.com/products/'
                  className='mt-8'
                >
                  Click here for more details
                </ArrowLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Experiences;
