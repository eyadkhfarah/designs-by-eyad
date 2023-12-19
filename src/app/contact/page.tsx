"use client";
import { FormValues } from "@/types/inputs";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";

import { addToNotionDatabase } from "@/lib/utils/notion";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    await addToNotionDatabase(data);
  };

  const onError = (errors: FieldErrors<FormValues>) => {
    console.log("Please fix these errors as soon as possible" + errors);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="grid lg:grid-cols-2 grid-cols-1 gap-4"
    >
      <div className="">
        <label htmlFor="fullName">Full Name*</label>
        <input
          {...register("fullName", { required: true })}
          type="text"
          id="fullName"
          disabled={isSubmitSuccessful}
          placeholder="Your Full Name*"
          className={errors.fullName ? "ring-2 ring-red-500 input" : "input"}
        />
        {errors.fullName && errors.fullName.type === "required" && (
          <p className="my-2 text-red-600">You must enter your name</p>
        )}
      </div>

      <div className="">
        <label htmlFor="email">Email*</label>
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/,
              message: "invalid email address",
            },
          })}
          type="email"
          id="email"
          disabled={isSubmitSuccessful}
          placeholder="Your email*"
          className={errors.email?.types ? "ring-2 ring-red-500 input" : "input"}
        />
        {errors.email && errors.email.type === "required" && (
          <p className="my-2 text-red-600">You must enter your email</p>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <p className="my-2 text-red-600">Invalid email address</p>
        )}
      </div>

      <div className="">
        <label htmlFor="number">Phone number</label>
        <input
          {...register("number", { minLength: 11 })}
          type="tel"
          id="number"
          disabled={isSubmitSuccessful}
          placeholder="Your phone/whatsapp"
          className={errors.number ? "ring-2 ring-red-500 input" : "input"}
        />
        {errors.number && errors.number.type === "minLength" && (
          <p className="my-2 text-red-600">Must be more than 20 number</p>
        )}
      </div>

      <div className="">
        <label htmlFor="services">What Do You want?*</label>
        <select
          {...register("services", { required: true })}
          id="services"
          className="input"
          disabled={isSubmitSuccessful}
        >
          <option value="Web Development">Web Development</option>
          <option value="Social Media Design">Social Media Design</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Photoshop">Photoshop</option>
          <option value="Logo Design & Branding">Logo Design & Branding</option>
        </select>
      </div>
      <div className="">
        <label htmlFor="company">Your Compnay Name?*</label>
        <input
          {...register("companyName", { required: true })}
          type="text"
          id="company"
          disabled={isSubmitSuccessful}
          placeholder="Your Company Name"
          className={errors.fullName ? "ring-2 ring-red-500 input" : "input"}
        />
        {errors.companyName && errors.companyName.type === "required" && (
          <p className="my-2 text-red-600">You must enter your company name</p>
        )}
      </div>
      <div className="">
        <label htmlFor="size">Your company size?*</label>
        <select
          {...register("companySize", { required: true })}
          id="size"
          disabled={isSubmitSuccessful}
          className="input"
        >
          <option value="Just Starting">Just Starting</option>
          <option value="5 employees">5 employees</option>
          <option value="From 10 to 50 employees">
            From 10 to 50 employees
          </option>
          <option value="Up-to 100 employees">Up-to 100 employees</option>
        </select>
      </div>

      <div className="lg:col-span-2">
        <label htmlFor="message">Describe your need*</label>
        <textarea
          {...register("message", { required: true })}
          name="message"
          id="message"
          cols={30}
          disabled={isSubmitSuccessful}
          placeholder="Describe your need"
          rows={10}
          className={errors.message ? "ring-2 ring-red-500 input" : "input"}
        />
        {errors.companyName && errors.companyName.type === "required" && (
          <p className="my-2 text-red-600">
            Don't be shy 🥹	&#44; write what you want on your project
          </p>
        )}
      </div>
      <div className="lg:col-span-2 flex lg:items-center items-start mb-8">
        <input
          {...register("subscription", { required: true })}
          type="checkbox"
          id="subscription"
          defaultChecked
          disabled={isSubmitSuccessful}
          className="mr-6 cursor-pointer bg-gray-900 border-none focus:ring-yellow-500 rounded-2xl p-4 checked:bg-yellow-500 transition ease-in-out duration-300"
        />
        <label htmlFor="subscription">
          Would you like to send updates and discount promos?
        </label>
      </div>
      <input
        type="submit"
        value="Submit"
        className="py-4 px-8 bg-yellow-600 flex justify-center items-center gap-3 w-full cursor-pointer text-black font-bold rounded-2xl hover:scale-90 transition-all ease-in-out duration-300"
      />
      <div className="flex justify-end items-center">
        {isSubmitSuccessful === true ? (
          <p className="text-green-500 text-center">
            Thank you for sending me wait for respond ❤️
          </p>
        ) : null}
      </div>
    </form>
  );
};

export default Contact;
