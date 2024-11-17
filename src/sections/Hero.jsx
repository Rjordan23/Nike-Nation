import Button from "../components/Button";
import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = 
  useState(bigShoe1)

  return (
    <section 
      id="home"
      className="w-full flex xl:flex-row justify-center min-h-screen gap-10 max-container"  
    >
      {/* Hero Left Side */}
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-fullmax-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The Latest Arrivals</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Explore the latest Nike styles, offering superior comfort and innovative designs to elevate your active lifestyle.</p>
        <Button
          label="Shop Now"
          iconURL={arrowRight}
        />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Right Side */}
      {/* Large Shoe Image */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img 
          src={bigShoeImg}
          alt="Large Shoe"
          width={610}
          height={500}
          className="z-10 relative object-contain animate__backInRight"
        />
        
        {/* 3 Show Cards */}
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard 
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero