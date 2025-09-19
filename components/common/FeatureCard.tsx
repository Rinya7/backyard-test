import Image, { StaticImageData } from "next/image";
import React from "react";

export default function FeatureCard({
  idx,
  pill,
  title,
  body,
  image,
}: {
  idx: number;
  pill: string;
  title: string;
  body: string;
  image: StaticImageData;
}) {
  return (
    <article
      // слайд: до xl займає всю видиму ширину «рейки»
      className="snap-start shrink-0  w-full xl:min-w-0"
      data-idx={idx}
    >
      <div
        className="
          flex flex-col md:flex-row items-start md:items-center justify-start
          xl:flex-col xl:items-start
        "
      >
        {/* контент ліворуч */}
        <div className="flex-1 space-y-3 mt-[-20px] md:mt-0 xl:mt-[-20px]  md:mr-[52px] xl:mr-0 md:h-full">
          {/* pill */}
          <div className="flex items-center mb-[15px] rounded-[45px] p-[13px]  backdrop-blur-[4px] bg-[#f4f6f7]">
            <div className="flexCenter h-[33px] w-[33px] rounded-full bg-[#2d322f] text-[#fbfbfc] text-[15px] leading-[22px] font-primary mr-[34px] md:mr-[72px] xl:mr-[24px]">
              {idx}
            </div>
            <div className="font-gilroy-sb text-[18px] md:text-[20px] leading-[22px] text-[#303030]">
              {pill}
            </div>
          </div>

          {/* опис */}
          <div className="rounded-[31px] bg-white/90 border border-black/5 p-[30px]  shadow-sm ">
            <h3 className="font-primary text-[#2d322f] text-[18px]  font-extrabold  mb-[11px]">
              {title}
            </h3>
            <p className="font-gilroy-m text-[14px] text-[#787878] w-[80%]">
              {body}
            </p>
          </div>
        </div>

        {/* ілюстрація праворуч (на мобілці зверху через order) */}
        <div className="shrink-0   self-center  -order-1   md:order-none xl:-order-1  ">
          <Image
            src={image}
            alt="earth with leaves"
            width={179}
            height={179}
            className="object-contain md:w-[258px] md:h-[240px] xl:w-[179px] xl:h-[179px] rounded-[51px] "
          />
        </div>
      </div>
    </article>
  );
}
