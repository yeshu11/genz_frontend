import { MdUpgrade } from "react-icons/md";

export function ItemContent({ info }) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg dark:bg-gray-800">
      {/* Icon Section */}
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600">
        <MdUpgrade className="text-white text-3xl" />
      </div>

      {/* Text Section */}
      <div className="flex flex-col">
        <p className="text-lg font-semibold text-gray-900 dark:text-white">
          New Update: {info}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          A new update for your downloaded item is available!
        </p>
      </div>
    </div>
  );
}
