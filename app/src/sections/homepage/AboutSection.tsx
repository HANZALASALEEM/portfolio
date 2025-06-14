import Image from "next/image";
import Button from "../../components/common/Button";
import { useInView } from "react-intersection-observer";
import AnimatedParagraph from "../../components/common/AnimatedParagraph";

const AboutSection = () => {
  const { ref: imageRef, inView: isVisible } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <>
      {/* Upper Curve */}
      <div className="w-full h-[200px] bg-secondary mt-40">
        <div className="w-full h-full bg-background rounded-br-[100px] sm:rounded-br-[200px]"></div>
      </div>
      {/* Main Content */}
      <div className="w-full flex flex-col lg:flex-row bg-secondary  py-20 rounded-tl-[100px] rounded-br-[100px] sm:rounded-tl-[200px] sm:rounded-br-[200px]">
        {/* Left Div */}
        <div className="relative w-full lg:w-1/2 flex flex-col items-center justify-center">
          <div
            ref={imageRef}
            className={`h-96 w-80 bg-secondary my-5 shadow-primary rounded-full flex items-center justify-center transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src="/images/me.png"
              width={1000}
              height={1000}
              alt="Me"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="absolute h-14 bg-primary shadow-primary bottom-5 lg:bottom-36 min-[1100px]:bottom-20 sm:right-[20%] lg:right-[5%] xl:right-[10%] 2xl:right-[15%] rounded-full flex flex-row items-center pl-2 pr-4">
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
        <div className="w-[90%] mx-auto lg:w-1/2 lg:px-[3%]">
          <div className="w-full flex items-center">
            <div className="h-1 w-20 bg-primary rounded-full shadow-primary"></div>
            <p className="text-primary text-xl font-semibold ml-3">ABOUT ME</p>
          </div>
          <div className="my-10">
            <h1 className="text-5xl text-white">
              <AnimatedParagraph
                text={`Who is <span  style="color: #6A35FF;">HANZALA SALEEM?</span>`}
                className="text-5xl text-white"
                isHtml={true}
              />
            </h1>
          </div>
          <div className="my-5">
            <AnimatedParagraph
              text=" I am a dedicated Software Engineer with over 1 year of experience in MERN Stack development at JFreaks, alongside a strong focus on mobile application development using React Native. My expertise includes building scalable web and mobile applications for both Android and iOS, with a solid command of technologies like Firebase, React Navigation, and advanced animations. I also have experience in designing user-centric interfaces using tools such as Wondershare Mockitt, ensuring a balance between performance and visual appeal."
              className="text-white text-lg text-center"
            />
          </div>
          <div className="my-10 flex flex-col sm:flex-row lg:flex-col min-[1100px]:flex-row items-center justify-center space-y-8 sm:space-y-0 lg:space-y-8 min-[1100px]:space-y-0 space-x-0 sm:space-x-10 lg:space-x-0 min-[1100px]:space-x-10">
            <Button
              text="+92 320 7409403"
              imageUrl="/icons/call.png"
              onClick={() => window.open("tel:+923207409403")}
            />
            <Button
              text="hanzalabutt903@gmail.com"
              imageUrl="/icons/mail.png"
              onClick={() => window.open("mailto:hanzalabutt903@gmail.com")}
            />
          </div>
        </div>
      </div>
      {/* Lower Curve */}
      <div className="w-full h-[200px] bg-secondary mb-40">
        <div className="w-full h-full bg-background rounded-tl-[100px] sm:rounded-tl-[200px]"></div>
      </div>
    </>
  );
};

export default AboutSection;
