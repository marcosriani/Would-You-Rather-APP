import React, { Component } from 'react';
import LeaderboardCard from './LeaderboardCard';
import { connect } from 'react-redux';

class Leaderboard extends Component {
  render() {
    const { userScore } = this.props;

    console.log(userScore);

    return (
      <div>
        {userScore.map((result) => {
          return (
            <LeaderboardCard
              key={result.author}
              user={result.author}
              img={result.img}
              answered={result.answeredQuestions}
              created={result.createdQuestions}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => {
  let userScore = [];

  for (let user in users) {
    userScore.push({
      author: user,
      img: users[user].avatarURL,
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
    userScore: userScore.sort(
      (a, b) =>
        (a.score !== undefined || b.score !== undefined) && b.score - a.score
    ),
  };
};

export default connect(mapStateToProps)(Leaderboard);
