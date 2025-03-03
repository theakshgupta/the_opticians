import Image from "next/image";

const AboutUsPage = () => {
  return (
    <main className="px-5 py-16 md:py-20 md:px-10 lg:px-16">
      {/* Intro Section */}
      <section className="mb-16">
        <div className="w-full lg:px-20 flex flex-col lg:flex-row justify-between gap-4 items-end">
          <h1 className="w-full lg:w-1/2 text-6xl md:text-8xl font-medium">
            About Us
          </h1>
          <p className="w-full lg:w-1/2 text-base font-light leading-relaxed">
            Welcome to{" "}
            <span className="font-normal text-[#000065]">The Opticians</span>,
            where your vision matters more than anything else. We understand how
            important it is to see the world clearly, comfortably, and with
            confidence. That’s why our motto is simple: “Don’t compromise on
            your vision.”
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="mb-16">
        <div className="relative w-full h-[30vh] md:h-[70vh] rounded-2xl border">
          <Image
            src="/about-us.png"
            alt="About Us Image"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* Who We Are */}
      <section className="border-t border-b py-16 md:py-20">
        <div className="w-full lg:px-20 flex flex-col lg:flex-row justify-between gap-4 items-start">
          <h2 className="w-full lg:w-1/2 text-4xl md:text-5xl font-medium">
            Who We Are
          </h2>
          <p className="w-full lg:w-1/2 text-base font-light leading-relaxed">
            The Opticians started with a dream to provide people with the best
            possible eyewear solutions. We believe that everyone deserves
            high-quality glasses that don’t just help them see better but also
            make them feel great. Whether it’s finding the perfect frames to
            suit your face or choosing the right lenses for your lifestyle, we
            are here to guide you every step of the way.
            <br />
            <br />
            We are more than just an eyewear store. We are a team of passionate
            professionals dedicated to making sure you never have to settle for
            less when it comes to your eyes.
          </p>
        </div>
      </section>

      {/* Why We Do What We Do */}
      <section className="border-b py-16 md:py-20">
        <div className="w-full lg:px-20 flex flex-col lg:flex-row justify-between gap-4 items-start">
          <h2 className="w-full lg:w-1/2 text-4xl md:text-5xl font-medium">
            Why We Do <br /> What We Do
          </h2>
          <p className="w-full lg:w-1/2 text-base font-light leading-relaxed">
            Your eyes are precious, and we believe they deserve the very best
            care. Poor vision can affect your daily life, your confidence, and
            even your health. That’s why we’re here—to make sure you always have
            access to the best eyewear, whether it’s glasses, sunglasses, or
            contact lenses.
            <br />
            <br />
            We don’t believe in one-size-fits-all solutions. Everyone is unique,
            and so are their vision needs. That’s why we take the time to listen
            to you, understand your preferences, and recommend the right
            products for you.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="border-b py-16 md:py-20">
        <div className="w-full lg:px-20 flex flex-col lg:flex-row justify-between gap-4 items-start">
          <h2 className="w-full lg:w-1/2 text-4xl md:text-5xl font-medium">
            What We Offer
          </h2>
          <p className="w-full lg:w-1/2 text-base font-light leading-relaxed">
            At The Opticians, we offer a wide range of eyewear products and
            services to meet all your needs:
            <ul className="list-disc pl-5 flex flex-col gap-2 mt-2">
              <li>
                <span className="font-medium">Stylish Frames:</span> We have
                frames in all shapes, sizes, and colors to suit every face and
                personality.
              </li>
              <li>
                <span className="font-medium">Advanced Lenses:</span> Whether
                you need single-vision, bifocals, progressives, or specialty
                lenses, we provide lenses that are clear, durable, and
                customized for your vision.
              </li>
              <li>
                <span className="font-medium">Contact Lenses:</span> From daily
                disposables to monthly lenses, we offer a variety of comfortable
                options for those who prefer contact lenses over glasses.
              </li>
              <li>
                <span className="font-medium">Expert Advice:</span> Choosing the
                right glasses or lenses can be overwhelming. That’s why our team
                is always here to help, offering personalized guidance to make
                the process easy and stress-free.
              </li>
            </ul>
          </p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="border-b py-16 md:py-20">
        <div className="w-full lg:px-20 flex flex-col lg:flex-row justify-between gap-4 items-start">
          <h2 className="w-full lg:w-1/2 text-4xl md:text-5xl font-medium">
            What Makes Us <br /> Different
          </h2>
          <p className="w-full lg:w-1/2 text-base font-light leading-relaxed">
            <ol className="list-decimal pl-5 flex flex-col gap-2">
              <li>
                <span className="font-medium">Quality You Can Trust:</span> We
                work with trusted brands and use the latest technology to ensure
                our products are of the highest quality.
              </li>
              <li>
                <span className="font-medium">Style That Fits You:</span> We
                understand that eyewear isn’t just about function—it’s also
                about fashion. That’s why we offer frames that combine comfort
                with style.
              </li>
              <li>
                <span className="font-medium">Affordable Options:</span> We
                believe everyone should have access to great eyewear, so we
                offer products at a variety of price points without compromising
                on quality.
              </li>
              <li>
                <span className="font-medium">Customer Care:</span> At The
                Opticians, you’re not just a customer—you’re part of our family.
                We go above and beyond to make sure you’re happy with your
                purchase.
              </li>
            </ol>
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="border-b py-16 md:py-20">
        <div className="w-full lg:px-20 flex flex-col lg:flex-row justify-between gap-4 items-start">
          <h2 className="w-full lg:w-1/2 text-4xl md:text-5xl font-medium">
            Our Mission
          </h2>
          <p className="w-full lg:w-1/2 text-base font-light leading-relaxed">
            Our mission is simple: to help you see better and look your best. We
            want to make sure that every person who walks through our doors or
            visits us online leaves feeling confident and satisfied.
          </p>
        </div>
      </section>

      {/* A Vision For The Future */}
      <section className="border-b py-16 md:py-20">
        <div className="w-full lg:px-20 flex flex-col lg:flex-row justify-between gap-4 items-start">
          <h2 className="w-full lg:w-1/2 text-4xl md:text-5xl font-medium">
            A Vision For <br /> The Future
          </h2>
          <p className="w-full lg:w-1/2 text-base font-light leading-relaxed">
            As we grow, our goal is to continue improving and innovating. In the
            future, we aim to offer even more advanced options, including
            virtual try-ons and enhanced lens technologies. But no matter how
            much we evolve, one thing will always stay the same:{" "}
            <span className="font-normal text-[#000065]">
              Our Commitment To Your Vision.
            </span>
          </p>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 flex flex-col justify-center items-center gap-4">
        <div className="w-full md:w-[90%] lg:[w-80%] xl:w-[75%] flex flex-col gap-4">
          <p className="text-center text-xl md:text-3xl leading-relaxed font-light">
            At The Opticians, we don’t just sell eyewear. We help you see the
            world in all its beauty, color, and detail—because you deserve
            nothing less.
          </p>
          <p className="text-center text-xl md:text-3xl text-[#000065] font-medium">
            Thank you for trusting us with your vision.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;
