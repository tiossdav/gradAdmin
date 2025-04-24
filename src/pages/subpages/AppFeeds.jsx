import React from "react";

const AppFeeds = () => {
  return (
    <>
      <div className="flex flex-col gap-3 mt-3">
        <div
          style={{ backgroundColor: "#F4F4F5" }}
          className="message1 px-4 py-2 flex flex-col gap-2"
        >
          <p className="text-[14px] font-semibold">Adams John</p>
          <p className="text-[12px] ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero a
            enim praesentium libero? Suscipit molestias atque maiores maxime
          </p>
        </div>
        <div
          style={{ backgroundColor: "#F1E6FF" }}
          className="message1 px-4 py-2 flex flex-col gap-2"
        >
          <p className="text-[14px] font-semibold">Adams John</p>
          <p className="text-[12px] ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero a
            enim praesentium libero? Suscipit molestias atque maiores maxime
          </p>
        </div>
      </div>

      {openUpdate && (
        <div style={modalStyles.overlay}>
          <div
            style={modalStyles.modal}
            className="w-100 inter h-auto relative rounded-2xl"
          >
            <div className="flex px-4 py-3 items-center gap-3">
              <img src={info_icon} alt="icon" className="place-self-start" />
              <div className="">
                <p className="text-sm font-semibold">
                  Update Application Status
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Update this status to keep the student informed and the
                  application progress.
                </p>

                <div className="relative mt-3">
                  <select
                    name=""
                    className="appearance-none border w-full border-gray-300 py-2 px-3 outline-none rounded-lg text-gray-600 text-sm"
                    id=""
                  >
                    <option value="">Incomplete Documents</option>
                    <option value="">Incomplete Processing</option>
                    <option value="">Incomplete Application Granted</option>
                  </select>
                  <MdKeyboardArrowDown className="absolute top-1/2 -translate-y-1/2 right-3" />
                </div>
              </div>
            </div>

            <div className="mt-4 p-[12px] justify-end border-t-2 border-gray-200 w-full flex items-center gap-3">
              <button
                type="button"
                onClick={() => setOpenUpdate(false)}
                className="text-sm text-gray-500 py-2 px-4 border border-gray-200 rounded-lg"
              >
                Close
              </button>
              <button
                className="bg-purple-900 py-2 px-4 rounded-lg text-white text-sm"
                type="submit"
                onClick={() => setOpenUpdate(false)}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppFeeds;
