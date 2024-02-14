import React from "react";
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import {FaHouseDamage} from 'react-icons/fa'

export default function FooterComponent() {
  return (
    <Footer bgDark className="bg-gray-700 text-white">
      <div className="w-full">
        <div className="grid w-full grid-cols- gap-4 px-6 py-8 md:grid-cols-6">
          <div>
            <Footer.Title className="text-lg" title="Company" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-md font-semibold">About</Footer.Link>
              <Footer.Link href="#" className="text-md font-semibold">Careers</Footer.Link>
              <Footer.Link href="#" className="text-md font-semibold">Brand Center</Footer.Link>
              <Footer.Link href="#" className="text-md font-semibold">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className="text-lg" title="help center" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-md font-semibold">Discord Server</Footer.Link>
              <Footer.Link href="#" className="text-md font-semibold">Twitter</Footer.Link>
              <Footer.Link href="#" className="text-md font-semibold">Facebook</Footer.Link>
              <Footer.Link href="#" className="text-md font-semibold">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className="text-lg" title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-md font-semibold">Privacy Policy</Footer.Link>
              <Footer.Link href="#" className="text-md font-semibold">Licensing</Footer.Link>
              <Footer.Link href="#" className="text-md font-semibold">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className="border border-white w-0 h-30">

          </div>
          <div>
            <Footer.Title className="text-lg" title="download" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-md font-semibold">iOS</Footer.Link>
              <Footer.Link href="#" className="text-md font-semibold">Android</Footer.Link>
              <Footer.Link href="#" className="text-md font-semibold">Windows</Footer.Link>
              <Footer.Link href="#" className="text-md font-semibold">MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className="text-lg" title="download" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-md font-semibold">iOS</Footer.Link>
              <Footer.Link href="#" className="text-md font-semibold">Android</Footer.Link>
              <Footer.Link href="#" className="text-md font-semibold">Windows</Footer.Link>
              <Footer.Link href="#" className="text-md font-semibold">MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
          
        </div>
        <Footer.Divider/>
        <div className="w-full bg-gray-700 px-4 py-2 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
          <FaHouseDamage/>
          <span className="text-md">Become a Seller</span>
          </div>
          <div className="flex items-center gap-2">
          <FaHouseDamage/>
          <span className="text-md">Become a Seller</span>
          </div>
          <div className="flex items-center gap-2">
          <FaHouseDamage/>
          <span className="text-md">Become a Seller</span>
          </div>
          <Footer.Copyright href="#" by="Flipkart" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
