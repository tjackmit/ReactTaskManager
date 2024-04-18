import React from 'react';

const taskManagerScreenStyle = {
};
const taskManagerScreenWatermarkStyle = {
    opacity: 0
};

export default function TaskManager(props) {
    return (
        <div style={taskManagerScreenStyle}>
            <h3 style={taskManagerScreenWatermarkStyle}>TaskManagerScreen</h3>
        </div>
    );
}
