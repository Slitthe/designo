import LocationInfoCards from "@/components/LocationInfoCards/LocationInfoCards";
import { useState } from "react";
import Button from "@/components/Button/Button";

export default function Contact() {
  const [formValues, setFormValues] = useState({
    email: "",
    phone: "",
    name: "",
    message: "",
  });

  const [focusedInput, setFocusedInput] = useState(null);

  const onChange = (event) => {
    console.log(event.target.name);
    setFormValues((prevValues) => {
      return { ...prevValues, [event.target.name]: event.target.value };
    });
  };

  const onFocus = (event) => {
    setFocusedInput(event.target.name);
  };

  const clearFocus = () => {
    setFocusedInput(null);
  };
  return (
    <div className="max-w-[1111px] mx-auto relative overflow-hidden">
      <div className="mb-[120px] py-[72px] px-standard lg:px-[96px] bg-primary-dark flex flex-col gap-[48px] lg:grid lg:grid-cols-2 lg:gap-[96px]">
        <div className="lg:flex lg:flex-col items-center justify-center text-center md:text-left">
          <div className="lg:p-0 text-light text-[32px] mb-[24px] md:text-[40px] md:leading-[40px] font-[500] leading-[36px] w-full">
            Contact Us
          </div>
          <div className="text-light text-[15px] md:text-[16px] md:leading-[26px] font-[400] leading-[25px]">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </div>
        </div>
        <form className="flex flex-col gap-[20px]">
          <label className="block text-[15px] font-[500] leading-[26px] relative">
            {focusedInput === "name" ||
              (formValues.name === "" && (
                <div className="text-lightHalfTransparent absolute left-[16px] bottom-[15px]">
                  Name
                </div>
              ))}

            <input
              onFocus={onFocus}
              onChange={onChange}
              onBlur={clearFocus}
              value={formValues.name}
              type="text"
              name="name"
              className="pb-[14px] px-[16px] w-full bg-transparent focus-visible:outline-none border-b-[1px] border-lightHalfTransparent text-light focus:border-light"
            />
          </label>
          <label className="block text-[15px] font-[500] leading-[26px] relative">
            {focusedInput === "email" ||
              (formValues.email === "" && (
                <div className="text-lightHalfTransparent absolute left-[16px] bottom-[15px]">
                  Email Address
                </div>
              ))}

            <input
              onFocus={onFocus}
              onChange={onChange}
              onBlur={clearFocus}
              value={formValues.email}
              type="text"
              name="email"
              className="pb-[14px] px-[16px] w-full bg-transparent focus-visible:outline-none border-b-[1px] border-lightHalfTransparent text-light focus:border-light"
            />
          </label>

          <label className="block text-[15px] font-[500] leading-[26px] relative">
            {focusedInput === "phone" ||
              (formValues.phone === "" && (
                <div className="text-lightHalfTransparent absolute left-[16px] bottom-[15px]">
                  Phone
                </div>
              ))}

            <input
              onFocus={onFocus}
              onChange={onChange}
              onBlur={clearFocus}
              value={formValues.phone}
              type="text"
              name="phone"
              className="pb-[14px] px-[16px] w-full bg-transparent focus-visible:outline-none border-b-[1px] border-lightHalfTransparent text-light focus:border-light"
            />
          </label>

          <label className="block text-[15px] font-[500] leading-[26px] relative">
            {focusedInput === "message" ||
              (formValues.message === "" && (
                <div className="text-lightHalfTransparent absolute left-[16px] top-0">
                  Message
                </div>
              ))}

            <textarea
              onFocus={onFocus}
              onChange={onChange}
              onBlur={clearFocus}
              value={formValues.message}
              name="message"
              className="resize-none pb-[14px] px-[16px] w-full bg-transparent focus-visible:outline-none border-b-[1px] border-lightHalfTransparent text-light focus:border-light"
            />
          </label>

          <div className="w-[152px] mx-auto mt-[36px] md:mr-0 md:mt-0">
            <Button>Submit</Button>
          </div>
        </form>
      </div>
      <LocationInfoCards />
    </div>
  );
}
