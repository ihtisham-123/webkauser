import React from 'react'

function PlaceOrder() {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Place Order</h2>
        <div className="bg-gradient-to-r from-lightBlue to-purple min-h-screen flex items-center justify-center p-4">
          <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Order Your Challenge
            </h2>
            <form>
              {/* Add your form fields here */}
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 font-medium">
                  Username*
                </label>
                <input
                  type="text"
                  id="username"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-300"
                  placeholder="Enter your username"
                  required
                />
              </div>
              {/* Other fields */}
              <button
                type="submit"
                className="w-full bg-purple text-white py-3 px-6 rounded-lg shadow hover:bg-purple/90 focus:ring focus:ring-purple-300"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default PlaceOrder;