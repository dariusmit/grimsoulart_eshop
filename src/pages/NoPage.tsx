import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center p-8">
      <p className="text-2xl">404 - Page not found.</p>
      <Link
        className="bg-black text-center text-white min-[1024px]:hover:scale-105 w-full min-[1024px]:transition
        min-[1024px]:ease-in-out min-[1024px]:duration-300 px-4 py-2 mt-4 min-[1024px]:w-[226px]"
        to="/"
      >
        Go back to Home Page
      </Link>
    </div>
  );
};

export default NoPage;
