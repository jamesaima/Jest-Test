import { useState } from "react";
import { TextField, Typography, Box, Button } from "@mui/material"


function Login() {
    const [loginInput, setLoginInput] = useState({
        userName: "",
        password: "",
        confirmPassword: "",
    });

    return (
        <>
            <Box sx={{ m: 1, height: '30px' }} /> {/* add a one-line space */}

            <Typography variant="h4" gutterBottom>
                Login
            </Typography>
            <TextField
                id="username"
                type="text"
                label="User Name"
                variant="outlined"
                value={loginInput.userName}
                onChange={(event) =>
                    setLoginInput({ ...loginInput, userName: event.target.value })
                }
            />
            <Box sx={{ m: 1, height: '10px' }} /> {/* add a one-line space */}

            <TextField
                id="password"
                type="password"
                label="Password"
                variant="outlined"
                value={loginInput.password}
                onChange={(event) =>
                    setLoginInput({ ...loginInput, password: event.target.value })
                }
            />
            <Box sx={{ m: 1, height: '10px' }} /> {/* add a one-line space */}

            <TextField
                id="confirm-password"
                type="password"
                label="Confirm Password"
                variant="outlined"
                value={loginInput.confirmPassword}
                onChange={(event) =>
                    setLoginInput({ ...loginInput, confirmPassword: event.target.value })
                }
            />
            <Box sx={{ m: 1, height: '10px' }} /> {/* add a one-line space */}

            <Button variant="contained" aria-label="login-button">Login</Button>

        </>
    );
}

export default Login
