import { Modal } from "flowbite-react";
import React, { useState } from "react";
import Button from "../controls/Button";

const OtpModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpInputRefs = Array.from({ length: 4 }, () => React.createRef());

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    // Move focus to the next input
    if (value !== "" && index < otp.length - 1) {
      otpInputRefs[index + 1].current.focus();
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join("");
    onSubmit(enteredOtp);
  };

  return (
    <Modal show={isOpen} onClose={onRequestClose} className="w-full h-full">
      <div className="w-2/4 md:w-1/4 absolute  inset-x-1/4 md:left-[500px] top-[409px] md:top-[200px] border  bg-white rounded-lg">
        <Modal.Header className="bg-white p-3 rounded-lg opacity-100 backdrop-blur-sm">
          Enter OTP
        </Modal.Header>
        <Modal.Body className="bg-white">
          <div className="flex gap-2 justify-around p-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="number"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                ref={otpInputRefs[index]}
                className="bg-blue-700 w-6 h-6 rounded text-center appearance-none"
              />
            ))}
          </div>
          <div className="flex  justify-end">
            <p className="underline underline-offset-[1px] cursor-pointer">
              Resend OTP
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-white flex justify-center rounded-lg">
          <Button
            name="Submit"
            onClick={handleSubmit}
            theme="secondary"
            size="xs"
          ></Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default OtpModal;
