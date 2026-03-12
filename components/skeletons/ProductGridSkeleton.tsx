const ProductGridSkeleton = () => {
  return (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="space-y-3 animate-pulse">
          <div className="w-full h-52 bg-gray-200 rounded-md" />
          <div className="h-4 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-1/3" />
        </div>
      ))}
    </div>
  );
};

export default ProductGridSkeleton;
