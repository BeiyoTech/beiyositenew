import React from "react";

const ResidentForm = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg pt-24 mb-4 px-4 sm:px-6 lg:px-8">
      <header className="border-b-2 border-gray-100 pb-4 mb-6">
        <img
          src="/images/beiyo_logo2.svg"
          alt="logo"
          className="w-48 md:w-56 mb-3"
        />
        <p className="text-sm text-gray-500">BEIYO TECHNVEN PRIVATE LIMITED</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="space-y-1.5">
          <h2 className="text-base font-bold text-gray-800">Bill To:</h2>
          <div className="space-y-1">
            <p className="text-gray-600">
              Name : <span className="font-bold text-black">Shyam</span> 
            </p>
            <p className="text-gray-600">
                Phone number : <span className="font-bold text-black">...</span> 
            </p>
            <p className="text-gray-600">
              Building and room number : <span className="font-bold text-black">...</span> 
            </p>
          </div>
        </div>
        <div className="md:text-right mt-2 md:mt-0">
          <div className="inline-block md:float-right">
            <h2 className="text-base font-semibold text-gray-800">Date:</h2>
            <p className="text-gray-600">...</p>
          </div>
        </div>
      </div>

      <div className="mb-6 bg-[#eee] p-4 rounded-lg w-full md:w-fit">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <h2 className="text-base font-semibold text-gray-800 whitespace-nowrap">
            Balance Due:
          </h2>
          <p className="text-2xl font-semibold text-gray-900">₹...</p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full min-w-[500px]">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-white">
                Item
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-white">
                Months
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-white">
                Rate
              </th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-white">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 text-sm text-gray-700">
                Security Deposit
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">2</td>
              <td className="px-4 py-3 text-sm text-gray-700">₹...</td>
              <td className="px-4 py-3 text-sm text-gray-700 text-right">
                ₹...
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-700">Rent</td>
              <td className="px-4 py-3 text-sm text-gray-700">1</td>
              <td className="px-4 py-3 text-sm text-gray-700">₹...</td>
              <td className="px-4 py-3 text-sm text-gray-700 text-right">
                ₹...
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-700">
                Maintenance Fee
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">1</td>
              <td className="px-4 py-3 text-sm text-gray-700">₹...</td>
              <td className="px-4 py-3 text-sm text-gray-700 text-right">
                ₹...
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-700">Form Fee</td>
              <td className="px-4 py-3 text-sm text-gray-700">1</td>
              <td className="px-4 py-3 text-sm text-gray-700">₹....</td>
              <td className="px-4 py-3 text-sm text-gray-700 text-right">
                ₹...
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 max-w-xs md:max-w-sm ml-auto justify-center items-center">
        <div className="space-y-4 text-right">
          <h2 className="text-base font-semibold text-gray-800">Total:</h2>
          <h2 className="text-base font-semibold text-gray-800">
            Amount Paid:
          </h2>
        </div>
        <div className="space-y-3 text-right mr-4">
          <p className="text-xl font-bold text-gray-900">₹1000000</p>
          <p className="text-xl font-bold text-gray-900">₹1000000</p>
        </div>
      </div>
    </div>
  );
};

export default ResidentForm;
