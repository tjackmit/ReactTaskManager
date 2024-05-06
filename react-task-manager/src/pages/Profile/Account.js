import React, { useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// import { Form } from 'react-router-dom';

const padding = 20;

const accountScreenStyle = {
    display: 'flex',
};

const accountUserDataFormStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
    height: '1000px',
    // paddingTop: '20px',
    paddingLeft: padding,
    // backgroundColor: 'green'
};

const accountPasswordFormStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
    height: '1000px',
    paddingTop: '68px',
    paddingLeft: padding,
    // backgroundColor: 'green'
};

const formLabelStyle = {
    paddingLeft: padding,
};

const formTextFieldStyle = {
    width: '75%',
    paddingTop: padding,
    paddingLeft: padding*2,
    paddingBottom: padding,
};

const accountButtonStyle = {
    width: '85%',
};

const accountScreenWatermarkStyle = {
    opacity: 0
};

const options = [
    { value: 'A Team', label: 'A Team' },
    { value: 'Team B', label: 'Team B' },
    { value: 'The C\'s', label: 'The C\'s' },
    { value: 'Team 1a2s3d4f5g6h7j8k9l0p', label: 'Team 1a2s3d4f5g6h7j8k9l0p' },
  ];

export default function Account(props) {
    const [taskTeam, setTaskTeam] = useState('');

    const handleTaskTeamChange = (event) => {
        setTaskTeam(event.target.value);
    };

    return (
        <div style={accountScreenStyle}>
            <div style={accountUserDataFormStyle}>
                <h2>User Account</h2>
                <FormLabel style={formLabelStyle}>
                    First/Given Name
                </FormLabel>
                <TextField
                    id='FirstNameTextField'
                    placeholder='First Name'
                    style={formTextFieldStyle}
                ></TextField>
                <FormLabel style={formLabelStyle}>
                    Last/Sir Name
                </FormLabel>
                <TextField
                    id='lastNameTextField'
                    placeholder='Last Name'
                    style={formTextFieldStyle}
                ></TextField>
                <FormLabel style={formLabelStyle}>
                    Email
                </FormLabel>
                <TextField
                    id='emailTextField'
                    placeholder='Email'
                    style={formTextFieldStyle}
                ></TextField>
                <FormLabel style={formLabelStyle}>
                    Role/Title
                </FormLabel>
                <TextField
                    id='roleTitleTextField'
                    placeholder='Role / Title'
                    style={formTextFieldStyle}
                ></TextField>

                <FormControl
                    variant="outlined"
                    sx={{ m: 2.5, width: 120, minWidth: 120 }}
                >
                    <InputLabel id="taskTeamLabel">Task Team</InputLabel>
                    <Select
                        labelId="taskTeamLabel"
                        id="taskTeamSelect"
                        value={taskTeam}
                        onChange={handleTaskTeamChange}
                        label="Task Team"
                    >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        {options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Button
                    variant="contained"
                    style={accountButtonStyle}
                    onClick={() => {
                        alert('clicked');
                      }}
                >
                    Update Account
                </Button>

            </div>

            <div style={accountPasswordFormStyle}>
                <FormLabel style={formLabelStyle}>
                    Current Password
                </FormLabel>
                <TextField
                    id='currentPassword'
                    placeholder='Current Password'
                    style={formTextFieldStyle}
                />
                <FormLabel style={formLabelStyle}>
                    New Password
                </FormLabel>
                <TextField
                    id='newPassword'
                    placeholder='New Password'
                    style={formTextFieldStyle}
                />
                <FormLabel style={formLabelStyle}>
                    Repeat New Password
                </FormLabel>
                <TextField
                    id='repeatNewPassword'
                    placeholder='Repeat New Password'
                    style={formTextFieldStyle}
                />

                <Button
                    variant="contained"
                    style={accountButtonStyle}
                    onClick={() => {
                        alert('clicked');
                      }}
                >
                    Update Password
                </Button>

            </div>


            <h3 style={accountScreenWatermarkStyle}>AccountScreen</h3>
        </div>
    );
}
