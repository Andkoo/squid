type TArticleSkeletonProps = {
  centered?: boolean;
  withoutImage?: boolean;
  reverse?: boolean;
};

const ArticleSkeleton = ({
  centered,
  withoutImage,
  reverse,
}: TArticleSkeletonProps) => (
  <div
    className={
      reverse
        ? "flex h-[20px] w-full flex-row-reverse gap-x-5"
        : "flex h-[20px] w-full gap-x-5"
    }
  >
    {!withoutImage && <div className="w-[20px] rounded-[5px] bg-gray-500" />}
    <div
      className={
        centered
          ? "flex max-w-[106px] flex-1 flex-wrap content-between gap-x-2"
          : "flex flex-1 flex-wrap content-between gap-x-2"
      }
    >
      <div className="h-[6px] w-[74px] flex-shrink-0 rounded-full bg-gray-500" />
      <div className="h-[6px] w-[24px] flex-shrink-0 rounded-full bg-gray-500" />
      <div className="w-full" />
      <div className="h-[6px] w-[36px] flex-shrink-0 rounded-full bg-gray-500" />
      <div className="h-[6px] w-[24px] flex-shrink-0 rounded-full bg-gray-500" />
    </div>
  </div>
);

export default ArticleSkeleton;
