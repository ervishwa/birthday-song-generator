import React, { useContext } from "react";
import { useFormik } from "formik";
import Button from "./Button";
import * as Yup from "yup";
import Dropdown from "./DropDown";
import tune from "../ui-images/purple-tone.png";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContextProvider";

export default function UserInfoForm() {
  const navigate = useNavigate();

  const { setName, setGender } = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      age: "",
      gender: "Male",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .matches(/^[A-Za-z\s]+$/, "Only alphabet characters are allowed")
        .required("Full Name is required"),
      age: Yup.number()
        .required("Age is required")
        .integer("Enter a valid age")
        .min(1, "Age must be greater than or equal to 1")
        .max(120, "Age must be less than or equal to 120"),
      gender: Yup.string().required("Gender is required"),
    }),
    onSubmit: (values) => {
      setName(values.fullName);
      setGender(values.gender);
      navigate("/userchoice");
    },
  });
  const genderOptions = ["Male", "Female", "Other"];
  return (
    <form className="w-3/4 mx-auto">
      <div className="mb-4">
        <input
          type="text"
          id="fullName"
          name="fullName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
          placeholder="xxxx xxxxxxxxxxxxx"
          className="w-full my-2 px-5 py-4 rounded-3xl font-gibsonlight"
        />
        {formik.touched.fullName && formik.errors.fullName ? (
          <div className="text-red-500">{formik.errors.fullName}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="age" className="text-white text-xl font-gibsonsemibold">
          How old they'll be this birthday
        </label>
        <input
          type="text"
          id="age"
          name="age"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={`${formik.values.age}`}
          className="w-full my-2 px-5 py-4 rounded-3xl font-gibsonsemibold text-blue-10"
        />
        {formik.touched.age && formik.errors.age ? (
          <div className="text-red-500">{formik.errors.age}</div>
        ) : null}
      </div>
      <div className="mb-8">
        <label
          htmlFor="gender"
          className="text-white text-xl font-gibsonsemibold"
        >
          Gender
        </label>
        <Dropdown
          options={genderOptions}
          selectedOption={formik.values.gender}
          onSelect={(option) => formik.setFieldValue("gender", option)}
        />
        {formik.touched.gender && formik.errors.gender ? (
          <div className="text-red-500">{formik.errors.gender}</div>
        ) : null}
      </div>
      <div className="relative">
        <img className="h-20 absolute bottom-0" src={tune} alt="" />
        <Button
          onClick={formik.handleSubmit}
          name="Proceed"
          size="sm"
          theme="primary"
        />
      </div>
    </form>
  );
}
