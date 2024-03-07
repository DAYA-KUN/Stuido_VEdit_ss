import "./Resources.css";
const Resources = () => {
  return (
    <div>
      <navigator>
        <ul>
          <div>
            <button className="media">Import</button>
          </div>
          <br/>
          <div>
            <button className="media">Image</button>
          </div>
          <br/>
          <div>
            <button className="media">Audio</button>
          </div>
          <br/>
          <div>
            <button className="media">Video</button>
          </div>
          <br/>
          <div>
            <button className="media">Text</button>
          </div>
        </ul>
      </navigator>
    </div>
  );
};

export default Resources;
