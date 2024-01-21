import Button from "./ui/Button";
import cupcakes from "../assets/images/cupcakes.png";
import donuts from "../assets/images/donuts.png";

function CardTwo() {
  const buttonData = {
    name: "Order now",
    color: "#FFFFFF",
    textColor: "#000000",
  };
  return (
    <>
      <section className="flex flex-col gap-5 w-full md:hidden">
        <h1 className="text-3xl ml-[1rem]">Our Bakery</h1>
        <section className="bg-cupcakes-img bg-cover bg-center flex flex-col justify-end h-[9.8rem]">
          <section className="bg-purple text-white flex flex-col gap-1 items-start px-2 py-3 z-[2]">
            <p>Get Cupcakes as Unique as You Are!</p>
            <Button {...buttonData} />
          </section>
        </section>
        <section className="bg-donut-img bg-cover bg-center flex flex-col justify-end h-[9.8rem]">
          <section className="bg-peach text-white flex flex-col gap-1 items-start px-2 py-2 z-[2]">
            <p>Try Out our Donuts That Make You Go 'Mmm.</p>
            <Button {...buttonData} />
          </section>
        </section>
      </section>

      <section className="w-full hidden md:block relative ">
        <section className="flex flex-col gap-2 items-start absolute bottom-[2.5%] left-[2.5%] z-[2]">
          <p className="bg-purple shadow-2xl shadow-black rounded-tr-[1.5rem] text-white w-[24rem] p-[1rem]">
            Get Cupcakes as Unique as You Are!
          </p>
          <Button {...buttonData} />
        </section>
        <section className="flex flex-col gap-2 items-start absolute top-[2.5%] right-[2.5%] z-[2]">
          <p className="bg-peach shadow-2xl shadow-black rounded-tr-[1.5rem] text-white w-[24rem] p-[1rem]">
            Try Out our Donuts That Make You Go 'Mmm.
          </p>
          <Button {...buttonData} />
        </section>

        <img
          className="w-full"
          src={donuts}
          alt="donuts with chocolate glaze"
        />

        <img
          className="w-full absolute bottom-0"
          src={cupcakes}
          alt="cupcakes with sprinkles"
        />
      </section>
    </>
  );
}

export default CardTwo;
