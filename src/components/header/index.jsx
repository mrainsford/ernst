import Image from 'next/image';
import Link from 'next/link';

export const Header = () => (
  <>
    <div className="flex justify-center bg-[#F4F4F4] p-2 md:p-4">
      <Link href="https://brokercheck.finra.org/" target="_blank">
        <Image src={'/brokerCheck-bar-logo.png'} width={150} height={21} />
      </Link>
    </div>
    <div className="flex justify-center align-center p-25px">
      <Link href="/">
        <Image
          src="/b7b90d5e-f5a1-4859-8360-d3acbc3e530b.png"
          width={300}
          height={73}
          alt="Logo"
        />
      </Link>
    </div>
  </>
);
