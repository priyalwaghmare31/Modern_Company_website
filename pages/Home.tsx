import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, ArrowRight, Zap, Users, Award, Clock, DollarSign, HeadphonesIcon, Code, Smartphone, Palette, Search, Wrench, CheckCircle } from 'lucide-react';
import { postSubscribe } from '../lib/api';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Home() {
  const navigate = useNavigate();
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<string | null>(null);
  const projects = [
    {
      id: 1,
      title: 'Modern Workspace Design',
      category: 'Interior Design',
      tags: ['UI/UX', 'Web', 'Branding'],
      image: 'https://images.unsplash.com/photo-1630283018262-d0df4afc2fef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjUyNjQyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'A comprehensive redesign of a tech company\'s headquarters featuring warm tones, natural materials, and innovative spatial solutions. This project combines functionality with aesthetic appeal, creating an inspiring environment for creative teams.',
    },
    {
      id: 2,
      title: 'Minimal Architecture',
      category: 'Architecture',
      tags: ['Architecture', 'Design'],
      image: 'https://images.unsplash.com/photo-1626828236991-5d6e6b5e97ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlJTIwZGVzaWdufGVufDF8fHx8MTc2NTI4MjEyNXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Clean lines and sustainable materials come together in this residential project. Every detail is carefully considered to create harmony between indoor and outdoor spaces, maximizing natural light and environmental consciousness.',
    },
    {
      id: 3,
      title: 'Natural Elements Collection',
      category: 'Product Design',
      tags: ['Product', 'Branding'],
      image: 'https://images.unsplash.com/photo-1686245928676-bdc52f818783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwd29vZCUyMHRleHR1cmV8ZW58MXx8fHwxNzY1MjU3NjEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Organic textures and earth tones define this artisanal product line. From packaging to presentation, every element reflects our commitment to sustainable design practices and timeless aesthetic values that resonate with modern consumers.',
    },
  ];

  const services = [
    {
      icon: <Code className="w-7 h-7" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user experiences that engage, delight, and convert. We focus on user-centered design principles to deliver interfaces that are both functional and aesthetically pleasing.',
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: 'Web Development',
      description: 'Building responsive, fast, and scalable websites using modern technologies. Our development process ensures your site performs flawlessly across all devices while maintaining clean, maintainable code.',
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: 'App Development',
      description: 'Developing native and cross-platform mobile applications that provide seamless experiences. From concept to deployment, we handle every aspect of bringing your mobile vision to life.',
    },
    {
      icon: <Palette className="w-7 h-7" />,
      title: 'Branding',
      description: 'Crafting memorable brand identities that tell your unique story. We create cohesive visual systems including logos, color palettes, typography, and brand guidelines that resonate with your audience.',
    },
    {
      icon: <Search className="w-7 h-7" />,
      title: 'SEO Optimization',
      description: 'Improving your online visibility and search engine rankings through proven strategies. We optimize your content, structure, and technical elements to drive organic traffic and increase conversions.',
    },
    {
      icon: <Wrench className="w-7 h-7" />,
      title: 'Maintenance & Support',
      description: 'Providing ongoing maintenance, updates, and technical support to keep your digital assets running smoothly. We ensure your website stays secure, up-to-date, and performing at its best.',
    },
  ];

  const features = [
    {
      icon: <Zap className="w-7 h-7" />,
      title: 'Fast Delivery',
      description: 'We understand the importance of timelines. Our efficient workflow ensures your projects are delivered on time without compromising quality.',
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: 'High Quality',
      description: 'Every project undergoes rigorous quality checks. We maintain the highest standards in design, development, and user experience.',
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: 'Creative Team',
      description: 'Our diverse team of designers, developers, and strategists brings fresh perspectives and innovative solutions to every project.',
    },
    {
      icon: <HeadphonesIcon className="w-7 h-7" />,
      title: '24/7 Support',
      description: 'We\'re always here when you need us. Our dedicated support team is available round-the-clock to assist with any questions or concerns.',
    },
    {
      icon: <DollarSign className="w-7 h-7" />,
      title: 'Affordable Pricing',
      description: 'Premium quality doesn\'t have to break the bank. We offer competitive pricing with flexible packages tailored to your budget.',
    },
    {
      icon: <CheckCircle className="w-7 h-7" />,
      title: 'Proven Results',
      description: 'Our track record speaks for itself. With over 250 successful projects, we consistently deliver results that exceed expectations.',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      image: 'https://images.unsplash.com/photo-1623594675959-02360202d4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTI3MDIwNXww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Working with this team has been an absolute game-changer for our business. Their attention to detail and creative problem-solving exceeded all our expectations. The final product not only looks stunning but has significantly improved our user engagement and conversion rates.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder, StartupX',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTIzNjMzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Professional, timely, and incredibly talented. Our new website has doubled our conversion rate in just two months. They took the time to understand our brand and delivered a solution that perfectly captures our vision. Highly recommend for anyone serious about digital excellence.',
    },
    {
      id: 3,
      name: 'Emma Davis',
      role: 'Director, Creative Labs',
      image: 'https://images.unsplash.com/photo-1667556205536-e5b04ee97ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwZXJzb24lMjBzbWlsaW5nfGVufDF8fHx8MTc2NTI5MjA4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'A true partner in bringing our vision to life. The collaborative process was seamless and the results speak for themselves. From initial concept to final delivery, every step was handled with professionalism and care. Our clients love the new design!',
    },
    {
      id: 4,
      name: 'James Martinez',
      role: 'VP Marketing, InnovateCo',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTIzNjMzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'The design team brought fresh perspectives and innovative solutions to our rebranding project. Their strategic approach and execution have significantly elevated our market presence. We\'ve seen a 150% increase in engagement since launch.',
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      role: 'CEO, Wellness Studio',
      image: 'https://images.unsplash.com/photo-1623594675959-02360202d4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTI3MDIwNXww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Beautiful, functional, and on-brand. The team understood our vision from day one and delivered a design system that perfectly represents our values. The user experience is seamless, and our customers have noticed the difference immediately.',
    },
    {
      id: 6,
      name: 'Robert Taylor',
      role: 'Founder, Design Co.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTIzNjMzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Outstanding craftsmanship and attention to user experience. Every detail was meticulously considered, resulting in a product that exceeds expectations in both form and function. This is what true design excellence looks like.',
    },
  ];

  return (
    <div className="overflow-x-hidden relative">
      {/* Decorative Blobs */}
      <div className="fixed top-20 right-10 w-64 h-64 bg-[#F7D9C4] rounded-full opacity-20 blur-3xl pointer-events-none" />
      <div className="fixed bottom-20 left-10 w-80 h-80 bg-[#DFA58F] rounded-full opacity-15 blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <section className="bg-[#FAF7F2] px-12 py-40 md:py-48 relative overflow-hidden">
        {/* Animated geometric shapes */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-32 h-32 bg-[#F7D9C4] rounded-[24px] opacity-30"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 w-40 h-40 bg-[#DFA58F] rounded-full opacity-20"
        />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[900px]"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-6 py-3 bg-[#F7D9C4] rounded-full mb-8"
            >
              <p className="text-[14px] text-[#4A3A33] tracking-wide">Welcome to Studio</p>
            </motion.div>

            <h1 className="text-[64px] md:text-[84px] leading-[1.1] text-[#2C2A28] mb-8">
              Crafting Beautiful Experiences That Inspire
            </h1>
            <p className="text-[22px] text-[#6E6560] leading-relaxed mb-6">
              We design premium digital products and spaces that inspire, engage, and elevate brands to their fullest potential. Our team of creative professionals brings over a decade of expertise in transforming visions into reality.
            </p>
            <p className="text-[18px] text-[#6E6560] leading-relaxed mb-12">
              From concept to execution, we partner with forward-thinking companies to create exceptional digital experiences that drive results and leave lasting impressions.
            </p>
            <div className="flex flex-wrap gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/projects')}
                className="px-12 py-6 bg-[#E7A47C] text-white rounded-full hover:bg-[#DFA58F] transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                View Our Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="px-12 py-6 bg-white text-[#4A3A33] rounded-full hover:bg-[#F2E9E4] transition-all duration-300 border-2 border-[#E6D5B8]"
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-white px-12 py-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <span className="text-[14px] text-[#E7A47C] uppercase tracking-wider">About Us</span>
              </div>
              <h2 className="text-[48px] text-[#2C2A28] mb-8 leading-tight">Who We Are</h2>
              <p className="text-[18px] text-[#6E6560] leading-relaxed mb-6">
                We are a passionate team of designers, developers, and creative strategists dedicated to pushing the boundaries of digital design. Founded in 2015, our studio has grown from a small collective into a full-service creative agency trusted by brands worldwide.
              </p>
              <p className="text-[18px] text-[#6E6560] leading-relaxed mb-6">
                <strong className="text-[#2C2A28]">What We Do:</strong> We specialize in creating beautiful, functional digital experiences that connect brands with their audiences. From web design and development to branding and digital strategy, we offer comprehensive solutions tailored to your unique needs.
              </p>
              <p className="text-[18px] text-[#6E6560] leading-relaxed mb-6">
                <strong className="text-[#2C2A28]">Our Mission:</strong> To empower businesses through thoughtful design and strategic innovation. We believe great design is more than aesthetics—it's about solving problems, creating connections, and driving meaningful results.
              </p>
              <p className="text-[18px] text-[#6E6560] leading-relaxed">
                <strong className="text-[#2C2A28]">Our Philosophy:</strong> Design with purpose, build with precision, deliver with excellence. Every project is an opportunity to create something remarkable, and we approach each one with fresh eyes and unwavering commitment to quality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl" style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1677274207822-e726bbba46e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJtJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzY1MjkyMDg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Studio workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#E7A47C] rounded-[24px] opacity-80"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gradient Strip */}
      <div className="h-2 bg-gradient-to-r from-[#F7D9C4] via-[#E7A47C] to-[#DFA58F]" />

      {/* Our Services Section */}
      <section className="bg-[#FAF7F2] px-12 py-32">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-[14px] text-[#E7A47C] uppercase tracking-wider mb-4 block">What We Offer</span>
            <h2 className="text-[48px] text-[#2C2A28] mb-6">Our Services</h2>
            <p className="text-[18px] text-[#6E6560] max-w-[700px] mx-auto leading-relaxed">
              Comprehensive digital solutions tailored to your business needs. From strategy to execution, we handle every aspect of your digital presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[28px] p-10 shadow-lg hover:shadow-2xl transition-all duration-500"
                style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}
              >
                <div className="w-16 h-16 bg-[#F7D9C4] rounded-[20px] flex items-center justify-center text-[#E7A47C] mb-6">
                  {service.icon}
                </div>
                <h3 className="text-[24px] text-[#2C2A28] mb-4">{service.title}</h3>
                <p className="text-[15px] text-[#6E6560] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-white px-12 py-32">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <span className="text-[14px] text-[#E7A47C] uppercase tracking-wider mb-4 block">Portfolio</span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="text-[48px] text-[#2C2A28] mb-4">Featured Projects</h2>
                <p className="text-[18px] text-[#6E6560] max-w-[600px]">
                  A showcase of our most impactful work, demonstrating our commitment to excellence and innovation.
                </p>
              </div>
              <button onClick={() => navigate('/projects')} className="px-8 py-4 bg-[#E7A47C] text-white rounded-full hover:bg-[#DFA58F] transition-all duration-300 shadow-lg flex items-center gap-2">
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-[#F2E9E4] rounded-[28px] overflow-hidden mb-6 shadow-lg hover:shadow-2xl transition-all duration-500" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
                <div className="px-2">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-[#F7D9C4] text-[#4A3A33] text-[12px] rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-[13px] text-[#E7A47C] mb-2 uppercase tracking-wider">
                    {project.category}
                  </p>
                  <h3 className="text-[24px] text-[#2C2A28] group-hover:text-[#E7A47C] transition-colors duration-300 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[15px] text-[#6E6560] leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <button onClick={() => navigate('/projects')} className="text-[14px] text-[#E7A47C] hover:text-[#DFA58F] flex items-center gap-2 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#F2E9E4] px-12 py-32">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-[14px] text-[#E7A47C] uppercase tracking-wider mb-4 block">Our Advantages</span>
            <h2 className="text-[48px] text-[#2C2A28] mb-6">Why Choose Us?</h2>
            <p className="text-[18px] text-[#6E6560] max-w-[700px] mx-auto leading-relaxed">
              We combine creativity, technology, and strategy to deliver exceptional results that drive your business forward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[28px] p-10 shadow-md hover:shadow-xl transition-all duration-500"
                style={{ boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)' }}
              >
                <div className="w-16 h-16 bg-[#F7D9C4] rounded-full flex items-center justify-center text-[#E7A47C] mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-[22px] text-[#2C2A28] mb-4">{feature.title}</h3>
                <p className="text-[15px] text-[#6E6560] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Strip */}
      <div className="h-2 bg-gradient-to-r from-[#DFA58F] via-[#E7A47C] to-[#F7D9C4]" />

      {/* Testimonials */}
      <section className="bg-[#F7D9C4] px-12 py-32">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-[14px] text-[#4A3A33] uppercase tracking-wider mb-4 block">Testimonials</span>
            <h2 className="text-[48px] text-[#2C2A28] mb-6">Happy Clients</h2>
            <p className="text-[18px] text-[#6E6560] max-w-[700px] mx-auto leading-relaxed">
              Trusted by leading brands worldwide. Here's what our satisfied clients have to say about their experience working with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[28px] p-10 shadow-lg hover:shadow-2xl transition-all duration-500"
                style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#F2E9E4]">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-[20px] text-[#2C2A28] mb-1">{testimonial.name}</h4>
                      <p className="text-[14px] text-[#E7A47C]">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-[15px] text-[#6E6560] leading-relaxed italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white px-12 py-32">
        <div className="max-w-[900px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[14px] text-[#E7A47C] uppercase tracking-wider mb-4 block">Get Started</span>
            <h2 className="text-[48px] text-[#2C2A28] mb-6">Let&rsquo;s Work Together</h2>
            <p className="text-[18px] text-[#6E6560] leading-relaxed">
              Have a project in mind? Fill out the form below and our team will get back to you within 24 hours to discuss how we can help bring your vision to life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#FAF7F2] rounded-[32px] p-12 shadow-lg"
            style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}
          >
            <div className="space-y-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[14px] text-[#4A3A33] mb-3 ml-2">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-6 py-5 bg-white rounded-full border-2 border-[#E6D5B8] focus:border-[#E7A47C] focus:outline-none text-[#2C2A28] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[14px] text-[#4A3A33] mb-3 ml-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-6 py-5 bg-white rounded-full border-2 border-[#E6D5B8] focus:border-[#E7A47C] focus:outline-none text-[#2C2A28] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[14px] text-[#4A3A33] mb-3 ml-2">Email Address</label>
                <div className="relative flex items-center">
                  <Mail className="absolute left-6 w-5 h-5 text-[#E7A47C]" />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full pl-16 pr-6 py-5 bg-white rounded-full border-2 border-[#E6D5B8] focus:border-[#E7A47C] focus:outline-none text-[#2C2A28] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[14px] text-[#4A3A33] mb-3 ml-2">Phone Number</label>
                <div className="relative flex items-center">
                  <Phone className="absolute left-6 w-5 h-5 text-[#E7A47C]" />
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full pl-16 pr-6 py-5 bg-white rounded-full border-2 border-[#E6D5B8] focus:border-[#E7A47C] focus:outline-none text-[#2C2A28] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[14px] text-[#4A3A33] mb-3 ml-2">Service Interested In</label>
                <select className="w-full px-6 py-5 bg-white rounded-full border-2 border-[#E6D5B8] focus:border-[#E7A47C] focus:outline-none text-[#2C2A28] transition-colors">
                  <option>Select a service</option>
                  <option>UI/UX Design</option>
                  <option>Web Development</option>
                  <option>App Development</option>
                  <option>Branding</option>
                  <option>SEO Optimization</option>
                  <option>Maintenance & Support</option>
                </select>
              </div>

              <div>
                <label className="block text-[14px] text-[#4A3A33] mb-3 ml-2">Project Details</label>
                <textarea
                  placeholder="Tell us about your project, goals, timeline, and budget..."
                  rows={6}
                  className="w-full px-6 py-5 bg-white rounded-[26px] border-2 border-[#E6D5B8] focus:border-[#E7A47C] focus:outline-none text-[#2C2A28] transition-colors resize-none"
                />
              </div>

              <button onClick={() => navigate('/contact')} className="w-full px-10 py-6 bg-[#E7A47C] text-white rounded-full hover:bg-[#DFA58F] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-[16px]">
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-start gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-[#F7D9C4] flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#E7A47C]" />
              </div>
              <div>
                <h4 className="text-[18px] text-[#2C2A28] mb-2">Phone</h4>
                <p className="text-[15px] text-[#6E6560] mb-1">+1 (555) 123-4567</p>
                <p className="text-[13px] text-[#6E6560]">Mon-Fri, 9am-6pm PST</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-[#F7D9C4] flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#E7A47C]" />
              </div>
              <div>
                <h4 className="text-[18px] text-[#2C2A28] mb-2">Email</h4>
                <p className="text-[15px] text-[#6E6560] mb-1">hello@studio.com</p>
                <p className="text-[13px] text-[#6E6560]">24/7 support</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-start gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-[#F7D9C4] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#E7A47C]" />
              </div>
              <div>
                <h4 className="text-[18px] text-[#2C2A28] mb-2">Location</h4>
                <p className="text-[15px] text-[#6E6560] mb-1">123 Design Street</p>
                <p className="text-[13px] text-[#6E6560]">San Francisco, CA 94102</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#F2E9E4] px-12 py-32 relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 w-64 h-64 bg-[#E7A47C] rounded-full blur-3xl"
        />

        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[14px] text-[#4A3A33] uppercase tracking-wider mb-4 block">Newsletter</span>
            <h2 className="text-[42px] text-[#2C2A28] mb-6">Stay Updated</h2>
            <p className="text-[18px] text-[#6E6560] mb-4 leading-relaxed">
              Subscribe to our newsletter for design insights, project updates, and creative inspiration delivered directly to your inbox.
            </p>
            <p className="text-[15px] text-[#6E6560] mb-12">
              Join over 10,000 professionals who trust us for the latest trends in design and technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-[600px] mx-auto">
              <input
                type="email"
                value={subscribeEmail}
                onChange={(e) => setSubscribeEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-8 py-5 bg-white rounded-full border-2 border-[#E6D5B8] focus:border-[#E7A47C] focus:outline-none text-[#2C2A28] transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={async () => {
                  setSubscribeStatus(null);
                  if (!subscribeEmail) { setSubscribeStatus('Please enter an email'); return; }
                  try {
                    const resp = await postSubscribe({ email: subscribeEmail });
                    if (resp && resp.success) {
                      setSubscribeStatus('Subscribed — thank you!');
                      setSubscribeEmail('');
                    } else if (resp && resp.error) {
                      setSubscribeStatus(String(resp.error));
                    } else {
                      setSubscribeStatus('Unexpected response');
                    }
                  } catch (err) {
                    setSubscribeStatus('Failed to subscribe');
                  }
                }}
                className="px-12 py-5 bg-[#E7A47C] text-white rounded-full hover:bg-[#DFA58F] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
            </div>
            {subscribeStatus && (
              <p className="text-[14px] text-[#6E6560] mt-4">{subscribeStatus}</p>
            )}

            <p className="text-[13px] text-[#6E6560] mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
