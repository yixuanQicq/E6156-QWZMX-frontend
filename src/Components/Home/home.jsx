import React from "react";
import DocumentTitle from 'react-document-title';
import Navbar from "../NavBar/navbar.jsx";

class Home extends React.PureComponent {
    render() {
        return (
            <DocumentTitle title="Team QWZMX">
                <div>
                    <Navbar/>
                    <p>
                        This is a website for pet listings/adoptions
                    </p>
                </div>
            </DocumentTitle>
        );
    }
}

export default Home;