import cupcakes from "../../assets/images/cupcakes.jpg";
import bananaBread from "../../assets/images/banana-bread.jpg";
import hearts from "../../assets/images/hearts.jpg";
import donuts from "../../assets/images/donuts.jpeg";
import Button from "./Button";

function SocialBanner() {
  const buttonData = {
    name: "Follow Us!",
    color: "#F7B2B7DE",
    textColor: "#000000",
  };
  return (
    <section className="bg-peach1 text-center flex flex-col items-center gap-2 py-[10rem]">
      <h1 className="text-3xl mb-[4rem]">Get Social with Witty Bakehouse</h1>
      <section className="flex flex-col md:flex-row gap-2">
        <img
          className="max-w-[14.6rem] max-h-[15.5rem]"
          src={cupcakes}
          alt="frosted cupcakes"
        />
        <img
          className="hidden md:block max-w-[14.6rem] max-h-[15.5rem]"
          src={donuts}
          alt="chocolate donuts"
        />
        <img
          className="max-w-[14.6rem] max-h-[15.5rem]"
          src={hearts}
          alt="heart shaped cakes"
        />
        <img
          className="hidden md:block max-w-[14.6rem] max-h-[15.5rem]"
          src={bananaBread}
          alt="banana bread"
        />
      </section>
      <Button {...buttonData} />
    </section>
  );
}

export default SocialBanner;
