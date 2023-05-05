export default function VideoContainer({ video }) {
  return (
    <div className="video-container flex justify-center items-center w-full">
      <video
        src={video}
        autoPlay={true}
        muted={true}
        loop={true}
        style={{
          zIndex: "-2",
          width: "100%",
          height: "auto",
        }}
      ></video>
    </div>
  );
}
