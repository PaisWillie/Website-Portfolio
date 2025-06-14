import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

const Experiences = () => {
  return (
    <Layout>
      <Seo templateTitle='Resume' description="William Pai's Resume" />

      <main>
        <section className='bg-black'>
          <div className='layout flex min-h-screen flex-col items-center justify-center pb-16 text-left md:pb-32'>
            <div className='flex w-full flex-col items-end gap-y-12 md:flex-row md:items-center'>
              <div className='flex w-full flex-row justify-center md:w-5/12'>
                <NextImage
                  draggable={false}
                  src='/images/insidedesk/insidevault.jpg'
                  alt='InsideVault'
                  width={658}
                  height={1494}
                  className='w-8/12 md:w-full'
                />
              </div>
              <div className='flex w-full flex-col items-end justify-center pl-0 text-right text-white md:w-7/12 md:pl-12'>
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
            <div className='flex flex-col items-end justify-center pl-12 text-right text-white'>
              <h1>SOTI Inc.</h1>
              <h3>Software Developer</h3>
              <span className='text-gray-400'>Internship - 2023-2024</span>
              <p className='pt-8'>
                At SOTI Inc., I contributed to the development of XSight, a
                platform for managing diagnostic data across thousands of iOS,
                Android, and other mobile devices. I worked on full stack
                development using Angular, Bootstrap, and .NET C#. One of my key
                projects was implementing a survey app with Entity Framework
                Core, SQL databases, and JWT authentication. Additionally, I
                played a significant role in improving product stability by
                resolving Jira tickets, integrating Jenkins automation, and
                implementing Jasmine/Karma unit tests. I also led several major
                Angular version upgrades, refactoring code to address package
                dependencies, and redeveloped the company&apos;s UI component
                library to ensure consistency and long-term support.
              </p>
              <ArrowLink href='https://www.soti.net/' className='mt-8'>
                Click here for more details
              </ArrowLink>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Experiences;
