import { useNavigate } from "react-router";

function NotFound() {

    const navigate = useNavigate()

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-75">
        <p className="font-bold text-red-700/90">404</p>
        <p className="font-bold text-white/40">Page Not Found</p>
        <button
        onClick={() => navigate("/")} 
        className="bg-white/30 px-4 py-1 rounded-3xl w-30 mt-5 cursor-pointer transition-all hover:bg-green-800">Home</button>
      </div>
    </>
  );
}

export default NotFound;
