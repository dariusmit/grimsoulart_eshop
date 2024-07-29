import { useState } from "react";

const Contact = () => {
  let placeholderClass = "";

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

  let [errorMessage, setErrorMessage] = useState(validationErrors);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (formInputValues.name.trim() == "") {
      validationErrors.nameErr = "Name is required";
      setErrorMessage(validationErrors);
    } else {
      validationErrors.nameErr = "";
      setErrorMessage(validationErrors);
    }

    if (formInputValues.email.trim() == "") {
      validationErrors.emailErr = "Email is required";
      setErrorMessage(validationErrors);
    } else {
      validationErrors.emailErr = "";
      setErrorMessage(validationErrors);
    }

    if (formInputValues.message.trim() == "") {
      validationErrors.messageErr = "Message is required";
      setErrorMessage(validationErrors);
    } else {
      validationErrors.messageErr = "";
      setErrorMessage(validationErrors);
    }

    if (
      validationErrors.nameErr == "" &&
      validationErrors.emailErr == "" &&
      validationErrors.messageErr == ""
    ) {
      alert("Message sent successfully!");
    }
  }

  function handlePlaceholder(formName: string) {
    if (formName == "name") {
      if (errorMessage.nameErr == "") {
        return "Name";
      } else {
        placeholderClass = "placeholder:text-red-500";
        return errorMessage.nameErr;
      }
    }
    if (formName == "email") {
      if (errorMessage.emailErr == "") {
        return "Email *";
      } else {
        placeholderClass = "placeholder:text-red-500";
        return errorMessage.emailErr;
      }
    }

    if (formName == "message") {
      if (errorMessage.messageErr == "") {
        return "Write your message here...";
      } else {
        placeholderClass = "placeholder:text-red-500";
        return errorMessage.messageErr;
      }
    }
  }

  return (
    <>
      <div className="text-black flex flex-col justify-center items-center w-[1110px] mx-auto">
        <h1 className="text-4xl mb-8">How can I help?</h1>
        <form
          className="flex flex-col [&>input]:mb-4 w-[600px] box-border"
          onSubmit={handleSubmit}
          name="formValues"
          autoComplete="on"
        >
          <div className="flex mb-[20px]">
            <div className="flex w-[50%] mr-[20px]">
              <div>
                <input
                  type="text"
                  name="name"
                  autoComplete="on"
                  placeholder={handlePlaceholder("name")}
                  maxLength={20}
                  onChange={(e) =>
                    updateFormInputValues({
                      ...formInputValues,
                      name: e.target.value,
                    })
                  }
                  className={
                    "border h-[40px] w-[290px] p-4 " + placeholderClass
                  }
                />
              </div>
            </div>
            <div className="flex w-[50%]">
              <div>
                <input
                  type="text"
                  name="email"
                  autoComplete="on"
                  placeholder={handlePlaceholder("email")}
                  onChange={(e) =>
                    updateFormInputValues({
                      ...formInputValues,
                      email: e.target.value,
                    })
                  }
                  className={
                    "border h-[40px] w-[290px] p-4 " + placeholderClass
                  }
                  maxLength={40}
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <div>
              <textarea
                name="message"
                rows={6}
                placeholder={handlePlaceholder("message")}
                onChange={(e) =>
                  updateFormInputValues({
                    ...formInputValues,
                    message: e.target.value,
                  })
                }
                className={"border w-[600px] p-4 " + placeholderClass}
              ></textarea>
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
      </div>
    </>
  );
};

export default Contact;
