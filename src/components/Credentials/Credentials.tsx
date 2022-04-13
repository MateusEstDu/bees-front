import logo from '../../assets/images/bee3.png';
import CredentialsForm from './CredentialForm';
import './css/Credentials.css';

function Credentials() {
  return (
    <div className="credentials">
        <img src={logo} className="backgroudImage" alt="logo" />
        <p>
          Please, enter your full name below!
          And please remeber to use only alphabetical characters:
        </p>
        <CredentialsForm />
    </div>
  );
}

export default Credentials;
