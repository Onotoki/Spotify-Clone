import React, { useContext, useCallback } from "react";
import { assets } from "../assets/frontend-assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const {
    track,
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    time,
    previous,
    next,
    seekSong,
    volumeRef,
    volume,
    muted,
    changeVolume,
    toggleMute,
  } = useContext(PlayerContext);

  const handleVolumeMouseDown = useCallback((e) => {
    changeVolume(e.clientX);
    const onMove = (e) => changeVolume(e.clientX);
    const onUp = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  }, [changeVolume]);

  return track ? (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      {/* left */}
      <div className="hidden lg:flex items-center gap-4">
        <img src={track.image} className="w-12" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      {/* middle */}
      <div className="flex flex-col items-center gap-1 m-auto">
        {/* Player icon */}
        <div className="flex gap-4">
          <img src={assets.shuffle_icon} className="w-4 cursor-pointer" />
          <img
            onClick={previous}
            src={assets.prev_icon}
            className="w-4 cursor-pointer"
          />
          {playStatus ? (
            <img
              onClick={pause}
              src={assets.pause_icon}
              className="w-4 cursor-pointer"
            />
          ) : (
            <img
              onClick={play}
              src={assets.play_icon}
              className="w-4 cursor-pointer"
            />
          )}
          <img
            onClick={next}
            src={assets.next_icon}
            className="w-4 cursor-pointer"
          />
          <img src={assets.loop_icon} className="w-4 cursor-pointer" />
        </div>
        {/* Player timer */}
        <div className="flex items-center gap-5">
          <p>
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-green-800 rounded-full"
            />
          </div>
          <p>
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>
      {/* right */}
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img src={assets.plays_icon} className="w-4" />
        <img src={assets.mic_icon} className="w-4" />
        <img src={assets.queue_icon} className="w-4" />
        <div onClick={toggleMute} className="w-5 cursor-pointer">
          {muted || volume === 0 ? (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
          )}
        </div>
        <div
          ref={volumeRef}
          onMouseDown={handleVolumeMouseDown}
          className="w-20 bg-slate-50 h-1 rounded cursor-pointer"
        >
          <div
            className="h-full bg-green-800 rounded"
            style={{ width: `${muted ? 0 : volume * 100}%` }}
          ></div>
        </div>
        <img src={assets.mini_player_icon} className="w-4" />
        <img src={assets.zoom_icon} className="w-4" />
      </div>
    </div>
  ) : null;
};

export default Player;
