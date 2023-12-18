"use client";
import { useForm, SubmitHandler } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
      className="grid lg:grid-cols-2 grid-cols-1 gap-4"
    >
      <div className="">
        <label htmlFor="fullName">Full Name*</label>
        <input
          {...register("fullName", { required: true})}
          type="text"
          id="fullName"
          placeholder="Your Full Name*"
          className="input"
        />
      </div>

      <div className="">
        <label htmlFor="email">Email*</label>
        <input
          {...register("email", { required: true})}
          type="email"
          id="email"
          placeholder="Your email*"
          className="input"
        />
      </div>

      <div className="">
        <label htmlFor="number">Your phone/whatsapp</label>
        <input
          {...(register("number", { maxLength: 20 }))}
          type="tel"
          id="number"
          placeholder="Your phone/whatsapp"
          className="input"
        />
      </div>

      <div className="">
        <label htmlFor="services">What Do You want?*</label>
        <select
          {...register("services", { required: true})}
          id="services"
          className="input"
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
        <label htmlFor="company">What is your Compnay Name?*</label>
        <input
          {...register("companyName", { required: true})}
          type="text"
          id="company"
          placeholder="Your Company Name"
          className="input"
        />
      </div>
      <div className="">
        <label htmlFor="size">Your company size?*</label>
        <select
          {...register("companySize", { required: true})}
          id="size"
          className="input"
        >
          <option value="Web">1 employee</option>
          <option value="Design">From 10 to 50 employees</option>
          <option value="Design">Up-to 100 employees</option>
        </select>
      </div>
      <div className="lg:col-span-2">
        <label htmlFor="message">Describe your project</label>
        <textarea
          {...register("message")}
          name="message"
          id="message"
          cols={30}
          placeholder="Describe your project"
          rows={10}
          className="input"
        />
      </div>
      <input
        type="submit"
        value="Submit"
        className="p-4 bg-yellow-600 flex justify-center items-center gap-3 w-full cursor-pointer text-black font-bold rounded-2xl hover:scale-90 transition-all ease-in-out duration-300"
      />
    </form>
  );
};

export default Contact;
