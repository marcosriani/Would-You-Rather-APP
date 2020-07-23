import React, { Component } from 'react';

import './NewPoll.css';

class NewPool extends Component {
  render() {
    return (
      <div className='new-poll-wrapper'>
        <div className='new-poll-header'>
          <h2>Create a New Poll</h2>
        </div>
        <div className='new-poll-questions'>
          <p>Complete the question:</p>
          <p className='new-poll-q'>Would You Rather...</p>
          <form>
            <label></label>
            <div className='new-poll-input'>
              <div>
                <input type='text' placeholder='Enter option one...' />
              </div>
              <p>------------------ OR ------------------ </p>
              <div>
                <input type='text' placeholder='Enter option two...' />
              </div>
            </div>

            <button>Submit </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewPool;
