import React from 'react'

const Review = () => {
  return (
    <div>
        <section className="bg-white dark:bg-gray-900">
  <div className="container px-6 py-10 mx-auto">
    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
      What our <span className="text-green-500 ">Farmers</span> say
    </h1>
    <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex
      placeat modi magni quia error alias, adipisci rem similique, at omnis
      eligendi optio eos harum.
    </p>
    <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
      <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
        <p className="leading-loose text-gray-500 dark:text-gray-300">
          “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
          quibusdam ducimus libero ad tempora doloribus expedita laborum saepe
          voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum,
          obcaecati corrupti aspernatur a.”.
        </p>
        <div className="flex items-center mt-6">
          <img
            className="object-cover rounded-full w-14 h-14"
            src="https://images.pexels.com/photos/12683836/pexels-photo-12683836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="mx-4">
            <h1 className="font-semibold text-blue-500">Cindy</h1>
            <span className="text-sm text-gray-500 dark:text-gray-300">
              Binta Farms, Onne
            </span>
          </div>
        </div>
      </div>
      <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
        <p className="leading-loose text-gray-500 dark:text-gray-300">
          “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
          quibusdam ducimus libero ad tempora doloribus expedita laborum saepe
          voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum,
          obcaecati corrupti aspernatur a.”.
        </p>
        <div className="flex items-center mt-6">
          <img
            className="object-cover rounded-full w-14 h-14"
            src="https://images.pexels.com/photos/5529606/pexels-photo-5529606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="mx-4">
            <h1 className="font-semibold text-blue-500">Mia Brown</h1>
            <span className="text-sm text-gray-500 dark:text-gray-300">
              Neon Produce, Iyana Apaja
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Review