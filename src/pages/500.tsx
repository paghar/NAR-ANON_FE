
const Page500 = () => {
  return (
    <div className="relative py-16 px-4 w-full min-h-screen bg-gray-50">
      <div className="flex flex-col items-center">
        <div className="text-center space-y-5">
          <p className="text-6xl sm:text-7xl text-orange-500 font-bold tracking-wide">500</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-black-500 font-semibold capitalize">
          Server-side error occurred
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page500;
