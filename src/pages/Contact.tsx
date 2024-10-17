import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form: any = useRef();

  let [formInputValues, updateFormInputValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  let validationErrors = {
    nameErr: "",
    emailErr: "",
    messageErr: "",
  };

  let [submitStatus, setSubmitStatus] = useState(false);
  let [submitMsg, setSubmitMsg] = useState("Message sent successfully!");
  let [closeBtn, updateCloseBtn] = useState("OK");
  let [errorMessage, setErrorMessage] = useState(validationErrors);
  let [btnBgColor, setBtnBgColor] = useState("");
  let [submitBtn, isClicked] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    isClicked(true);
    console.log(submitBtn);
    e.preventDefault();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (formInputValues.name.trim() == "") {
      validationErrors.nameErr = "Name is required";
      setSubmitStatus(false);
      setErrorMessage(validationErrors);
    } else {
      validationErrors.nameErr = "";
      setErrorMessage(validationErrors);
    }

    if (formInputValues.email.trim() == "") {
      validationErrors.emailErr = "Email is required";
      setSubmitStatus(false);
      setErrorMessage(validationErrors);
    } else {
      validationErrors.emailErr = "";
      setErrorMessage(validationErrors);
      if (!regex.test(formInputValues.email)) {
        validationErrors.emailErr = "This is not a valid email";
        setSubmitStatus(false);
        setErrorMessage(validationErrors);
      } else {
        validationErrors.emailErr = "";
        setErrorMessage(validationErrors);
      }
    }

    if (formInputValues.message.trim() == "") {
      validationErrors.messageErr = "Message is required";
      setSubmitStatus(false);
      setErrorMessage(validationErrors);
    } else {
      validationErrors.messageErr = "";
      setErrorMessage(validationErrors);
      if (formInputValues.message.length > 600) {
        validationErrors.messageErr = "Please use less than 600 characters";
        setSubmitStatus(false);
        setErrorMessage(validationErrors);
      } else {
        validationErrors.messageErr = "";
        setErrorMessage(validationErrors);
      }
    }

    if (
      validationErrors.nameErr == "" &&
      validationErrors.emailErr == "" &&
      validationErrors.messageErr == ""
    ) {
      setSubmitStatus(true);
      setSubmitMsg("Message sent successfully!");
      updateCloseBtn("OK");
      setBtnBgColor("bg-black");

      emailjs.sendForm(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_KEY,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      );
    }
  }

  function closeMsg(): void {
    setSubmitMsg("");
    updateCloseBtn("");
    setBtnBgColor("bg-transparent");
  }

  return (
    <>
      <div
        className="text-gray-800 px-4 mt-8 items-center mb-[11.55rem] flex flex-col justify-center
      min-[1024px]:p-0 min-[1024px]:w-[900px] min-[1024px]:mx-auto min-[1024px]:mb-18
      min-[1440px]:w-[1110px] min-[1440px]:mt-16"
      >
        <h1 className="text-4xl mb-8">How can I help?</h1>
        <form
          ref={form}
          className="flex flex-col w-full [&>input]:mb-4 min-[1024px]:w-[600px] box-border"
          onSubmit={handleSubmit}
          name="formData"
          autoComplete="on"
        >
          <div className="flex flex-col min-[1024px]:flex min-[1024px]:flex-row mb-[20px]">
            <div className="flex w-full min-[1024px]:w-[50%] mr-[20px]">
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  autoComplete="on"
                  placeholder={"Name"}
                  maxLength={30}
                  onChange={(e) =>
                    updateFormInputValues({
                      ...formInputValues,
                      name: e.target.value,
                    })
                  }
                  className="border w-full h-[40px] min-[1024px]:w-[290px] mb-4 p-4 min-[1024px]:mb-0"
                />
                <p className="text-red-500">{errorMessage.nameErr}</p>
              </div>
            </div>
            <div className="flex min-[1024px]:w-[50%]">
              <div className="w-full">
                <input
                  type="text"
                  name="email"
                  autoComplete="on"
                  placeholder="Email"
                  onChange={(e) =>
                    updateFormInputValues({
                      ...formInputValues,
                      email: e.target.value,
                    })
                  }
                  className="border w-full h-[40px] min-[1024px]:w-[290px] p-4 mb-0 min-[1024px]:mb-0"
                  maxLength={40}
                />
                <p className="text-red-500">{errorMessage.emailErr}</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-full">
              <textarea
                name="message"
                rows={6}
                maxLength={1200}
                placeholder={"Enter your message here..."}
                onChange={(e) =>
                  updateFormInputValues({
                    ...formInputValues,
                    message: e.target.value,
                  })
                }
                className="border w-full resize-none min-[1024px]:w-[600px] p-4"
              />
              <p className="text-red-500">{errorMessage.messageErr}</p>
            </div>
          </div>
          <button
            className="bg-black text-white min-[1024px]:hover:scale-105 w-full min-[1024px]:transition min-[1024px]:ease-in-out min-[1024px]:duration-300 px-4 py-2 mt-4 min-[1024px]:w-[226px]"
            type="submit"
            value="Submit"
          >
            Send
          </button>
        </form>
        {submitStatus == true ? (
          <div className="flex items-center mt-8 text-2xl">
            <p className="mr-4">{submitMsg}</p>
            <button
              className={
                "text-white hover:scale-105 transition ease-in-out duration-300 px-4 py-2 " +
                btnBgColor
              }
              onClick={closeMsg}
            >
              {closeBtn}
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Contact;
