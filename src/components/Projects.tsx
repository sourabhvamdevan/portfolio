import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "tensor processing unit",
      description: "Project on TPU (Tensor Processing Unit)",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
      github: "https://github.com/sourabhvamdevan/tensor-processing-unit",
      live: "https://example.com",
      tags: ["ml", "Docker"]
    },
    {
      title: "ML-codes",
      description: "machine learning codes for various subtopics",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
      github: "https://github.com/sourabhvamdevan/ml-codes",
      live: "https://example.com",
      tags: ["machine learning", "python", "numpy"]
    },
    {
      title: "Data Structures and Algorithms",
      description: "Project on Data Structures and Algorithms",
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&h=400&fit=crop",
      github: "https://github.com/sourabhvamdevan/DSA",
      live: "https://example.com",
      tags: ["DSA", "Analytical Skills", "Logical Reasoning"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  <a href={project.live} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;