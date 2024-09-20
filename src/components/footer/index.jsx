import Link from 'next/link';

export const Footer = () => (
  <footer className="bg-customGray p-10 text-white flex justify-center">
    <div className="max-w-maxc0width margin-auto">
      <div className="flex flex-col md:flex-row gap-[40px] mb:gap-[100px]">
        {/* Left Column */}
        <div className="text-sm">
          <h4 className="text-lg mb-4">Contact</h4>
          <p>1334 Parkview Avenue</p>
          <p>Suite 100</p>
          <p>Manhattan Beach, CA 90266</p>
          <p>
            <a
              href="mailto:michael@ernstwealth.com"
              className="text-white underline"
            >
              michael@ernstwealth.com
            </a>
          </p>
        </div>

        {/* Right Column */}
        <div className="text-xs flex flex-col gap-[20px] pb-[100px]">
          <p>
            Check the background of your financial professional on FINRA&apos;s{' '}
            <Link
              href="//brokercheck.finra.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'underline' }}
            >
              BrokerCheck
            </Link>
            .
          </p>

          <p>
            The content is developed from sources believed to be providing
            accurate information. The information in this material is not
            intended as tax or legal advice. Please consult legal or tax
            professionals for specific information regarding your individual
            situation. Some of this material was developed and produced by FMG
            Suite to provide information on a topic that may be of interest. FMG
            Suite is not affiliated with the named representative, broker -
            dealer, state - or SEC - registered investment advisory firm. The
            opinions expressed and material provided are for general
            information, and should not be considered a solicitation for the
            purchase or sale of any security.
          </p>

          <p>Copyright 2024 FMG Suite.</p>
          <p>
            Ernst &amp; Co. Wealth Management, LLC is a Registered Investment
            Adviser. No advice may be rendered by Ernst &amp; Co. Wealth
            Management unless a client service agreement is in place and may
            only transact business in states in which it is registered or in
            which it is excluded or exempt from registration. Information on
            this website should not be considered investment advice. Please
            speak with an investment advisor. Ernst &amp; Co. Wealth Management,
            LLC.&nbsp;
          </p>
          <p></p>
        </div>
      </div>
    </div>
  </footer>
);
