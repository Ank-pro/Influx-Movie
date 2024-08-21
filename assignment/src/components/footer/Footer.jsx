import { FooterContent } from "../footer-content/FooterContent";
import "./foot.css";
import faqs from "../../json/footer-faq.json";


export const Footer = () => {
  return (
    <div className="contents">
      <b className="main-heading">Frequently Asked Questions</b>
      <section className="faq">
        {faqs.map((faq,index)=>{
          return <div key={index}>
            <FooterContent faq={faq}/>
          </div>
        })}
      </section>
    </div>
  );
};
