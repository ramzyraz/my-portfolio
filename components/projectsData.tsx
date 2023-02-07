type ProjectsTypes = {
    title: string;
    tech: string[],
    img: string,
    url: string,
}

export const projects: ProjectsTypes[] = [
    {
        title: "Mr.Fluffy Fluffs Lite",
        tech: [
            "React",
            "Node",
            "Express",
            "MongoDB",
          ],
          img: "/assets/projects/netflix.jpg",
          url: "https://github.com/ramzyraz"
    },
    {
        title: "Wordle",
        tech: [
            "React",
            "Bootstrap",
          ],
          img: "/assets/projects/twitch.jpg",
          url: "https://github.com/ramzyraz"
    },
    {
        title: "E-Libray",
        tech: [
            "Next",
            "Tailwind",
          ],
          img: "/assets/projects/property.jpg",
          url: "https://github.com/ramzyraz"
    },
    {
        title: "Served",
        tech: [
            "Next",
            "Material UI",
            "Sass"
          ],
          img: "/assets/projects/crypto.jpg",
          url: "https://github.com/ramzyraz"
    },
];