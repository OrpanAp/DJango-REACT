import { useState } from 'react'
import api from '../api'
import { useNavigate, Link } from 'react-router-dom'
import { ACCEPT_TOKEN, REFRESH_TOKEN } from '../constance'
import LoadingIndicator from './LoadingIndecator'

const Form = ({ route, method }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const name = method === 'login' ? 'Login' : 'Register'
  const switchRoute = method === 'login' ? '/register' : '/login'
  const switchText =
    method === 'login'
      ? "Don't have an account? Register"
      : 'Already have an account? Login'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await api.post(route, { username, password })
      if (method === 'login') {
        localStorage.setItem(ACCEPT_TOKEN, res.data.access)
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
        navigate('/')
      } else {
        navigate('/login')
      }
    } catch (error) {
      alert(error.response?.data?.detail || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.title}>{name}</h1>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          style={styles.input}
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={styles.input}
        />

        {loading && <LoadingIndicator />}

        <button type="submit" style={styles.button}>
          {name}
        </button>

        {/* Login/Register switch */}
        <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '14px' }}>
          <Link to={switchRoute} style={{ color: '#667eea', textDecoration: 'none', fontWeight: '600' }}>
            {switchText}
          </Link>
        </div>
      </form>
    </div>
  )
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    fontFamily: "'Inter', sans-serif",
  },
  form: {
    background: '#ffffff',
    padding: '50px 40px',
    borderRadius: '20px',
    boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
    display: 'flex',
    flexDirection: 'column',
    width: '350px',
    gap: '18px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '10px',
    color: '#333',
  },
  input: {
    padding: '14px 16px',
    borderRadius: '10px',
    border: '1px solid #ddd',
    fontSize: '15px',
    outline: 'none',
    transition: '0.3s',
  },
  button: {
    padding: '14px',
    borderRadius: '12px',
    border: 'none',
    background: 'linear-gradient(90deg, #667eea, #764ba2)',
    color: 'white',
    fontWeight: '600',
    fontSize: '16px',
    cursor: 'pointer',
    boxShadow: '0 10px 25px rgba(102,126,234,0.4)',
  },
}

export default Form