import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BgImg from "../assets/our_services.jpg";
import TrackingForm from "../Components/TrackingForm";
import Growth from "../Components/Growth";
import G1 from "../assets/g1.jpg";
import G2 from "../assets/g2.jpg";
import G3 from "../assets/g3.jpg";
import G4 from "../assets/g4.jpg";
import G5 from "../assets/g5.jpg";
import G6 from "../assets/g6.jpg";
import G7 from "../assets/g7.jpg";
import G8 from "../assets/g8.jpg";
import G9 from "../assets/g9.jpg";
import G10 from "../assets/g10.jpg";

function Growth_story() {
  return (
    <div>
      <Navbar />

      <div
        className="bg-no-repeat bg-center bg-cover "
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="flex sm:flex-row flex-col items-center justify-around sm:pt-24 pt-4 sm:pb-24 m-auto pb-10 w-[90%]">
          <div className="sm:w-3/5	w-full py-6">
            <h1 className="text-white sm:text-[3.4vw] font-bold  leading-none text-4xl">
              Our Growth Story
            </h1>
          </div>
          <div className="sm:w-2/5">
            <TrackingForm />
          </div>
        </div>
      </div>

      <>
        <div className="flex m-auto">
          <div className="w-[30%] sm:block hidden">
            <div className="flex flex-col  items-center ">
              <div className="w-40 h-40 pt-12">
                <img src={G1} alt="" className=" m-auto" />
              </div>
              <div className=" w-40 h-40"></div>
              <div className="w-40 h-40"></div>
              <div className="w-40 h-40 py-4">
                <img src={G2} alt="" className=" " />
              </div>
              <div className=" w-40 h-40"></div>
              <div className="w-40 h-40"></div>
              <div className="w-40 h-40 py-4">
                <img src={G3} alt="" className=" m-auto" />
              </div>
              <div className=" w-40 h-40"></div>
              <div className="w-40 h-40"></div>
              <div className="w-40 h-40 py-4">
                <img src={G4} alt="" className=" " />
                <div className=" w-40 h-40"></div>
                <div className=" w-40 h-40"></div>
                <img src={G5} alt="" className=" m-auto" />
              </div>
            </div>
          </div>
          <div className="py-4 m-auto w-[30%]">
            <ol className=" flex flex-col items-center py-5">
              {/* <!--First item--> */}
              <Growth
                year={1978}
                content={
                  <>
                    OM started its operation under the pennant of
                    <b> OM Industries</b>
                  </>
                }
              />

              {/* <!--Second item--> */}
              <Growth
                year={1983}
                content={
                  <>
                    Commenced Operation in association with Maruti India by the
                    name <b>"Om Auto Carrier"</b>
                  </>
                }
              />

              {/* <!--Third item--> */}
              <Growth
                year={1991}
                content={
                  <>
                    Introduced <b>"Om Logistics Ltd."</b> with its first
                    registered office in New Delhi
                  </>
                }
              />

              {/* <!--Fourth item--> */}
              <Growth
                year={2000}
                content={
                  <>
                    {" "}
                    Announcement of new business division
                    <b>"OMX Cargo Limited"</b>{" "}
                  </>
                }
              />

              {/* <!--Fifth item--> */}
              <Growth
                year={2004}
                content={
                  <>
                    Introduced new business unit named{" "}
                    <b>"OMX info Management Ltd"</b>{" "}
                  </>
                }
              />

              {/* <!--Sixth item--> */}
              <Growth
                year={2007}
                content={
                  <>
                    Three Brand name added into group
                    <br />
                    <b> “OM Telecom Logistics Ltd.” </b> <br />
                    <b> “OM Infra Construction Ltd.” </b>
                    <br />
                    <b> “OM Trax Pacakaging Solution Ltd.” </b>
                    <br />
                  </>
                }
              />

              {/* <!--Seventh item--> */}
              <Growth
                year={2008}
                content={
                  <>
                    {" "}
                    "<b>OMX Cargo</b> has been reinvented under the name of
                    <b> OmTrans Logisitics Limited</b>"
                  </>
                }
              />

              {/* <!--Eighth item--> */}
              <Growth
                year={2010}
                content={
                  <>
                    {" "}
                    <b>OmTrans</b> Joint Venture with <br />
                    <b> JC OMTRAX International </b> <br />
                    <b> Logistics (Shanghai) Co.Ltd </b>{" "}
                  </>
                }
              />

              {/* <!--Ninth item--> */}
              <Growth
                year={2015}
                content={
                  <>
                    {" "}
                    Om's <b>25th </b>
                    anniversary marked{" "}
                  </>
                }
              />

              {/* <!--Tenth item--> */}
              <Growth
                year={2016}
                content={
                  <>
                    {" "}
                    Subsidiary <b>
                      OM Logistics Nepal Pvt. Ltd.{" "}
                    </b> Incorporated{" "}
                  </>
                }
              />

              {/* <!--Eleventh item--> */}
              <Growth
                year={2017}
                content={
                  <>
                    Introduced logistics services to <b>Port Blair.</b>
                  </>
                }
              />

              {/* <!--Twelfth item--> */}

              <li>
                <div className="flex-start md:flex flex border-l-2 border-solid border-red-400">
                  <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-blue-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="mb-10 sm:w-[400px] w-[300px] ml-6 block max-w-md rounded-lg bg-gray-100 p-6 shadow-md">
                    <div className="mb-4 flex justify-between">
                      <p className="text-xl font-medium	 text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
                        2023
                      </p>
                    </div>
                    <p className="mb-6 text-neutral-700 dark:text-neutral-700">
                      <>
                        OmTrans Joint Venture with
                        <b> Seair Links co. LTD (SEAIR) Vietnam </b>
                      </>
                    </p>
                  </div>
                </div>
                <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-blue-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </li>
            </ol>
          </div>
          <div className="w-[30%]  sm:block hidden">
            <div className="flex flex-col  items-center ">
              <div className=" w-40 h-40"></div>
              <div className="w-40 h-40 py-4">
                <img src={G6} alt="" className=" m-auto" />
              </div>
              <div className=" w-40 h-40"></div>
              <div className="w-40 h-40"></div>

              <div className="w-40 h-40 py-4">
                <img src={G7} alt="" className=" " />
              </div>
              <div className="w-40 h-40"></div>
              <div className="w-40 h-40"></div>
              <div className="w-40 h-40 py-4">
                <img src={G8} alt="" className=" m-auto" />
              </div>
              <div className="w-40 h-40"></div>
              <div className="w-40 h-40"></div>
              <div className="w-40 h-40 py-4">
                <img src={G9} alt="" className=" " />
              </div>
              <div className="w-40 h-40"></div>
              <div className="w-40 h-40"></div>
              <div className="w-40 h-40 py-4">
                <img src={G10} alt="" className="m-auto" />
              </div>
            </div>
          </div>
        </div>
      </>
      <Footer />
    </div>
  );
}

export default Growth_story;
