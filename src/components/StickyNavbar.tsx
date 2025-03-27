const StickyNavbar = () => {
    return (
        <div className="flex items-center">
            <span className="cursor-pointer">Home</span>
            <span className="cursor-pointer">Works</span>
            <span className="cursor-pointer">About Me</span>
            <span className="cursor-pointer">Contact Me</span>
            <span className="flex items-center">
                <img src="/svgs/document.svg" alt="" className="w-5" />
                Get Resume
            </span>
        </div>
    )
}

export default StickyNavbar