import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Menu() {
  return (
    <main>
      <section className="bg-menu-header bg-cover bg-center text-center text-white h-[25rem]"></section>

      <section>
        <h1 className="text-3xl text-center py-[2.3rem]">
          Our Popular Products
        </h1>
        <section className="flex justify-center flex-wrap gap-[2.8rem] px-[2.6rem]">
          <section className=" border-lg border-2 border-gray-200 rounded-[1rem] ">
            <img className="rounded-t-[1rem]" src={item} alt="banana bread" />

            <section className="flex flex-col gap-4 px-4 py-4">
              <section className="">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </section>

              <h2 className="text-xl font-bold">Banana Bread</h2>
              <h4 className="text-gray-500">
                Fruit Bread, Coconut Bread, <br /> Chocolate chip bread
              </h4>
              <p className="text-purple text-lg">
                Perfect for Birthdays & Picnics
              </p>
              <section className="flex items-center justify-between">
                <h2 className="font-bold text-lg">£3000.00</h2>
                <button className="bg-black text-white rounded-[1rem] px-4 py-3 mt-4">
                  Order Now
                </button>
              </section>
            </section>
          </section>
          <section className=" border-lg border-2 border-gray-200 rounded-[1rem] ">
            <img className="rounded-t-[1rem]" src={item2} alt="banana bread" />

            <section className="flex flex-col gap-4 px-4 py-4">
              <section className="">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon className="text-gray-400" icon={faStar} />
              </section>

              <h2 className="text-xl font-bold">Chocolate Cake</h2>
              <h4 className="text-gray-500">
                Chocolate, Red velvet and Vanilla
              </h4>
              <p className="text-purple text-lg">
                Perfect for Birthdays & Picnics
              </p>
              <section className="flex items-center justify-between">
                <h2 className="font-bold text-lg">£3000.00</h2>
                <button className="bg-black text-white rounded-[1rem] px-4 py-3 mt-4">
                  Order Now
                </button>
              </section>
            </section>
          </section>
          <section className=" border-lg border-2 border-gray-200 rounded-[1rem] ">
            <img className="rounded-t-[1rem]" src={item3} alt="banana bread" />

            <section className="flex flex-col gap-4 px-4 py-4">
              <section className="">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </section>

              <h2 className="text-xl font-bold">
                Assorted Donuts <br /> 6 pieces{" "}
              </h2>
              <h4 className="text-gray-500">
                Chocolate, Red velvet and Vanilla
              </h4>
              <p className="text-purple text-lg">
                Perfect for Birthdays & Picnics
              </p>
              <section className="flex items-center justify-between">
                <h2 className="font-bold text-lg">£3000.00</h2>
                <button className="bg-black text-white rounded-[1rem] px-4 py-3 mt-4">
                  Order Now
                </button>
              </section>
            </section>
          </section>
          <section className=" border-lg border-2 border-gray-200 rounded-[1rem] ">
            <img className="rounded-t-[1rem]" src={item4} alt="banana bread" />

            <section className="flex flex-col gap-4 px-4 py-4">
              <section className="">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon className="text-gray-400" icon={faStar} />
              </section>

              <h2 className="text-xl font-bold">
                Cupcakes <br /> 12 pieces{" "}
              </h2>
              <h4 className="text-gray-500">
                Chocolate, Red velvet and Vanilla
              </h4>
              <p className="text-purple text-lg">
                Perfect for Birthdays & Picnics
              </p>
              <section className="flex items-center justify-between">
                <h2 className="font-bold text-lg">£3000.00</h2>
                <button className="bg-black text-white rounded-[1rem] px-4 py-3 mt-4">
                  Order Now
                </button>
              </section>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}

export default Menu;
