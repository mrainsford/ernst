import Image from 'next/image';
import { Header } from '../components/header';
import HoverVideo from '@/components/hoverVideo';
import { Nav } from '@/components/nav';

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <section className="overflow-hidden h-[40vh] md:h-[50vh] relative">
        <Image
          src={'/db80c54f-3a50-4c1c-bc1d-e3c9fa284faf.jpg'}
          width={2000}
          height={1332}
          alt="bg"
          className="relative md:absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto w-[180%] md:w-full max-w-none opacity-50"
        />
        <div className="absolute md:absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
          <h2 className="text-center mt-4 mb-4 text-4xl px-8">
            Personalized and Precision Wealth Management
          </h2>
          <p className="text-xl px-8">
            It all starts with a deeper conversation
          </p>
        </div>
      </section>
      <HoverVideo src="https://res.cloudinary.com/dket79msa/video/upload/v1726856269/test_2_f9n8c2.mp4" />
      <section className="mt-30 p-[50px] flex justify-center">
        <div className="max-w-maxc0width margin-auto">
          <h2 className="text-center mt-8 mb-12 md:mb-2 text-3xl">
            It&apos;s Time to Think Differently about Your Money
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-0 md:p-6 md:mt-0">
            <div>
              <Image
                src="/b7b88665-1e13-4b3f-afc0-57b6d18e9581.jpg"
                alt="Image 1"
                width={500}
                height={380}
                className="w-full"
              />
              <h2 className="text-center mt-4 mb-4 text-2xl">About Us</h2>
              <p className="m-0 text-center">
                Ernst & Co. Wealth Management, LLC is a boutique wealth
                management firm with a focus on cultivating highly personal
                relationships with clients and focusing on their individual
                needs. Built on the cornerstones of Discipline, Patience, and
                Conviction, Ernst & Co. offers a full suite of advisory
                services, including wealth management and consulting, portfolio
                & investment management as well as retirement and financial
                planning.
              </p>
            </div>

            <div>
              <Image
                src="/d08c1081-fefd-4dea-960a-e6a8cebb0df4.jpg"
                alt="Image 2"
                width={500}
                height={380}
                className="w-full"
              />
              <h2 className="text-center mt-4 mb-4 text-2xl">Our Mission</h2>
              <p className="m-0 text-center">
                Our Mission is to provide clients with superior investment
                performance with the best path to wealth accumulation, retention
                and the secure transfer of assets. By creating and implementing
                strategies that are tailored to our clients unique objectives,
                we help our clients reach their goals in all types of economic
                conditions.
              </p>
            </div>

            <div>
              <Image
                src="/b16db999-ac3d-41e6-aa22-016f1b3a9bd8.jpg"
                alt="Image 3"
                width={500}
                height={380}
                className="w-full"
              />
              <h2 className="text-center mt-4 mb-4 text-2xl">
                Investment Philosiphy
              </h2>
              <p className="m-0 text-center">
                Our investment philosophy is focused on achieving long term
                investment goals while assuming the least amount of risk. Our
                strategy forgoes short-term gains and emotional responses in
                favor of a disciplined approach that provides greater long-term
                returns.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="mt-30 p-10 md:p-[100px] relative text-white flex align-center justify-center bg-left md:bg-center bg-cover section-with-overlay"
        style={{
          backgroundImage: `url('/be99604f-ca0d-4466-93d1-2ea392da3415.jpg')`,
        }}
      >
        <div className="relative z-[1] max-w-maxc1width h-full mb-8 md:mb-0">
          <h2 className="text-center text-white mt-6 mb-2 text-3xl mb-12 md:mb-2">
            How We Construct Portfolios
          </h2>
          <div className="flex flex-col md:flex-column gap-8 p-0 md:p-6 text-center max-w-maxc0width margin-auto">
            <p className="flex-1 text-white">
              Our first priority is helping you take care of yourself and your
              family. We want to learn more about your personal situation,
              identify your dreams and goals, and understand your tolerance for
              risk. Long-term relationships that encourage open and honest
              communication have been the cornerstone of my foundation of
              success.
            </p>
            <p className="flex-1 text-white">
              Whether you&apos;re facing retirement&nbsp; –<span>&nbsp;</span>
              or looking to better understand certain investment ideas
              <span>&nbsp;</span>
              –&nbsp;we can help you address your most-pressing financial
              questions.
            </p>
            <p className="flex-1 text-white">
              Attempting to guide investors through market challenges is a big
              part of what we do as advisors. Through portfolio construction and
              investor counseling, we hope to improve results and enhance our
              client’s sense of wellbeing.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
