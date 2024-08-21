import "./mid.css";

import star1 from "../../../Assets/teenyicons_star-solid-1.svg";
import star2 from "../../../Assets/teenyicons_star-solid-2.svg";
import star3 from "../../../Assets/teenyicons_star-solid.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import creditPerMonth from "../../../Assets/creditPerMonth.svg";
import unUsedCredits from "../../../Assets/rolloverOfUnusedCredits.svg";
import MMRPerks from "../../../Assets/MMRPerks.svg";
import discountFood from "../../../Assets/discountOnFoodAndBeverages.svg";
import convenienceFee from "../../../Assets/convenienceFee.svg";
import flexible from "../../../Assets/100Flexible.svg";
import homeIcon from '../../../Assets/Home.svg'

export const MidSection = () => {
  return (
    <main>
      <div className="mid-section">
        <div className="mid-content">
          <span className="home-icon">
            <img src={homeIcon} alt="home" />
          </span>
          <div className="hero-image">
            <img src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0" alt="hero" />
          </div>
          <div className="img-content">
            <div className="star-1">
              <img src={star1} className="img-1" alt="star-image" />
            </div>
            <div className="star-2">
              <img src={star2} className="img-2" alt="star-image" />
            </div>
            <div className="star-3">
              <img src={star3} className="img-3" alt="star-image" />
            </div>
          </div>
          <div className="text-content">
            <b className="bold-content">Reel Deal Monthly Movies</b>
            <p className="normal-content">
              Your flexible monthly membership to the latest movies
            </p>
          </div>
          <hr className="mid-line" />
          <div className="after-line">
            <strong>What is MVP Subscription?</strong>
            <ol className="list-points" type="1">
              <li className="point-1">
                MVP Subscription provides the member 1 movie credit per month
              </li>
              <li className="point-2">
                They can avail it at any Marcus theatre or Movie Tavern
              </li>
              <li className="point-3">
                Members earn 100 points and get a $5 reward redeemable on food &
                beverages + many more benefits
              </li>
            </ol>
          </div>

          <div className="cta-content">
            <button className="arrow-content">
              Get started
              <ArrowForwardIcon sx={{ width: "15px" }} />
            </button>
            <a href="*">Learn more</a>
          </div>
        </div>
        
        <div className="flex-cards">
            {/* Card-1 */}
          <div className="card">
            <div className="logo">
              <img src={creditPerMonth} alt="card-image" />
            </div>
            <div className="credits">
              <strong>1 credits per month</strong>
              <p>One 2D standard movie per month<sup>1</sup></p>
            </div>
          </div>
          {/* Card-2 */}
          <div className="card">
            <div className="logo">
              <img src={unUsedCredits} alt="card-image" />
            </div>
            <div className="credits roll">
              <strong>Free rollover Of Unused Credits</strong>
              <p>Unused credits will be combined the following month</p>
            </div>
          </div>
          {/* Card-3 */}
          <div className="card small">
            <div className="logo">
              <img src={MMRPerks} alt="card-image" />
            </div>
            <div className="credits">
              <strong>All MMR perks included</strong>
              <p>+ benefits</p>
            </div>
          </div>
          {/* Card-4 */}
          <div className="card small">
            <div className="logo">
              <img src={flexible} className="l4" alt="card-image" />
            </div>
            <div className="credits flexible">
              <strong>100% flexible</strong>
              <p>Cancel anytime <sup>2</sup></p>
            </div>
          </div>
          {/* Card-5 */}
          <div className="card">
            <div className="logo">
              <img src={discountFood} alt="card-image" />
            </div>
            <div className="credits">
              <strong>20% Discount on all Foods and beverages</strong>
              <p>Excluding alcohol</p>
            </div>
          </div>
          {/* Card-6 */}
          <div className="card">
            <div className="logo">
              <img src={convenienceFee} alt="card-image" />
            </div>
            <div className="credits card-6">
              <strong>0 Convenience Fees</strong>
              <p>Waived on all days on any tickets purchase</p>
            </div>
          </div>
          <div className="small-script">
            <p id="line-1"><sup>1</sup>Excludes IMAX and DBOX formats.No fees apply to Passport Credits only.Other Fees apply to full priced tickets.</p>
            <p id="line-2"><sup>2</sup>Excludes alcoholic beverages.</p>
          </div>
          
          {/* small scripts */}
          {/* <div className="small-script">
            <p><sup>1</sup>Excludes IMAX and DBOX formats.</p>
          </div> */}
        </div>
        <div className="mobile-footer-btn">
        <button className="arrow-content">
              Get started
              <ArrowForwardIcon sx={{ width: "15px" }} />
            </button>
            <p>Marcus MVP is only available for use in our Mobile App.</p>
        </div>
      </div>
    </main>
  );
};
