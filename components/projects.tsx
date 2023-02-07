import ProjectItem from "./projectItem";
import { projects } from "./projectsData";

const Projects = () => {
  return (
    <div id="projects" className='flex flex-col max-w-2xl m-auto py-4 pb-12'>
        <div>
            <h2 className="text-[#319795] dark:text-[#4FD1C5] py-8">/ projects</h2>
            <p className="text-gray-600 dark:text-[#e5e5e5] pb-8">Check the following projects to find what I&apos;ve built:</p>
            <div className='grid md:grid-cols-2 gap-8'>
                {
                     projects.map((projectDetails, idx) => {
                        return (
                            <ProjectItem key={idx} {...projectDetails} />
                        );
                    })
                }
            </div>
        </div>        
    </div>
  );
};

export default Projects;
