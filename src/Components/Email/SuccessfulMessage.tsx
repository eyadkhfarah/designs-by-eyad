import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

export default function SuccessfulMessage({ isSubmitSuccessful }: { isSubmitSuccessful?: boolean }) {
  return (
    <AnimatePresence>
        {
          isSubmitSuccessful && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-500 text-center text-sm font-medium"
            >
              Success! I'll review your brief and reach out within 24 hours. ❤️
            </motion.div>
          )
        }
      </AnimatePresence>
  )
}
