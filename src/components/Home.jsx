import React from "react";
'use client';

import {Dropdown,Carousel} from 'flowbite-react'
import CardComp from "./Card";
export default function Home() {
  return (
    <div className="px-2 sm:px-8 py-2 min-h-screen w-full  bg-gray-200">
      {/* products */}
      <div className="flex gap-20 overflow-x-scroll sm:overflow-hidden sm:justify-center bg-white rounded-lg h-44">
        <div className="flex flex-col gap-2 justify-center">
          <img
            className="h-24 w-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTipmhXLcb08JQsFHbthfatyO79_rCEXm0s-2i7FRfXg&s"
            alt=""
          />
          <span>Mobiles </span>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <img
            className="h-24 w-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTipmhXLcb08JQsFHbthfatyO79_rCEXm0s-2i7FRfXg&s"
            alt=""
          />
          <span>Mobiles </span>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <img
            className="h-24 w-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTipmhXLcb08JQsFHbthfatyO79_rCEXm0s-2i7FRfXg&s"
            alt=""
          />
          <span>Mobiles </span>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <img
            className="h-24 w-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTipmhXLcb08JQsFHbthfatyO79_rCEXm0s-2i7FRfXg&s"
            alt=""
          />
          <span>Mobiles </span>
        </div>
        <div className="flex flex-col gap-2 justify-center item">
        <img
            className="h-24 w-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTipmhXLcb08JQsFHbthfatyO79_rCEXm0s-2i7FRfXg&s"
            alt=""
          />
          <Dropdown label={"Electronics"} inline color="black">
            <Dropdown.Header>
            </Dropdown.Header>
            <Dropdown.Item >Dashboard</Dropdown.Item>
            <Dropdown.Item >Settings</Dropdown.Item>
            <Dropdown.Item >Earnings</Dropdown.Item>
            <Dropdown.Item >Dashboard</Dropdown.Item>
            <Dropdown.Item >Settings</Dropdown.Item>
            <Dropdown.Item >Earnings</Dropdown.Item>
            <Dropdown.Item >Dashboard</Dropdown.Item>
            <Dropdown.Item >Settings</Dropdown.Item>
            <Dropdown.Item >Earnings</Dropdown.Item>

          </Dropdown>
        </div>
        <div className="flex flex-col gap-2 justify-center item">
        <img
            className="h-24 w-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTipmhXLcb08JQsFHbthfatyO79_rCEXm0s-2i7FRfXg&s"
            alt=""
          />
          <Dropdown label={"Electronics"} inline color="black">
            <Dropdown.Header>
            </Dropdown.Header>
            <Dropdown.Item >Dashboard</Dropdown.Item>
            <Dropdown.Item >Settings</Dropdown.Item>
            <Dropdown.Item >Earnings</Dropdown.Item>
            <Dropdown.Item >Dashboard</Dropdown.Item>
            <Dropdown.Item >Settings</Dropdown.Item>
            <Dropdown.Item >Earnings</Dropdown.Item>
            <Dropdown.Item >Dashboard</Dropdown.Item>
            <Dropdown.Item >Settings</Dropdown.Item>
            <Dropdown.Item >Earnings</Dropdown.Item>

          </Dropdown>
        </div>
        <div className="flex flex-col gap-2 justify-center item">
        <img
            className="h-24 w-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTipmhXLcb08JQsFHbthfatyO79_rCEXm0s-2i7FRfXg&s"
            alt=""
          />
          <Dropdown label={"Electronics"} inline color="black">
            <Dropdown.Header>
            </Dropdown.Header>
            <Dropdown.Item >Dashboard</Dropdown.Item>
            <Dropdown.Item >Settings</Dropdown.Item>
            <Dropdown.Item >Earnings</Dropdown.Item>
            <Dropdown.Item >Dashboard</Dropdown.Item>
            <Dropdown.Item >Settings</Dropdown.Item>
            <Dropdown.Item >Earnings</Dropdown.Item>
            <Dropdown.Item >Dashboard</Dropdown.Item>
            <Dropdown.Item >Settings</Dropdown.Item>
            <Dropdown.Item >Earnings</Dropdown.Item>

          </Dropdown>
        </div>
      </div>
      {/* cards */}
      <div className="mt-2 bg-white p-2">
        <h1 className="text-2xl font-semibold">Best in Electronics</h1>
        <div className="flex gap-2 overflow-x-scroll">
        <CardComp/>
        <CardComp/>
        <CardComp/>
        <CardComp/>
        <CardComp/>
        <CardComp/>
        </div>

      </div>
      <div className="mt-2 bg-white p-2">
        <h1 className="text-2xl font-semibold">Best in Electronics</h1>
        <div className="flex gap-2 overflow-x-scroll">
        <CardComp/>
        <CardComp/>
        <CardComp/>
        <CardComp/>
        <CardComp/>
        <CardComp/>
        </div>

      </div>
      <div className="mt-2 bg-white p-2">
        <h1 className="text-2xl font-semibold">Best in Electronics</h1>
        <div className="flex gap-2 overflow-x-scroll">
        <CardComp/>
        <CardComp/>
        <CardComp/>
        <CardComp/>
        <CardComp/>
        <CardComp/>
        </div>

      </div>
    </div>
  );
}
