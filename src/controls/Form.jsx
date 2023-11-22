import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "./Button";
import OtpModal from "../components/OtpModal";
import { useNavigate } from "react-router-dom";

export default function Form({ isOtpModalOpen, setIsOtpModalOpen }) {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      acceptTerms: false,
      receivePromotions: false,
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.string()
        .required("Phone Number is required")
        .matches(/^\d{10}$/, "Phone Number must be exactly 10 digits"),
      fullName: Yup.string().required("Full Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      acceptTerms: Yup.boolean().oneOf(
        [true],
        "You must accept the Terms & Conditions"
      ),
      receivePromotions: Yup.boolean().required(
        "You must choose whether to receive promotions"
      ),
    }),
    onSubmit: (values) => {
      setIsOtpModalOpen(true);
    },
  });

  const handleOtpSubmit = (enteredOtp) => {
    console.log("Entered OTP:", enteredOtp);
    setIsOtpModalOpen(false);
    navigate("/info");
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="w-1/2 mx-auto">
        <div>
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            className="w-full my-2 px-5 p-2 rounded-3xl font-gibsonregular"
            placeholder="Phone Number"
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className="text-red-800 font-gibsonlight">
              {formik.errors.phoneNumber}
            </div>
          ) : null}
        </div>
        <div>
          <input
            type="text"
            id="fullName"
            name="fullName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
            className="w-full my-2 px-5 p-2 rounded-3xl font-gibsonregular"
            placeholder="Full Name"
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <div className="text-red-800 font-gibsonlight">
              {formik.errors.fullName}
            </div>
          ) : null}
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full my-2 px-5 p-2 rounded-3xl font-gibsonregular"
            placeholder="Email ID"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-800 font-gibsonlight">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
        <div className="m-2 py-2">
          <label
            htmlFor="acceptTerms"
            className="text-white flex text-start items-center text-xs p-2 gibsonsemibold"
          >
            <input
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.acceptTerms}
              className="appearance-none h-[0.6875rem] w-4 md:h-4 md:w-4 rounded-full bg-white mr-2 checked:bg-green-800 text-green-800 font-gibsonregular"
            />
            I accept Terms & Conditions and Privacy Policy of Mondelez (Cadbury)
          </label>
          {formik.touched.acceptTerms && formik.errors.acceptTerms ? (
            <div className="text-red-800 font-gibsonlight">
              {formik.errors.acceptTerms}
            </div>
          ) : null}
        </div>
        <div className="m-2 py-2">
          <label className="text-white flex text-start items-center text-xs p-2 font-gibsonsemibold">
            <input
              type="checkbox"
              id="receivePromotions"
              name="receivePromotions"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.receivePromotions}
              className="appearance-none h-[0.6875rem] w-6 md:h-4 md:w-4 rounded-full bg-white mr-2 checked:bg-green-800 text-green-800"
            />
            I would like to receive promotional communication from Mondelez
            (Cadbury) about its products and offers.
          </label>
          {formik.touched.receivePromotions &&
          formik.errors.receivePromotions ? (
            <div className="text-red-800 font-gibsonlight">
              {formik.errors.receivePromotions}
            </div>
          ) : null}
        </div>
        <div className="my-2">
          <Button
            onClick={formik.handleSubmit}
            name="Submit"
            theme="primary"
            size="sm"
          />
        </div>
      </form>
      <div className="flex justify-center items-center">
        <OtpModal
          isOpen={isOtpModalOpen}
          onRequestClose={() => setIsOtpModalOpen(false)}
          onSubmit={handleOtpSubmit}
        />
      </div>
    </>
  );
}
