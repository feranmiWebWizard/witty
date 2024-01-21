import Button from "./Button";
import PropTypes from "prop-types";

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

TopBanner.PropTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default TopBanner;
