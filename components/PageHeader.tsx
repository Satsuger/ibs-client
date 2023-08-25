import { Logo, Ramp } from "@/lib/icons"
import { Menu, User } from "lucide-react"
import Link from "next/link"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import heroSectionImg from "@/public/heroSection.webp"
import Image from "next/image"

const navLinks = [
  {
    text: "NEWS",
    path: "#",
  },
  {
    text: "EVENTS",
    path: "#",
  },
  {
    text: "ACADEMICS",
    path: "#",
  },
  {
    text: "RESEARCH",
    path: "#",
  },
  {
    text: "ADMISSION",
    path: "#",
  },
  {
    text: "ABOUT",
    path: "#",
  },
]

export default function PageHeader() {
  return (
    <div className="bg-red pb-[120px] pt-5">
      <div className="container relative">
        <header className="left-0 right-0 z-10 mb-[100px] flex items-stretch justify-between md:container md:absolute md:mb-0">
          <Logo className="mr-2 max-w-[140px] lg:max-w-[293px]" />

          <Sheet>
            <SheetTrigger>
              <div className="rounded-xl bg-white p-3 md:hidden">
                <Menu />
              </div>
            </SheetTrigger>
            <SheetContent className="h-full" side={"top"}>
              <SheetHeader>
                <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <nav className="relative hidden w-full items-center justify-end gap-4 rounded-bl-[30px] bg-red md:flex">
            <Ramp className="absolute left-[-31px] top-0 fill-red" />

            {navLinks.map((nLink, i) => (
              <Link
                className="text-sm text-white transition-all hover:text-black lg:text-base"
                key={i}
                href={nLink.path}
              >
                {nLink.text}
              </Link>
            ))}

            <div className="rounded-full bg-white p-2 transition-all hover:bg-green-800 lg:p-3">
              <User className="h-[15px] w-[15px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px]" />
            </div>
            <Ramp className="absolute bottom-[-32px] right-0 fill-red" />
          </nav>
        </header>

        {/* <svg className="absolute h-0 w-0">
          <clipPath id="welcom-shape" clipPathUnits="objectBoundingBox">
            <path d="M0.158,0.001 H0.019 C0.013,0.001,0.002,0.009,0.001,0.03 V0.639 C0.001,0.649,0.005,0.667,0.02,0.668 H0.281 C0.287,0.668,0.299,0.675,0.3,0.696 V0.97 C0.3,0.98,0.304,1,0.319,1 H0.987 C0.991,1,1,0.996,1,0.978 V0.111 C1,0.101,0.996,0.082,0.981,0.081 H0.195 C0.189,0.08,0.178,0.074,0.177,0.052 V0.029 C0.176,0.02,0.173,0.003,0.158,0.001"></path>
          </clipPath>
        </svg> */}

        <Image
          className="welcom hidden rounded-[30px] md:block"
          src={heroSectionImg}
          alt="hero section"
        />

        <div className="bottom-[-1px] bg-red py-2 text-white md:absolute md:max-w-[366px] md:rounded-tr-[30px] lg:max-w-[553px]">
          <Ramp className="absolute left-0 top-[-33px] rotate-180 fill-red" />

          <h1 className="mb-4 text-5xl sm:text-[68px] md:text-[40px] lg:text-7xl">
            AMERICAN UNIVERSITY
          </h1>
          <p className="pr-1 leading-8 md:text-sm lg:text-lg">
            BROOKSIDE UNIVERSITY IS A LEADING RESEARCH UNIVERSITY PUSHING
            BOUNDARIES AND FRONTIERS EVER SINCE ITS INCEPTION
          </p>
          <Ramp className="absolute bottom-0 right-[-32px] rotate-180 fill-red" />
        </div>
      </div>
    </div>
  )
}
