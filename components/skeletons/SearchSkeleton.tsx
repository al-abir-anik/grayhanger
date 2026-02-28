const SearchSkeleton = () => {
  return (
    <div className="w-full py-5 flex justify-between border-b animate-pulse">
      <div className="w-[13%] h-28 rounded-xs bg-gray-100" />
      <div className="w-[85%] h-full space-y-4">
        <div className="h-6 w-2/3 bg-gray-100" />
        <div className="h-6 w-1/5 bg-gray-100" />
        <div className="h-6 w-1/3 bg-gray-100" />
      </div>
    </div>
  );
};

export default SearchSkeleton;
