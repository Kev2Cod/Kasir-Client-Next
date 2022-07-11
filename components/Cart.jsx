import React from "react";
import styles from "../styles/Cart.module.css";

export default function Cart() {
  const loop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={styles.cart}>
      <div className="relative shadow-md sm:rounded-lg mb-4">
        {/* Table */}
        <div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Qty
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {loop.map((item, index) => (
                <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Polpen
                  </th>
                  <td className="px-6 py-4">6</td>
                  <td className="px-6 py-4">Rp.50.000</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Total Payment */}
      <div className="mt-auto mb-5 text-center ">
        <div className="text-lg font-bold flex justify-around">
          <span className="">Total Harga</span>
          <span>Rp.50.000</span>
        </div>
        <button className="mt-3 w-full py-2 bg-blue-400 rounded-lg">
          Bayar
        </button>
      </div>
    </div>
  );
}
