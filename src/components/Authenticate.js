import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';

// CSS
import './Authenticate.css';

class Authenticate extends Component {
  // Format the users array to a format supported by the sematic ui dropdown
  formatUsersArray = (usersArray) => {
    const newArray = [];

    for (const userObj of usersArray) {
      newArray.push({
        key: userObj.id,
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

  render() {
    // console.log(this.props.users);
    const { users } = this.props;

    // Dropdown selection function form the semantic ui
    const DropdownSelection = (friendOptions) => (
      <Dropdown
        placeholder='Select Mate'
        fluid
        selection
        options={friendOptions}
        className='authenticate-Select'
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
        <form className='authenticate-form'>
          <label>To Sign In choose an User</label>
          {/* Dropdown with icon - from semantic UI */}
          {DropdownSelection(this.formatUsersArray(users))}

          <button type='submit' className='authenticate-btn'>
            Login
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  // Convert the object users into an array of objects
  const allUsers = Object.values(users);

  return { users: allUsers };
};

export default connect(mapStateToProps)(Authenticate);
