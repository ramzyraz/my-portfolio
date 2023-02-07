type ExperiencesTypes = {
    name: string;
    content: { 
        title: string; 
        company: string; 
        date: string; 
        details: string[]; 
    }
}

export const experiences: ExperiencesTypes[] = [
    {
      name: "OneStream",
      content: {
        title: "Full Stack Developer",
        company: "OneStream Live",
        date: "Nov 2022 - Jan 2023",
        details: [
            "Implemented client-tailored CNC programs whilst optimising the virtual machining process",
            "Implemented client-tailored CNC programs whilst optimising the virtual machining process",
            "Implemented client-tailored CNC programs whilst optimising the virtual machining process",
            "Implemented client-tailored CNC programs whilst optimising the virtual machining process",
        ]
      }
    },
    {
        name: "Educative",
        content: {
            title: "Senior Technical Content Engineer",
            company: "Educative Inc",
            date: "March 2021 - Oct 2022",
            details: [
                "Implemented client-tailored CNC programs whilst optimising the virtual machining process",
                "Implemented client-tailored CNC programs whilst optimising the virtual machining process",
                "Implemented client-tailored CNC programs whilst optimising the virtual machining process",
                "Implemented client-tailored CNC programs whilst optimising the virtual machining process",
            ]
          }
    },
];