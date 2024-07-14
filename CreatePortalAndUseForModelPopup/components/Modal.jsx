import React from "react";

const Modal = ({ ismodal, setIsModal }) => {
  console.log(ismodal);
  return (
    <>
      <button
        onClick={() => setIsModal(true)}
        data-modal-target="popup-modal"
        data-modal-toggle="popup-modal"
        class="block bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-700 dark:bg-blue-600 px-5 py-2.5 rounded-lg font-medium text-white focus:ring-4 focus:outline-none focus:ring-blue-300 text-center text-sm dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button>

      <div
        id="popup-modal"
        tabindex="-1"
        class={`top-0 right-0 left-0 z-50 fixed md:inset-0 justify-center items-center ${
          !ismodal ? "hidden" : ""
        } w-full h-[calc(100%-1rem)] max-h-full overflow-x-hidden overflow-y-auto  bg-gradient-to-br `}
      >
        <div class="flex justify-center items-center p-4 w-full h-[100vh]">
          <div class="relative bg-black-200 bg-slate-100 dark:bg-gray-700 shadow rounded-lg">
            <button
              onClick={() => setIsModal(false)}
              type="button"
              class="inline-flex top-3 absolute justify-center items-center bg-transparent hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg w-8 h-8 text-gray-400 text-sm hover:text-gray-900 dark:hover:text-white end-2.5 ms-auto"
              data-modal-hide="popup-modal"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <div class="p-4 md:p-5 text-center">
              <svg
                class="mx-auto mb-4 w-12 h-12 text-gray-400 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 class="mb-5 font-normal text-gray-500 text-lg dark:text-gray-400">
                Are you sure you want to delete this product?
              </h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                class="bg-red-600 hover:bg-red-800 text-white focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 inline-flex items-center px-5 py-2.5 rounded-lg font-medium text-center text-sm"
              >
                Yes, I'm sure
              </button>
              <button
                onClick={() => setIsModal(false)}
                data-modal-hide="popup-modal"
                type="button"
                class="focus:z-10 border-gray-200 dark:border-gray-600 bg-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800 px-5 py-2.5 border rounded-lg font-medium text-gray-900 text-sm ms-3 focus:outline-none hover:text-blue-700 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:hover:text-white dark:text-gray-400"
              >
                Ahmad
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
