import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RateForm = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  const [activeForm, setActiveForm] = useState("quote");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption) {
      switch (selectedOption) {
        case "First Option":
          navigate("/single_quote");
          break;
        case "Second Option":
          navigate("/multiple_quote");
          break;
        default:
          console.log("Please select a valid option");
      }
    } else {
      alert("Please select an option");
    }
  };

  const handleButtonClick = (formType) => {
    setActiveForm(formType);
  };

  const renderForm = () => {
    switch (activeForm) {
      case "quote":
        return (
          <form
            onSubmit={handleSubmit}
            className="p-6 md:p-8 text-center bg-gray-100 h-48"
          >
            <h2 className="text-xl md:text-3xl mb-4 text-orange-600 py-3">
              Tell us what you need
            </h2>
            <div className="flex flex-col sm:flex-row justify-center py-3">
              <select
                className="mb-4 sm:mb-0 sm:mr-4 p-2 border border-gray-300 rounded w-full sm:w-64"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option value="">Choose</option>
                <option value="First Option">First Option</option>
                <option value="Second Option">Second Option</option>
              </select>
              <button
                type="submit"
                className="bg-blue-700 text-white px-6 py-2 rounded"
              >
                Request
              </button>
            </div>
          </form>
        );
      case "logistics":
        return (
          <form className="p-6 md:p-8 text-center bg-gray-100 h-48">
            <h2 className="text-xl md:text-3xl mb-4 text-blue-600 	">
              Would you like to know more about our logistics solutions?
            </h2>
            <div className="flex justify-center py-5">
              <div className="pr-3">
                <button
                  type="submit"
                  className="bg-red-600 text-white  relative px-5 py-2 hover:border-b-1 border-[#ff2b2b] transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:-mb-2 after:w-full after:bg-[#ff2b2b] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
                >
                  Logistics Solution Offer
                </button>
              </div>

              <div className="pl-3">
                <button
                  type="submit"
                  className="bg-red-600 text-white  relative px-5 py-2 hover:border-b-1 border-[#ff2b2b] transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:-mb-2 after:w-full after:bg-[#ff2b2b] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
                >
                  Know more about the OmTrans
                </button>
              </div>
            </div>
          </form>
        );
      case "book":
        return (
          <form className="p-6 md:p-8 text-center bg-gray-100 h-48">
            <h2 className="text-xl md:text-3xl mb-4 text-blue-600 	">
              Book your next shipment directly
            </h2>
            <div className="flex justify-center py-5">
              <div className="pr-3">
                <button
                  type="submit"
                  className="bg-red-600 text-white  relative px-5 py-2 hover:border-b-1 border-[#ff2b2b] transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:-mb-2 after:w-full after:bg-[#ff2b2b] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
                >
                  Book Now
                </button>
              </div>
            </div>
          </form>
        );
      case "track":
        return (
          <form className="p-6 md:p-8 text-center bg-gray-100 h-48">
            <h2 className="text-xl md:text-3xl mb-4 text-blue-600 	">
              Track Your Shipment
            </h2>
            <input
              type="text"
              placeholder="Enter logistics details"
              className="mb-4 p-2 border border-gray-300 rounded w-full sm:w-64"
            />
            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-2 rounded"
            >
              Submit
            </button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap text-sm md:text-base">
        <button
          className={`flex-1 py-2 px-4  ${
            activeForm === "quote" ? "bg-white font-semibold" : "bg-gray-300"
          }`}
          onClick={() => handleButtonClick("quote")}
        >
          Get a quote
        </button>
        <button
          className={`flex-1 py-2 px-4 ${
            activeForm === "logistics"
              ? "bg-white font-semibold"
              : "bg-gray-300"
          }`}
          onClick={() => handleButtonClick("logistics")}
        >
          Logistics Solutions
        </button>
        <button
          className={`flex-1 py-2 px-4 ${
            activeForm === "book" ? "bg-white font-semibold" : "bg-gray-300"
          }`}
          onClick={() => handleButtonClick("book")}
        >
          Book
        </button>
        <button
          className={`flex-1  py-2 px-4 ${
            activeForm === "track" ? "bg-white font-semibold" : "bg-gray-300"
          }`} onClick={() => handleButtonClick("track") }
        >
          Track & Trace
        </button>
      </div>

      {renderForm()}
    </div>
  );
};

export default RateForm;
