import "../components/CreateVideo.css";
import { useState, useEffect, useRef } from "react";

function CreateVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLeftAdjacentDiv, setShowLeftAdjacentDiv] = useState(false);
  const [showRightAdjacentDiv, setShowRightAdjacentDiv] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const videoRef = useRef(null);

  const handleLeftIconClick = () => {
    setShowLeftAdjacentDiv(!showLeftAdjacentDiv);
  };

  const handleRightIconClick = () => {
    setShowRightAdjacentDiv(!showRightAdjacentDiv);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (amount) => {
    if (amount === "start") {
      videoRef.current.currentTime = 0;
    } else if (amount === "end") {
      videoRef.current.currentTime = videoRef.current.duration;
    } else {
      videoRef.current.currentTime += amount;
    }
  };

  const handleFullScreen = () => {
    const video = videoRef.current;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  };

  useEffect(() => {
    const video = videoRef.current;

    const updateCurrentTime = () => {
      setCurrentTime(video.currentTime);
      setTotalDuration(video.duration);
    };

    const handleVideoEnded = () => {
      setIsPlaying(false); // Set isPlaying to false when the video ends
    };

    video.addEventListener("timeupdate", updateCurrentTime);
    video.addEventListener("loadedmetadata", updateCurrentTime);
    video.addEventListener("ended", handleVideoEnded); // Listen for the ended event

    return () => {
      video.removeEventListener("timeupdate", updateCurrentTime);
      video.removeEventListener("loadedmetadata", updateCurrentTime);
      video.removeEventListener("ended", handleVideoEnded); // Clean up the event listener
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const milliseconds = Math.floor((time - Math.floor(time)) * 1000);

    return `${minutes}:${seconds.toString().padStart(2, "0")}.${milliseconds
      .toString()
      .padStart(3, "0")}`;
  };

  return (
    <div className="h-screen overflow-y-clip fixed w-screen">
      <header className="h-12 bg-gradient-to-r from-gray-700 to-gray-700 flex items-center px-5">
        <img src="src/assets/menu_icon.png" alt="menu" className="h-8 w-8" />
        <img
          src="src/assets/Presentation1.png"
          alt="logo"
          className="h-16 w-18 ml-6"
        />
      </header>

      <div className="flex h-full relative">
        {/* Left Sidebar */}
        <div className="w-20 bg-gradient-to-b from-gray-700 to-black flex flex-col items-center pt-5 space-y-6 ">
          <button
            className="flex flex-col items-center"
            onClick={handleLeftIconClick}
          >
            <img
              src="src/assets/folder_icon.png"
              alt="folder"
              className="h-6 w-6 mb-2"
            />
            <span className="text-white text-xs">Folder</span>
          </button>
          <button
            className="flex flex-col items-center"
            onClick={handleLeftIconClick}
          >
            <img
              src="src/assets/video_icon.png"
              alt="record"
              className="h-6 w-6 mb-2"
            />
            <span className="text-white text-xs">Record</span>
          </button>
          <button
            className="flex flex-col items-center"
            onClick={handleLeftIconClick}
          >
            <img
              src="src/assets/text_icon.png"
              alt="text"
              className="h-6 w-6 mb-2"
            />
            <span className="text-white text-xs">Text</span>
          </button>
          <button
            className="flex flex-col items-center"
            onClick={handleLeftIconClick}
          >
            <img
              src="src/assets/grid_box.png"
              alt="templates"
              className="h-6 w-6 mb-2"
            />
            <span className="text-white text-xs">Templates</span>
          </button>
          <button
            className="flex flex-col items-center"
            onClick={handleLeftIconClick}
          >
            <img
              src="src/assets/transition_icon.png"
              alt="transitions"
              className="h-6 w-6 mb-2"
            />
            <span className="text-white text-xs">Transitions</span>
          </button>
        </div>

        {/* Adjacent Div for Left Sidebar */}
        <div
          className={`adjacent-div left ${showLeftAdjacentDiv ? "show" : ""}`}
        ></div>

        {/* Main Content */}
        <div className="flex-grow bg-gradient-to-b from-gray-500 to-gray-800 flex flex-col items-center justify-center transition-all duration-300 ${showLeftAdjacentDiv ? 'ml-10' : ''} ${showRightAdjacentDiv ? 'mr-10' : ''}">
          <div className="video-container" id="video-container">
            <video
              className="video-element"
              id="video-element"
              src="src/assets/rhino.mp4"
              ref={videoRef}
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="video-controls">
            <div className="control-icons-left">
              <button>
                <img src="src/assets/caption_icon.png" alt="Captions On/Off" />
              </button>
            </div>
            <div className="control-icons">
              <button onClick={() => handleSeek(-10)}>
                <img src="src/assets/backward_10.png" alt="10secs Backwards" />
              </button>
              <button onClick={() => handleSeek("start")}>
                <img src="src/assets/fast_backward.png" alt="Backwards" />
              </button>
              <button onClick={handlePlayPause}>
                <img
                  src={
                    isPlaying ? "src/assets/pause.png" : "src/assets/play.png"
                  }
                  alt={isPlaying ? "Pause" : "Play"}
                />
              </button>
              <button onClick={() => handleSeek("end")}>
                <img src="src/assets/fast_forward.png" alt="Forwards" />
              </button>
              <button onClick={() => handleSeek(10)}>
                <img src="src/assets/forward_10.png" alt="10secs Forwards" />
              </button>
            </div>
            <div className="control-icons-right">
              <button onClick={handleFullScreen}>
                <img src="src/assets/fullscreen.png" alt="Full Screen" />
              </button>
            </div>
          </div>
          <hr />

          <div className="video-frames">
            <div className="video-frames-header">
              <div className="header-icons-left">
                <img
                  src="src/assets/undo_icon.png"
                  alt="Undo"
                  className="header-icon"
                />
                <img
                  src="src/assets/redo_icon.png"
                  alt="Redo"
                  className="header-icon"
                />
                <img
                  src="src/assets/split_icon.png"
                  alt="Trim"
                  className="header-icon"
                />
                <img
                  src="src/assets/duplicate_icon.png"
                  alt="Copy"
                  className="header-icon"
                />
                <img
                  src="src/assets/delete_icon.png"
                  alt="Delete"
                  className="header-icon"
                />
              </div>
              <div className="time-display">
                <p>
                  <span>{formatTime(currentTime)}</span> /{" "}
                  <span id="total">{formatTime(totalDuration)}</span>
                </p>
              </div>
              <div className="header-icons-right">
                <img
                  src="src/assets/zoomin_icon.png"
                  alt="Zoom In"
                  className="header-icon"
                />
                <img
                  src="src/assets/zoomout_icon.png"
                  alt="Zoom Out"
                  className="header-icon"
                />
              </div>
            </div>
            <div className="video-frames-content">
              <div className="frame-box"></div>
            </div>
            <p>
              Video Frames (e.g., thumbnails of video frames can be added here)
            </p>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-20 bg-gradient-to-b from-gray-700 to-black flex flex-col items-center pt-5 space-y-6">
          <button
            className="flex flex-col items-center"
            onClick={handleRightIconClick}
          >
            <img
              src="src/assets/caption_icon.png"
              alt="captions"
              className="h-6 w-6 mb-2"
            />
            <span className="text-white text-xs">Captions</span>
          </button>
          <button
            className="flex flex-col items-center"
            onClick={handleRightIconClick}
          >
            <img
              src="src/assets/audio_icon.png"
              alt="sound"
              className="h-6 w-6 mb-2"
            />
            <span className="text-white text-xs">Sound</span>
          </button>
          <button
            className="flex flex-col items-center"
            onClick={handleRightIconClick}
          >
            <img
              src="src/assets/filter_icon.png"
              alt="filters"
              className="h-6 w-6 mb-2"
            />
            <span className="text-white text-xs">Filters</span>
          </button>
          <button
            className="flex flex-col items-center"
            onClick={handleRightIconClick}
          >
            <img
              src="src/assets/color_icon.png"
              alt="Color"
              className="h-6 w-6 mb-2"
            />
            <span className="text-white text-xs">Color</span>
          </button>
          <button
            className="flex flex-col items-center"
            onClick={handleRightIconClick}
          >
            <img
              src="src/assets/speed_icon.png"
              alt="Speed"
              className="h-6 w-6 mb-2"
            />
            <span className="text-white text-xs">Speed</span>
          </button>
        </div>

        {/* Adjacent Div for Right Sidebar */}
        <div
          className={`adjacent-div right ${showRightAdjacentDiv ? "show" : ""}`}
        ></div>
      </div>
    </div>
  );
}

export default CreateVideo;
