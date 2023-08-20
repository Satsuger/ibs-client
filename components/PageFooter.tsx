import { Basketball, Facebook, Instagram, Linkedin, Logo } from "@/public/icons"
import Link from "next/link"
import { ReactNode } from "react"

interface LinkInterface {
  text: string
  href: string
}

interface LinksBlock {
  title: string
  links: LinkInterface[]
}

interface socialMediaItem {
  title: string
  link: string
  Icon: (className: string) => ReactNode
}

const linksBlocksData: LinksBlock[] = [
  {
    title: "About",
    links: [
      {
        text: "Facts",
        href: "#",
      },
      {
        text: "History",
        href: "#",
      },
      {
        text: "Contact",
        href: "#",
      },
      {
        text: "Management",
        href: "#",
      },
    ],
  },
  {
    title: "Faculty",
    links: [
      {
        text: "Business",
        href: "#",
      },
      {
        text: "Engineering",
        href: "#",
      },
      {
        text: "Law",
        href: "#",
      },
      {
        text: "Science",
        href: "#",
      },
    ],
  },
  {
    title: "About",
    links: [
      {
        text: "Facts",
        href: "#",
      },
      {
        text: "History",
        href: "#",
      },
      {
        text: "Contact",
        href: "#",
      },
      {
        text: "Humanities",
        href: "#",
      },
    ],
  },
  {
    title: "Department",
    links: [
      {
        text: "Business",
        href: "#",
      },
      {
        text: "Engineering",
        href: "#",
      },
      {
        text: "Law",
        href: "#",
      },
      {
        text: "Science",
        href: "#",
      },
    ],
  },
  {
    title: "Updates",
    links: [
      {
        text: "Facts",
        href: "#",
      },
      {
        text: "History",
        href: "#",
      },
      {
        text: "Contact",
        href: "#",
      },
      {
        text: "Management",
        href: "#",
      },
    ],
  },
]

const buttonsData: LinkInterface[] = [
  {
    text: "Applying",
    href: "#",
  },
  {
    text: "Scholarship",
    href: "#",
  },
  {
    text: "Career",
    href: "#",
  },
]

const copyrightText = [
  "Copyright © 2022 Musemind",
  "All rights reserved",
  "Privacy & Policy",
]

const socialMedia: socialMediaItem[] = [
  {
    title: "Facebook",
    link: "#",
    Icon: (className: string) => <Facebook className={className} />,
  },
  {
    title: "Linkedin",
    link: "#",
    Icon: (className: string) => <Linkedin className={className} />,
  },
  {
    title: "Instagram",
    link: "#",
    Icon: (className: string) => <Instagram className={className} />,
  },
  {
    title: "Basketball",
    link: "#",
    Icon: (className: string) => <Basketball className={className} />,
  },
]

export default function PageFooter() {
  return (
    <footer className="bg-black pt-[100px] lg:pt-[120px]">
      <div className="container flex flex-col">
        <div className="grid grid-cols-2 gap-x-[48px] gap-y-[16px] pb-[60px] min-[350px]:gap-x-[30px] md:grid-cols-3 md:pb-[80px] lg:gap-x-[16px] lg:pb-[120px] xl:grid-cols-6">
          {linksBlocksData.map((block, i) => {
            return (
              <div
                className="col-span-2 flex flex-col min-[350px]:col-span-1"
                key={i}
              >
                <h3 className="mb-[20px] text-[24px] text-white md:mb-[40px]">
                  {block.title}
                </h3>
                {block.links.map((link, i) => {
                  return (
                    <Link
                      href={link.href}
                      key={i}
                      className="relative mb-[10px] w-max text-[18px] leading-[1.7] text-white opacity-[0.8] transition-opacity duration-300 before:absolute before:bottom-[0px] before:left-[50%] before:h-[1px] before:w-[0%] before:translate-x-[-50%] before:bg-white before:transition-all before:duration-300 hover:opacity-[1] hover:before:w-[100%] active:opacity-[0.9] active:before:w-[95%] md:mb-[18px]"
                    >
                      {link.text}
                    </Link>
                  )
                })}
              </div>
            )
          })}

          <div className="col-span-2 flex flex-col gap-[20px] min-[375px]:col-span-1 min-[375px]:max-w-[180px] xl:max-w-[230px]">
            {buttonsData.map((button, i) => {
              return (
                <Link
                  href={button.href}
                  key={i}
                  className="relative flex w-full select-none items-center justify-center overflow-hidden rounded-[32px] border-[1px] border-white px-[20px] py-[14px] before:absolute before:bottom-0 before:left-0 before:h-[0%] before:w-full before:rounded-[32px] before:bg-red before:transition-all before:duration-300 hover:before:h-[100%] hover:before:rounded-[24px]"
                >
                  <span className="relative z-[2] text-[16px] uppercase text-white xl:text-[20px]">
                    {button.text}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-[24px] border-t-[1px] border-t-borderGray py-[32px] xl:flex-row xl:gap-0">
          <div className="flex-[1]">
            <Logo className="h-[44px] w-[156px]" />
          </div>

          <div className="flex w-max flex-col items-center justify-between md:flex-row">
            {copyrightText.map((text, i) => {
              return (
                <span
                  className="text-[16px] leading-[2] text-white opacity-[0.5] after:hidden after:px-[15px] after:content-['|'] last:after:hidden md:after:inline"
                  key={i}
                >
                  {text}
                </span>
              )
            })}
          </div>

          <div className="flex flex-[1] items-center justify-end gap-[12px]">
            {socialMedia.map((el, i) => {
              return (
                <div
                  className="relative flex cursor-pointer select-none items-center justify-center rounded-full border-[1px] border-white p-[15px] text-white transition-all duration-300 before:absolute before:left-[50%] before:top-[50%] before:z-[2] before:h-[0px] before:w-[0px] before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-full before:bg-white before:transition-all before:duration-300 hover:text-black hover:before:h-[44px] hover:before:w-[44px] active:before:h-[42px] active:before:w-[42px] active:before:opacity-[0.9]"
                  key={i}
                >
                  {el.Icon("w-[18px] h-[18px] relative z-[2]")}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
