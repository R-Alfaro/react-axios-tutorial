import React from "react";
import API from "./utils/API";
import User from "./utils/User";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      name: null,
      avatar: null,
      email: null
    };
  }

  async componentDidMount() {
    
    try {
      // Load async data.
      let userData = await API.get('/', {
        params: {
          results: 1,
          inc: 'name, email, picture'
        }
      })

      userData = userData.data.results[0];

      // Parse the results for ease of use.
      const name = `${userData.name.first} ${userData.name.last}`;
      const avatar = userData.picture.large;
      const email = userData.email;

      this.setState(
        {...this.state, ...{
          isLoading: false, name, avatar, email }
        }
      );
    } catch (error) {
      console.log(`😱 Axios request failed: ${error}`);
    }
  }

  render() {
    const { isLoading, name, avatar, email } = this.state;

    return (
      <User isLoading={isLoading} name={name} avatar={avatar} email={email} />
    );
  }
}

export default App;
