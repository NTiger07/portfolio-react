const Skills = () => {
  const tools = [
    { name: "React", image: "/svgs/React-Dark.svg" },
    { name: "TailwindCSS", image: "/svgs/TailwindCSS-Dark.svg" },
    { name: "NodeJS", image: "/svgs/NodeJS-Dark.svg" },
    { name: "ExpressJS", image: "/svgs/expressjs.svg" },
    { name: "Git", image: "/svgs/Git.svg" },
    { name: "TypeScript", image: "/svgs/TypeScript.svg" },
    { name: "JavaScript", image: "/svgs/JavaScript.svg" },
    { name: "GitHub", image: "/svgs/Github-Dark.svg" },
    { name: "VSCode", image: "/svgs/VSCode-Dark.svg" },
    { name: "Postman", image: "/svgs/postman.svg" },
    { name: "Redux", image: "/svgs/Redux.svg" },
    { name: "MongoDB", image: "/svgs/MongoDB.svg" },
    { name: "MaterialUI", image: "/svgs/MUI.svg" },
  ]
  return (
    <div className="">
      <h2>MY ECOSYSTEM</h2>
      <div className="flex flex-wrap">
        {tools.map((tool) => (<span className="flex items-center">
          <img src={tool.image} alt={tool.name} className="w-4" />
          {tool.name}
        </span>))}
      </div>
    </div>
  );
};

export default Skills;
