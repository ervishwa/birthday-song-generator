import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Button from "../controls/Button";

export default function MorewInfoForm1({ handelAnswerMore }) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      petName: "xxxxx xxxx xxxxxx",
      makesAngry: "xxxx xxx xxx",
      funniestThing: "xxxx xxx xxxx",
    },
    validationSchema: Yup.object({
      petName: Yup.string()
        .matches(/^[A-Za-z\s]+$/, "Only alphabet characters are allowed")
        .required("Full Name is required"),
      makesAngry: Yup.string()
        .matches(/^[A-Za-z\s]+$/, "Only alphabet characters are allowed")
        .required("this field is required"),
      funniestThing: Yup.string()
        .matches(/^[A-Za-z\s]+$/, "Only alphabet characters are allowed")
        .required("this Field is required"),
    }),
    onSubmit: (values) => {
      console.log("Form data submitted:", values);
      // You can handle the form submission logic here
      navigate("/lyrics");
    },
  });

  return (
    <form className="w-4/5 mx-auto">
      <div className="mb-4 text-center">
        <label htmlFor="petName" className="text-white text-xl ">
          What's your pet name for them?
        </label>
        <input
          type="text"
          id="petName"
          name="petName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.petName}
          className="w-full my-2 px-5 py-4 rounded-3xl"
        />
        {formik.touched.petName && formik.errors.petName ? (
          <div className="text-red-500">{formik.errors.petName}</div>
        ) : null}
      </div>
      <div className="mb-4 text-center">
        <label htmlFor="makesAngry" className="text-white text-xl">
          What makes them angry?
        </label>
        <input
          type="text"
          id="makesAngry"
          name="makesAngry"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.makesAngry}
          className="w-full my-2 px-5 py-4 rounded-3xl"
        />
        {formik.touched.makesAngry && formik.errors.makesAngry ? (
          <div className="text-red-500">{formik.errors.makesAngry}</div>
        ) : null}
      </div>
      <div className="mb-4 text-center">
        <label htmlFor="funniestThing" className="text-white text-xl">
          What is the funniest thing they do?
        </label>
        <input
          type="text"
          id="funniestThing"
          name="funniestThing"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.funniestThing}
          className="w-full my-2 px-5 py-4 rounded-3xl"
        />
        {formik.touched.funniestThing && formik.errors.funniestThing ? (
          <div className="text-red-500">{formik.errors.funniestThing}</div>
        ) : null}
      </div>
      <div className="flex gap-3">
        <Button
          onClick={() => handelAnswerMore(true)}
          name="Answer More"
          size="sm"
          theme="tertiary"
        />
        <Button
          onClick={formik.handleSubmit}
          name="Proceed"
          size="sm"
          theme="primary"
        />
      </div>
      <p className="text-white mt-1">For enhanced personalisation</p>
    </form>
  );
}
