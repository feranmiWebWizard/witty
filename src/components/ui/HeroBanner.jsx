import PropTypes from "prop-types";

function HeroBanner({ img, title, subtitle, text }) {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center py-[7.25rem] px-4">
      <section className="flex flex-col gap-3 max-w-[30rem]">
        <h3 className="text-lg"> {subtitle}</h3>
        <h1 className="text-3xl">{title}</h1>
        <p>{text}</p>
      </section>
      <img className="hidden md:block" src={img} alt="cupcakes" />
    </section>
  );
}

HeroBanner.PropTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default HeroBanner;
