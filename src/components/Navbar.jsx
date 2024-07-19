import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleDivClick = (index) => {
    setActiveItem(index);
  };
  const navigate = useNavigate();

  const handleProjectsClick = () => {
    navigate('/Projects');
  };

  const handleTutorialClick = () => {
    navigate('/Tutorial');
  };

  return (
    <>
      <img
        className="w-44 mx-4"
        src="src/assets/Presentation1.png"
        alt="Logo"
      />
      <ul>
        <button
          className="w-full font-bold py-4 px-4 rounded flex items-center transform transition-transform duration-300"
          onClick={() => handleDivClick(0)}
        >
          <div
            className={`nav-item ${activeItem === 0 ? 'active' : ''} hover:bg-hover`}
            style={{
              backgroundColor: activeItem === 0 ? '#F8EFFF' : '',
              transition: 'background-color 0.3s ease',
              transform: activeItem === 0 ? 'translateY(-2px)' : '',
              borderRadius: '10px', // Changed to rounded rectangle
              boxShadow: activeItem === 0 ? '0 0 10px rgba(0, 0, 0, 0.2)' : '',
            }}
          >
            <li className="flex items-center py-0 p-9">
              <img src="src/assets/projects.svg" className="w-6 h-16" alt="Home" />
              <pre className="text-lg text-black">  Home    </pre>
            </li>
          </div>
        </button>
        <button
          className="w-full font-bold py-4 px-4 rounded flex items-center transform transition-transform duration-300"
          onClick={handleProjectsClick}
        >
          <div
            className={`nav-item ${activeItem === 1 ? 'active' : ''} hover:bg-hover`}
            style={{
              backgroundColor: activeItem === 1 ? '#F8EFFF' : '',
              transition: 'background-color 0.3s ease',
              transform: activeItem === 1 ? 'translateY(-2px)' : '',
              borderRadius: '10px', // Changed to rounded rectangle
              boxShadow: activeItem === 1 ? '0 0 10px rgba(0, 0, 0, 0.2)' : '',
            }}
          >
            <li className="flex items-center py-0 p-9">
              <img src="src/assets/projects.svg" className="w-6 h-16" alt="Projects" />
              <pre className="text-lg text-black">  Projects</pre>
            </li>
          </div>
        </button>
        <button
          className="w-full font-bold py-4 px-4 rounded flex items-center transform transition-transform duration-300"
          onClick={handleTutorialClick}
        >
          <div
            className={`nav-item ${activeItem === 2 ? 'active' : ''} hover:bg-hover`}
            style={{
              backgroundColor: activeItem === 2 ? '#F8EFFF' : '',
              transition: 'background-color 0.3s ease',
              transform: activeItem === 2 ? 'translateY(-2px)' : '',
              borderRadius: '10px', // Changed to rounded rectangle
              boxShadow: activeItem === 2 ? '0 0 10px rgba(0, 0, 0, 0.2)' : '',
            }}
          >
            <li className="flex items-center py-0 p-9">
              <img src="src/assets/projects.svg" className="w-6 h-16" alt="Tutorial" />
              <pre className="text-lg text-black">  Tutorial</pre>
            </li>
          </div>
        </button>
      </ul>
    </>
  );
};

export default NavBar;
