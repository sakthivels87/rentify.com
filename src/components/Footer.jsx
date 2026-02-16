import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="flex flex-col space-y-5 md:flex-row justify-center items-center">
          <Link href="/">
            <h4 className="font-bold italic text-2xl">
              CopyRight @ Rentify.com
            </h4>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
