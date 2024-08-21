import { useState } from "react";
import "./fc.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const FooterContent = ({faq}) => {
  const [isActive,setIsActive] = useState(false);

  return (
    <>
    <div className="faq-heading" onClick={()=>setIsActive(!isActive)}>
        <h4>{!isActive ? '>' : 'v'}</h4>
          <p>
          {faq.question}
          </p>
        </div>
        <div className={isActive ? "ans active" : "ans"}>
          {faq.answer}
        </div>
        </>
  );
};
