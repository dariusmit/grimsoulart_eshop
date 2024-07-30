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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    isClicked(true);
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

  function closeMsg() {
    setSubmitMsg("");
    updateCloseBtn("");
    setBtnBgColor("bg-transparent");
  }

  return (
    <>
      <div className="text-black flex flex-col justify-center mt-[220px] items-center w-[1110px] mx-auto">
        <h1 className="text-4xl mb-8">How can I help?</h1>
        <form
          ref={form}
          className="flex flex-col [&>input]:mb-4 w-[600px] box-border"
          onSubmit={handleSubmit}
          name="formData"
          autoComplete="on"
        >
          <div className="flex mb-[20px]">
            <div className="flex w-[50%] mr-[20px]">
              <div>
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
                  className={"border h-[40px] w-[290px] p-4"}
                />
                <p className="text-red-500">{errorMessage.nameErr}</p>
              </div>
            </div>
            <div className="flex w-[50%]">
              <div>
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
                  className={"border h-[40px] w-[290px] p-4"}
                  maxLength={40}
                />
                <p className="text-red-500">{errorMessage.emailErr}</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div>
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
                className={"border resize-none w-[600px] p-4"}
              />
              <p className="text-red-500">{errorMessage.messageErr}</p>
            </div>
          </div>
          <button
            className="bg-black text-white p-2 mt-4 w-[226px]"
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
              className={"text-white p-2 " + btnBgColor}
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
