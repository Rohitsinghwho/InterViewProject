import React, { useState } from "react";
import { Button, Navbar, Sidebar, TextInput, Dropdown } from "flowbite-react";

import { FiAlignJustify } from "react-icons/fi";
import { IoIosPhonePortrait } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { FaHouseDamage } from "react-icons/fa";
import { TfiAngleDown } from "react-icons/tfi";
import { TfiLayoutMenuV } from "react-icons/tfi";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";

export default function Header() {
  const [showLoginBar, setShowLoginBar] = useState(false);

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <Navbar className=" m-2">
      <div className="flex  justify-between gap-1 items-center ml-3 sm:ml-15">
        {/* <button><FiAlignJustify size={'25'}/></button> */}
          {/* <FiAlignJustify className="" size="25" /> */}
          <div className="sm:hidden">
          <Dropdown label={<FiAlignJustify size={'25'}/>} arrowIcon={false} color="black" className="w-48">
        <div className="min-w-xl min-h-screen">
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item><Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
        </div>
      </Dropdown>
      </div>
        <span className="text-md sm:text-lg">Flip</span>
        <span className="text-md sm:text-xl text-white bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500 rounded-lg">
          kart
        </span>
      </div>
      <TextInput
        type="text"
        placeholder="Search for products brands and more..."
        className="hidden sm:inline rounded-lg w-[700px]"
      />
      <div className="flex gap-2 sm:gap-6 items-center justify-between m-2">
        <IoIosPhonePortrait size="25" />
        <div className="flex items-center sm:hidden">
          <RxAvatar size={"25"} />
          <div className="flex items-center justify-center mr-1 sm:hover:bg-blue-500 rounded-lg cursor-pointer w-20">
            <span className="block text-lg ml-1 sm:text-xl font-normal">
              Login
            </span>
            <TfiAngleDown />
          </div>
        </div>
        <div className="hidden sm:inline">
          <div className="flex items-center">
            <RxAvatar size={"25"} />
            {/* <FiAlignJustifyDropdown />? */}
            <Dropdown
              label="Login"
              arrowIcon="false"
              className="bg-white"
              color="blue"
              inline
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  bonnie@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item icon={HiViewGrid}>Dashboard</Dropdown.Item>
              <Dropdown.Item icon={HiCog}>Settings</Dropdown.Item>
              <Dropdown.Item icon={HiCurrencyDollar}>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item>
            </Dropdown>
          </div>
        </div>
        <div className="flex items-center cursor-pointer">
          <IoCartOutline size={"25"} />
          <span className=" text-lg ml-1 sm:text-xl hidden sm:inline cursor-pointer">
            Cart
          </span>
        </div>
        <div className="flex items-center cursor-pointer">
          <FaHouseDamage size={"25"} className="hidden sm:inline" />
          <span className=" text-lg ml-1 sm:text-xl hidden sm:inline">
            Become a Seller
          </span>
        </div>
        <div className="hidden sm:inline">
          {/* <TfiLayoutMenuV size={"25"} /> */}
          <Dropdown label={<TfiLayoutMenuV size={'25'}/>} arrowIcon='false' color="black">
            <Dropdown.Item icon={HiViewGrid}>Notification</Dropdown.Item>
            <Dropdown.Item icon={HiCog}>Settings</Dropdown.Item>
            <Dropdown.Item icon={HiCurrencyDollar}>24 X 7 customer Support</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item icon={HiLogout}>Download App</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </Navbar>
  );
}
