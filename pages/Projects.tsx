import { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Filter } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: 'Modern Workspace Design',
      category: 'Interior Design',
      tags: ['UI/UX', 'Web'],
      tools: ['Figma', 'Sketch', 'Photoshop'],
      description: 'A comprehensive redesign of a tech company\'s headquarters featuring warm tones, natural materials, and innovative spatial solutions. This project combines functionality with aesthetic appeal, creating an inspiring environment for creative collaboration and productivity.',
      image: 'https://images.unsplash.com/photo-1630283018262-d0df4afc2fef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjUyNjQyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      year: '2024',
    },
    {
      id: 2,
      title: 'Minimal Architecture Project',
      category: 'Architecture',
      tags: ['Architecture'],
      tools: ['AutoCAD', 'SketchUp', '3ds Max'],
      description: 'Clean lines and sustainable materials come together in this award-winning residential project. Every detail is carefully considered to create harmony between indoor and outdoor spaces, maximizing natural light while maintaining privacy and environmental consciousness.',
      image: 'https://images.unsplash.com/photo-1626828236991-5d6e6b5e97ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlJTIwZGVzaWdufGVufDF8fHx8MTc2NTI4MjEyNXww&ixlib=rb-4.1.0&q=80&w=1080',
      year: '2024',
    },
    {
      id: 3,
      title: 'Natural Elements Collection',
      category: 'Product Design',
      tags: ['Product', 'Branding'],
      tools: ['Blender', 'Illustrator', 'InDesign'],
      description: 'Organic textures and earth tones define this artisanal product line. From packaging to presentation, every element reflects our commitment to sustainable design practices and timeless aesthetic values that resonate with environmentally conscious modern consumers.',
      image: 'https://images.unsplash.com/photo-1686245928676-bdc52f818783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwd29vZCUyMHRleHR1cmV8ZW58MXx8fHwxNzY1MjU3NjEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      year: '2023',
    },
    {
      id: 4,
      title: 'Warm Interior Spaces',
      category: 'Interior Design',
      tags: ['UI/UX', 'Web'],
      tools: ['Figma', 'After Effects', 'Cinema 4D'],
      description: 'Creating inviting atmospheres through thoughtful material selection and innovative lighting design. This hospitality project transforms guest experiences through careful attention to comfort, functionality, and visual storytelling that connects with visitors on an emotional level.',
      image: 'https://images.unsplash.com/photo-1677274207822-e726bbba46e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJtJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzY1MjkyMDg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      year: '2024',
    },
    {
      id: 5,
      title: 'Brand Identity System',
      category: 'Branding',
      tags: ['Branding', 'UI/UX'],
      tools: ['Illustrator', 'Photoshop', 'InDesign'],
      description: 'A cohesive visual identity that captures the essence of modern luxury and timeless elegance. This comprehensive branding project includes logo design, typography system, color palette, and detailed brand guidelines ensuring consistent application across all touchpoints.',
      image: 'https://images.unsplash.com/photo-1760787545864-b468b6fe2c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBicmFuZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NjUyMzMwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      year: '2023',
    },
    {
      id: 6,
      title: 'Elegant Product Line',
      category: 'Product Design',
      tags: ['Product', 'Branding'],
      tools: ['Blender', 'Substance Painter', 'Photoshop'],
      description: 'Premium packaging and presentation that elevates the customer experience from first impression to final unboxing. This luxury product line demonstrates how thoughtful design at every touchpoint creates lasting brand loyalty and memorable consumer experiences.',
      image: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcHJvZHVjdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2NTI0OTM2OXww&ixlib=rb-4.1.0&q=80&w=1080',
      year: '2024',
    },
    {
      id: 7,
      title: 'Contemporary Architecture',
      category: 'Architecture',
      tags: ['Architecture', 'UI/UX'],
      tools: ['Revit', 'V-Ray', 'Rhino'],
      description: 'Pushing the boundaries of modern architectural design with innovative structural solutions and sustainable building practices. This commercial complex redefines urban spaces through bold geometric forms and environmentally responsible materials.',
      image: 'https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjUyMzY4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      year: '2023',
    },
    {
      id: 8,
      title: 'Creative Workspace Hub',
      category: 'Interior Design',
      tags: ['Web', 'UI/UX'],
      tools: ['Figma', 'Sketch', 'InVision'],
      description: 'Transforming traditional office environments into dynamic creative hubs that foster innovation and collaboration. This adaptive workspace design incorporates flexible furniture systems and technology integration to support diverse working styles.',
      image: 'https://images.unsplash.com/photo-1693159682660-c125e71844d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzY1MTk4Mzk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      year: '2024',
    },
    {
      id: 9,
      title: 'Minimalist Design Studio',
      category: 'Branding',
      tags: ['Branding', 'Web'],
      tools: ['Illustrator', 'After Effects', 'Premiere Pro'],
      description: 'A refined brand identity celebrating simplicity and functional beauty. This project demonstrates how restraint and careful curation can create powerful visual impact, proving that less truly is more when executed with precision and purpose.',
      image: 'https://images.unsplash.com/photo-1528262004378-a108d795029c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWduJTIwYWVzdGhldGljfGVufDF8fHx8MTc2NTI2NTQxMnww&ixlib=rb-4.1.0&q=80&w=1080',
      year: '2023',
    },
  ];

  const categories = ['All', 'Interior Design', 'Architecture', 'Product Design', 'Branding', 'Web', 'App', 'UI/UX'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter || p.tags.includes(activeFilter));

  return (
    <div className="min-h-screen bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-40 right-10 w-40 h-40 bg-[#F7D9C4] rounded-[28px] opacity-20 pointer-events-none"
      />

      {/* Header */}
      <section className="px-12 py-32 bg-white relative">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[14px] text-[#E7A47C] uppercase tracking-wider mb-4 block">Portfolio</span>
            <h1 className="text-[64px] text-[#2C2A28] mb-6 leading-tight">Our Projects</h1>
            <p className="text-[20px] text-[#6E6560] max-w-[800px] leading-relaxed mb-4">
              Explore our portfolio of carefully crafted projects that blend creativity, functionality, and timeless design principles. Each project represents our commitment to excellence and innovation.
            </p>
            <p className="text-[18px] text-[#6E6560] max-w-[800px] leading-relaxed">
              From concept to completion, we work closely with our clients to bring their vision to life, delivering solutions that not only meet but exceed expectations.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { number: '250+', label: 'Completed Projects' },
              { number: '150+', label: 'Happy Clients' },
              { number: '15+', label: 'Awards Won' },
              { number: '98%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-[42px] text-[#E7A47C] mb-2">{stat.number}</div>
                <div className="text-[15px] text-[#6E6560]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Strip */}
      <div className="h-2 bg-gradient-to-r from-[#F7D9C4] via-[#E7A47C] to-[#DFA58F]" />

      {/* Filter */}
      <section className="px-12 py-16 bg-[#F2E9E4] sticky top-[73px] z-40">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="w-5 h-5 text-[#E7A47C]" />
            <span className="text-[15px] text-[#4A3A33]">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category)}
                className={`px-8 py-3 rounded-full transition-all duration-300 border-2 ${
                  activeFilter === category
                    ? 'bg-[#E7A47C] text-white border-[#E7A47C] shadow-lg'
                    : 'bg-white text-[#4A3A33] border-[#E6D5B8] hover:border-[#E7A47C]'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
          <p className="text-[14px] text-[#6E6560] mt-4">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-12 py-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                      <ArrowUpRight className="w-5 h-5 text-[#E7A47C]" />
                    </div>
                    <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-[#4A3A33] text-[13px] rounded-full">
                        {project.year}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-[#F7D9C4] text-[#4A3A33] text-[12px] rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-[13px] text-[#E7A47C] mb-3 uppercase tracking-wider">
                      {project.category}
                    </p>
                    
                    <h3 className="text-[26px] text-[#2C2A28] mb-4 group-hover:text-[#E7A47C] transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-[15px] text-[#6E6560] leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="pt-6 border-t-2 border-[#F2E9E4]">
                      <p className="text-[13px] text-[#6E6560] mb-2">Tools Used:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, i) => (
                          <span key={i} className="text-[12px] text-[#4A3A33] bg-[#F2E9E4] px-3 py-1 rounded-full">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button onClick={() => navigate('/projects')} className="mt-6 w-full px-6 py-3 bg-[#F2E9E4] text-[#4A3A33] rounded-full hover:bg-[#E7A47C] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                      View Details
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Preview Section */}
      <section className="px-12 py-32 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[14px] text-[#E7A47C] uppercase tracking-wider mb-4 block">Our Process</span>
            <h2 className="text-[48px] text-[#2C2A28] mb-6">How We Bring Projects to Life</h2>
            <p className="text-[18px] text-[#6E6560] max-w-[800px] mx-auto leading-relaxed">
              Every project follows our proven methodology, ensuring exceptional results from concept to completion. Here's how we transform ideas into reality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Discovery',
                description: 'We start by understanding your goals, audience, and challenges through in-depth research and stakeholder interviews.',
              },
              {
                number: '02',
                title: 'Strategy',
                description: 'Developing a comprehensive roadmap with clear objectives, timelines, and success metrics aligned with your vision.',
              },
              {
                number: '03',
                title: 'Design',
                description: 'Creating beautiful, functional designs through iterative processes, incorporating feedback at every stage.',
              },
              {
                number: '04',
                title: 'Delivery',
                description: 'Launching your project with meticulous attention to detail, followed by ongoing support and optimization.',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#FAF7F2] rounded-[28px] p-10 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-[56px] text-[#E7A47C] mb-4 opacity-50">{step.number}</div>
                <h3 className="text-[24px] text-[#2C2A28] mb-4">{step.title}</h3>
                <p className="text-[15px] text-[#6E6560] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-12 py-32 bg-[#F7D9C4] relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-[#DFA58F] rounded-full opacity-20 blur-3xl"
        />

        <div className="max-w-[1100px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[52px] text-[#2C2A28] mb-6 leading-tight">Have a Project in Mind?</h2>
            <p className="text-[20px] text-[#6E6560] mb-6 leading-relaxed">
              Let&rsquo;s collaborate to bring your vision to life with our expertise in design and craftsmanship.
            </p>
            <p className="text-[16px] text-[#6E6560] mb-12 leading-relaxed">
              Whether you're starting from scratch or looking to refresh an existing project, our team is ready to help you achieve your goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-14 py-6 bg-[#E7A47C] text-white rounded-full hover:bg-[#DFA58F] transition-all duration-300 shadow-lg hover:shadow-2xl text-[16px]"
            >
              Start a Conversation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
