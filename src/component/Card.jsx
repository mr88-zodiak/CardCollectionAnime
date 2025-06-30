import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Card({ name, image, loading }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="rounded-md overflow-hidden shadow bg-gray-900 text-white"
    >
      {loading ? (
        <Skeleton height={200} />
      ) : (
        <img src={image} alt={name} className="w-full h-52 object-cover" />
      )}
      <div className="p-2 text-center">
        {loading ? <Skeleton width={100} /> : name}
      </div>
    </motion.div>
  );
}
