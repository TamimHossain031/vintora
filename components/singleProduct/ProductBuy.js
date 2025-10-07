import { motion, AnimatePresence } from "framer-motion";
export default function ProductBuy() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        exit={{ opacity: 0 }}
        className="w-1/2 h-fit bg-red-300 sticky top-[150px] p-5 rounded"
      >
        <p className="text-xl font-semibold">tamim</p>
      </motion.div>
    </AnimatePresence>
  );
}
