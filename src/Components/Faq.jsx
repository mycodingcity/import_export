import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

function MyFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const ClickFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {data.map((FaqData, index) => (
        <div key={FaqData.id}>
          <div
            className="flex items-center justify-between py-2 cursor-pointer "
            onClick={() => ClickFaq(index)}
          >
            <h1 className="text-lg font-medium ">{FaqData.question}</h1>
            <IoIosArrowForward
              className={`${
                openIndex == index ? "rotate-90" : ""
              } duration-200`}
            />
          </div>

          <div
            className={` overflow-hidden  transition-all  duration-700  ${
              openIndex == index ? "max-h-screen" : "max-h-0"
            } `}
          >
            <p className="py-2">{FaqData.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const data = [
  {
    question: "How can I pay for your logistics services?",
    answer:
      "Leverage agile frameworks to provide a robust synopsis for Leverage agile frameworks to provide a robust synopsis for",
  },
  {
    question: " What payment methods are supported?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi est non sed tenetur? Praesentium ipsum dolorem ducimus sint dolor! Id numquam tempore soluta delectus minus pariatur, asperiores natus saepe hic?",
  },
  {
    question: " What payment methods are supported?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi est non sed tenetur? Praesentium ipsum dolorem ducimus sint dolor! Id numquam tempore soluta delectus minus pariatur, asperiores natus saepe hic?",
  },
  {
    question: " What payment methods are supported?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi est non sed tenetur? Praesentium ipsum dolorem ducimus sint dolor! Id numquam tempore soluta delectus minus pariatur, asperiores natus saepe hic?",
  },
];

export default MyFaq;
