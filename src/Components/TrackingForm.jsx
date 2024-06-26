import React, { useState } from "react";

const TrackingForm = () => {
  const [trackingType, setTrackingType] = useState("Container No");

  return (
    <div className="max-w-[400px] m-auto bg-white shadow-md rounded-md p-6">
      <h2 className="text-red-600 text-lg font-semibold">TRACK SHIPMENT</h2>
      <div className="flex space-x-2 mt-4">
        <button
          onClick={() => setTrackingType("Container No")}
          className={`py-2 px-4 rounded ${
            trackingType === "Container No"
              ? "bg-red-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Tracking
        </button>
        <button
          onClick={() => setTrackingType("E Business")}
          className={`py-2 px-4 rounded ${
            trackingType === "E Business"
              ? "bg-red-600 text-white"
              : "bg-gray-200"
          }`}
        >
          E Business
        </button>
        <button
          onClick={() => setTrackingType("Local Office")}
          className={`py-2 px-4 rounded ${
            trackingType === "Local Office"
              ? "bg-red-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Local Office
        </button>
      </div>
      <div className="mt-4 flex items-center">
        <div className=" space-x-2 mr-1 ">
          <input
            type="radio"
            id="container"
            name="trackingType"
            value="Container No"
            checked={trackingType === "Container No"}
            onChange={(e) => setTrackingType(e.target.value)}
          />
          <label htmlFor="container" className="text-sm">
            Container No
          </label>
        </div>
        <div className="space-x-2 mr-1 ">
          <input
            type="radio"
            id="hbl"
            name="trackingType"
            value="HBL No"
            checked={trackingType === "HBL No"}
            onChange={(e) => setTrackingType(e.target.value)}
          />
          <label htmlFor="hbl" className="text-sm">
            HBL No
          </label>
        </div>
        <div className="space-x-2 mr-1 ">
          <input
            type="radio"
            id="hawb"
            name="trackingType"
            value="HAWB No"
            checked={trackingType === "HAWB No"}
            onChange={(e) => setTrackingType(e.target.value)}
          />
          <label htmlFor="hawb" className="text-sm">
            HAWB No
          </label>
        </div>
        <div className="space-x-2 mr-1 ">
          <input
            type="radio"
            id="mbl"
            name="trackingType"
            value="MBL No"
            checked={trackingType === "MBL No"}
            onChange={(e) => setTrackingType(e.target.value)}
          />
          <label htmlFor="mbl" className="text-sm">
            MBL No
          </label>
        </div>
      </div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Enter a Tracking No...."
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mt-4">
        <button className="w-full bg-black text-white py-2 rounded">
          TRACK
        </button>
      </div>
    </div>
  );
};

export default TrackingForm;
