import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  BookOpen, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Lightbulb, 
  Target, 
  Globe, 
  Award,
  PlayCircle,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Zap,
  Shield,
  Clock,
  Star,
  Quote
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Personalized Learning",
      description: "AI adapts to each student's learning pace and style, creating customized educational experiences that maximize potential.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Enhanced Performance",
      description: "Students show 40% improvement in learning outcomes with AI-powered educational tools and intelligent feedback systems.",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Teacher Empowerment",
      description: "Automate administrative tasks and gain insights, allowing educators to focus on creativity and meaningful interactions.",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Accessibility",
      description: "Break down language barriers and provide quality education to students worldwide with intelligent translation and adaptation.",
      color: "from-amber-500 to-orange-500"
    }
  ];

  const applications = [
    {
      title: "Intelligent Tutoring Systems",
      description: "AI-powered tutors provide 24/7 support, answering questions and guiding students through complex concepts with personalized explanations.",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["24/7 Availability", "Personalized Explanations", "Progress Tracking"],
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      title: "Automated Assessment & Feedback",
      description: "Instant assessment and detailed feedback help students understand their mistakes and improve faster with actionable insights.",
      image: "https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Instant Grading", "Detailed Analytics", "Improvement Suggestions"],
      gradient: "from-violet-600 to-fuchsia-600"
    },
    {
      title: "Adaptive Learning Platforms",
      description: "Dynamic content adjustment based on student performance ensures optimal learning progression and engagement.",
      image: "https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Dynamic Content", "Performance Analytics", "Engagement Optimization"],
      gradient: "from-emerald-600 to-cyan-600"
    }
  ];

  const stats = [
    { number: "73%", label: "of educators believe AI will transform education", icon: <Brain className="w-6 h-6" /> },
    { number: "2.5x", label: "faster learning with AI-powered tools", icon: <Zap className="w-6 h-6" /> },
    { number: "85%", label: "reduction in administrative workload", icon: <Clock className="w-6 h-6" /> },
    { number: "90%", label: "student engagement improvement", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Education Director, MIT",
      quote: "AI has revolutionized how we approach personalized learning. Our students are more engaged and achieve better outcomes than ever before.",
      avatar: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      institution: "Massachusetts Institute of Technology"
    },
    {
      name: "Prof. Michael Rodriguez",
      role: "Stanford University",
      quote: "The ability to provide instant feedback and adaptive content has transformed our classroom dynamics completely. It's like having a teaching assistant for every student.",
      avatar: "https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      institution: "Stanford University"
    },
    {
      name: "Lisa Thompson",
      role: "High School Principal",
      quote: "AI tools have helped our teachers focus on creativity and critical thinking rather than repetitive tasks. The transformation has been remarkable.",
      avatar: "https://images.pexels.com/photos/5212651/pexels-photo-5212651.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      institution: "Lincoln High School"
    }
  ];

  const features = [
    { icon: <Shield className="w-5 h-5" />, text: "Privacy Protected" },
    { icon: <Zap className="w-5 h-5" />, text: "Lightning Fast" },
    { icon: <Globe className="w-5 h-5" />, text: "Global Scale" },
    { icon: <Award className="w-5 h-5" />, text: "Award Winning" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-xl blur opacity-75"></div>
                <div className="relative bg-gradient-to-r from-cyan-500 to-violet-500 p-2 rounded-xl">
                  <Brain className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">EduAI</span>
                <div className="text-xs text-gray-500 font-medium">AI Education Platform</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#benefits" className="text-gray-600 hover:text-cyan-600 transition-all duration-300 font-medium relative group">
                Benefits
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#applications" className="text-gray-600 hover:text-violet-600 transition-all duration-300 font-medium relative group">
                Applications
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-emerald-600 transition-all duration-300 font-medium relative group">
                Testimonials
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <button className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100">
            <div className="px-4 py-6 space-y-4">
              <a href="#benefits" className="block py-3 text-gray-600 font-medium hover:text-cyan-600 transition-colors">Benefits</a>
              <a href="#applications" className="block py-3 text-gray-600 font-medium hover:text-violet-600 transition-colors">Applications</a>
              <a href="#testimonials" className="block py-3 text-gray-600 font-medium hover:text-emerald-600 transition-colors">Testimonials</a>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white py-3 rounded-full font-semibold mt-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-violet-50 to-fuchsia-50">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%239C92AC%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full opacity-30 animate-pulse delay-2000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-800 rounded-full text-sm font-semibold border border-emerald-200/50 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                  The Future of Learning is Here
                </div>
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gray-900">Revolutionizing</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-violet-600 to-fuchsia-600 animate-gradient-x">Education</span>
                  <br />
                  <span className="text-gray-900">with AI</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Harness the transformative power of artificial intelligence to create personalized, engaging, and effective learning experiences that adapt to every student's unique journey and unlock their full potential.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-cyan-500 to-violet-500 text-white px-10 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 transform hover:scale-105 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center">
                    Explore Solutions
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
                <button className="group border-2 border-gray-200 text-gray-700 px-10 py-4 rounded-2xl font-semibold hover:border-violet-500 hover:text-violet-600 hover:bg-violet-50 transition-all duration-300 flex items-center justify-center">
                  <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                </button>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 pt-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50 text-sm font-medium text-gray-700">
                    <span className="text-violet-600">{feature.icon}</span>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200/50">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">500K+</div>
                  <div className="text-sm text-gray-600 font-medium">Students Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">1,200+</div>
                  <div className="text-sm text-gray-600 font-medium">Schools</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">98%</div>
                  <div className="text-sm text-gray-600 font-medium">Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <img 
                  src="https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=1000" 
                  alt="AI Education Technology"
                  className="relative w-full rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-3xl"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">AI Learning Active</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-float delay-1000">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-violet-600" />
                  <div>
                    <div className="text-sm font-semibold text-gray-700">Performance</div>
                    <div className="text-xs text-gray-500">+40% Improvement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-800 rounded-full text-sm font-semibold mb-6">
              <Lightbulb className="w-4 h-4 mr-2" />
              Why Choose AI Education
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Transform Learning with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600"> Intelligence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how artificial intelligence is creating unprecedented opportunities for both educators and students to achieve extraordinary outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl blur-xl" 
                     style={{backgroundImage: `linear-gradient(135deg, ${benefit.color.split(' ')[1]}, ${benefit.color.split(' ')[3]})`}}></div>
                <div className="relative p-8 bg-white rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${benefit.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  <div className="mt-6 flex items-center text-emerald-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white">{stat.icon}</span>
                </div>
                <div className="text-5xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">{stat.number}</div>
                <div className="text-emerald-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="py-24 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-100 to-fuchsia-100 text-violet-800 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4 mr-2" />
              AI Applications
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Powerful AI Solutions for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600"> Modern Education</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From intelligent tutoring to automated assessment, explore the diverse ways AI is enhancing every aspect of the educational experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {applications.map((app, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                <div className="relative overflow-hidden">
                  <img 
                    src={app.image} 
                    alt={app.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${app.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                    AI Powered
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-violet-600 transition-colors duration-300">{app.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{app.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {app.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button className="group/btn w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white py-3 rounded-xl font-semibold hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 to-fuchsia-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-800 rounded-full text-sm font-semibold mb-6">
              <Quote className="w-4 h-4 mr-2" />
              Success Stories
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              What Leading Educators
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600"> Are Saying</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from pioneering educators who are transforming their institutions with AI-powered learning solutions
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500"></div>
              
              <div className="text-center">
                <div className="mb-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[activeTab].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 leading-relaxed mb-8 italic">
                    "{testimonials[activeTab].quote}"
                  </blockquote>
                </div>
                
                <div className="flex items-center justify-center space-x-6">
                  <div className="relative">
                    <img 
                      src={testimonials[activeTab].avatar} 
                      alt={testimonials[activeTab].name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-xl text-gray-900">{testimonials[activeTab].name}</div>
                    <div className="text-violet-600 font-semibold">{testimonials[activeTab].role}</div>
                    <div className="text-gray-500 text-sm">{testimonials[activeTab].institution}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === activeTab 
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-violet-900 to-fuchsia-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-8 border border-white/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Join the AI Education Revolution
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to Transform Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400"> Educational Experience?</span>
            </h2>
            <p className="text-xl text-cyan-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Join thousands of forward-thinking educators and institutions who are already leveraging AI to create extraordinary learning outcomes and unlock student potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="group bg-white text-gray-900 px-10 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center">
                <span className="mr-2">Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group border-2 border-white/30 text-white px-10 py-4 rounded-2xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm flex items-center justify-center">
                <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Schedule Demo
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-cyan-200">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-emerald-400" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-emerald-400" />
                <span>14-Day Free Trial</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-emerald-400" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-xl blur opacity-75"></div>
                  <div className="relative bg-gradient-to-r from-cyan-500 to-violet-500 p-2 rounded-xl">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <span className="text-2xl font-bold">EduAI</span>
                  <div className="text-sm text-gray-400">AI Education Platform</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Transforming education through the power of artificial intelligence. Empowering educators and students to achieve extraordinary outcomes.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors cursor-pointer">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-violet-600 transition-colors cursor-pointer">
                  <Users className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <BookOpen className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Solutions</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors hover:translate-x-1 transform duration-200 inline-block">Intelligent Tutoring</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors hover:translate-x-1 transform duration-200 inline-block">Automated Grading</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-200 inline-block">Adaptive Learning</a></li>
                <li><a href="#" className="hover:text-fuchsia-400 transition-colors hover:translate-x-1 transform duration-200 inline-block">Analytics Dashboard</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Resources</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors hover:translate-x-1 transform duration-200 inline-block">Documentation</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors hover:translate-x-1 transform duration-200 inline-block">Case Studies</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-200 inline-block">Research Papers</a></li>
                <li><a href="#" className="hover:text-fuchsia-400 transition-colors hover:translate-x-1 transform duration-200 inline-block">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors hover:translate-x-1 transform duration-200 inline-block">About Us</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors hover:translate-x-1 transform duration-200 inline-block">Careers</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors hover:translate-x-1 transform duration-200 inline-block">Contact</a></li>
                <li><a href="#" className="hover:text-fuchsia-400 transition-colors hover:translate-x-1 transform duration-200 inline-block">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">&copy; 2025 EduAI. All rights reserved.</p>
              <div className="flex items-center space-x-6 text-gray-400 text-sm">
                <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-violet-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-emerald-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;