import React from 'react';

import './Leaderboard.css';

const LeaderboardCard = ({ user, img, answered, created }) => {
  return (
    <div>
      <div className='leaderboard-container'>
        <div className='leaderboard-img'>
          <img alt='avatar' src={img} />
        </div>
        <div className='leaderboard-results'>
          <div>
            <h2>{user}</h2>
          </div>
          <div className='leaderboard-results-grid'>
            <div>
              <p>Answered questions </p>
            </div>
            <div>
              <p>{answered}</p>
            </div>
          </div>
          <hr />
          <div className='leaderboard-results-grid'>
            <div>
              <p>Created questions </p>
            </div>
            <div>
              <p>{created}</p>
            </div>
          </div>
        </div>
        <div className='leaderboard-score'>
          <div className='score-header'>
            <h3>Score</h3>
          </div>
          <div className='score-result'>
            {parseInt(answered) + parseInt(created)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardCard;
