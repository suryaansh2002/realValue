import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function FaqCard({ question, answer }) {
  const [show, setShow] = useState(false);
  const iconStyles = {
    fontSize: "1.5rem",
    transform: "translaye(0.2rem, 1.5rem)",
  }
  return (
    <div
      class="bg-white rounded-lg shadow-lg md:w-[80vw] w-[90vw] block my-4"
      onClick={() => setShow(!show)}
    >
      <div class="py-4 px-6 cursor-pointer">
        <div class="w-[95%] inline-block">{question}</div>
        <div class="w-[5%] text-right inline-block">
          {show ? (
            <FaAngleUp
              style={iconStyles}
            />
          ) : (
            <FaAngleDown
              style={iconStyles}
            />
          )}
        </div>
      </div>
      {show && (
        <div class="faq-answer pb-4 px-6">
          {answer}
        </div>
      )}
    </div>
  );
}
