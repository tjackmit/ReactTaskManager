import React from 'react';
import TeamTab from '../../components/Tab/TeamTab.js';

const profileScreenStyle = {
    diplay: "flex",
    justifyContent: 'center',
};
const profileScreenWatermarkStyle = {
    opacity: 0
};

export default function Profile(props) {
    return (
        <div style={profileScreenStyle}>
            <b>Teams</b>
            <b>Team Members</b>
            <TeamTab/>

            <h3 style={profileScreenWatermarkStyle}>ProfileScreen</h3>
        </div>
    );
}
