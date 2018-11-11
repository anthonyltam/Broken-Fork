import { connect } from 'react-redux';
import { signOut, signIn } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Greeting from './greeting';

const msp = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mdp = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
    openModal: modal => dispatch(openModal(modal)),
    singIn: (user) => dispatch(signIn(user)),
    demoLogin: () => dispatch(signIn({email: 'DemoUser', password: 'starwars' }))
  };
};

export default connect(msp, mdp)(Greeting);
