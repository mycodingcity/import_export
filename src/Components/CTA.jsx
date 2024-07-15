import React from "react";

function CTA() {
  return (
    <div>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-lg px-4 py-28 lg:flex  lg:items-center justify-center">
          <div className=" text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl ">
              Providing Global Logistics Solutions
            </h1>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-red-600 px-12 py-3 text-lg font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="#"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CTA;
