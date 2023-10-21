import React from "react";
import Navbar from "../NavBar/navbar.jsx";

class ProfilePage extends React.PureComponent {
    render() {
        return(
            <div>
                <Navbar/>
                <p>
                    User Services
                </p>
            </div>
        );
    }
}

export default ProfilePage;