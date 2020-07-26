import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { setAuthedUser } from '../actions/authedUser';

// CSS
import './Authenticate.css';

class Authenticate extends Component {
  seletedUser = (e, { value }) => {
    e.preventDefault();

    this.props.setAuthedUser(value);

    this.setState(() => {
      return {
        username: this.props.users.find((user) => user.id === value).name,
      };
    });
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
  };

  render() {
    // console.log(this.state.username);
    const { users, authedUser } = this.props;

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
              authedUser === null
                ? 'button-color-disabled'
                : 'button-color-active '
            }`}
            disabled={authedUser === null ? true : false}
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

export default connect(mapStateToProps, { setAuthedUser })(Authenticate);
