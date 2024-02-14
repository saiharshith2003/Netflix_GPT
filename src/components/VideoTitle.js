

const VideoTitle = ({ title, overview }) => {
    return (
        <div className=" w-screen aspect-video pt-[21%] px-6 md:px-16 absolute text-white bg-gradient-to-r from-black">
            <div className="mt-10 md:m-0">
                <h1 className="md:p-2 text-base md:text-3xl font-bold">{title}</h1>
                <p className="hidden lg:block p-2 w-2/6 text-sm">{overview}</p>
            </div>
            <div className="py-2 pd:p-0">
                <button className="bg-white px-2 md:px-6 py-1 md:py-3 m-2  text-sm md:text-base font-bold rounded-md text-black hover:bg-opacity-60">▶Play</button>
                <button className="bg-gray-700 px-2 md:px-6 py-1 md:py-3 m-2  text-sm md:text-base font-bold rounded-md hover:bg-opacity-60">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle