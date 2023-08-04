import { footerContent } from "@/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="wrapper section-padding grid grid-cols-10 gap-8">
        <div className="col-span-5">
          <h1 className="uppercase text-2xl font-semibold text-accent1 mb-10">
            <span className="lowercase">
              <span className="text-light">Zen</span> Strike
            </span>
            - Unite. Learn. Grow.
          </h1>
          <p className="text-light tracking-wide">
            Join our martial arts community for discipline, focus, and
            self-improvement. Find resources, classes, and events to achieve
            your goals. Train mind, body, and spirit with us. Your Ultimate
            Martial Arts Hub.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-medium text-white/80 uppercase">links</h2>
          {footerContent.links.map((link) => (
            <div className="flex flex-col gap-3">
              <Link className="text-light" href={link.url}>
                {link.text}
              </Link>
            </div>
          ))}
        </div>
        <div className="text-light col-span-3">
          <h2 className="text-lg font-medium text-white/80 uppercase">
            contact
          </h2>
          <p>{footerContent.address}</p>
          <p>{footerContent.phone}</p>
          <p>{footerContent.email}</p>
        </div>
        <div>
          <h2 className="text-lg font-medium text-white/80 uppercase">ligal</h2>
          {footerContent.ligal.map((l) => (
            <div className="flex flex-col gap-3">
              <Link className="text-light" href={"/"}>
                {l}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="text-light/80 py-4 flex items-center justify-center border-t border-gray-700 font-medium tracking-wide text-sm">
        © {new Date().getFullYear()} Zen Strike. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
