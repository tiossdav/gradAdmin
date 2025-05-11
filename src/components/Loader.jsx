import { PulseLoader } from "react-spinners";

const Loader = ({ loading }) => {
  if (!loading) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-30 z-50">
      <PulseLoader color="#4f46e5" loading={loading} size={15} />
    </div>
  );
};

export default Loader;
