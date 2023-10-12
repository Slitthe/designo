import LocationInfoCards from "@/components/LocationInfoCards/LocationInfoCards";
import { useState } from "react";
import Button from "@/components/Button/Button";
import ErrorIcon from "../../../public/icon-error.svg";
import classes from "./contact.module.css";

const ErrorMessage = ({ children }) => {
  return (
    <div className="flex items-center gap-[9px] absolute right-[8px] top-0">
      <div className="text-[12px] italic text-light font-[400] leading-[26px] ">
        {children}
      </div>
      <ErrorIcon />
    </div>
  );
};

export default function Contact() {
  const [formValues, setFormValues] = useState({
    email: "",
    phone: "",
    name: "",
    message: "",
  });

  const [focusedInput, setFocusedInput] = useState(null);

  const [formErrors, setFormErrors] = useState({
    email: "",
    phone: "",
    name: "",
    message: "",
  });

  const [dirtyFields, setDirtyFields] = useState({});

  const validateField = (target) => {
    let errorMessage = "";
    if (target.value === "") {
      errorMessage = "Can't be empty!";
    }

    if (target.type === "email" && target.validity.typeMismatch) {
      errorMessage = "Insert a valid email!";
    }
    setFormErrors((prevValues) => {
      return {
        ...prevValues,
        [target.name]: errorMessage,
      };
    });
  };

  console.log({ formErrors });

  const onChange = (event) => {
    validateField(event.target);
    setDirtyFields((prevValues) => {
      return { ...prevValues, [event.target.name]: true };
    });
    setFormValues((prevValues) => {
      return { ...prevValues, [event.target.name]: event.target.value };
    });
  };

  const onFocus = (event) => {
    setFocusedInput(event.target.name);
  };

  const clearFocus = (event) => {
    setFocusedInput(null);
    setDirtyFields((prevValues) => {
      return { ...prevValues, [event.target.name]: true };
    });
    validateField(event.target);
  };
  return (
    <div className="max-w-[1111px] mx-auto relative overflow-hidden">
      <div className="md:rounded-standard md:mx-standard px-small md:px-[60px] md:mt-[60px] mb-[120px] py-[72px] lg:px-[96px] bg-primary-dark flex flex-col gap-[40px] lg:grid lg:grid-cols-2 lg:gap-[96px]">
        <div className="lg:flex lg:flex-col items-center justify-center text-center md:text-left">
          <div className="lg:p-0 text-light text-[32px] mb-[24px] md:mb-[32px] md:text-[48px] md:leading-[48px] font-[500] leading-[36px] w-full">
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
          <label className="cursor-text block text-[15px] font-[500] leading-[26px] relative">
            {focusedInput === "name" ||
              (formValues.name === "" && (
                <div className="text-lightHalfTransparent absolute left-[16px] bottom-[15px]">
                  Name
                </div>
              ))}
            {formErrors.name && dirtyFields.name && (
              <ErrorMessage>{formErrors.name}</ErrorMessage>
            )}

            <input
              onFocus={onFocus}
              onChange={onChange}
              onBlur={clearFocus}
              value={formValues.name}
              type="text"
              name="name"
              className={`${classes.input} pb-[14px] px-[16px] w-full bg-transparent focus-visible:outline-none text-light`}
            />
            <div className={classes.inputUnderline}></div>
          </label>
          <label className="cursor-text block text-[15px] font-[500] leading-[26px] relative">
            {focusedInput === "email" ||
              (formValues.email === "" && (
                <div className="text-lightHalfTransparent absolute left-[16px] bottom-[15px]">
                  Email Address
                </div>
              ))}

            {formErrors.email && dirtyFields.email && (
              <ErrorMessage>{formErrors.email}</ErrorMessage>
            )}

            <input
              onFocus={onFocus}
              onChange={onChange}
              onBlur={clearFocus}
              value={formValues.email}
              type="email"
              name="email"
              className={`${classes.input} pb-[14px] px-[16px] w-full bg-transparent focus-visible:outline-none text-light`}
            />
            <div className={classes.inputUnderline}></div>
          </label>

          <label className="cursor-text block text-[15px] font-[500] leading-[26px] relative">
            {focusedInput === "phone" ||
              (formValues.phone === "" && (
                <div className="text-lightHalfTransparent absolute left-[16px] bottom-[15px]">
                  Phone
                </div>
              ))}

            {formErrors.phone && dirtyFields.phone && (
              <ErrorMessage>{formErrors.phone}</ErrorMessage>
            )}

            <input
              onFocus={onFocus}
              onChange={onChange}
              onBlur={clearFocus}
              value={formValues.phone}
              type="text"
              name="phone"
              className={`${classes.input} pb-[14px] px-[16px] w-full bg-transparent focus-visible:outline-none text-light`}
            />
            <div className={classes.inputUnderline}></div>
          </label>

          <label className="cursor-text block text-[15px] font-[500] leading-[26px] relative">
            {focusedInput === "message" ||
              (formValues.message === "" && (
                <div className="text-lightHalfTransparent absolute left-[16px] top-0">
                  Message
                </div>
              ))}

            {formErrors.message && dirtyFields.message && (
              <ErrorMessage>{formErrors.message}</ErrorMessage>
            )}

            <textarea
              onFocus={onFocus}
              onChange={onChange}
              onBlur={clearFocus}
              value={formValues.message}
              name="message"
              rows="3"
              className={`${classes.input} resize-none pb-[14px] px-[16px] w-full bg-transparent focus-visible:outline-none text-light`}
            />
            <div className={classes.inputUnderline}></div>
          </label>

          <div className="w-[152px] mx-auto mt-[36px] md:mr-0 md:mt-0">
            <Button
              disabled={
                Object.values(dirtyFields).includes(false) ||
                Object.values(formErrors).some((error) => error !== "")
              }
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
      <LocationInfoCards />
    </div>
  );
}
