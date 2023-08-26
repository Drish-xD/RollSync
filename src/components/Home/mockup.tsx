import { Skeleton } from '@nextui-org/skeleton';

const Mockup = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="w-full h-11 rounded-t-lg  bg-neutral-800/50 flex justify-start items-center space-x-1.5 px-3">
        <span className="w-3 h-3 rounded-full bg-red-400"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span className="w-3 h-3 rounded-full bg-green-400"></span>
      </div>
      <div className="bg-gradient-to-b from-neutral-950 to-neutral-400/5 border-t-0 w-full h-52">
        <div className="max-w-[300px] w-full flex items-center gap-3 mx-5 py-10">
          <div>
            <Skeleton className="flex rounded-full w-12 h-12" />
          </div>
          <div className="w-full flex flex-col gap-2">
            <Skeleton className="h-3 w-3/5 rounded-lg" />
            <Skeleton className="h-3 w-4/5 rounded-lg" />
          </div>
        </div>
        <div className="max-w-[300px] w-full flex items-center gap-3 mx-5 py-10">
          <div>
            <Skeleton className="flex rounded-full w-12 h-12" />
          </div>
          <div className="w-full flex flex-col gap-2">
            <Skeleton className="h-3 w-3/5 rounded-lg" />
            <Skeleton className="h-3 w-4/5 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mockup;
