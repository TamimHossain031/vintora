"use client";
import { useApp } from "../../hooks/useApp";
import { AnimatePresence, motion } from "framer-motion";
import Search from "../common/Search";
import { X } from "lucide-react";

export default function Modal() {
  const { modal, hideModal } = useApp();

  const manageModal = (modal) => {
    switch (modal) {
      case "search":
        return <Search />;
      default:
        return null;
    }
  };

  return modal ? (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-[1000] flex justify-center"
        onClick={() => hideModal()}
      >
        <div className="w-full h-fit " onClick={(e) => e.stopPropagation()}>
          <div className="relative w-fit mx-auto">
            <button onClick={() => hideModal()} className="absolute -right-10 top-0 transform  text-gray-500 hover:text-gray-700 bg-[#f0f0f0]/50 p-1 rounded-full pointer">
              <X size={20} />
            </button>
            {manageModal(modal)}
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  ) : null;
}
