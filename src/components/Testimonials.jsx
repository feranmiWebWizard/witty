import {
  img,
  imgTwo,
  imgThree,
  imgFour,
  imgFive,
} from "../assets/images/images";

function Testimonials() {
  return (
    <>
      <section className="pb-[4rem]">
        <section className="bg-divider-img text-center py-[2.5rem] ">
          <h1 className="text-xl md:text-3xl ">
            What Our Delightful Customers Say
          </h1>
        </section>
        <section className="md:flex justify-center gap-4 hidden px-4">
          <img src={img} alt="a card with a person and writing" />
          <img src={imgTwo} alt="a card with a person and writing" />
          <img src={imgThree} alt="a card with a person and writing" />
        </section>
        <section className="md:flex justify-center items-center space-y-4 gap-4 px-4">
          <img src={imgFour} alt="a card with a person and writing" />
          <img src={imgFive} alt="a card with a person and writing" />
        </section>
      </section>
    </>
  );
}

export default Testimonials;
