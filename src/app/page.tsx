import Image from "next/image";
import Link from "next/link";
import { MountainIcon, GlassesIcon, MenuIcon, FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import MobileNavbar from "@/components/ui/mobile-navbar";
import Navbar from "@/components/ui/navbar";
import ContactForm from "@/components/contact-form";


export default function Home() {

  return (
    <div className="flex flex-col min-h-dvh">
      <header className="px-4 lg:px-6 h-14 flex items-center border-y fixed z-10 bg-white w-full justify-between">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <div className="flex items-center space-x-2">
            <GlassesIcon className="size-6" />
            <span className="font-bold  text-sm md:text-xl"></span>
          </div>
          {/* <Image className="rounded-lg bg-transparent"
           src='/eyebuddy-high-resolution-logo-cropped.svg' width={110} height={40} alt='logo' /> */}
          <span className="sr-only">Eyewear AI</span>
        </Link>

          <MobileNavbar className="md:hidden">
            <MenuIcon className="size-6 " />
          </MobileNavbar>

          <Navbar className="hidden md:block lg:flex" />
          
      </header>

      <main className="flex-1">
        <section className="w-full pt-20 lg:pt-24">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 lg:grid-cols-2 items-center md:gap-16">
              <div>
                <h1 className=" text-3xl font-bold sm:text-4xl md:text-5xl text-center lg:text-left">
                  The AI-Powered Eyewear of the Future
                </h1>
                <p className="mx-auto py-2 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 text-center lg:text-left">
                  Experience the future of eyewear with our AI-powered smart glasses. Personalized fit, advanced lens
                  technology, <span className="font-bold text-gray-600"> reducing the adaptability time for new glasses by 30%</span>.
                </p>
                <div className="space-x-4 mt-6 text-center lg:text-left">
                  <Link
                    href="/#signup"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Pre-Order Now
                  </Link>
                  <Link
                    href="mailto:hello@eyebuddy.io"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Talk to Sales
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src='/logo.svg'
                  width="550"
                  height="310"
                  alt="Eyewear AI"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Personalized Eyewear Solutions</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our AI-powered eyewear technology delivers a tailored experience for every user.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-center text-center lg:text-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1 p-4 rounded-lg transition-all duration-200 ring-opacity-0 hover:ring-opacity-100 hover:ring-gray-300 hover:ring-1">
                <h3 className="text-lg font-bold">Personalized Fit</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our AI analyzes your facial features to provide a custom fit for maximum comfort and style.
                </p>
              </div>
              <div className="grid gap-1 p-4 rounded-lg transition-all duration-200 ring-opacity-0 hover:ring-opacity-100 hover:ring-1 hover:ring-gray-300">
                <h3 className="text-lg font-bold">Style Recommendations</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Get personalized style recommendations based on your preferences and facial features.
                </p>
              </div>
              <div className="grid gap-1 p-4 rounded-lg transition-all duration-200 ring-opacity-0 hover:ring-opacity-100 hover:ring-1 hover:ring-gray-300">
                <h3 className="text-lg font-bold">Advanced Lens Technology</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our lenses are designed to provide superior clarity, UV protection, and glare reduction.
                </p>
              </div>
              <div className="grid gap-1 p-4 rounded-lg transition-all duration-200 ring-opacity-0 hover:ring-opacity-100 hover:ring-1 hover:ring-gray-300">
                <h3 className="text-lg font-bold">Virtual Try-On</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Use our augmented reality tool to virtually try on different frames and see how they look on your
                  face.
                </p>
              </div>
              <div className="grid p-4 rounded-lg transition-all duration-200 ring-opacity-0 hover:ring-opacity-100 hover:ring-1 hover:ring-gray-300">
                <h3 className="text-lg font-bold">Prescription Integration</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Seamlessly integrate your prescription information to ensure your eyewear is tailored to your vision
                  needs.
                </p>
              </div>
              <div className="grid gap-1 p-4 rounded-lg transition-all duration-200 ring-opacity-0 hover:ring-opacity-100 hover:ring-1 hover:ring-gray-300">
                <h3 className="text-lg font-bold">Sustainable Materials</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our eyewear frames are crafted from eco-friendly materials to reduce our environmental impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Key Benefits
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Elevate Your Eyewear Experience</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our advanced AI technology ensures a personalized fit, tailored style recommendations, and a seamless
                  virtual try-on experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">

              <div className="flex flex-col justify-center space-y-4 hover:ring-1 hover:ring-gray-100">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Improved Vision</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                  Our advanced lens technology provides superior clarity and reduces eye strain for a more comfortable viewing experience.
                  </p>
                </div>
              </div>
              <Image
                src="/improved_vision.jpg"
                width="550"
                height="310"
                alt="Improved Vision"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image

                src="/enhanced_style.png"
                width="550"
                height="310"
                alt="Enhanced Style"
                className="lg:block hidden mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Enhanced Style</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                  Discover the perfect frame that complements your face and personal style with our AI-powered recommendations.
                  </p>
                </div>
              </div>
              <Image
                src="/enhanced_style.png"
                width="550"
                height="310"
                alt="Enhanced Style"
                className="lg:hidden mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">

              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Sustainable Choice</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                  By choosing our eco-friendly eyewear, you&apos;re making a conscious decision to reduce your environmental impact.
                  </p>
                </div>
              </div>
              <Image
                src="/sustainable_choice.png"
                width="550"
                height="310"
                alt="Sustainable Choice"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>


        <section id="signup" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Stay Updated on Our Launch
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Sign up to receive the latest news and updates about our <br />AI-powered eyewear solutions.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <ContactForm />
              <p className="text-xs text-gray-500 dark:text-gray-400">
                We&apos;ll never share your email. Read our{" "}
                <Link href="#" className="underline underline-offset-2" prefetch={false}>
                  Privacy Policy
                </Link>
                
              </p>
            </div>
            <div id="#signup" className="flex justify-center space-x-4">
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                <FacebookIcon className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                <TwitterIcon className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                <InstagramIcon className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/eyebuddy-io"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
                target="_blank"
              >
                <LinkedinIcon className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">&copy; 2024 EyeBuddy.io. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Privacy Policy
            </Link>
          </nav>
        </footer>

      </main>
    </div>

  );
}
