import { AnimatePresence, motion } from "framer-motion";

export const ErrorMessage = ({ message }: { message?: string }) => (
  <AnimatePresence>
    {message && (
      <motion.p
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        className="text-red-500 text-xs font-bold mt-2 ml-2"
      >
        {message}
      </motion.p>
    )}
  </AnimatePresence>
);
