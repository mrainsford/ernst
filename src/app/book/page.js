import Image from 'next/image';
import HoverVideo from '@/components/hoverVideo';
import { Nav } from '@/components/nav';

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <section className="overflow-hidden h-[40vh] md:h-[50vh] relative section-with-overlay2">
        <Image
          src={'/ebca3215-b8e0-456e-a195-5cd3142a1be5.jpg'}
          width={2130}
          height={1244}
          alt="bg"
          className="absolute top-0 left-1/2 transform -translate-x-1/2 lg:top-[-50%] w-[180%] md:w-full max-w-none"
        />
      </section>
      <section className="mt-30 p-[50px] flex justify-center">
        <div className="max-w-maxc0width margin-auto">
          <div className="flex flex-col-reverse md:grid md:grid-cols-[30%,70%] gap-12 p-0 md:p-6 md:mt-0">
            <div className="w-full">
              <Image
                src="/411218bf-f5a3-45fc-8848-e0fb7673c262.png"
                alt="Image 1"
                width={500}
                height={380}
              />
            </div>
            <div className="w-full md:w-[100%]">
              <h1 className="mt-8 md:mt-4 mb-2 md:mb-12 md:mb-2 text-3xl">
                DISCIPLINE | PATIENCE | CONVICTION
              </h1>
              <p>
                <span>
                  While diversification is an important investment concept,
                  being diversified between stocks, bonds, and cash alone may
                  not be enough. A static “buy and hold” approach in a market
                  that is increasingly dynamic is antiquated. Today, prudent
                  risk management and capital preservation strategies are
                  paramount to protecting investor’s long-term interests.
                  Diversifying by investment style and across sectors,
                  geographies, and asset classes can help insulate portfolios
                  from market uncertainty and improve the potential for better
                  outcomes.
                </span>
              </p>
              <br />
              <p>
                <span>In&nbsp;</span>
                <i>
                  <span>The Adaptive Investment Portfolio,&nbsp;</span>
                </i>
                <span>
                  Michael P. Ernst offers a clear and well-defined process that
                  guides investors on how to build a portfolio that
                  automatically&nbsp;
                </span>
                <i>
                  <span>adapts&nbsp;</span>
                </i>
                <span>
                  to changing market conditions. By reducing volatility and
                  providing a smoother ride, investors can avoid taking an
                  emotional response to managing their investments, providing a
                  higher level of confidence regardless of market conditions.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <HoverVideo src="https://res.cloudinary.com/dket79msa/video/upload/v1726850008/15457101_ErnstAndCompany_June2020-2_1_dimby7.mp4" />
    </main>
  );
}
