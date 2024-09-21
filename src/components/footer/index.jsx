import Link from 'next/link';

export const Footer = () => (
  <footer className="bg-customGray p-10 text-white flex justify-center">
    <div className="max-w-maxc0width margin-auto">
      <div className="flex flex-col md:flex-row gap-[40px] mb:gap-[100px]">
        {/* Left Column */}
        <div className="text-sm">
          <h4 className="text-lg mb-4">Contact</h4>
          <p>425 15th Street</p>
          <p># 3128</p>
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
            Ernst &amp; Co. Wealth Management, LLC is a Registered Investment
            Adviser. No advice may be rendered by Ernst &amp; Co. Wealth
            Management unless a client service agreement is in place and may
            only transact business in states in which it is registered or in
            which it is excluded or exempt from registration. Information on
            this website should not be considered investment advice. Please
            speak with an investment advisor. Ernst &amp; Co. Wealth Management,
            LLC.&nbsp;
          </p>
          <p>Copyright 2024.</p>
          <p></p>
        </div>
      </div>
    </div>
  </footer>
);
