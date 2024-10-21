import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/storeContext";
import { useContext } from "react";

function CheckoutForm() {
  const { orderData, updateOrderData } = useContext(Context);

  const form: any = useRef();
  const navigate = useNavigate();

  let validationErrors = {
    firstNameErr: "",
    lastNameErr: "",
    emailErr: "",
  };

  let [errorMessage, setErrorMessage] = useState(validationErrors);
  let [submitStatus, setSubmitStatus] = useState(false);
  let [submitBtn, isClicked] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    isClicked(true);
    console.log(submitBtn, submitStatus);
    e.preventDefault();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (orderData.firstName.trim() == "") {
      validationErrors.firstNameErr = "First Name is required";
      setSubmitStatus(false);
      setErrorMessage(validationErrors);
    } else {
      validationErrors.firstNameErr = "";
      setErrorMessage(validationErrors);
    }

    if (orderData.lastName.trim() == "") {
      validationErrors.lastNameErr = "Last Name is required";
      setSubmitStatus(false);
      setErrorMessage(validationErrors);
    } else {
      validationErrors.lastNameErr = "";
      setErrorMessage(validationErrors);
    }

    if (orderData.email.trim() == "") {
      validationErrors.emailErr = "Email is required";
      setSubmitStatus(false);
      setErrorMessage(validationErrors);
    } else {
      validationErrors.emailErr = "";
      setErrorMessage(validationErrors);
      if (!regex.test(orderData.email)) {
        validationErrors.emailErr = "This is not a valid email";
        setSubmitStatus(false);
        setErrorMessage(validationErrors);
      } else {
        validationErrors.emailErr = "";
        setErrorMessage(validationErrors);
      }
    }

    if (
      validationErrors.firstNameErr == "" &&
      validationErrors.lastNameErr == "" &&
      validationErrors.emailErr == ""
    ) {
      //Do stuff is validated
      setSubmitStatus(true);
      navigate("/confirmation");
    }
  }

  return (
    <>
      <form
        ref={form}
        name="formData"
        onSubmit={handleSubmit}
        className="flex flex-col"
      >
        <label htmlFor="fname">First name:</label>
        <input
          className="bg-slate-200"
          onChange={(e) => {
            updateOrderData((prev) => {
              return { ...prev, firstName: e.target.value };
            });
          }}
          type="text"
          id="fname"
          name="fname"
        />
        <p className="text-red-500 mb-4">{errorMessage.firstNameErr}</p>
        <label htmlFor="lname">Last name:</label>
        <input
          className="bg-slate-200"
          onChange={(e) => {
            updateOrderData((prev) => {
              return { ...prev, lastName: e.target.value };
            });
          }}
          type="text"
          id="lname"
          name="lname"
        />
        <p className="text-red-500 mb-4">{errorMessage.lastNameErr}</p>
        <label htmlFor="email">Email:</label>
        <input
          onChange={(e) => {
            updateOrderData((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
          className="bg-slate-200"
          type="text"
          id="email"
          name="email"
        />
        <p className="text-red-500 mb-6">{errorMessage.emailErr}</p>
        <button
          className="bg-black text-white w-full border-2 border-black hover:bg-white hover:text-black px-4 py-2 mt-4 min-[1024px]:w-[226px]"
          type="submit"
          value="Submit"
        >
          Place Order
        </button>
      </form>
    </>
  );
}

export default CheckoutForm;
