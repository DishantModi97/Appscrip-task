import { Button, Divider, Input } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import USALogo from "../../../public/images/USA.png";
import InstaLogo from "../../../public/images/Insta.png";
import Twitter from "../../../public/images/twitter.png";
import Image1 from "../../../public/images/Group 136190.png";
import Gpay from "../../../public/images/Gpay.png";
import Paypal from "../../../public/images/Group 136192.png";
import Amex from "../../../public/images/Group 136193.png";
import ApplePay from "../../../public/images/Group 136194.png";
import Image2 from "../../../public/images/Group 136195.png";

const Footer = () => {
  return (
    <div className="mt-5 bg-black p-5 md:p-10 lg:p-20 flex flex-col items-center gap-8">
      {/* Main Content Wrapper */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 w-full">
        {/* Left Column */}
        <div className="flex flex-col w-full md:w-1/2">
          <h2 className="text-xl md:text-2xl text-white font-semibold text-center md:text-left">
            BE THE FIRST TO KNOW
          </h2>
          <h5 className="text-sm mt-2 text-white leading-relaxed text-center md:text-left">
            Sign up for updates from Metta Muse.
          </h5>
          <div className="mt-5 flex flex-col md:flex-row gap-4 items-center">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-64 lg:w-80 max-w-xs"
              size="md"
              radius="none"
            />
            <Button variant="bordered" className="!text-white w-full md:w-36" radius="none">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col w-full md:w-1/2 text-white text-center md:text-left items-start">
          <h2 className="text-xl md:text-2xl text-white font-semibold">CONTACT US</h2>
          <h5 className="text-sm mt-2 text-white leading-relaxed">+44 221 133 5360</h5>
          <h5 className="text-sm mt-2 text-white leading-relaxed">customercare@mettamuse.com</h5>
          <h2 className="text-xl md:text-2xl text-white font-semibold mt-4">CURRENCY</h2>
          <div className="flex items-center gap-2 mt-2">
            <Image src={USALogo} alt="USA Logo" width={30} height={30} className="rounded-full" />
            <span className="text-white">USD</span>
          </div>
          <h5 className="text-sm mt-4 text-white leading-relaxed">
            Transactions will be completed in Euros and a currency reference is available on hover
          </h5>
        </div>
      </div>

      {/* Divider below the columns */}
      <Divider className="my-8 bg-white w-full" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full">
        {/* Metta Muse Links */}
        <div className="flex flex-col w-full md:w-1/3 text-center md:text-left">
          <h2 className="text-md md:text-lg text-white font-semibold">metta muse</h2>
          <ul className="space-y-2 mt-2 text-sm text-white font-light">
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>Eu Compliances Docs</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col w-full md:w-1/3 text-center md:text-left">
          <h2 className="text-md md:text-lg text-white font-semibold">QUICK LINKS</h2>
          <ul className="space-y-2 mt-2 text-sm text-white font-light">
            <li>Orders & shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payments & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col w-full md:w-1/3 text-center md:text-left">
          <h2 className="text-md md:text-lg text-white font-semibold">FOLLOW US</h2>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <Image
              src={InstaLogo}
              alt="Insta Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <Image
              src={Twitter}
              alt="Twitter Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="mt-8 text-md text-white font-semibold">mettā muse Accepts</div>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <Image src={Gpay} alt="Gpay Logo" width={60} height={60} />
            <Image src={Image1} alt="Payment Option 1" width={60} height={60} />
            <Image src={Paypal} alt="Paypal Logo" width={60} height={60} />
            <Image src={Amex} alt="Amex Logo" width={60} height={60} />
            <Image src={ApplePay} alt="ApplePay Logo" width={60} height={60} />
            <Image src={Image2} alt="Payment Option 2" width={60} height={60} />
          </div>
        </div>
      </div>

      <div className="text-center text-white text-sm mt-8">
        &copy; 2023 Metta Muse. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
