const Contact = () => {
  return (
    <form className="grid lg:grid-cols-2 grid-cols-1 gap-4">
      <input
        type="text"
        name="first name"
        id="firstName"
        placeholder="Your first name*"
        className="input"
        required
      />
      <input
        type="text"
        name="last name"
        id="lastName"
        placeholder="Your last name*"
        className="input"
        required
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Your email*"
        className="input"
        required
      />
      <input
        type="tel"
        name="number"
        id="number"
        placeholder="Your phone/whatsapp"
        className="input"
      />
      <select
        name="services"
        id="services"
        className="input"
      >
        <option value="Web">Web</option>
        <option value="Design">Design</option>
      </select>
      <input
        type="text"
        name="address"
        id="address"
        placeholder="Where are you?"
        className="input"
      />
      <textarea
        name="message"
        id="message"
        cols={30}
        placeholder="Tell me whate you want"
        rows={10}
        className="lg:col-span-2 input"
      />
      <input type="submit" value="Submit" className="p-4 bg-yellow-600 flex justify-center items-center gap-3 w-full cursor-pointer text-black font-bold rounded-2xl hover:scale-90 transition-all ease-in-out duration-300"/>
    </form>
  );
};

export default Contact;
