import { useState } from "react";
import "../components/CreateVideo.css";

function CreateVideo (){
  const [isLeftSidebarVisible, setIsLeftSidebarVisible] = useState(false);
  const [isRightSidebarVisible, setIsRightSidebarVisible] = useState(false);

  const toggleLeftSidebar = () => {
    setIsLeftSidebarVisible(!isLeftSidebarVisible);
  };

  const toggleRightSidebar = () => {
    setIsRightSidebarVisible(!isRightSidebarVisible);
  };

  return (
    <div className="h-screen overflow-y-clip">
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
        <div
          className={`relative ${
            isLeftSidebarVisible ? "w-20" : "w-20"
          } bg-gradient-to-b from-gray-700 to-black flex flex-col items-center pt-5 space-y-6`}
        >
          <div className="flex flex-col items-center">
            <img
              src="src/assets/folder_icon.png"
              alt="folder"
              className="h-6 w-6 mb-2"
            />
            <span className="text-white text-xs">Folder</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="src/assets/video_icon.png"
              alt="record"
              className="h-6 w-6 mb-2"
            />
            <span className="text-white text-xs">Record</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="src/assets/text_icon.png"
              alt="text"
              className="h-6 w-6 mb-2"
            />
            <span className="text-white text-xs">Text</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="src/assets/grid_box.png"
              alt="templates"
              className="h-6 w-6 mb-2"
            />
            <span className="text-white text-xs">Templates</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="src/assets/transition_icon.png"
              alt="transitions"
              className="h-6 w-6 mb-2"
            />
            <span className="text-white text-xs">Transitions</span>
          </div>
        </div>

        <button
          onClick={toggleLeftSidebar}
          className={`absolute ${
            isLeftSidebarVisible ? "left-40 top-1/3" : "left-20 top-1/3"
          } transform -translate-y-1/2 bg-gray-500 rounded-full p-1 focus:outline-none transition-all duration-300`}
        >
          <img
            src={
              isLeftSidebarVisible
                ? "src/assets/left_arrow.png"
                : "src/assets/right_arrow.png"
            }
            alt="toggle"
            className="h-4 w-4"
          />
        </button>

        {isLeftSidebarVisible && (
          <div className="w-40 bg-gradient-to-b from-gray-700 to-black flex flex-col items-center pt-5 space-y-6">
            <div className="flex flex-col items-center">
              <img
                src="src/assets/folder_icon.png"
                alt="folder"
                className="h-6 w-6 mb-2"
              />
              <span className="text-white text-xs">Folder</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="src/assets/video_icon.png"
                alt="record"
                className="h-6 w-6 mb-2"
              />
              <span className="text-white text-xs">Record</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="src/assets/text_icon.png"
                alt="text"
                className="h-6 w-6 mb-2"
              />
              <span className="text-white text-xs">Text</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="src/assets/grid_box.png"
                alt="templates"
                className="h-6 w-6 mb-2"
              />
              <span className="text-white text-xs">Templates</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="src/assets/transition_icon.png"
                alt="transitions"
                className="h-6 w-6 mb-2"
              />
              <span className="text-white text-xs">Transitions</span>
            </div>
          </div>
        )}

        <div className="flex-grow bg-gradient-to-b from-gray-500 to-gray-800 flex flex-col items-center justify-center">
          <div className="video-container">
            <video
              className="video-element"
              controls
              src="your-video-source.mp4"
            >
              Your browser does not support the video tag.
            </video>
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
        <div
          className={`relative ${
            isRightSidebarVisible ? "w-20" : "w-20"
          } bg-gradient-to-b from-gray-700 to-black flex flex-col items-center pt-5 space-y-6`}
        >
          <div className="flex flex-col items-center">
            <img
              src="src/assets/caption_icon.png"
              alt="captions"
              className="h-6 w-6 mb-2"
            />
            <span className="text-white text-xs">Captions</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="src/assets/audio_icon.png"
              alt="sound"
              className="h-6 w-6 mb-2"
            />
            <span className="text-white text-xs">Sound</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="src/assets/filter_icon.png"
              alt="filters"
              className="h-6 w-6 mb-2"
            />
            <span className="text-white text-xs">Filters</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="src/assets/color_icon.png"
              alt="color"
              className="h-6 w-6 mb-2"
            />
            <span className="text-white text-xs">Color</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="src/assets/transition_icon.png"
              alt="transitions"
              className="h-6 w-6 mb-2"
            />
            <span className="text-white text-xs">Transitions</span>
          </div>
        </div>

        <button
          onClick={toggleRightSidebar}
          className={`absolute ${
            isRightSidebarVisible ? "right-40 top-1/3" : "right-20 top-1/3"
          } transform -translate-y-1/2 bg-gray-500 rounded-full p-1 focus:outline-none transition-all duration-300`}
        >
          <img
            src={
              isRightSidebarVisible
                ? "src/assets/right_arrow.png"
                : "src/assets/left_arrow.png"
            }
            alt="toggle"
            className="h-4 w-4"
          />
        </button>

        {isRightSidebarVisible && (
          <div className="w-40 bg-gradient-to-b from-gray-700 to-black flex flex-col items-center pt-5 space-y-6">
            <div className="flex flex-col items-center">
              <img
                src="src/assets/folder_icon.png"
                alt="folder"
                className="h-6 w-6 mb-2"
              />
              <span className="text-white text-xs">Folder</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="src/assets/video_icon.png"
                alt="record"
                className="h-6 w-6 mb-2"
              />
              <span className="text-white text-xs">Record</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="src/assets/text_icon.png"
                alt="text"
                className="h-6 w-6 mb-2"
              />
              <span className="text-white text-xs">Text</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="src/assets/grid_box.png"
                alt="templates"
                className="h-6 w-6 mb-2"
              />
              <span className="text-white text-xs">Templates</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="src/assets/transition_icon.png"
                alt="transitions"
                className="h-6 w-6 mb-2"
              />
              <span className="text-white text-xs">Transitions</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateVideo;
