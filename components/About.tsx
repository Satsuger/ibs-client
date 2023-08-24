import { Spiral } from "@/public/icons"
import campusImg from "@/public/images/about/campus.png"
import classroomImg from "@/public/images/about/classroom.png"
import convocationImg from "@/public/images/about/convocation.png"
import frameImg from "@/public/images/about/frame.png"
import libraryImg from "@/public/images/about/library.png"
import Image from "next/image"
import Link from "next/link"

interface aboutItem {
  title: string
  imageSrc: any
  link: string
}

const aboutItemsList: aboutItem[] = [
  {
    title: "Classroom",
    imageSrc: classroomImg,
    link: "#",
  },
  { title: "Campus", imageSrc: campusImg, link: "#" },
  { title: "Convocation", imageSrc: convocationImg, link: "#" },
  { title: "Library", imageSrc: libraryImg, link: "#" },
]

export default function About() {
  return (
    <div className="relative overflow-hidden bg-red pb-[80px] sm:pb-[100px] lg:pb-[160px]">
      <Spiral className="pointer-events-none absolute left-0 top-[190px] z-0 h-auto max-w-full select-none sm:top-[210px] lg:top-[270px]" />
      <div className="container relative z-10 mb-[40px] flex flex-col gap-[26px] border-t-[2px] border-t-darkRed pt-[80px] sm:mb-[60px] sm:pt-[100px] lg:mb-[100px] lg:flex-row lg:gap-[16px] lg:pt-[160px]">
        <p className="h-max flex-[1] text-[18px] font-normal leading-none text-darkGray md:text-[20px] lg:text-[24px]">
          ABOUT UNIVERSITY
        </p>
        <h2 className="flex-[2] text-[28px] font-normal leading-[1.2] text-white md:text-[36px] lg:text-[56px] xl:text-[80px]">
          EDUCATION IS NOT PREPARATION FOR LIFE; EDUCATION IS LIFE ITSELF
        </h2>
      </div>
      <div className="container relative z-10 grid grid-cols-1 gap-[16px] min-[350px]:grid-cols-2 md:grid-cols-3 md:gap-[20px] lg:gap-[40px]">
        <div className="pointer-events-none hidden select-none md:block"></div>

        {aboutItemsList.map((item, i) => {
          return (
            <Link
              href={item.link}
              className="group relative aspect-[470/590] overflow-hidden rounded-[20px]"
              key={i}
            >
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={520}
                height={650}
                className="absolute left-[50%] top-[50%] z-10 h-full w-full translate-x-[-50%] translate-y-[-50%] scale-[1] object-cover transition-transform duration-300 group-hover:scale-[1.1]"
              />
              <p className="absolute bottom-[20px] left-[20px] z-20 text-[22px] leading-none text-white lg:bottom-[40px] lg:left-[40px] lg:text-[30px] xl:text-[36px]">
                {item.title}
              </p>
            </Link>
          )
        })}

        <div className="pointer-events-none hidden select-none items-center justify-center md:flex">
          <Image
            src={frameImg}
            alt="Frame"
            width={306}
            height={371}
            className="h-auto max-w-full"
          />
        </div>
      </div>
    </div>
  )
}
