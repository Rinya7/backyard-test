// components/Hero.tsx
import Image from "next/image";
import leaf from "@/public/leaf-hero.svg";
import Link from "next/link";
import row from "@/public/row.svg";

export default function Hero() {
  return (
    <section className="mt-[23px] md:mt-[62px] xl:mt-[64px] 4xl:mt-[85px] xl:py-[25px]">
      <div className="mb-[38px] md:mb-[33px] xl:mb-[70px] 4xl:mb-[79px]">
        <div className="relative mb-[14px] md:mb-[16px]  ">
          <h1
            className="
                font-primary text-[58px] md:text-[48px] xl:text-[72px] leading-[1.1] text-[var(--color-title-h1)]  font-bold
                 md:w-[76%]  
              "
          >
            The yield-backed stablecoin protocol boosting DeFi liquidity
          </h1>
          <Image
            src={leaf}
            alt=""
            width={60}
            height={60}
            className="absolute bottom-[60px] right-[100px] md:top-[10px] md:right-[18px] xl:top-[20px] xl:right-[20px] md:w-[152px] md:h-[152px] xl:w-[212px] xl:h-[212px] "
            priority
          />
        </div>
        <p className="font-gilroy-r text-[var(--color-here-p)] text-[20px] md:text-[16px]  xl:text-[20px]  ">
          Keep your yield working for you — we keep your liquidity accessible
        </p>
      </div>
      {/* CTA */}
      <div className="font-primary">
        <Link
          href="#whitelist"
          className="inline-flex items-center justify-center  
      px-[30px] py-[18px] mr-[8px] md:px-[107px] md:mr-[21px]
    rounded-[var(--btn-primary-radius)]
    backdrop-blur-[4px]
    bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)]
    font-primary font-semibold text-[16px] leading-[22px] tracking-[0.02em] text-center
    transition-colors hover:bg-[var(--btn-primary-bg-hover)] hover:text-[var(--btn-primary-text-hover)] active:text-[var(--btn-primary-text-active)] active:bg-[var(--btn-primary-bg-active)]"
        >
          Join Whitelist
        </Link>
        <Link
          href="#docs"
          className="inline-flex items-center justify-center  
       p-[18px] md:px-[62px] 
    rounded-[var(--btn-primary-radius)]
    backdrop-blur-[4px]
    bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-text)]
    font-primary font-semibold text-[16px] leading-[22px] tracking-[0.02em] text-center
    transition-colors hover:bg-[var(--btn-secondary-bg-hover)] hover:text-[var(--btn-secondary-text-hover)]  active:text-[var(--btn-secondary-text-active)] active:bg-[var(--btn-secondary-bg-active)]"
        >
          <p className="mr-[10px] md:hidden">Learn more</p>
          <Image
            src={row}
            alt="logo"
            width={10}
            height={10}
            className="md:hidden "
          />
          <p className=" hidden md:flex">Read Docs</p>
        </Link>
      </div>
    </section>
  );
}
