import { Nav } from '@/components/nav';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <section className="overflow-hidden h-[40vh] md:h-[50vh] relative">
        <Image
          src={'/c1d714d3-0282-40a3-98af-757a098ce0a8.jpg'}
          width={2130}
          height={1244}
          alt="bg"
          className="absolute top-0 left-1/2 transform -translate-x-1/2 lg:top-[-20%] w-[180%] md:w-full max-w-none"
        />
      </section>
      <section className="mt-30 p-[50px] flex justify-center">
        <div className="max-w-maxc0width margin-auto">
          <h2 className="text-center mt-8 mb-4 md:mb-2 text-3xl">About Us</h2>
          <p className="text-center mt-4 mb-8">
            Ernst & Co. Wealth Management, LLC is a boutique wealth management
            firm with a focus on cultivating highly personal relationships with
            clients and focusing on their individual needs. Built on the
            cornerstones of Discipline, Patience, and Conviction, Ernst & Co.
            offers a full suite of advisory services, including wealth
            management and consulting, portfolio & investment management as well
            as retirement and financial planning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-0 md:p-6 md:mt-0">
            <div>
              <h2 className="text-center mt-4 mb-4 text-2xl">
                Concierge “white glove” Client Service
              </h2>
              <p className="m-0 text-center">
                We pride ourselves on prompt and punctual responses to your
                needs, questions and inquiries. We are available outside of
                business hours to meet in person, email or on the phone. Our
                clients’ needs and peace of mind are our number one priority.
              </p>
            </div>

            <div>
              <h2 className="text-center mt-4 mb-4 text-2xl">
                Customized Portfolios
              </h2>
              <p className="m-0 text-center">
                Ernst & Co. Wealth Management, LLC offers a highly personalized
                process of portfolio design and construction. In an
                ever-changing financial climate, we spend time to understand the
                unique goals and objectives of each and every client. This
                enables us to provide each client peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-30 p-[50px] bg-[#F4F4F4] text-center md:text-left flex justify-center">
        <div className="max-w-maxc0width margin-auto">
          <div className="flex flex-col-reverse md:grid md:grid-cols-[30%,70%] gap-12 p-0 md:p-6 md:mt-0">
            <div className="w-full">
              <Image
                src="/bc13743c-1e15-4432-bf20-6dfcbb95e44d.jpg"
                alt="michael"
                width={633}
                height={950}
              />
            </div>
            <div className="w-full md:w-[100%] flex gap-4 flex-col">
              <h2 className="mt-0 mb-4 text-2xl">Meet Your Advisor & Author</h2>
              <h4>
                <a
                  href="https://www.ernstwealth.com/team/michael-ernst"
                  data-mce-href="https://www.ernstwealth.com/team/michael-ernst"
                >
                  <h3>
                    Michael P. Ernst, Author of The Adaptive Investment
                    Portfolio
                  </h3>
                </a>
              </h4>
              <p>Founder/CEO, Ernst &amp; Co. Wealth Management, LLC</p>

              <p className="u-margin-bottom--5">
                <i
                  className="fa fa-envelope c-team-info__icons"
                  aria-hidden="true"
                ></i>
                <span>&nbsp;</span>
                <a
                  href="mailto:michael@ernstwealth.com"
                  data-mce-href="mailto:michael@ernstwealth.com"
                >
                  michael@ernstwealth.com
                </a>
              </p>
              <p>
                Michael started his career at Morgan Stanley over 30 years ago
                where he had a mentor that was a Barron’s Top 100 Advisor and an
                investment advisor to Bill Gross of Janus Capital (previously
                Pimco). It was that experience where Michael learned the
                principals of portfolio management and helped develop his
                expertise on how to best assist his clients navigate market
                cycles and meet their most important financial goals with
                specific risk management, asset diversification and growth
                strategies. Michael currently works with high net worth
                individuals and families in Manhattan Beach, California.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-30 p-[50px] flex justify-center">
        <div className="max-w-maxc0width margin-auto">
          <h2 className="text-center mt-8 mb-12 md:mb-2 text-3xl">
            Finding your fit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-0 md:p-6 md:mt-0 md:px-0">
            <div>
              <Image
                src={'/a6076a7f-216b-4b13-a22d-8097de029d38.jpg'}
                width={525}
                height={350}
                alt="bg"
                className="w-full"
              />
            </div>

            <div>
              <p>
                No one strategy fits everyone, which is why every client gets
                our undivided attention—from planning to execution to follow-up.
                We take a proactive approach to helping you develop a strategy
                to address your financial goals and objectives, using the most
                efficient methods available.
              </p>
              <br />
              <p>
                Recognizing that everyone encounters challenges along the way,
                we strive to anticipate and address those situations as they
                occur. We want to keep you on track toward a meaningful and
                purpose-driven financial future.
              </p>
              <br />
              <p>
                We invite you to check out all the material on our website. If
                you have any questions, please send us an email or call the
                office. We look forward to speaking with you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
