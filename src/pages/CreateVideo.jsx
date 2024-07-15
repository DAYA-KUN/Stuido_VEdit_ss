function CreateVideo() {
  return (
    <div className="h-screen overflow-y-clip">
        <header className="h-10 bg-orange-700">
        <div>
          <img
            src="src/assets/menu_icon.png"
            alt="menu"
            className="h-8 w-8 pt-1 ml-5"
          />
        </div>
        <div className="pl-14">
          <img src="src/assets/Presentation1.png" alt="logo" className="h-8 w-8" />
        </div>   
        </header>
      
      <div className="flex h-screen">
        <div className="bg-red-500" style={{ width: "75px" }}></div>
        <div className="flex-grow bg-slate-400"></div>
        <div className="bg-red-500" style={{ width: "75px" }}></div>
      </div>
    </div>
  );
}

export default CreateVideo;
