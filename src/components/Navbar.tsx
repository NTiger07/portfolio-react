const Navbar = () => {
    return (
        <div className="flex items-center justify-between">
            <span className="favour flex font-semibold text-[3rem]">Favour Olaleru</span>
            <div className="flex items-center gap-2">
                <span className="cursor-pointer">Home</span>
                <span className="cursor-pointer">Works</span>
                <span className="cursor-pointer">About Me</span>
                <span className="cursor-pointer">Contact Me</span>
            </div>
            <div className="flex items-center">
                <span><img src="/svgs/github.svg" alt="" className="w-5" /></span>
                <button className="flex items-center"><img src="/svgs/document.svg" alt="" />Get Resume</button>

            </div>
        </div>
    )
}

export default Navbar