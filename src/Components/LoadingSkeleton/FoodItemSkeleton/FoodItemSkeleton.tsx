import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const FoodItemSkeleton = () => {
  return (
    <SkeletonTheme borderRadius={0} baseColor="#e7e7e7" highlightColor="#c9c9c9">
      <div className="shadow rounded-lg overflow-hidden flex flex-col">
          <Skeleton width={`100%`} className={`h-56`} />
        <div className="py-6 px-3 flex-1">
          <div>
            <Skeleton borderRadius={5} width={60} height={20} />
          </div>
        </div>
        <div>
          <Skeleton width={`100%`} height={45} />
        </div>
      </div>
    </SkeletonTheme>
  );
};
