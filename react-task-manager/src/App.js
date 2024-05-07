import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from './pages/Home/Welcome';
import Profile from './pages/Profile/Profile';
import Account from './pages/Profile/Account';
import Settings from './pages/Profile/Settings';
import TaskManager from './pages/TaskManager/TaskManager';
import ScheduleCalendar from './pages/TaskManager/ScheduleCalendar';
import Sidebar from './components/Sidebar/SideBar';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Support from './pages/Support';

function App() {
  return (
    <>
        <div style={{ 
            width: '100%',
            height: '500px',
            // backgroundColor: 'blue',
        }}>
            <Sidebar />
            <Routes>
                <Route path="/" exact element={<Welcome />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/account" element={<Account />} />
                <Route path="/profile/settings" element={<Settings />} />
                <Route path="/tasks" element={<TaskManager />} />
                <Route path="/schedule/calendar" element={<ScheduleCalendar />} />
                <Route
                    path="/about-us"
                    element={<AboutUs />}
                />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
                <Route
                    path="/support"
                    element={<Support />}
                />
            </Routes>
        </div>
    </>
  );
}

export default App;
