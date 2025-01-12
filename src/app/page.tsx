/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button"
import GetStartedForm from '../components/GetStartedForm'

export default function Home() {
  return (
    <div className="container mx-auto">
      <section className="py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to Ityav Systems
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                We specialize in building websites and providing solutions with Microsoft tools like Excel and Word.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <GetStartedForm />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-16 lg:gap-20 mt-8">
            {[
              "Custom Website Development",
              "Microsoft Excel Solutions",
              "Microsoft Word Document Management",
              "Data Analysis and Visualization",
            ].map((service, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div className="p-2 bg-primary text-primary-foreground rounded-full">
                  <svg
                    className=" h-6 w-6"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                    <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

