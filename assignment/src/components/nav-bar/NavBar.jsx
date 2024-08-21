import "./nav.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

// const img_link = '../'

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="nav-contents">
        <div className="placeholder">
          <div className="placeholder-text">Placeholder title</div>
          <div className="icon">
            <KeyboardArrowDownIcon sx={{ color: "white" ,marginTop : '8px'}} />
          </div>
        </div>
        <div className="placeholder">
          <div className="placeholder-text">Placeholder title</div>
          <div className="icon">
            <KeyboardArrowDownIcon sx={{ color: "white" ,marginTop : '8px' }} />
          </div>
        </div>
        <div className="placeholder">
          <div className="placeholder-text">Placeholder title</div>
          <div className="icon">
            <KeyboardArrowDownIcon sx={{ color: "white" ,marginTop : '8px' }} />
          </div>
        </div>
        <div className="user-btn">
          <div className="btn-img">
            <PersonOutlineOutlinedIcon sx={{color : 'white',height : '1.3rem',marginTop : '2px'}}/>
          </div>
          <div className="btn-text">Sign In</div>
        </div>
      </div>
      <hr className="line"/>
      <div className="lower-placeholder">
        <div className="low-text">Placeholder title</div>
        <div className="low-text">Placeholder title</div>
        <div className="low-text">Placeholder title</div>
        <div className="low-text">Placeholder title</div>
      </div>
    </div>
  );
};
