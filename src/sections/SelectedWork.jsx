import React from 'react';
import { Container, Section } from '../components/Layout';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/content';

const SelectedWork = () => {
    return (
        <Section id="work" className="bg-white dark:bg-[#0A0A0A]">
            <Container>
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-4 italic uppercase dark:text-white">Selected Case Studies</h2>
                    <div className="h-1 w-12 bg-black dark:bg-white"></div>
                </div>
                <div className="divide-y divide-gray-200 dark:divide-gray-800">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default SelectedWork;
