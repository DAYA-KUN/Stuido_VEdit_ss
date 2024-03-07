import NavBar from "../components/NavBar";

function Home() {
  return (
    <div className="flex h-screen" >
      <div className=" bg-slate-100 w-56">
        <NavBar />
      </div>

      <div className="w-full bg-slate-400" style={{ backgroundImage: "url('src/assets/bg2.png')", backgroundSize: "cover" }}>
        <header className="bg-slate-100 h-20 flex items-center justify-between px-4">
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                className="w-96 h-8 rounded-lg px-4 pr-10"
                placeholder="   Search Videos"
              />
              <img
                className="absolute left-2 top-2 h-4 w-4"
                src="src/assets/search.png"
                alt="search"
              />
            </div>
          </div>
          <div className="flex items-center">
            <img className="h-14" src="src/assets/profile.png" alt="profile" />
          </div>
        </header>
        <section className="pl-16 pt-16">
          <div>
            <p
              className="text-3xl font-extrabold text-gray-800"
              style={{ fontFamily: "Cool" }}
            >
              Hello! Daya
            </p>
          </div>
          <div className="mt-4">
            <button className="text-xl bg-teal-400 hover:bg-teal-500 text-white font-bold py-4 px-4 rounded flex items-center">
              <span dir="rtl" className="ps-80">
                {" "}
                Create A New Video
              </span>
              <img src="src\assets\add_icon.png" className="h-9 ml-2" />
            </button>
          </div>
          <br></br><br></br>
          <div className="pb-72 pr-16 bg-teal-100">
            <p className="pl-4 pt-4 font-extrabold  text-black text-3xl" style={{fontFamily:"Cool"}}>Your Videos</p>
            <br></br>
            <br></br>
            
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
