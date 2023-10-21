import React from "react";
import Navbar from "../NavBar/navbar.jsx";
import axios from "axios";

class AdoptionPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            isLoading: false,
            error: null
        };
    }

    getRequest = () => {
        this.setState({ isLoading: true });
        axios.get("https://20t8y8ccj8.execute-api.us-east-2.amazonaws.com/Stage1/petadoptionservice")
            .then(response => {
                this.setState({
                    data: response.data,
                    isLoading: false
                });
            })
            .catch(error => {
                this.setState({
                    error: error,
                    isLoading: false
                });
            });
    }

    render() {
        const { data, isLoading, error } = this.state;

        return (
            <div>
                <Navbar/>
                <p>Pet Adoption Services</p>
                <button onClick={this.getRequest}>Make Service Request</button>

                {isLoading && <div>Loading...</div>}
                {error && <div>Error: {error.message}</div>}
                {data && <div>{JSON.stringify(data)}</div>}
            </div>
        );
    }
}

export default AdoptionPage;