import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Button from "../controls/Button";
import { UserContext } from "../context/UserContextProvider";

export default function MorewInfoForm1({ handelAnswerMore }) {
  const navigate = useNavigate();

  const { setPetName, setWhatmakesAngry, setFunniestThing } =
    useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      petName: "",
      makesAngry: "",
      funniestThing: "",
    },
    validationSchema: Yup.object({
      petName: Yup.string()
        .matches(/^[A-Za-z\s]+$/, "Only alphabet characters are allowed")
        .required("petname is required"),
      makesAngry: Yup.string()
        .matches(/^[A-Za-z\s]+$/, "Only alphabet characters are allowed")
        .required("this field is required"),
      funniestThing: Yup.string()
        .matches(/^[A-Za-z\s]+$/, "Only alphabet characters are allowed")
        .required("this Field is required"),
    }),
    onSubmit: (values) => {
      setPetName(values.petName);
      setWhatmakesAngry(values.makesAngry);
      setFunniestThing(values.funniestThing);
      navigate("/lyrics");
    },
  });

  return (
    <form className="w-4/5 mx-auto">
      <div className="mb-4 text-center">
        <label
          htmlFor="petName"
          className="text-white text-xl font-gibsonsemibold"
        >
          What's your pet name for them?
        </label>
        <input
          type="text"
          id="petName"
          name="petName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.petName}
          placeholder="xxxxxxxxxxxxx"
          className="w-full my-2 px-5 py-4 rounded-3xl text-gray-400"
        />
        {formik.touched.petName && formik.errors.petName ? (
          <div className="text-red-500">{formik.errors.petName}</div>
        ) : null}
      </div>
      <div className="mb-4 text-center">
        <label
          htmlFor="makesAngry"
          className="text-white text-xl font-gibsonsemibold"
        >
          What makes them angry?
        </label>
        <input
          type="text"
          id="makesAngry"
          name="makesAngry"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.makesAngry}
          placeholder="xxxxxxxxxxxxx"
          className="w-full my-2 px-5 py-4 rounded-3xl text-gray-400"
        />
        {formik.touched.makesAngry && formik.errors.makesAngry ? (
          <div className="text-red-500">{formik.errors.makesAngry}</div>
        ) : null}
      </div>
      <div className="mb-4 text-center">
        <label
          htmlFor="funniestThing"
          className="text-white text-xl font-gibsonsemibold"
        >
          What is the funniest thing they do?
        </label>
        <input
          type="text"
          id="funniestThing"
          name="funniestThing"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.funniestThing}
          placeholder="xxxxxxxxxxxxx"
          className="w-full my-2 px-5 py-4 rounded-3xl text-gray-400"
        />
        {formik.touched.funniestThing && formik.errors.funniestThing ? (
          <div className="text-red-500">{formik.errors.funniestThing}</div>
        ) : null}
      </div>
      <div className="flex mt-8 w-full gap-2">
        <Button
          onClick={() => handelAnswerMore(true)}
          name="Answer More"
          size="xs"
          theme="tertiary"
        />
        <Button
          onClick={formik.handleSubmit}
          name="Proceed"
          size="xs"
          theme="primary"
        />
      </div>
      <p className="text-white mt-2 font-gibsonregular">
        For enhanced personalisation
      </p>
    </form>
  );
}
