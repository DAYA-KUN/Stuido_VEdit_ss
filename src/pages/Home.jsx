import NavBar from "../components/NavBar";
function Home() {
  return (
    <div className="flex h-screen sm:flex ">
      <div className=" bg-white sm:w-56 fixed h-screen">
        <NavBar />
      </div>

      <div
        className="pl-56 bg-slate-400 sm overflow-auto"
        style={{
          backgroundImage: "url('src/assets/bg2.png')",
          backgroundSize: "cover",
        }}
      >
        <header className="bg-white h-20 flex items-center justify-between px-4">
          <div className="flex items-center pl-14">
            <div className="relative">
              <input
                type="text"
                className="w-96  bg-search h-8 rounded-lg px-4 pr-10"
                placeholder="   Search Videos"
                style={{ paddingLeft: "2.5rem" }} // Add this line
              />
              <img
                className="absolute left-2 top-2 h-4 w-4"
                src="src/assets/search.png"
                alt="search"
              />
            </div>
          </div>
          <div className="flex items-center">
            <img
              className="h-14"
              src="src/assets/profile.png"
              alt="profile"
              title="Profile"
            />
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
            <button
              className="text-xl bg-teal-400 hover:bg-teal-500 text-white font-bold py-4 px-4 rounded flex items-center"
              title="Start a new editing"
            >
              <span dir="rtl" className="ps-80">
                {" "}
                Create A New Video{" "}
              </span>
              <img src="src\assets\add_icon.png" className="h-9 ml-2" />
            </button>
          </div>
          <br></br>
          <br></br>
          <div className="pb-72 pr-16 bg-main_div">
            <p
              className="pl-4 pt-4 font-extrabold text-black text-3xl"
              style={{ fontFamily: "Cool" }}
            >
              Your Videos
            </p>
            <br></br>

            <div className="pl-4 grid grid-rows-2 grid-cols-3 gap-4">
              <div className="bg-white p-4">
                <video controls>
                  <source src="src/assets/vid2.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="bg-white p-4">
                <video controls>
                  <source src="src/assets/vid2.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="bg-white p-4">
                <video controls>
                  <source src="src/assets/vid2.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="bg-white p-4">
                <video></video>
              </div>
              <div className="bg-white p-4">
                <video></video>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
