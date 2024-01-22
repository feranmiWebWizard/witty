import Button from "../../components/ui/Button";
import cupcakeHeader from "../../assets/images/cupcake-header.jpg";
import Banner from "../../components/ui/Banner";
import SocialBanner from "../../components/ui/SocialBanner";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";
import HeroBanner from "../../components/ui/HeroBanner";
import peculiar from "../../assets/images/peculiar.jpg";
import { ImageTextBlock } from "../../components/ui/ImageTextBlock";

function About() {
  const imageProps = {
    img: peculiar,
    title: `Meet Pecky!`,
    textOne: `I'm Peculiar Rejoice-George, the
    heart and soul behind Witty Bakehouse. I've always had a passion for
    baking, and over the years, it has grown into a true labor of love.
    What once began as a mere hobby has blossomed into a full-fledged
    business, and it's been an incredible journey.`,
    textTwo: `My greatest joy is seeing the smiles on people's faces when they
    savor my creations. Baking isn't just about mixing ingredients; it's
    about stirring up happiness, forging unforgettable memories, and
    sharing love, one delectable treat at a time. That's what my cakes
    are all about—spreading joy, celebrating special moments, and
    creating happiness that's meant to be shared.`,
  };
  const heroData = {
    img: cupcakeHeader,
    title: `About Witty Bakehouse`,
    subtitle: `Scrumptious| Mouth Watering| Heavenly`,
    text: ` We specialize in crafting irresistibly delicious treats that
    transport you to a world of sweet euphoria. Our creations are a
    testament to our commitment to quality, flavor, and your sheer
    delight.`,
  };
  const buttonData = {
    name: "Start your baking journey.",
    color: "#FFFFFF",
    textColor: "#000000",
  };
  return (
    <>
      <Navbar />
      <HeroBanner {...heroData} />
      <ImageTextBlock {...imageProps} />
      <Banner />
      <section className="bg-peach py-[10rem] flex items-center justify-center px-4">
        <section className="max-w-[40rem]">
          <h1 className="text-3xl pb-4">Join Our Baking School</h1>
          <p className="text-lg pb-4">
            Ready to elevate your baking skills? Join our baking school,
            suitable for beginners and seasoned bakers alike. Our expert bakers
            will unveil the secrets to crafting extraordinary cakes, pastries,
            and more. Get ready for a culinary adventure like no other!
          </p>
          <p className="pb-4">
            🗓️ Next Session Begins: October 30th, 2024 <br /> Course Fee: $50
          </p>
          <Button {...buttonData} />
        </section>
      </section>
      <SocialBanner />
      <Footer />
    </>
  );
}

export default About;
