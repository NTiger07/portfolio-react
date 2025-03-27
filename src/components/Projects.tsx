const Projects = () => {
    const projects = [
        { image: '/images/', title: 'Hotel Management System', description: 'The recipe app is a web-based application built with React. It utilizes the Edemam API to retrieve and display recipes based on the user search queries. The app features a clean and intuitive user interface that allows users to easily browse and search for recipes by ingredients, diet, cuisine origin and meal type. Deployed to Netlify.', tools: ['React', 'Node.js'], repo: "", website: "" },
        { image: '/images/', title: 'AI-Based Image-to-LaTeX System ', description: 'The recipe app is a web-based application built with React. It utilizes the Edemam API to retrieve and display recipes based on the user search queries. The app features a clean and intuitive user interface that allows users to easily browse and search for recipes by ingredients, diet, cuisine origin and meal type. Deployed to Netlify.', tools: ['React', 'Node.js'], repo: "", website: "" },
        { image: '/images/', title: 'Recipe App', description: 'The recipe app is a web-based application built with React. It utilizes the Edemam API to retrieve and display recipes based on the user search queries. The app features a clean and intuitive user interface that allows users to easily browse and search for recipes by ingredients, diet, cuisine origin and meal type. Deployed to Netlify.', tools: ['React', 'Node.js'], repo: "", website: "" },
    ]
    return (
        <div>
            <h1>
                My Projects
            </h1>
            <div className="flex flex-col">
                {projects.map((project, index) => (
                    <div className={`flex items-center ${index % 2 === 0 ? 'flex' : 'flex-row-reverse'}`} key={index}>
                        <img src={project.image} alt={project.title} />
                        <div>
                            <span>{project.title}</span>
                            <p>{project.description}</p>
                            <div className="flex flex-col">
                                <span>Built with: </span>
                                <div className="flex items-center gap-2">
                                    {project.tools.map((tool, index) => (
                                        <span key={index} className="bg-black">{tool}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects