import  { useState } from 'react';


function Home() {
  const [activeItem, setActiveItem] = useState(null);

  const handleDivClick = (index) => {
    setActiveItem(index);
  };

  return (
    <>
      <section>
        <header className="flex bg-purple-50 items-center h-16 justify-between">
          <img className="h-full mx-4 my-4" src="src\assets\logo.png" alt="Logo" />
          <input
            type="text"
            className="w-96 h-8 rounded-lg px-9"
            placeholder="  Search"
          />
          <img className="h-14" src="src\assets\profile.png" alt="profile" />
        </header>
      </section>
      <div className="flex bg-black" style={{ backgroundImage: "url(src/assets/bg.png)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
        <nav className="w-60 bg-purple-50 h-[100vh]">
          <ul>
            <br></br>
            <br></br>
            <div onClick={() => handleDivClick(0)} className={`nav-item ${activeItem === 0 ? 'active' : ''}`}>
              <li className="flex items-center py-0 p-9">
                <img src="src\assets\projects.svg" className=" w-6 h-16"></img>
                <pre className="text-lg"> Home</pre>
              </li>
            </div>
            <div onClick={() => handleDivClick(1)} className={`nav-item ${activeItem === 1 ? 'active' : ''}`}>
              <li className="flex items-center py-0 p-9">
                <img src="src\assets\projects.svg" className=" w-6 h-16"></img>
                <pre className="text-lg"> Projects</pre>
              </li>
            </div>
            <div onClick={() => handleDivClick(2)} className={`nav-item ${activeItem === 2 ? 'active' : ''}`}>
              <li className="flex items-center py-0 p-9">
                <img src="src\assets\projects.svg" className=" w-6 h-16"></img>
                <pre className="text-lg"> Tutorial</pre>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Home;
