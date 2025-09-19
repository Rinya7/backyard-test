import { FEATURES } from "@/constants";
import FeaturesCarousel from "./common/FeaturesCarousel";

export default function WhatIsBackyard() {
  return (
    <section
      id="what"
      className="my-[67px] md:my-[120px] xl:mt-[171px] 4xl:my-[131px] bg-[var(--bg)]   xl:mb-[146px]  "
    >
      <div className="grid grid-cols-1 gap-[39px] md:gap-[36px] xl:gap-[22px]">
        <h2 className="font-gilroy-sb font-bold text-[28px] md:text-[42px] leading-[31px] md:leading-[46px] text-[var(--color-title-h1)]">
          What is Backyard?
        </h2>

        <FeaturesCarousel items={FEATURES} />
      </div>
    </section>
  );
}
