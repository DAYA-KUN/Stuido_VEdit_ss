import Resources from "./Resources";
import Header from "./Header";
import Video from "./Video";
import Timestamp from "./Timestamp";
import Layers from "./Layers";
// import "./Editpage.css";
// import "./Header.css";
// import "./Resources.css";
// import "./Video.css";
// import "./Timestamp.css";
// import "./Layers.css";
const  CreateVideo = () => {
  return (
    <>
      <section >
        <div className="layout ">
          <header className="flex max-w-fit ">
            <div className="content1">
              <Header />
            </div>
          </header>
          <div className="content2 centered">
            <Resources />
          </div>
          <div className="content3 centered">
            <Video />
          </div>
          <div className="content4 centered">
            <Timestamp />
          </div>
          <div className="content5 centered">
            <Layers />
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateVideo ;
