import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row my-10">
      {/* Left Div */}
      <div className="relative w-full lg:w-1/2 flex flex-col items-center justify-center">
        <div className="h-96 w-80 bg-secondary my-5 shadow-primary rounded-full flex items-center justify-center">
          <Image
            src="/images/me.png"
            width={1000}
            height={1000}
            alt="Me"
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="absolute h-14 bg-primary shadow-primary bottom-5 sm:right-[20%] lg:right-[5%] xl:right-[10%] 2xl:right-[15%] rounded-full flex flex-row items-center pl-2 pr-4">
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
            <Image
              src="/icons/certified.png"
              width={1000}
              height={1000}
              alt="Certified Icon"
              className="w-10 h-10 object-cover m-1"
            />
          </div>
          <p className="text-white text-xl ml-2">Software Developer</p>
        </div>
      </div>
      {/* Right Div */}
      <div className="w-[90%] mx-auto lg:w-1/2 lg:px-5">
        <div className="w-full flex items-center">
          <div className="h-1 w-20 bg-primary rounded-full shadow-primary"></div>
          <p className="text-primary text-xl font-semibold ml-3">ABOUT ME</p>
        </div>
        <div className="my-5">
          <h1 className="text-5xl text-white">
            Who is <span className="text-primary">HANZALA SALEEM?</span>
          </h1>
        </div>
        <div className="my-5">
          <p className="text-white text-lg text-center">
            I am a dedicated{" "}
            <strong className="text-primary">Software Engineer</strong> with
            over 1 year of experience in MERN Stack development at{" "}
            <strong className="text-primary">JFreaks</strong>, alongside a
            strong focus on mobile application development using React Native.
            My expertise includes building scalable web and mobile applications
            for both <strong className="text-primary">Android and iOS</strong>,
            with a solid command of technologies like Firebase, React
            Navigation, and advanced animations. I also have experience in
            designing user-centric interfaces using tools such as Wondershare
            Mockitt, ensuring a balance between performance and visual appeal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
