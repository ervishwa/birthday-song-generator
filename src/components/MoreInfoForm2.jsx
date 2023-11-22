import React, { useContext } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Button from "../controls/Button";
import { UserContext } from "../context/UserContextProvider";

export default function MorewInfoForm2() {
  const navigate = useNavigate();
  
  const { setWhatMakeSmile, setFavouriteMovie, setFavouriteSport } =
  useContext(UserContext);


  const formik = useFormik({
    initialValues: {
      whatMakeSmile: "xxxxxxxxxxx",
      favouriteMovie: "xxxxxxxxx",
      favouriteSport: "xxxxxxxxx",
    },
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
        <label htmlFor="whatMakeSmile" className="text-white text-xl ">
          What make them smile?
        </label>
        <input
          type="text"
          id="whatMakeSmile"
          name="whatMakeSmile"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.whatMakeSmile}
          className="w-full my-2 px-5 py-4 rounded-3xl"
        />
        {formik.touched.whatMakeSmile && formik.errors.whatMakeSmile ? (
          <div className="text-red-500">{formik.errors.whatMakeSmile}</div>
        ) : null}
      </div>
      <div className="mb-4 text-center">
        <label htmlFor="favouriteMovie" className="text-white text-xl">
          What is their favourite movie?
        </label>
        <input
          type="text"
          id="favouriteMovie"
          name="favouriteMovie"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.favouriteMovie}
          className="w-full my-2 px-5 py-4 rounded-3xl"
        />
        {formik.touched.favouriteMovie && formik.errors.favouriteMovie ? (
          <div className="text-red-500">{formik.errors.favouriteMovie}</div>
        ) : null}
      </div>
      <div className="mb-4 text-center">
        <label htmlFor="favouriteSport" className="text-white text-xl">
          Their favourite sport.
        </label>
        <input
          type="text"
          id="favouriteSport"
          name="favouriteSport"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.favouriteSport}
          className="w-full my-2 px-5 py-4 rounded-3xl"
        />
        {formik.touched.favouriteSport && formik.errors.favouriteSport ? (
          <div className="text-red-500">{formik.errors.favouriteSport}</div>
        ) : null}
      </div>
      <div className="flex gap-3">
        <Button name="Answer More" size="sm" theme="tertiary" disabled />
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
