"use client";
import { FormValues } from "@/types/inputs";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import { motion } from "framer-motion";

const inputClass =
  "w-full p-5 rounded-2xl bg-dark focus:ring-primary border-none mt-4 invalid:not-focus:ring-red-600";
const errorInputClass = "ring-2 ring-red-500 " + inputClass;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await fetch("/api/notion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // Optionally reset the form after a successful submission
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const onError = (errors: FieldErrors<FormValues>) => {
    console.log("Please fix these errors:", errors);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="grid lg:grid-cols-2 grid-cols-1 gap-4"
      name="contact"
      method="POST"
    >
      {/* Full Name */}
      <div>
        <label htmlFor="fullName">Full Name*</label>
        <input
          {...register("fullName", { required: true })}
          type="text"
          id="fullName"
          disabled={isSubmitSuccessful}
          placeholder="Your Full Name*"
          className={errors.fullName ? errorInputClass : inputClass}
        />
        {errors.fullName && errors.fullName.type === "required" && (
          <p className="my-2 text-red-600">You must enter your name</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email">Email*</label>
        <input
          {...register("email", {
            required: true,
            pattern: {
              value:
                /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address",
            },
          })}
          type="email"
          id="email"
          disabled={isSubmitSuccessful}
          placeholder="Your email*"
          className={errors.email ? errorInputClass : inputClass}
        />
        {errors.email && errors.email.type === "required" && (
          <p className="my-2 text-red-600">You must enter your email</p>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <p className="my-2 text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="number">Phone number</label>
        <input
          {...register("number", { minLength: 11 })}
          type="tel"
          id="number"
          disabled={isSubmitSuccessful}
          placeholder="Your phone/whatsapp"
          className={errors.number ? errorInputClass : inputClass}
        />
        {errors.number && errors.number.type === "minLength" && (
          <p className="my-2 text-red-600">
            Must be at least 11 digits
          </p>
        )}
      </div>

      {/* Services */}
      <div>
        <label htmlFor="services">What Do You want?*</label>
        <select
          {...register("services", { required: true })}
          id="services"
          disabled={isSubmitSuccessful}
          className={errors.services ? errorInputClass : inputClass}
        >
          <option value="Web Development">Web Development</option>
          <option value="Social Media Design">
            Social Media Design
          </option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Photoshop">Photoshop</option>
          <option value="Logo Design & Branding">
            Logo Design & Branding
          </option>
        </select>
        {errors.services && errors.services.type === "required" && (
          <p className="my-2 text-red-600">
            Please select a service
          </p>
        )}
      </div>

      {/* Company Name */}
      <div>
        <label htmlFor="company">Your Company Name?*</label>
        <input
          {...register("companyName", { required: true })}
          type="text"
          id="company"
          disabled={isSubmitSuccessful}
          placeholder="Your Company Name"
          className={
            errors.companyName ? errorInputClass : inputClass
          }
        />
        {errors.companyName && errors.companyName.type === "required" && (
          <p className="my-2 text-red-600">
            You must enter your company name
          </p>
        )}
      </div>

      {/* Company Size */}
      <div>
        <label htmlFor="size">Your company size?*</label>
        <select
          {...register("companySize", { required: true })}
          id="size"
          disabled={isSubmitSuccessful}
          className={
            errors.companySize ? errorInputClass : inputClass
          }
        >
          <option value="Just Starting">Just Starting</option>
          <option value="5 employees">5 employees</option>
          <option value="From 10 to 50 employees">
            From 10 to 50 employees
          </option>
          <option value="Up-to 100 employees">
            Up-to 100 employees
          </option>
        </select>
        {errors.companySize && errors.companySize.type === "required" && (
          <p className="my-2 text-red-600">
            Please select your company size
          </p>
        )}
      </div>

      {/* Message */}
      <div className="lg:col-span-2">
        <label htmlFor="message">Describe your need*</label>
        <textarea
          {...register("message", { required: true })}
          id="message"
          cols={30}
          disabled={isSubmitSuccessful}
          placeholder="Describe your need"
          rows={10}
          className={errors.message ? errorInputClass : inputClass}
        />
        {errors.message && errors.message.type === "required" && (
          <p className="my-2 text-red-600">
            Please describe your project in detail.
          </p>
        )}
      </div>

      {/* Subscription */}
      <div className="lg:col-span-2 flex lg:items-center items-start mb-8">
        <input
          {...register("subscription")}
          type="checkbox"
          id="subscription"
          disabled={isSubmitSuccessful}
          className="mr-6 cursor-pointer bg-dark border-none focus:ring-primary rounded-2xl p-4 checked:bg-primary transition ease-in-out duration-300"
        />
        <label htmlFor="subscription">
          Would you like to send updates and discount promos?
        </label>
      </div>

      {/* Submit Button with Loading State */}
      <button
        type="submit"
        disabled={isSubmitSuccessful || isSubmitting}
        className="disabled:scale-90 disabled:bg-gray-600 disabled:cursor-not-allowed py-4 px-8 bg-primary flex justify-center items-center gap-3 w-full text-black font-bold rounded-2xl hover:scale-90 transition-all ease-in-out duration-300"
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Loading...
          </>
        ) : (
          "Submit"
        )}
      </button>

      {/* Success Message */}
      <div className="flex justify-end items-center">
        {isSubmitSuccessful && (
          <motion.p
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.2 }}
            className="text-green-500 text-center"
          >
            Thank you for sending your message. I will respond soon ❤️
          </motion.p>
        )}
      </div>
    </form>
  );
};

export default Contact;
