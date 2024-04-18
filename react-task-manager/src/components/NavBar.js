import { Link } from 'react-router-dom';

const NavBar = () => {
 return (
 <nav>
       <ul>
          <li>
             <Link to="/">Welcome</Link>
          </li>
          <li>
             <Link to="/profile">User Profile</Link>
          </li>
          <li>
             <Link to="/tasks">Task Manager</Link>
          </li>
       </ul>
 </nav>
 );
};

export default NavBar;