import { Modal } from "flowbite-react";
import React, { useState } from "react";
import Button from "../controls/Button";

export default function OtpModal({ isOpen, onRequestClose, onSubmit }) {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpInputRefs = Array.from({ length: 4 }, () => React.createRef());

  const handleOtpChange = (index, value) => {
    if (/^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value !== "" && index < otp.length - 1) {
        otpInputRefs[index + 1].current.focus();
      }
    }
  };

  const isOtpValid = otp.every((digit) => /^[0-9]$/.test(digit));

  const handleSubmit = () => {
    const enteredOtp = otp.join("");
    onSubmit(enteredOtp);
  };

  return (
    <Modal show={isOpen} onClose={onRequestClose} className="w-full h-full">
      <div className="w-2/4 md:w-1/4 absolute  inset-x-1/4 md:left-[500px] top-[409px] md:top-[200px] border  bg-white rounded-lg">
        <Modal.Header className="bg-white p-3 rounded-lg opacity-100 backdrop-blur-sm font-gibsonsemibold text-blue-10">
          Enter OTP
        </Modal.Header>
        <Modal.Body className="bg-white p-4">
          <div className="flex gap-2 justify-around p-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="number"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                ref={otpInputRefs[index]}
                className="bg-blue-10 w-8 h-8 rounded text-center appearance-none text-white"
              />
            ))}
          </div>
          <div className="flex  justify-end">
            <p className="underline underline-offset-[1px] cursor-pointer text-blue-10 font-gibsonsemibold">
              Resend OTP
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-white flex flex-col items-center rounded-lg">
          <Button
            name="Submit"
            onClick={handleSubmit}
            theme="secondary"
            size="lg"
            disabled={!isOtpValid}
          ></Button>
          {!isOtpValid && (
            <p className="font-gibsonlight text-red-500">
              Please enter a valid otp
            </p>
          )}
        </Modal.Footer>
      </div>
    </Modal>
  );
}
