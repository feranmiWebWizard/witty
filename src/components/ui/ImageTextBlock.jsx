import Button from "./Button";
import PropTypes from "prop-types";

export function ImageTextBlock({ img, title, textOne, textTwo }) {
  const buttonData = {
    name: " Explore Our Menu and Place an Order",
    color: "#F7B2B7DE",
    textColor: "#000000",
  };
  return (
    <section className="text-lg flex flex-col md:flex-row justify-center items-center md:items-start gap-10 py-[3.5rem] px-4">
      <img src={img} alt="smiling woman" />
      <section className="max-w-[30rem] my-auto space-y-4">
        <h1 className="text-3xl">{title}</h1>
        <p>{textOne}</p>
        <p className="text-gray-500">{textTwo}</p>
        <Button {...buttonData} />
      </section>
    </section>
  );
}

ImageTextBlock.PropTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  textOne: PropTypes.string.isRequired,
  texttwo: PropTypes.string.isRequired,
};
