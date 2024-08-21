import { NavBar } from '../nav-bar/NavBar';
import './header.css';


export const Header = () => {
  return (
    <>
    <div className="header">
      <NavBar />
      <div className="header-content">
        <span className="heading">mvp subscription</span>
        <span className="heading-small">Your go to Movie Membership Program</span>
      </div>
    </div>
    </>
  );
};
