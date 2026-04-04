import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Section } from '../components/Layout';
import { Button } from '../components/Button';
import { Navbar } from '../components/Navbar';
import { projects } from '../data/content';
import Footer from '../sections/Footer';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, Layout as LayoutIcon, Target, Zap, Briefcase, Rocket } from 'lucide-react';

const CaseStudyPage = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) return <div className="min-h-screen flex items-center justify-center dark:bg-[#0A0A0A] dark:text-white">Project not found</div>;

    const { metadata, caseStudy } = project;

    return (
        <div className="min-h-screen bg-white dark:bg-[#0A0A0A] dark:text-white">
            <Navbar />

            {/* Hero */}
            <header className="pt-32 pb-20 bg-gray-50 dark:bg-[#111] uppercase italic">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex flex-wrap gap-2 mb-6 not-italic">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-xs font-bold uppercase tracking-widest text-accent bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 max-w-4xl leading-tight tracking-tight dark:text-white">
                            {project.title}
                        </h1>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-200 dark:border-gray-700 not-italic">
                            <div>
                                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Partner</span>
                                <span className="font-medium text-black dark:text-white">{metadata?.client || "Self-Initiated"}</span>
                            </div>
                            <div>
                                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Industry</span>
                                <span className="font-medium text-black dark:text-white">{metadata?.industry || "Design"}</span>
                            </div>
                            <div>
                                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Objective</span>
                                <span className="font-medium text-black dark:text-white">{metadata?.type || "Product Design"}</span>
                            </div>
                            <div>
                                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Year</span>
                                <span className="font-medium text-black dark:text-white">{metadata?.year || "2023"}</span>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </header>

            {/* Content Header (Strategy & Goals) */}
            <Section>
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                            <h2 className="text-2xl font-bold mb-6 italic uppercase underline decoration-accent decoration-2 underline-offset-8 dark:text-white">Executive Summary</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                                {caseStudy?.overview || project.description}
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-3">
                                    <Target className="text-accent w-5 h-5 mt-1 shrink-0" />
                                    <div>
                                        <span className="block font-bold dark:text-white">The Goal</span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">{caseStudy?.goal}</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <LayoutIcon className="text-accent w-5 h-5 mt-1 shrink-0" />
                                    <div>
                                        <span className="block font-bold dark:text-white">The Challenge</span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">{caseStudy?.challenge}</span>
                                    </div>
                                </div>
                                {caseStudy?.strategy && (
                                    <div className="flex items-start gap-3">
                                        <Briefcase className="text-accent w-5 h-5 mt-1 shrink-0" />
                                        <div>
                                            <span className="block font-bold dark:text-white">Core Strategy</span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">{caseStudy.strategy}</span>
                                        </div>
                                    </div>
                                )}
                                {caseStudy?.leadership && (
                                    <div className="flex items-start gap-3">
                                        <Rocket className="text-accent w-5 h-5 mt-1 shrink-0" />
                                        <div>
                                            <span className="block font-bold dark:text-white">Leadership Role</span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">{caseStudy.leadership}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="lg:col-span-8 space-y-24">
                            {caseStudy?.sections.map((section, idx) => (
                                <section key={idx} className="relative">
                                    <h3 className="text-3xl font-bold mb-8 italic uppercase tracking-tight flex items-center gap-4 dark:text-white">
                                        <span className="text-accent opacity-30 text-5xl not-italic">/</span>
                                        {section.title}
                                    </h3>
                                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                                        {section.content}
                                    </p>
                                    {section.list && (
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                                            {section.list.map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-[#111] rounded-xl border border-gray-100 dark:border-gray-800">
                                                    <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                                                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {section.impact && (
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            className="mt-12 p-8 bg-black dark:bg-[#111] rounded-2xl text-white shadow-xl relative overflow-hidden group"
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full -translate-y-16 translate-x-16 blur-3xl transition-transform group-hover:scale-110" />
                                            <div className="flex items-center gap-4 mb-4 relative z-10">
                                                <Zap className="text-yellow-400 fill-yellow-400" />
                                                <span className="text-sm uppercase tracking-widest font-bold">Business Outcome</span>
                                            </div>
                                            <h4 className="text-3xl font-bold mb-2 uppercase italic relative z-10">{section.impact.metric}</h4>
                                            <p className="text-gray-400 text-lg relative z-10">{section.impact.description}</p>
                                        </motion.div>
                                    )}
                                </section>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Next Project */}
            {project.id < projects.length && (
                <section className="py-24 border-t border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-[#111]/30">
                    <Container>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 px-4 py-1 border border-gray-200 dark:border-gray-700 rounded-full">Next Case Study</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-10 italic uppercase tracking-tighter dark:text-white">{projects[project.id].title}</h2>
                            <Link to={`/project/${project.id + 1}`}>
                                <Button variant="secondary" className="group uppercase px-8 py-4">
                                    Explore Project
                                    <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </div>
                    </Container>
                </section>
            )}

            {project.id === projects.length && (
                <section className="py-24 border-t border-gray-100 dark:border-gray-800 bg-black dark:bg-[#111] text-white">
                    <Container>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Archive Reached</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-10 italic uppercase tracking-tighter">Ready to architect your next high-impact product?</h2>
                            <Link to="/">
                                <Button className="group uppercase px-8 py-4 bg-white text-black hover:bg-gray-100 border-none">
                                    Back to Overview
                                    <ArrowLeft className="ml-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
                                </Button>
                            </Link>
                        </div>
                    </Container>
                </section>
            )}

            <Footer />
        </div>
    );
};

export default CaseStudyPage;
