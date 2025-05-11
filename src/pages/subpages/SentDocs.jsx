import React, { useState, useEffect } from "react";
import { getStudentDocuments } from "../../api";
import Loader from "../../components/Loader";

const SentDocs = ({ app, docs }) => {
  const user_id = app.user_id;
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const getDocuments = async () => {
      try {
        const data = await getStudentDocuments(user_id);
        setDocuments(data.data);
      } catch (error) {
        if (error.message.includes("Unauthorized")) {
          navigate("/login");
        } else {
          setError("Error fetching application details");
        }
      } finally {
        setLoading(false);
      }
    };
    getDocuments();
  }, [user_id, docs]);

  return (
    <>
      <div className="relative mt-4 overflow-x-auto bg-white">
        <table className="table-auto w-full inter  bg-white">
          <thead className="bg-gray-100 border-gray-200">
            <tr>
              <th className="w-1/3 p-3 text-xs font-semibold tracking-wide text-left ">
                Title
              </th>
              <th className="w-1/3 p-3 text-xs font-semibold tracking-wide text-left">
                Notes
              </th>
              <th className="w-1/3 p-3 text-xs font-semibold tracking-wide text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="relative">
            {loading ? (
              <tr>
                <td colSpan="3">
                  <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-white z-10">
                    <Loader loading={loading} />
                  </div>
                </td>
              </tr>
            ) : (
              documents.length > 0 && (
                <>
                  {documents &&
                    documents.map((doc, index) => (
                      <tr
                        key={index}
                        className="border-b-2 border-gray-200 hover:bg-gray-50 cursor-default"
                      >
                        <td className="p-3 text-sm text-gray-900 align-middle">
                          <span>{doc.title}</span>
                        </td>
                        <td className="p-3 text-sm text-gray-900 align-middle text-[12px] capitalize">
                          <span>{doc.description || "No description"}</span>
                        </td>
                        <td className="p-3 text-sm text-gray-900 align-middle text-center">
                          <button
                            type="button"
                            className="border border-purple-800 rounded-md px-[14px] py-[8px] text-purple-900"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                </>
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SentDocs;
