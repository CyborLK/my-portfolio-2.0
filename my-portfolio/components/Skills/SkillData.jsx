import { FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaDocker, FaGitAlt } from "react-icons/fa";

export const skillData = {
    mainData: {
        title: "Skills",
        description: "A showcase of my professional technical abilities."
    },
    technical: {
        frontend: [
            { name: 'JavaScript', icon: FaJsSquare },
            { name: 'React.js', icon: FaReact }
        ],
        backend: [
            { name: 'Node.js', icon: FaNodeJs },
            { name: 'MongoDB', icon: FaDatabase }
        ],
        tools: [
            { name: 'Git & GitHub', icon: FaGitAlt },
            { name: 'Docker', icon: FaDocker }
        ]
    }
};
