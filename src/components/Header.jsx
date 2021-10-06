import React, { Component } from 'react';
class Header extends Component {
    render() {
        return ( 
            <React.Fragment>
                <div className="firstHeader">
                    <img src="/images/bell.svg" alt="bell"/>
                    <h4>Jason Blage</h4>
                    <img src="/images/dp.png" width="40px" height="40px" alt="Profile Pic"/>
                </div>
                <div className="secondHeader">
                    <span>
                        <h1>GOOD MORNING,Jason</h1>
                    </span>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Header;