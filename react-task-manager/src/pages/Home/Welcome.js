import React from 'react';

const welcomeScreenStyle = {
};
const welcomeScreenWatermarkStyle = {
    opacity: 0
};
const welcomeScreenHeaderStyle = {
};

export default function Welcome(props) {

    return (
        <div style={welcomeScreenStyle}>
            <h2 style={welcomeScreenHeaderStyle}>Welcome to Task Manager</h2>


            <h2 style={welcomeScreenWatermarkStyle}>WelcomeScreen</h2>
        </div>
    );
}
