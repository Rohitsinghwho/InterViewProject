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
            <Footer.Title title="Company" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-xs font-semibold">About</Footer.Link>
              <Footer.Link href="#" className="text-xs font-semibold">Careers</Footer.Link>
              <Footer.Link href="#" className="text-xs font-semibold">Brand Center</Footer.Link>
              <Footer.Link href="#" className="text-xs font-semibold">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-xs font-semibold">Discord Server</Footer.Link>
              <Footer.Link href="#" className="text-xs font-semibold">Twitter</Footer.Link>
              <Footer.Link href="#" className="text-xs font-semibold">Facebook</Footer.Link>
              <Footer.Link href="#" className="text-xs font-semibold">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-xs font-semibold">Privacy Policy</Footer.Link>
              <Footer.Link href="#" className="text-xs font-semibold">Licensing</Footer.Link>
              <Footer.Link href="#" className="text-xs font-semibold">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className="border border-white w-0 h-30">

          </div>
          <div>
            <Footer.Title title="download" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-xs font-semibold">iOS</Footer.Link>
              <Footer.Link href="#" className="text-xs font-semibold">Android</Footer.Link>
              <Footer.Link href="#" className="text-xs font-semibold">Windows</Footer.Link>
              <Footer.Link href="#" className="text-xs font-semibold">MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="download" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-xs font-semibold">iOS</Footer.Link>
              <Footer.Link href="#" className="text-xs font-semibold">Android</Footer.Link>
              <Footer.Link href="#" className="text-xs font-semibold">Windows</Footer.Link>
              <Footer.Link href="#" className="text-xs font-semibold">MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
          
        </div>
        <Footer.Divider/>
        <div className="w-full bg-gray-700 px-4 py-2 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
          <FaHouseDamage/>
          <span>Become a Seller</span>
          </div>
          <div className="flex items-center gap-2">
          <FaHouseDamage/>
          <span>Become a Seller</span>
          </div>
          <div className="flex items-center gap-2">
          <FaHouseDamage/>
          <span>Become a Seller</span>
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
