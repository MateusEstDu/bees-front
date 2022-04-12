import logo from '../../assets/images/bee3.png';
import CredentialsForm from './CredentialForm';
import './css/Credentials.css';

function Credentials() {
  return (
    <div className="Teste">
        <img src={logo} className="Teste-logo" alt="logo" />
        <p>
          Please, enter your full name below
        </p>
        <p>
          Only alphabetical characters are accepted
        </p>
        <CredentialsForm />
    </div>
  );
}

export default Credentials;
