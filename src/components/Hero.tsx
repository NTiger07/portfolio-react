const Hero = () => {
  return (
    <div className="flex items-center h-[80vh]">
      <div className="w-1/2">
        <span>Journey Of A Fullstack Developer,</span>
        <p>
          I'm Favour Olaleru, Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolor nulla distinctio eveniet aperiam adipisci, temporibus sit obcaecati maxime sed ex.
        </p>
        <div className="flex items-center">
          <button className="flex items-center"><img src="/svgs/document.svg" alt="" />Get Resume</button>
          <button>Contact Me</button>
        </div>
      </div>
      <div className="bg-black w-1/2"></div>
    </div>
  )
}

export default Hero