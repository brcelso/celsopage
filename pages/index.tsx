import Head from "next/head"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Celso da Silva Junior</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
            Beautifully designed components <br className="hidden sm:inline" />
            built with Radix UI and Tailwind CSS.
          </h1>
          <p className="max-w-[750px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            Accessible and customizable components that you can copy and paste
            into your apps. Free. Open Source.{" "}
            <span className="font-semibold">
              Use this to build your own component library
            </span>
            .
          </p>
        </div>
       
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:flex-row">
          <Link href="/docs" className={buttonVariants({ size: "lg" })}>
            Get Started
          </Link>
          
        </div>
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            You are looking at an early preview. You can follow the progress on{" "}
            <Link
              href={siteConfig.links.twitter}
              className="font-medium underline underline-offset-4"
            >
              Twitter
            </Link>
            .
          </p>
        </div>
      </section>
    </Layout>
  )
}
