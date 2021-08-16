import React from 'react';
import Logo from '../../assets/img/1.png';
import '../../assets/css/style.css'

const styleColor = {
  color: 'rgb(255, 255, 255)',
};


const SignInSection = (props) => {
  return (
    <div className="MuiGrid-root wave-container MuiGrid-item MuiGrid-grid-md-6 MuiGrid-grid-lg-7 mobilehide">
      <h1 className="logo-text ml-4 mt-2">
        KOKO<span style={styleColor}>FP</span>
      </h1>
      <div className="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center MuiGrid-justify-xs-center">
        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10 MuiGrid-grid-md-8">
          <div className="mt-6">
            <div className="font-36">
              <span className="mr-2">Welcome to</span>
              <bold
                className="expand-text"
                style={styleColor}
              >
                KOKO Family Physician
              </bold>
              <div className="mt-2 text-mini">
                Speak to a healthcare provider from the
                comfort of your home any Time any Day
              </div>
              <div className="text-left mt-4">
              <img className="login-bg" src={Logo} alt="call a doctor" />
              </div>
            </div>
          </div>
        </div>
      </div>
      

      
    </div>

    

  );
};

export default SignInSection;