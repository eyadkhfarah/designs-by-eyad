"use client";

import { FormValues } from "@/types/inputs";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full p-5 rounded-2xl bg-neutral-900 border border-white/5 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 mt-2";
const errorInputClass =
  "ring-2 ring-red-500/50 border-red-500/50 " + inputClass;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    mode: "onBlur", // Validates when a user leaves a field
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await fetch("/api/notion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Keeps the success state visible for a few seconds before potential reset
        setTimeout(() => reset(), 5000);
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid lg:grid-cols-2 grid-cols-1 gap-6 bg-neutral-900/30 p-8 md:p-12 rounded-[3rem] border border-white/5 backdrop-blur-sm"
    >
      {/* Full Name */}
      <div className="flex flex-col">
        <label
          htmlFor="fullName"
          className="text-sm font-bold uppercase tracking-widest text-neutral-400 ml-2"
        >
          Full Name*
        </label>
        <input
          {...register("fullName", { required: "Name is required" })}
          type="text"
          id="fullName"
          disabled={isSubmitting || isSubmitSuccessful}
          placeholder="Eyad Farah"
          className={errors.fullName ? errorInputClass : inputClass}
        />
        <ErrorMessage message={errors.fullName?.message} />
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="text-sm font-bold uppercase tracking-widest text-neutral-400 ml-2"
        >
          Email Address*
        </label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/,
              message: "Please enter a valid email",
            },
          })}
          type="email"
          id="email"
          disabled={isSubmitting || isSubmitSuccessful}
          placeholder="hello@example.com"
          className={errors.email ? errorInputClass : inputClass}
        />
        <ErrorMessage message={errors.email?.message} />
      </div>

      {/* Services Dropdown */}
      <div className="flex flex-col">
        <label
          htmlFor="services"
          className="text-sm font-bold uppercase tracking-widest text-neutral-400 ml-2"
        >
          How can I help?*
        </label>
        <select
          {...register("services", { required: "Please select a service" })}
          id="services"
          disabled={isSubmitting || isSubmitSuccessful}
          className={cn(
            errors.services ? errorInputClass : inputClass,
            "appearance-none cursor-pointer"
          )}
        >
          <option value="" disabled selected>
            Select a service
          </option>
          <option value="Logo Design & Branding">Logo Design & Branding</option>
          <option value="Web Development">Web Development</option>
          <option value="Social Media Design">Social Media Design</option>
          <option value="UI/UX Design">UI/UX Design</option>
        </select>
        <ErrorMessage message={errors.services?.message} />
      </div>

      {/* Company Name */}
      <div className="flex flex-col">
        <label
          htmlFor="company"
          className="text-sm font-bold uppercase tracking-widest text-neutral-400 ml-2"
        >
          Company Name*
        </label>
        <input
          {...register("companyName", { required: "Company name is required" })}
          type="text"
          id="company"
          disabled={isSubmitting || isSubmitSuccessful}
          placeholder="Agency Name"
          className={errors.companyName ? errorInputClass : inputClass}
        />
        <ErrorMessage message={errors.companyName?.message} />
      </div>

      {/* Message Textarea */}
      <div className="lg:col-span-2 flex flex-col">
        <label
          htmlFor="message"
          className="text-sm font-bold uppercase tracking-widest text-neutral-400 ml-2"
        >
          Project Brief*
        </label>
        <textarea
          {...register("message", { required: "Brief is required" })}
          id="message"
          disabled={isSubmitting || isSubmitSuccessful}
          placeholder="Tell me about your goals and vision..."
          rows={6}
          className={cn(
            errors.message ? errorInputClass : inputClass,
            "resize-none"
          )}
        />
        <ErrorMessage message={errors.message?.message} />
      </div>

      {/* Subscription Toggle */}
      <div className="lg:col-span-2 flex items-center gap-4 py-4 group">
        <div className="relative flex items-center">
          <input
            {...register("subscription")}
            type="checkbox"
            id="subscription"
            className="peer h-6 w-6 cursor-pointer appearance-none rounded-md border border-white/20 bg-neutral-800 transition-all checked:bg-primary"
          />
          <svg
            className="pointer-events-none absolute left-1 top-1 h-4 w-4 stroke-black opacity-0 peer-checked:opacity-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <label
          htmlFor="subscription"
          className="text-neutral-400 text-sm cursor-pointer group-hover:text-white transition-colors"
        >
          Send me design tips and occasional promos.
        </label>
      </div>

      {/* Submit Section */}
      <div className="lg:col-span-2 space-y-4">
        <button
          type="submit"
          disabled={isSubmitting || isSubmitSuccessful}
          className="w-full py-5 bg-primary text-black font-black uppercase tracking-[0.2em] rounded-2xl hover:scale-[1.02] active:scale-[0.98] disabled:bg-neutral-700 disabled:text-neutral-500 disabled:scale-100 transition-all duration-300 flex justify-center items-center gap-4"
        >
          {isSubmitting ? (
            <>
              <div className="h-5 w-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              Processing...
            </>
          ) : isSubmitSuccessful ? (
            "Message Received"
          ) : (
            "Send Inquiry"
          )}
        </button>

        <AnimatePresence>
          {isSubmitSuccessful && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-500 text-center text-sm font-medium"
            >
              Success! I'll review your brief and reach out within 24 hours. ❤️
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
};

// Small reusable error component for cleaner code
const ErrorMessage = ({ message }: { message?: string }) => (
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

export default Contact;
