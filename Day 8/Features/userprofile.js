import React from 'react';
import { connect } from 'react-redux';
import { setUser } from '../Features/actions';
import '../Styles/profile.css'
import { Link } from 'react-router-dom';
import Voter from '../Components/Voter_page';

class UserProfilePage extends React.Component {
  componentDidMount() {
    // Simulating fetching user data from an API
    const user = {
      username: 'Soma Sundari',
      email: 'soma@gmail.com',
      dob:'01.01.2004',
      num:'7539932004'
    };

    this.props.setUser(user);
  }

  render() {
    const { username, email,dob,num } = this.props.user;

    return (
      <div className='profile'>
        <Voter>
        <h1>User Profile</h1>
        <div className='head1'>
        </div>
        <div className='head2'>
          {/* <h1>Details</h1> */}
        </div>
        <div className='head3'>
            <ul>
            <li>Username :  {username}</li>
            <li>Email :  {email}</li>
            <li>Date of Birth :  {dob}</li>
            <li>Mobile Number :  {num}</li>
            <Link to='/Instruction'>
          <button type="submit" className="btn btn-primary">
            View Instructions
          </button>
          </Link>
            </ul> 
        </div>
      </Voter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePage);
