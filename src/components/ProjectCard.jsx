import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const ProjectCard = ({ project, index = 0 }) => {
    return (
        <Link
            to={`/project/${project.id}`}
            className="group block py-10 first:pt-0 last:pb-0"
        >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-[11px] uppercase tracking-widest font-semibold text-gray-400">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h3 className="text-xl font-bold leading-tight text-black dark:text-white group-hover:text-accent transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm leading-relaxed max-w-2xl">
                        {project.description}
                    </p>
                </div>
                <ArrowUpRight className="w-5 h-5 shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-black dark:group-hover:text-white group-hover:rotate-45 transition-all duration-300 md:opacity-0 md:group-hover:opacity-100" />
            </div>
        </Link>
    );
};
