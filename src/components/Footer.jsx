import Link from "next/link";

const Footer = () => {
  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-5 md:flex-row justify-center items-center">
        <Link href={"/"}>
          <h4 className="font-bold font-italic text-weight-2xl">
            CopyRight @ Rentify.com
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
