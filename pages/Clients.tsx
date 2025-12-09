import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Clients() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      company: 'TechCorp',
      image: 'https://images.unsplash.com/photo-1623594675959-02360202d4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTI3MDIwNXww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Exceptional design work that transformed our brand identity from the ground up. The attention to detail and creative innovation exceeded all expectations. The team was professional, responsive, and genuinely invested in our success. Our new brand identity has helped us stand out in a crowded market and connect with our target audience in meaningful ways. The impact on our business has been remarkable.',
      rating: 5,
      project: 'Brand Redesign',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder, StartupX',
      company: 'StartupX',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTIzNjMzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Professional, timely, and incredibly talented team. Our new website has doubled our conversion rate in just two months, which exceeded our most optimistic projections. The design aesthetic perfectly captures our brand essence while maintaining exceptional usability. They took the time to understand our business model and created a solution that truly works for our users. We couldn\'t be happier with the results.',
      rating: 5,
      project: 'Website Development',
    },
    {
      id: 3,
      name: 'Emma Davis',
      role: 'Director, Creative Labs',
      company: 'Creative Labs',
      image: 'https://images.unsplash.com/photo-1667556205536-e5b04ee97ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwZXJzb24lMjBzbWlsaW5nfGVufDF8fHx8MTc2NTI5MjA4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'A true partner in bringing our ambitious vision to life. The collaborative process was seamless, transparent, and incredibly productive. The results speak for themselves – our new digital presence has transformed how clients perceive and interact with our brand. Every touchpoint was carefully considered, from initial wireframes to final implementation. Highly recommend for any serious design project that demands excellence.',
      rating: 5,
      project: 'Digital Strategy',
    },
    {
      id: 4,
      name: 'James Martinez',
      role: 'VP Marketing, InnovateCo',
      company: 'InnovateCo',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTIzNjMzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'The design team brought fresh perspectives and innovative solutions to our complex rebranding project. Their strategic approach combined with flawless execution has significantly elevated our market presence and brand recognition. We\'ve seen a 150% increase in customer engagement since launch, and the feedback from our stakeholders has been overwhelmingly positive. This partnership has been transformative for our business.',
      rating: 5,
      project: 'Rebranding',
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      role: 'CEO, Wellness Studio',
      company: 'Wellness Studio',
      image: 'https://images.unsplash.com/photo-1623594675959-02360202d4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTI3MDIwNXww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Beautiful, functional, and perfectly on-brand. The team understood our holistic wellness philosophy from day one and delivered a comprehensive design system that authentically represents our values and resonates deeply with our health-conscious audience. The user experience is intuitive and calming, reflecting the essence of our brand. Our customers have noticed and appreciated the difference immediately.',
      rating: 5,
      project: 'UX Design',
    },
    {
      id: 6,
      name: 'Robert Taylor',
      role: 'Founder, Design Co.',
      company: 'Design Co.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTIzNjMzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Outstanding craftsmanship and meticulous attention to user experience. Every detail was carefully considered and executed with precision, resulting in a digital product that exceeds expectations in both form and function. The level of polish and refinement in the final deliverable demonstrates true design excellence. This is what happens when talent meets dedication and strategic thinking.',
      rating: 5,
      project: 'App Development',
    },
    {
      id: 7,
      name: 'Alexandra Wong',
      role: 'Marketing Director, FashionHub',
      company: 'FashionHub',
      image: 'https://images.unsplash.com/photo-1623594675959-02360202d4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTI3MDIwNXww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Working with this studio has been a game-changer for our e-commerce platform. They redesigned our entire shopping experience with a focus on conversion optimization and brand storytelling. The results have been phenomenal – we\'ve seen a 200% increase in mobile conversions and our average order value has increased by 45%. Their expertise in both design and business strategy is unmatched.',
      rating: 5,
      project: 'E-commerce Design',
    },
    {
      id: 8,
      name: 'David Kumar',
      role: 'CTO, DataViz Inc.',
      company: 'DataViz Inc.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTIzNjMzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Their ability to visualize complex data in intuitive, beautiful interfaces is remarkable. They transformed our analytics platform from a technical tool into an elegant product that users actually enjoy using. The design system they created is scalable, accessible, and perfectly aligned with our technical infrastructure. This partnership has elevated our product to industry-leading status.',
      rating: 5,
      project: 'Dashboard Design',
    },
    {
      id: 9,
      name: 'Sophia Martinez',
      role: 'Owner, Artisan Bakery',
      company: 'Artisan Bakery',
      image: 'https://images.unsplash.com/photo-1667556205536-e5b04ee97ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwZXJzb24lMjBzbWlsaW5nfGVufDF8fHx8MTc2NTI5MjA4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'As a small business owner, I needed a partner who could understand my artisanal brand and translate it into a compelling digital presence. They exceeded every expectation, creating a warm, inviting website that captures the handcrafted essence of our bakery. Online orders have tripled, and customers regularly compliment us on how beautiful and easy our site is to use.',
      rating: 5,
      project: 'Brand Identity',
    },
  ];

  const clientLogos = [
    'TechCorp',
    'StartupX',
    'Creative Labs',
    'InnovateCo',
    'Wellness Studio',
    'Design Co.',
    'FashionHub',
    'DataViz Inc.',
    'Artisan Bakery',
    'Global Ventures',
    'Smart Solutions',
    'Future Labs',
  ];

  return (
    <div className="min-h-screen bg-[#F7D9C4] relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-20 left-10 w-48 h-48 bg-[#DFA58F] rounded-full opacity-15 blur-3xl pointer-events-none"
      />

      {/* Header */}
      <section className="px-12 py-32 bg-white relative">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-[900px] mx-auto"
          >
            <span className="text-[14px] text-[#E7A47C] uppercase tracking-wider mb-4 block">Success Stories</span>
            <h1 className="text-[64px] text-[#2C2A28] mb-8 leading-tight">Client Testimonials</h1>
            <p className="text-[20px] text-[#6E6560] leading-relaxed mb-6">
              Trusted by forward-thinking companies and creative professionals worldwide. Here&rsquo;s what our clients have to say about their experience working with us.
            </p>
            <p className="text-[18px] text-[#6E6560] leading-relaxed">
              From startups to established enterprises, we've helped businesses across industries achieve their digital goals through thoughtful design, strategic thinking, and dedicated partnership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gradient Strip */}
      <div className="h-2 bg-gradient-to-r from-[#F7D9C4] via-[#E7A47C] to-[#DFA58F]" />

      {/* Stats Section */}
      <section className="px-12 py-24 bg-[#F2E9E4]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { number: '150+', label: 'Happy Clients', sublabel: 'And growing every month' },
              { number: '250+', label: 'Projects Completed', sublabel: 'Across all industries' },
              { number: '98%', label: 'Satisfaction Rate', sublabel: 'Client retention rate' },
              { number: '15+', label: 'Industry Awards', sublabel: 'For design excellence' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-[56px] text-[#E7A47C] mb-2">{stat.number}</div>
                <div className="text-[18px] text-[#2C2A28] mb-2">{stat.label}</div>
                <div className="text-[14px] text-[#6E6560]">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Stories Section */}
      <section className="px-12 py-32 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-[14px] text-[#E7A47C] uppercase tracking-wider mb-4 block">Client Stories</span>
            <h2 className="text-[48px] text-[#2C2A28] mb-6">Real Results, Real Impact</h2>
            <p className="text-[18px] text-[#6E6560] max-w-[800px] mx-auto leading-relaxed">
              Don't just take our word for it. See how we've helped businesses like yours achieve remarkable results through strategic design and thoughtful execution.
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
                className="bg-[#FAF7F2] rounded-[30px] p-10 shadow-lg hover:shadow-2xl transition-all duration-500 relative"
                style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}
              >
                <div className="flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="w-14 h-14 bg-[#F7D9C4] rounded-full flex items-center justify-center mb-6">
                    <Quote className="w-6 h-6 text-[#E7A47C]" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#E7A47C] text-[#E7A47C]" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-[15px] text-[#6E6560] leading-relaxed mb-8 flex-grow italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Project Type Badge */}
                  <div className="mb-6">
                    <span className="px-4 py-2 bg-white text-[#4A3A33] text-[12px] rounded-full border-2 border-[#E6D5B8]">
                      {testimonial.project}
                    </span>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-5 pt-6 border-t-2 border-white">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-3 border-white shadow-md">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-[18px] text-[#2C2A28] mb-1">{testimonial.name}</h4>
                      <p className="text-[14px] text-[#E7A47C] mb-1">{testimonial.role}</p>
                      <p className="text-[13px] text-[#6E6560]">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Strip */}
      <div className="h-2 bg-gradient-to-r from-[#DFA58F] via-[#E7A47C] to-[#F7D9C4]" />

      {/* Client Companies Logo Section */}
      <section className="px-12 py-28 bg-[#F2E9E4]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[14px] text-[#4A3A33] uppercase tracking-wider mb-4 block">Trusted By</span>
            <h2 className="text-[42px] text-[#2C2A28] mb-6">Our Client Companies</h2>
            <p className="text-[18px] text-[#6E6560] max-w-[700px] mx-auto leading-relaxed">
              We're proud to partner with innovative companies across diverse industries, from tech startups to established enterprises.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-[24px] p-10 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300"
                style={{ boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)' }}
              >
                <p className="text-[20px] text-[#4A3A33]">{logo}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="px-12 py-32 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-[14px] text-[#E7A47C] uppercase tracking-wider mb-4 block">Our Commitment</span>
            <h2 className="text-[48px] text-[#2C2A28] mb-6">Why Clients Choose Us</h2>
            <p className="text-[18px] text-[#6E6560] max-w-[800px] mx-auto leading-relaxed">
              Our client relationships are built on trust, transparency, and a shared commitment to excellence. Here's what sets us apart.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Dedicated Partnership',
                description: 'We don\'t just deliver projects – we build lasting partnerships. Your success is our success, and we\'re committed to supporting you every step of the way.',
              },
              {
                title: 'Transparent Communication',
                description: 'No surprises, no hidden costs. We maintain open, honest communication throughout every project, keeping you informed and involved at every stage.',
              },
              {
                title: 'Proven Expertise',
                description: 'With over a decade of experience and 250+ successful projects, we bring deep expertise and industry insights to every engagement.',
              },
              {
                title: 'Tailored Solutions',
                description: 'We don\'t believe in one-size-fits-all. Every solution is custom-crafted to address your unique challenges and capitalize on your specific opportunities.',
              },
              {
                title: 'Results-Driven Approach',
                description: 'Beautiful design is just the beginning. We focus on creating solutions that drive measurable business results and ROI for our clients.',
              },
              {
                title: 'Ongoing Support',
                description: 'Our commitment doesn\'t end at launch. We provide comprehensive support and optimization to ensure your continued success.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#FAF7F2] rounded-[28px] p-10"
              >
                <div className="w-12 h-12 bg-[#E7A47C] rounded-full flex items-center justify-center text-white mb-6">
                  <span className="text-[20px]">{index + 1}</span>
                </div>
                <h3 className="text-[22px] text-[#2C2A28] mb-4">{item.title}</h3>
                <p className="text-[15px] text-[#6E6560] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-12 py-32 bg-[#F7D9C4] relative overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-[#E7A47C] rounded-full opacity-20 blur-3xl"
        />

        <div className="max-w-[1100px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[52px] text-[#2C2A28] mb-6 leading-tight">Join Our Happy Clients</h2>
            <p className="text-[20px] text-[#6E6560] mb-6 leading-relaxed">
              Experience the same level of dedication, creativity, and excellence that our clients rave about.
            </p>
            <p className="text-[18px] text-[#6E6560] mb-12 leading-relaxed">
              Let's discuss how we can help you achieve your goals and create something extraordinary together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-14 py-6 bg-[#E7A47C] text-white rounded-full hover:bg-[#DFA58F] transition-all duration-300 shadow-lg hover:shadow-2xl text-[16px]"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
