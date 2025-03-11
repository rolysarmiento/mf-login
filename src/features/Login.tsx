import logo from '../assets/img/logo2.png'
import { User } from '../hooks/User';
import './Login.css';

export default function Login() {

  const { handleChange, handleClick } = User();

  return (
    <>
      <div className="login-container">
        <div className="login-banner">
          <div className="banner-overlay"></div>
          <div className="banner-content">
            <img src={logo} alt="Logo" />
            <p className="form-subtitle2">En Clínica San Felipe te vamos a cuidar</p>
          </div>
        </div>
        <div className="login-form-container">
          <form action='/home/'>
            <div className="login-form">
              <h2>Iniciar sesión</h2>
              <p className="form-subtitle">
                Inicia sesión para acceder a la Historia Clínica Electrónica (HCE)
              </p>
              <div className="form-group">
                <label>Login</label>
                <input
                  type="text"
                  placeholder="Ingresa tu usuario"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Contraseña</label>
                <input
                  type="password"
                  placeholder="Ingresa tu contraseña"
                />
              </div>
              <div className="form-footer">
                <p>¿Tienes problemas para iniciar tu sesión? Te sugerimos</p>
                <a href="#">Recuperar tu contraseña</a>
              </div>
              <button onClick={handleClick}>Ingresar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}