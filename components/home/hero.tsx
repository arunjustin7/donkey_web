import Image from "next/image";

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-40px)]">
      <Image
        src="/imgs/hero2.png"
        alt="Serene rural landscape with donkeys"
        width={1920}
        height={600}
        // className="absolute left-1/2 top-0 h-full w-[90%] -translate-x-1/2 object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#faf7f2]/95 via-[#faf7f2]/70 to-transparent">
        <div className="container flex h-full flex-col justify-center gap-6 py-20">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-[#2C3E50] sm:text-6xl">
            Pure Donkey Milk,
            <br />
            Straight from Nature
          </h1>
          <p className="max-w-xl text-lg text-[#5D6D7E]">
            Experience the remarkable benefits of pure donkey milk. Ethically sourced from our family farm and
            naturally nurturing.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
