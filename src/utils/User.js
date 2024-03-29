import React from "react";
import PropTypes from "prop-types";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import { CardHeader, Card, CardFooter } from "shards-react";

class User extends React.Component {
  render() {
    const { name, avatar, email, isLoading } = this.props;

    const userDetails = (
      <div>
        <img className="img-thumbnail rounded-circle mx-auto mb-2 shadow-sm"
          src={avatar} alt={name} style={{ width: "100px", height: "100px" }}/>
          <hr></hr>
        <h4 className="mb-0">{name}</h4>
        <span className="text-muted">{email}</span>
      </div>
    );

    const loadingMessage = <span className="d-flex m-auto">Loading... please wait</span>;

    return (
      <Card className="mx-auto mt-4 text-center p-5" style={{ maxWidth: "350px", minHeight: "350px" }}>
        <CardHeader>React and Axios Example</CardHeader>
        <br></br>

        {isLoading ? loadingMessage : userDetails}

        <CardFooter><p style={{fontSize: '0.7rem', margin: 'auto'}}>Created by Alfaro-R</p></CardFooter>
        </Card>
    );
  }
}

User.propTypes = {
    name: PropTypes.string, avatar: PropTypes.string, 
    email: PropTypes.string, isLoading: PropTypes.bool
};

export default User;
