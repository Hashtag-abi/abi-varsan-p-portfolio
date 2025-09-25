import React from 'react';
import { PortfolioData, ColorScheme } from '../types/portfolio';
import { Linkedin, Github, Twitter, Mail, Phone, MapPin, Globe, ExternalLink, FileText } from 'lucide-react';

interface Props {
  data: PortfolioData;
  colorScheme: ColorScheme;
}

export function BoldTemplate({ data, colorScheme }: Props) {
  return (
    <div style={{ backgroundColor: colorScheme.background, color: colorScheme.text }}>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <img
                src={data.personalInfo.profileImage || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300'}
                alt={data.personalInfo.name}
                className="w-80 h-80 rounded-full object-cover shadow-2xl"
                style={{ border: `6px solid ${colorScheme.primary}` }}
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h1 
                className="text-6xl lg:text-7xl font-black mb-6"
                style={{ color: colorScheme.primary }}
              >
                {data.personalInfo.name}
              </h1>
              <h2 
                className="text-3xl lg:text-4xl font-bold mb-8"
                style={{ color: colorScheme.secondary }}
              >
                {data.personalInfo.title}
              </h2>
              <p 
                className="text-xl lg:text-2xl mb-10 max-w-3xl"
                style={{ color: colorScheme.textSecondary }}
              >
                {data.personalInfo.bio}
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                {data.personalInfo.resumeFile && (
                  <a
                    href={data.personalInfo.resumeFile}
                    download={`${data.personalInfo.name.toLowerCase().replace(/\s+/g, '-')}-resume.pdf`}
                    className="px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-3"
                    style={{ backgroundColor: colorScheme.accent }}
                  >
                    <FileText size={20} />
                    Download Resume
                  </a>
                )}
                <a
                  href={`mailto:${data.personalInfo.email}`}
                  className="px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-3"
                  style={{ 
                    backgroundColor: 'transparent',
                    color: colorScheme.primary,
                    border: `2px solid ${colorScheme.primary}`
                  }}
                >
                  <Mail size={20} />
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24" style={{ backgroundColor: colorScheme.surface }}>
        <div className="container mx-auto px-6">
          <h2 
            className="text-5xl font-black text-center mb-20"
            style={{ color: colorScheme.primary }}
          >
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 text-center"
                style={{ backgroundColor: colorScheme.background }}
              >
                <h3 className="text-2xl font-bold mb-4" style={{ color: colorScheme.secondary }}>
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                  <div
                    className="h-4 rounded-full transition-all duration-1500"
                    style={{
                      width: `${skill.level * 20}%`,
                      background: `linear-gradient(90deg, ${colorScheme.primary}, ${colorScheme.accent})`
                    }}
                  ></div>
                </div>
                <span className="text-sm font-medium" style={{ color: colorScheme.textSecondary }}>
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 
            className="text-5xl font-black text-center mb-20"
            style={{ color: colorScheme.primary }}
          >
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {data.projects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105"
                style={{ backgroundColor: colorScheme.surface }}
              >
                {project.imageUrl && (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                )}
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4" style={{ color: colorScheme.secondary }}>
                    {project.title}
                  </h3>
                  <p className="text-lg mb-6" style={{ color: colorScheme.textSecondary }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 rounded-full text-sm font-semibold"
                        style={{
                          background: `${colorScheme.accent}20`,
                          color: colorScheme.accent
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-3"
                        style={{ backgroundColor: colorScheme.primary }}
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-3"
                        style={{ 
                          backgroundColor: 'transparent',
                          color: colorScheme.primary,
                          border: `2px solid ${colorScheme.primary}`
                        }}
                      >
                        <Github size={18} />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24" style={{ backgroundColor: colorScheme.surface }}>
        <div className="container mx-auto px-6">
          <h2 
            className="text-5xl font-black text-center mb-20"
            style={{ color: colorScheme.primary }}
          >
            Get In Touch
          </h2>
          <div 
            className="max-w-4xl mx-auto p-12 rounded-2xl shadow-xl text-center"
            style={{ backgroundColor: colorScheme.background }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="flex flex-col items-center gap-3">
                <Mail size={24} style={{ color: colorScheme.primary }} />
                <a 
                  href={`mailto:${data.personalInfo.email}`}
                  className="hover:underline font-semibold"
                  style={{ color: colorScheme.text }}
                >
                  {data.personalInfo.email}
                </a>
              </div>
              {data.personalInfo.phone && (
                <div className="flex flex-col items-center gap-3">
                  <Phone size={24} style={{ color: colorScheme.primary }} />
                  <span className="font-semibold">{data.personalInfo.phone}</span>
                </div>
              )}
              {data.personalInfo.location && (
                <div className="flex flex-col items-center gap-3">
                  <MapPin size={24} style={{ color: colorScheme.primary }} />
                  <span className="font-semibold">{data.personalInfo.location}</span>
                </div>
              )}
              {data.personalInfo.website && (
                <div className="flex flex-col items-center gap-3">
                  <Globe size={24} style={{ color: colorScheme.primary }} />
                  <a 
                    href={data.personalInfo.website}
                    className="hover:underline font-semibold"
                    style={{ color: colorScheme.text }}
                  >
                    Visit Website
                  </a>
                </div>
              )}
            </div>
            
            <div className="flex justify-center gap-8">
              {data.socialLinks.linkedin && (
                <a
                  href={data.socialLinks.linkedin}
                  className="p-6 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                  style={{ backgroundColor: colorScheme.primary, color: 'white' }}
                >
                  <Linkedin size={32} />
                </a>
              )}
              {data.socialLinks.github && (
                <a
                  href={data.socialLinks.github}
                  className="p-6 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                  style={{ backgroundColor: colorScheme.secondary, color: 'white' }}
                >
                  <Github size={32} />
                </a>
              )}
              {data.socialLinks.twitter && (
                <a
                  href={data.socialLinks.twitter}
                  className="p-6 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                  style={{ backgroundColor: colorScheme.accent, color: 'white' }}
                >
                  <Twitter size={32} />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}