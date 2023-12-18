import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const headding = {
  text: "Data to enrich your",
  text2: "online business",
  secondaryText:
    "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
};

const buttons = [
  {
    text: "Get started",
    url: "#",
  },
  {
    text: "Live demo",
    url: "#",
  },
];

export default function Hero() {
  return (
    <main className="lg:relative">
      <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">{headding.text}</span>{" "}
            <span className="block text-primary xl:inline">
              {headding.text2}{" "}
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            {headding.secondaryText}{" "}
          </p>
          <div className="mt-10 flex flex-col lg:flex-row space-x-4">
            {buttons.map((button, index) => (
              <div key={index}>
                <Button
                  variant={index === 0 ? "default" : "secondary"}
                  size={"lg"}
                  className="mt-3 shadow sm:mt-0 w-full"
                >
                  <Link href={button.url}>{button.text}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
        <Image
          className="absolute inset-0 h-full w-full object-cover md:rounded-r-xl rounded-b-xl"
          src="/images/hero.jpg"
          fill
          objectFit="cover"
          alt=""
        />
      </div>
    </main>
  );
}
