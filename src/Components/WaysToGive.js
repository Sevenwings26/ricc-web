import React, { useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaPoundSign } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";

const WaysToGive = () => {
  const [showUSD, setShowUSD] = useState(false);
  const [showEUR, setShowEUR] = useState(false);
  const [showGBP, setShowGBP] = useState(false);

  return (
    <section className="py-12 px-4 bg-gray-50">
      {/* Intro */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Ways to Give / Donate
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Giving is more than a contribution. It is an act of worship and a
          covenant expression of love for God. Every seed sown is a partnership
          with His Kingdom work, enabling us to advance the gospel, reach
          nations, and transform lives. 
        </p>
        <p className="text-gray-600 leading-relaxed">
          Thank you for choosing to be a part of
          this mission and for helping us make eternal impact.
        </p>
      </div>

      <div className="py-3 text-center">
        <p className="uppercase tracking-wide text-2xl text-gray-500">Account Name</p>
        <p className="font-bold uppercase text-gray-900 text-3xl">Recharge Global Christian Network</p>
        <p className="font-bold text-gray-700 text-3xl">United Bank of Africa (UBA)</p>
      </div>

      {/* Accounts Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Naira Account */}
        <div className="bg-white text-black rounded-xl shadow-lg p-2 hover:scale-105 transform transition">
          <div className="flex items-baseline gap-1">
            <TbCurrencyNaira className="text-3xl font-bold text-gray-600 mt-0.5" />
            <p className="text-2xl font-bold">1027684428</p>
          </div>
        </div>

        {/* USD Account */}
        <div className="bg-white text-black rounded-xl shadow-lg p-2 hover:scale-105 transform transition">
          <div className="flex items-baseline gap-1">
            <BsCurrencyDollar className="text-3xl text-gray-600 mt-0.5" />
            <p className="text-2xl font-bold">3004627134</p>
          </div>

          <button
            className="mt-1 text-sm text-orange-600 italic"
            onClick={() => setShowUSD(!showUSD)}
          >
            {showUSD ? "Hide Transfer Instructions" : "View Transfer Instructions"}
          </button>

          {showUSD && (
            <div className="mt-3 text-sm text-gray-700 space-y-1 text-left">
              <p><strong>Bank:</strong> UBA Nigeria</p>
              <p><strong>SWIFT:</strong> UNAFNGLA</p>
              <p><strong>Through:</strong> Citibank New York, USA</p>
              <p><strong>SWIFT:</strong> CITIUS33</p>
              <p><strong>Routing No:</strong> 021000089</p>
              <p><strong>Acct No:</strong> 36320321</p>
            </div>
          )}
        </div>

        {/* Pounds Account */}
        <div className="bg-white text-black rounded-xl shadow-lg p-2 hover:scale-105 transform transition">
          <div className="flex items-baseline gap-1">
            <FaPoundSign className="text-3xl font-bold text-gray-600 mt-0.5" />
            <p className="text-2xl font-bold">3004627165</p>
          </div>
          <button
            className="mt-1 text-sm text-orange-600 italic"
            onClick={() => setShowGBP(!showGBP)}
          >
            {showGBP ? "Hide Transfer Instructions" : "View Transfer Instructions"}
          </button>

          {showGBP && (
            <div className="mt-3 text-sm text-gray-700 space-y-1 text-left">
              <p><strong>Bank:</strong> UBA Nigeria</p>
              <p><strong>SWIFT:</strong> UNAFNGLA</p>
              <p><strong>Through:</strong> Citibank London, UK</p>
              <p><strong>SWIFT:</strong> CITIGB2L</p>
              <p><strong>Sort Code:</strong> 185008</p>
              <p><strong>IBAN:</strong> GB07CITI18500813664090</p>
            </div>
          )}
        </div>

        {/* EUR Account */}
        <div className="bg-white text-black rounded-xl shadow-lg p-2 hover:scale-105 transform transition sm:col-span-2 md:col-span-1">
          <div className="flex items-baseline gap-1">
            <FaEuroSign className="text-3xl font-bold text-gray-600 mt-0.5" />
            <p className="text-2xl font-bold">0013664082</p>
          </div>
          <button
            className="mt-1 text-sm text-orange-600 italic"
            onClick={() => setShowEUR(!showEUR)}
          >
            {showEUR ? "Hide Transfer Instructions" : "View Transfer Instructions"}
          </button>

          {showEUR && (
            <div className="mt-3 text-sm text-gray-700 space-y-1 text-left">
              <p><strong>Bank:</strong> UBA Nigeria</p>
              <p><strong>SWIFT:</strong> UNAFNGLA</p>
              <p><strong>Through:</strong> Citibank London, UK</p>
              <p><strong>SWIFT:</strong> CITIGB2L</p>
              <p><strong>Acct No:</strong> 0013664082</p>
              <p><strong>Sort Code:</strong> 185008</p>
              <p><strong>IBAN:</strong> GB29CITI18500813664082</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaysToGive;
