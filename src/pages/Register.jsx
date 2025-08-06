import '../styles/components/forms.css';

function Register() {
  return (
    <div className="form-container">
      <form className="form-box">
        <h2>Register</h2>

        <label>Username</label>
        <input type="text" required />

        <label>Email</label>
        <input type="email" required />

        <label>Password</label>
        <input type="password" required />

        <button type="submit" className="btn btn-primary">Register</button>

        <div className="form-footer">
          Already have an account? <a href="/login">Login</a>
        </div>
      </form>
    </div>
  );
}

export default Register;
