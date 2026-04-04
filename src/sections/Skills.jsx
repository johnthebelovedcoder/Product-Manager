import React from 'react';
import { Container, Section } from '../components/Layout';
import { skills } from '../data/content';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    { title: "Product Management", items: skills.productManagement },
    { title: "Analytics & Growth", items: skills.analyticsGrowth },
    { title: "Execution & Leadership", items: skills.executionLeadership },
    { title: "Design & Tools", items: skills.designTools },
    { title: "Industries", items: skills.industries },
  ];

  return (
    <Section id="skills">
      <Container>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Core Skills</h2>
          <div className="h-1 w-12 bg-black dark:bg-white"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.items.map((skill) => (
                  <li key={skill} className="flex items-center group">
                    <span className="text-lg font-medium text-gray-700 dark:text-gray-200 group-hover:text-accent transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Skills;
