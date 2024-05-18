import Button from "./Button";
import propTypes from "prop-types";

function TopBanner({ title, subtitle }) {
  const buttonData = {
    name: "Explore Our Delights",
    color: "#F7B2B7DE",
    textColor: "#000000",
  };
  return (
    <section className="bg-cake-background-img bg-cover bg-center">
      <section className="backdrop-blur-md text-lg flex flex-col items-start gap-4 max-w-[30rem] px-[3rem] py-[13rem]">
        <h1 className="text-3xl">{title}</h1>
        <p>{subtitle}</p>
        <Button {...buttonData} />
      </section>
    </section>
  );
}

TopBanner.propTypes = {
  title: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired,
};

export default TopBanner;
