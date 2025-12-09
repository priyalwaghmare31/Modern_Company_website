import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock, Globe, ChevronDown } from 'lucide-react';

import { postContact } from '../lib/api';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [projectType, setProjectType] = useState('');
  const [budgetRange, setBudgetRange] = useState('');
  const [messageText, setMessageText] = useState('');
  const [sending, setSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary depending on scope and complexity. A typical website project takes 6-12 weeks from kickoff to launch, while smaller projects like brand identity can be completed in 3-4 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the process.',
    },
    {
      question: 'What are your pricing and payment terms?',
      answer: 'We offer flexible pricing models including fixed-price projects and monthly retainers. Most projects are structured with a 50% deposit upfront and 50% upon completion. We provide detailed proposals with transparent pricing before starting any work. Contact us for a custom quote tailored to your specific needs.',
    },
    {
      question: 'Do you work with clients remotely?',
      answer: 'Absolutely! We work with clients worldwide through video calls, screen sharing, and collaborative tools. Our process is designed to work seamlessly whether you\'re local or halfway around the world. We schedule regular check-ins at times convenient for your timezone.',
    },
    {
      question: 'What happens after the project is completed?',
      answer: 'We provide comprehensive training and documentation for all deliverables. Additionally, we offer ongoing support and maintenance packages to ensure your digital assets remain secure, updated, and optimized. We\'re always available for future enhancements or additional projects.',
    },
    {
      question: 'Can you help with an existing project or redesign?',
      answer: 'Yes! We frequently work with clients to refresh existing designs, optimize user experiences, or completely rebuild outdated systems. We start with a thorough audit to understand what\'s working and what needs improvement, then develop a strategic plan for enhancement.',
    },
    {
      question: 'What information do you need to get started?',
      answer: 'To begin, we need to understand your goals, target audience, timeline, and budget. We\'ll schedule a discovery call to discuss your project in detail. From there, we\'ll create a proposal outlining our approach, deliverables, and timeline. The more information you can provide upfront, the more accurate our proposal will be.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-20 right-20 w-72 h-72 bg-[#E7A47C] rounded-full blur-3xl pointer-events-none"
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
            <span className="text-[14px] text-[#E7A47C] uppercase tracking-wider mb-4 block">Contact Us</span>
            <h1 className="text-[64px] text-[#2C2A28] mb-8 leading-tight">Get In Touch</h1>
            <p className="text-[20px] text-[#6E6560] leading-relaxed mb-6">
              Have a project in mind or just want to chat? We&rsquo;d love to hear from you. Fill out the form below and we&rsquo;ll get back to you within 24 hours.
            </p>
            <p className="text-[18px] text-[#6E6560] leading-relaxed">
              Whether you're starting from scratch, need a refresh, or have questions about our services, our team is here to help you achieve your digital goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gradient Strip */}
      <div className="h-2 bg-gradient-to-r from-[#F7D9C4] via-[#E7A47C] to-[#DFA58F]" />

      {/* Contact Form and Info */}
      <section className="px-12 py-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-[32px] p-12 shadow-lg" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                <h2 className="text-[36px] text-[#2C2A28] mb-4">Send us a message</h2>
                <p className="text-[16px] text-[#6E6560] mb-10 leading-relaxed">
                  We&rsquo;ll respond as soon as possible. All fields marked with * are required.
                </p>

                <div className="space-y-7">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[14px] text-[#4A3A33] mb-3 ml-2">
                        First Name *
                      </label>
                        <input
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="John"
                          className="w-full px-7 py-5 bg-[#FAF7F2] rounded-full border-2 border-[#E6D5B8] focus:border-[#E7A47C] focus:outline-none text-[#2C2A28] transition-colors"
                        />
                    </div>
                    <div>
                      <label className="block text-[14px] text-[#4A3A33] mb-3 ml-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Doe"
                        className="w-full px-7 py-5 bg-[#FAF7F2] rounded-full border-2 border-[#E6D5B8] focus:border-[#E7A47C] focus:outline-none text-[#2C2A28] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[14px] text-[#4A3A33] mb-3 ml-2">
                      Email Address *
                    </label>
                    <div className="relative flex items-center">
                      <Mail className="absolute left-7 w-5 h-5 text-[#E7A47C]" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="w-full pl-16 pr-7 py-5 bg-[#FAF7F2] rounded-full border-2 border-[#E6D5B8] focus:border-[#E7A47C] focus:outline-none text-[#2C2A28] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[14px] text-[#4A3A33] mb-3 ml-2">
                      Mobile Number
                    </label>
                    <div className="relative flex items-center">
                      <Phone className="absolute left-7 w-5 h-5 text-[#E7A47C]" />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full pl-16 pr-7 py-5 bg-[#FAF7F2] rounded-full border-2 border-[#E6D5B8] focus:border-[#E7A47C] focus:outline-none text-[#2C2A28] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[14px] text-[#4A3A33] mb-3 ml-2">
                      City
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="San Francisco"
                      className="w-full px-7 py-5 bg-[#FAF7F2] rounded-full border-2 border-[#E6D5B8] focus:border-[#E7A47C] focus:outline-none text-[#2C2A28] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[14px] text-[#4A3A33] mb-3 ml-2">
                      Project Type
                    </label>
                    <select value={projectType} onChange={(e) => setProjectType(e.target.value)} className="w-full px-7 py-5 bg-[#FAF7F2] rounded-full border-2 border-[#E6D5B8] focus:border-[#E7A47C] focus:outline-none text-[#2C2A28] transition-colors appearance-none cursor-pointer">
                      <option>Select a project type</option>
                      <option>Website Design & Development</option>
                      <option>App Development</option>
                      <option>Brand Identity & Strategy</option>
                      <option>UI/UX Design</option>
                      <option>E-commerce Solutions</option>
                      <option>Digital Marketing</option>
                      <option>Consulting</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[14px] text-[#4A3A33] mb-3 ml-2">
                      Budget Range
                    </label>
                    <select value={budgetRange} onChange={(e) => setBudgetRange(e.target.value)} className="w-full px-7 py-5 bg-[#FAF7F2] rounded-full border-2 border-[#E6D5B8] focus:border-[#E7A47C] focus:outline-none text-[#2C2A28] transition-colors appearance-none cursor-pointer">
                      <option>Select budget range</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000 - $25,000</option>
                      <option>$25,000 - $50,000</option>
                      <option>$50,000+</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[14px] text-[#4A3A33] mb-3 ml-2">
                      Message *
                    </label>
                    <textarea
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      rows={7}
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      className="w-full px-7 py-5 bg-[#FAF7F2] rounded-[26px] border-2 border-[#E6D5B8] focus:border-[#E7A47C] focus:outline-none text-[#2C2A28] transition-colors resize-none"
                    />
                  </div>

                  <button onClick={async () => {
                      if (sending) return;
                      setSending(true);
                      setStatusMsg(null);
                      try {
                        const payload = { firstName, lastName, email, phone, city, projectType, budgetRange, message: messageText };
                        const resp = await postContact(payload);
                        if (resp && resp.success) {
                          setStatusMsg('Message sent — thank you!');
                          setFirstName(''); setLastName(''); setEmail(''); setPhone(''); setCity(''); setProjectType(''); setBudgetRange(''); setMessageText('');
                        } else if (resp && resp.error) {
                          setStatusMsg(String(resp.error));
                        } else {
                          setStatusMsg('Unexpected response from server');
                        }
                      } catch (err) {
                        setStatusMsg('Failed to send message — try again later');
                      } finally {
                        setSending(false);
                      }
                    }} className="w-full px-10 py-6 bg-[#E7A47C] text-white rounded-full hover:bg-[#DFA58F] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-[16px]">
                      {sending ? 'Sending…' : 'Send Message'}
                      <Send className="w-5 h-5" />
                  </button>

                  {statusMsg && (
                    <p className="text-[13px] text-[#6E6560] text-center mt-3">{statusMsg}</p>
                  )}

                  <p className="text-[13px] text-[#6E6560] text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-[36px] text-[#2C2A28] mb-4">Contact Information</h2>
                <p className="text-[16px] text-[#6E6560] leading-relaxed mb-4">
                  Reach out through any of these channels. We&rsquo;re here to help bring your vision to life.
                </p>
                <p className="text-[15px] text-[#6E6560] leading-relaxed">
                  Our team is available during business hours and we strive to respond to all inquiries within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-[28px] p-8 shadow-md hover:shadow-lg transition-all duration-300"
                  style={{ boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)' }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-full bg-[#F7D9C4] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#E7A47C]" />
                    </div>
                    <div>
                      <h3 className="text-[20px] text-[#2C2A28] mb-2">Email Us</h3>
                      <p className="text-[15px] text-[#6E6560] mb-3 leading-relaxed">
                        For general inquiries, project discussions, and partnership opportunities
                      </p>
                      <a href="mailto:hello@studio.com" className="text-[16px] text-[#E7A47C] hover:text-[#DFA58F] transition-colors block mb-1">
                        hello@studio.com
                      </a>
                      <a href="mailto:projects@studio.com" className="text-[16px] text-[#E7A47C] hover:text-[#DFA58F] transition-colors block">
                        projects@studio.com
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-[28px] p-8 shadow-md hover:shadow-lg transition-all duration-300"
                  style={{ boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)' }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-full bg-[#F7D9C4] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#E7A47C]" />
                    </div>
                    <div>
                      <h3 className="text-[20px] text-[#2C2A28] mb-2">Call Us</h3>
                      <p className="text-[15px] text-[#6E6560] mb-3 leading-relaxed">
                        Speak directly with our team during business hours
                      </p>
                      <a href="tel:+15551234567" className="text-[16px] text-[#E7A47C] hover:text-[#DFA58F] transition-colors block mb-1">
                        +1 (555) 123-4567
                      </a>
                      <p className="text-[14px] text-[#6E6560] mt-2">
                        Monday - Friday: 9:00 AM - 6:00 PM PST
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-[28px] p-8 shadow-md hover:shadow-lg transition-all duration-300"
                  style={{ boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)' }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-full bg-[#F7D9C4] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#E7A47C]" />
                    </div>
                    <div>
                      <h3 className="text-[20px] text-[#2C2A28] mb-2">Visit Us</h3>
                      <p className="text-[15px] text-[#6E6560] mb-3 leading-relaxed">
                        Our studio is located in the heart of San Francisco
                      </p>
                      <p className="text-[16px] text-[#E7A47C] leading-relaxed">
                        Studio Design Agency<br />
                        123 Design Street, Suite 400<br />
                        San Francisco, CA 94102<br />
                        United States
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Office Hours */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-[28px] p-8 shadow-md hover:shadow-lg transition-all duration-300"
                  style={{ boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)' }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-full bg-[#F7D9C4] flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#E7A47C]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[20px] text-[#2C2A28] mb-4">Business Hours</h3>
                      <div className="space-y-2 text-[15px]">
                        <div className="flex justify-between">
                          <span className="text-[#6E6560]">Monday - Friday:</span>
                          <span className="text-[#2C2A28]">9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#6E6560]">Saturday:</span>
                          <span className="text-[#2C2A28]">10:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#6E6560]">Sunday:</span>
                          <span className="text-[#2C2A28]">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Social */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-[28px] p-8 shadow-md hover:shadow-lg transition-all duration-300"
                  style={{ boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)' }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-full bg-[#F7D9C4] flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-[#E7A47C]" />
                    </div>
                    <div>
                      <h3 className="text-[20px] text-[#2C2A28] mb-2">Follow Us</h3>
                      <p className="text-[15px] text-[#6E6560] mb-4 leading-relaxed">
                        Stay updated with our latest projects and design insights
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <a href="#" className="px-5 py-2 bg-[#F7D9C4] text-[#4A3A33] rounded-full hover:bg-[#E7A47C] hover:text-white transition-all text-[14px]">
                          Instagram
                        </a>
                        <a href="#" className="px-5 py-2 bg-[#F7D9C4] text-[#4A3A33] rounded-full hover:bg-[#E7A47C] hover:text-white transition-all text-[14px]">
                          LinkedIn
                        </a>
                        <a href="#" className="px-5 py-2 bg-[#F7D9C4] text-[#4A3A33] rounded-full hover:bg-[#E7A47C] hover:text-white transition-all text-[14px]">
                          Behance
                        </a>
                        <a href="#" className="px-5 py-2 bg-[#F7D9C4] text-[#4A3A33] rounded-full hover:bg-[#E7A47C] hover:text-white transition-all text-[14px]">
                          Dribbble
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-12 py-28 bg-[#F2E9E4]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-[42px] text-[#2C2A28] mb-4">Find Us</h2>
            <p className="text-[18px] text-[#6E6560]">Located in the heart of San Francisco's design district</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-[32px] overflow-hidden shadow-lg" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
              <div className="aspect-[21/9] bg-gradient-to-br from-[#F7D9C4] via-[#E7A47C] to-[#DFA58F] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-20 h-20 text-white mx-auto mb-6" />
                  <p className="text-white text-[24px] mb-2">Interactive Map</p>
                  <p className="text-white/90 text-[16px] max-w-[400px] mx-auto">
                    123 Design Street, Suite 400<br />
                    San Francisco, CA 94102
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="px-12 py-32 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-[14px] text-[#E7A47C] uppercase tracking-wider mb-4 block">FAQs</span>
            <h2 className="text-[48px] text-[#2C2A28] mb-6">Frequently Asked Questions</h2>
            <p className="text-[18px] text-[#6E6560] max-w-[800px] mx-auto leading-relaxed">
              Have questions? We've compiled answers to the most common inquiries we receive. Can't find what you're looking for? Feel free to reach out directly.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FAF7F2] rounded-[24px] overflow-hidden shadow-md"
                style={{ boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-10 py-7 flex items-center justify-between text-left hover:bg-[#F2E9E4] transition-colors"
                >
                  <span className="text-[18px] text-[#2C2A28] pr-6">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-[#E7A47C]" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-10 pb-7">
                    <p className="text-[16px] text-[#6E6560] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center bg-[#F7D9C4] rounded-[28px] p-12"
          >
            <h3 className="text-[28px] text-[#2C2A28] mb-4">Still have questions?</h3>
            <p className="text-[16px] text-[#6E6560] mb-8">
              Our team is here to help. Don't hesitate to reach out with any questions or concerns.
            </p>
            <a
              href="mailto:hello@studio.com"
              className="inline-block px-10 py-4 bg-[#E7A47C] text-white rounded-full hover:bg-[#DFA58F] transition-all duration-300 shadow-lg"
            >
              Contact Support
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
