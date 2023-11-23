import React, { useContext } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Button from "../controls/Button";
import * as Yup from "yup";
import { UserContext } from "../context/UserContextProvider";

export default function MorewInfoForm2() {
  const navigate = useNavigate();

  const { setWhatMakeSmile, setFavouriteMovie, setFavouriteSport } =
    useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      whatMakeSmile: "",
      favouriteMovie: "",
      favouriteSport: "",
    },
    validationSchema: Yup.object({
      whatMakeSmile: Yup.string().matches(
        /^[A-Za-z\s]+$/,
        "Only alphabet characters are allowed"
      ),

      favouriteMovie: Yup.string().matches(
        /^[A-Za-z\s]+$/,
        "Only alphabet characters are allowed"
      ),

      favouriteSport: Yup.string().matches(
        /^[A-Za-z\s]+$/,
        "Only alphabet characters are allowed"
      ),
    }),
    onSubmit: (values) => {
      console.log("Form data submitted:", values);
      setWhatMakeSmile(values.whatMakeSmile);
      setFavouriteMovie(values.favouriteMovie);
      setFavouriteSport(values.favouriteSport);
      navigate("/lyrics");
    },
  });

  return (
    <form className="w-4/5 mx-auto">
      <div className="mb-4 text-center">
        <label
          htmlFor="whatMakeSmile"
          className="text-white text-xl font-gibsonsemibold"
        >
          What make them smile?
        </label>
        <input
          type="text"
          id="whatMakeSmile"
          name="whatMakeSmile"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.whatMakeSmile}
          placeholder="xxxxxxxxxxxxx"
          className="w-full my-2 px-5 py-4 rounded-3xl font-gibsonsemibold text-gray-400"
        />
        {formik.touched.whatMakeSmile && formik.errors.whatMakeSmile ? (
          <div className="text-red-500">{formik.errors.whatMakeSmile}</div>
        ) : null}
      </div>
      <div className="mb-4 text-center">
        <label
          htmlFor="favouriteMovie"
          className="text-white text-xl font-gibsonsemibold"
        >
          What is their favourite movie?
        </label>
        <input
          type="text"
          id="favouriteMovie"
          name="favouriteMovie"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.favouriteMovie}
          placeholder="xxxxxxxxxxxxx"
          className="w-full my-2 px-5 py-4 rounded-3xl font-gibsonsemibold text-gray-400"
        />
        {formik.touched.favouriteMovie && formik.errors.favouriteMovie ? (
          <div className="text-red-500">{formik.errors.favouriteMovie}</div>
        ) : null}
      </div>
      <div className="mb-4 text-center">
        <label
          htmlFor="favouriteSport"
          className="text-white text-xl font-gibsonsemibold"
        >
          Their favourite sport.
        </label>
        <input
          type="text"
          id="favouriteSport"
          name="favouriteSport"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.favouriteSport}
          placeholder="xxxxxxxxxxxxx"
          className="w-full my-2 px-5 py-4 rounded-3xl font-gibsonsemibold text-gray-400"
        />
        {formik.touched.favouriteSport && formik.errors.favouriteSport ? (
          <div className="text-red-500">{formik.errors.favouriteSport}</div>
        ) : null}
      </div>
      <div className="flex gap-2">
        <Button name="Answer More" size="xs" theme="tertiary" disabled />
        <Button
          onClick={formik.handleSubmit}
          name="Proceed"
          size="xs"
          theme="primary"
        />
      </div>
      <p className="text-white mt-1 font-gibsonregular">
        For enhanced personalisation
      </p>
    </form>
  );
}
