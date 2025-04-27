import { useState } from 'react';
import { Button, Grid, IconButton, InputAdornment, Link, TextField } from '@mui/material';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        password,
      });

      if (response.data.message === 'Login successful') {
        window.location.href = '/DXC-OMT/'; // Redirect to transactions page
      }
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <>
      <Grid container spacing={3} sx={{ mb: 2.5 }}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={!!error} // Show error if there's an error message
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!error} // Show error if there's an error message
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? '👁️' : '🙈'}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="flex-end" sx={{ my: 2 }}>
        <Grid item>
          <Link href="/authentication/forget-password" underline="hover">
            Forgot password?
          </Link>
        </Grid>
      </Grid>

      <Button fullWidth variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </>
  );
};

export default LoginForm;
