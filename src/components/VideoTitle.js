

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-[18%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="p-2 text-3xl font-bold">{title}</h1>
            <p className="p-2 w-2/6 text-base">{overview}</p>
            <div>
                <button className="bg-white px-6 py-3 m-2  text-base font-bold rounded-md text-black hover:bg-opacity-60">▶Play</button>
                <button className="bg-gray-700 px-6 py-3 m-2  text-base font-bold rounded-md hover:bg-opacity-60">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle