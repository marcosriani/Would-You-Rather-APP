import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { setAuthedUser } from '../actions/authedUser';
import { withRouter } from 'react-router-dom';
// CSS
import './Authenticate.css';

class Authenticate extends Component {
  state = {
    username: null,
  };

  seletedUser = (e, { value }) => {
    e.preventDefault();

    this.setState(() => {
      return {
        username: value,
      };
    });
  };

  onSubmit = () => {
    this.props.setAuthedUser(this.state.username);
  };

  // Format the users array to a format supported by the sematic ui dropdown
  formatUsersArray = (usersArray) => {
    const newArray = [];

    for (const userObj of usersArray) {
      newArray.push({
        key: userObj.id,
        id: userObj.id,
        text: userObj.name,
        value: userObj.id,
        image: {
          avatar: true,
          src: userObj.avatarURL,
        },
      });
    }

    return newArray;
  };

  loginUser = (e) => {
    e.preventDefault();
    this.props.history.push(`/home`);
  };

  render() {
    // console.log(this.state.username);
    const { users } = this.props;

    // Dropdown selection function form the semantic ui
    const DropdownSelection = (friendOptions) => (
      <Dropdown
        placeholder='Select an User'
        fluid
        selection
        options={friendOptions}
        className='authenticate-Select'
        onChange={this.seletedUser}
      />
    );

    return (
      <div className='authenticate-container'>
        <div className='authenticate-header'>
          <h2>Welcome! Let's Play?</h2>
          <p>Please sign in to continue</p>
        </div>
        <div className='authenticate-img-wrapper'>
          <img
            className='authenticate-wallpaper'
            src='./woudyourather.png'
            alt='wallpaper'
          />
        </div>
        <form className='authenticate-form' onSubmit={this.loginUser}>
          <label>To Sign In choose an User</label>
          {/* Dropdown with icon - from semantic UI */}
          {DropdownSelection(this.formatUsersArray(users))}

          <button
            type='submit'
            className={`authenticate-btn ${
              this.state.username === null
                ? 'button-color-disabled'
                : 'button-color-active '
            }`}
            disabled={this.state.username === null ? true : false}
            onClick={this.onSubmit}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => {
  // Convert the object users into an array of objects
  const allUsers = Object.values(users);

  return { users: allUsers, authedUser };
};

export default withRouter(
  connect(mapStateToProps, { setAuthedUser })(Authenticate)
);
