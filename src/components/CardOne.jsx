import Button from "./ui/Button";
import propTypes from "prop-types";

function CardOne({ title, text }) {
  const buttonData = {
    name: "See Our Menu",
    color: "#F7B2B7DE",
    textColor: "#000000",
  };
  return (
    <section className="bg-peach1 flex flex-col justify-center items-center py-[3.75rem] px-4">
      <section className="text-center text-lg flex flex-col items-center gap-4 max-w-[35rem]">
        <h1 className="text-3xl">{title}</h1>
        <p>{text}</p>
        <Button {...buttonData} />
      </section>
    </section>
  );
}

CardOne.propTypes = {
  title: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

export default CardOne;
