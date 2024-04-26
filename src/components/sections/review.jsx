import React from "react";

const Review = () => {
  return (
    <div className="w-full mt-10">
      <section className="bg-white text-black text-sm lg:text-base">
        <div className="container px-5 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-center  capitalize lg:text-4xl ">
            What our <span className="text-green-500 ">Farmers</span> say
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-center  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>
          <div className="grid grid-cols-1 gap-8 mx-auto   mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
            <div className="p-6 bg-yellow-50 rounded-lg  md:p-8">
              <p className="leading-loose  ">
                It's a modern approach that not only benefits us the Farmers,
                but as well the consumers, and also supports local farmers and
                promotes sustainability by reducing the carbon footprint
                associated with traditional distribution channels
              </p>
              <div className="flex items-center mt-6">
                <img
                  className="object-cover rounded-full w-14 h-14"
                  src="https://images.pexels.com/photos/12683836/pexels-photo-12683836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <div className="mx-4">
                  <h1 className="font-semibold text-green-500">Cindy</h1>
                  <span className="text-sm ">Binta Farms, Onne</span>
                </div>
              </div>
            </div>
            <div className="p-6 bg-green-50 rounded-lg md:p-8">
              <p className="leading-loose  ">
                FarmConnect commitment to ensuring that my customers are
                unavoidably satisfied is one thing i'm really impressed with,
                plus the fact that it brought seamless integration of technology
                into my farming business. By uploading my fresh farm produce on
                their website and making it incredibly convenient for consumers
                to access the fresh products directly.
              </p>
              <div className="flex items-center mt-6">
                <img
                  className="object-cover rounded-full w-14 h-14"
                  src="https://images.pexels.com/photos/5529606/pexels-photo-5529606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <div className="mx-4">
                  <h1 className="font-semibold text-green-500">Mia Brown</h1>
                  <span className="text-sm text-gray-800 ">
                    Neon Produce, Iyana Apaja
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-orange-50 rounded-lg md:p-8">
              <p className="leading-loose  ">
                I would strongly recommend FarmConnect produce to anyone looking
                for the freshest, highest quality fruits and vegetables to buy.
                When it comes to delivery and packaging, the difference is
                crystal clear! Thank you for your outstanding quality service.
              </p>
              <div className="flex items-center mt-6">
                <img
                  className="object-cover rounded-full w-14 h-14"
                  src="https://images.pexels.com/photos/4177755/pexels-photo-4177755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <div className="mx-4">
                  <h1 className="font-semibold text-green-500">Mary J</h1>
                  <span className="text-sm text-gray-800 ">
                    Consumer-Kogi state
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-blue-50 rounded-lg md:p-8">
              <p className="leading-loose  ">
                As a Farmer, conveying my farm produce to my final customer was
                a problem due to proximity. But all i do currently is harvest
                from the farm direct fresh food while FarmConnect makes sure it
                gets to my finial customers in. due time. So far FarmConnect is
                one of the best thing that has happened to me as a Village Farme
              </p>
              <div className="flex items-center mt-6">
                <img
                  className="object-cover rounded-full w-14 h-14"
                  src="https://images.pexels.com/photos/8540244/pexels-photo-8540244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <div className="mx-4">
                  <h1 className="font-semibold text-green-500"> Ahmed Bello</h1>
                  <span className="text-sm text-gray-800 ">
                    Saliu Diaries -Kastina
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
