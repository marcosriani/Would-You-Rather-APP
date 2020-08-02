import React, { Component, Fragment } from 'react';
import LeaderboardCard from './LeaderboardCard';
import { connect } from 'react-redux';
import ErrorPage from './ErrorPage';

class Leaderboard extends Component {
  render() {
    const { authedUser, usersScore } = this.props;

    let usersScoreUpdated = [...usersScore];
    if (usersScoreUpdated[0] !== undefined) {
      usersScoreUpdated[0].winner = true;
    }

    console.log(usersScoreUpdated);
    return (
      <Fragment>
        {authedUser !== null ? (
          usersScore.map((result) => {
            return (
              <LeaderboardCard
                key={result.author}
                user={result.author}
                img={result.img}
                answered={result.answeredQuestions}
                created={result.createdQuestions}
                winner={result.winner}
              />
            );
          })
        ) : (
          <ErrorPage />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => {
  let usersScore = [];

  for (let user in users) {
    usersScore.push({
      author: user,
      img: users[user].avatarURL,
      winner: false,
      answeredQuestions: Object.keys(users[user].answers).length,
      createdQuestions: Object.keys(users[user].questions).length,
      score:
        Object.keys(users[user].answers).length +
        Object.keys(users[user].questions).length,
    });
  }

  return {
    users,
    authedUser,
    usersScore: usersScore.sort(
      (a, b) =>
        (a.score !== undefined || b.score !== undefined) && b.score - a.score
    ),
  };
};

export default connect(mapStateToProps)(Leaderboard);
