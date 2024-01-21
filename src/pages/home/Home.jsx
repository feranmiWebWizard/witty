import Navbar from "../../layouts/Navbar";
import TopBanner from "../../components/ui/TopBanner";
import CardOne from "../../components/CardOne";
import CardTwo from "../../components/CardTwo";
import CardThree from "../../components/CardThree";
import Testimonials from "../../components/Testimonials";
import Footer from "../../layouts/Footer";

function Home() {
  const heroData = {
    title: "Welcome to Witty Bakehouse",
    subtitle: `Where every slice is a piece of happiness, and every bite is a journey to dessert heaven.`,
  };
  const cardOneData = {
    title: "About Us",
    text: `At Witty Bakehouse, we believe that life is too short not to
    indulge in a little sweetness. We're a merry band of bakers on a
    mission to spread joy, one delectable treat at a time. Our ovens
    are fired up, and our creativity knows no bounds when it comes to
    crafting mouthwatering delights that tickle your taste buds and
    warm your heart. Join us on this scrumptious journey, and let's
    make your moments a little sweeter together. Explore our world of
    flavors, where every bite is a punchline to life's delightful
    comedy.`,
  };
  const cardThreeData = {
    title: "Cakes & More",
    text: `Indulge in a world of sweet delights at our bakery! From classic favorites to trendy flavors, our cakes are crafted to satisfy every craving. Whether you're a fan of rich chocolate, zesty citrus, or dreamy vanilla, we've got the perfect slice for you. Celebrate birthdays, anniversaries, or just treat yourself to a moment of pure bliss with our delectable creations. Explore a variety of sizes and designs, each baked with love and sprinkled with joy. Life is short; eat more cake!`,
  };
  return (
    <main>
      <Navbar />
      <TopBanner {...heroData} />
      <CardOne {...cardOneData} />
      <CardTwo />
      <CardThree {...cardThreeData} />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default Home;
