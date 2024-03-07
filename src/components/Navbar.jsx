import { useState } from 'react';
const NavBar = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleDivClick = (index) => {
    setActiveItem(index);
  };

  return (
    <>
      <img
        className="w-44 mx-4"
        src="src\assets\Presentation1.png"
        alt="Logo"
      />
      <ul>
        <button className="w-full  hover  font-bold py-4 px-4 rounded flex items-center">
          <div
            onClick={() => handleDivClick(0)}
            className={`nav-item ${activeItem === 0 ? 'active' : ''}`}
            style={{
              backgroundColor: activeItem === 0 ? 'rgb(0, 176, 253)' : '',
              transition: 'background-color 0.3s ease',
            }}
          >
            <li className="flex items-center py-0 p-9">
              <img src="src/assets/projects.svg" className="w-6 h-16" alt="Home" />
              <pre className="text-lg text-black">  Home    </pre>
            </li>
          </div>
        </button>
        <button className="w-full hover font-bold py-4 px-4 rounded flex items-center">
          <div
            onClick={() => handleDivClick(1)}
            className={`nav-item ${activeItem === 1 ? 'active' : ''}`}
            style={{
              backgroundColor: activeItem === 1 ? 'rgb(0, 176, 253)' : '',
              transition: 'background-color 0.3s ease',
            }}
          >
            <li className="flex items-center py-0 p-9">
              <img src="src/assets/projects.svg" className="w-6 h-16" alt="Home" />
              <pre className="text-lg text-black">  Projects</pre>
            </li>
          </div>
        </button>
        <button className="w-full  hover font-bold py-4 px-4 rounded flex items-center">
          <div
            onClick={() => handleDivClick(2)}
            className={`nav-item ${activeItem === 2 ? 'active' : ''}`}
            style={{
              backgroundColor: activeItem === 2 ? 'rgb(0, 176, 253)' : '',
              transition: 'background-color 0.3s ease',
            }}
          >
            <li className="flex items-center py-0 p-9">
              <img src="src/assets/projects.svg" className="w-6 h-16" alt="Home" />
              <pre className="text-lg text-black">  Tutorial</pre>
            </li>
          </div>
        </button>
      </ul>
    </>
  );
};

export default NavBar;