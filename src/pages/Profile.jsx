import { useAuth } from '../context/AuthContext';

function Profile() {
  const { user, logout } = useAuth();

  return (
    <div className="page-container">
      <h1>Welcome, {user.email}</h1>
      <button onClick={logout} className="btn btn-primary" style={{ marginTop: '1rem' }}>
        Log out
      </button>
    </div>
  );
}

export default Profile;
