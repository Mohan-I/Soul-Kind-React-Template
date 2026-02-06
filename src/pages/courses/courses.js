import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../assets/img/icons/girl-avatar.svg'
import './courses.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Courses = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const courses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      description: "Master full-stack web development with modern technologies like React, Node.js, and MongoDB.",
      duration: "12 weeks",
      level: "Beginner",
      price: "$499",
      category: "Development",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      students: 2450,
      featured: true
    },
    {
      id: 2,
      title: "Data Science & AI",
      description: "Learn machine learning, data analysis, and artificial intelligence from industry experts.",
      duration: "16 weeks",
      level: "Intermediate",
      price: "$699",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      students: 1890,
      featured: true
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      description: "Create stunning user interfaces and experiences with Figma and modern design principles.",
      duration: "10 weeks",
      level: "All Levels",
      price: "$399",
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      students: 3120
    },
    {
      id: 4,
      title: "Digital Marketing Pro",
      description: "Become a digital marketing expert with SEO, social media, and content strategy.",
      duration: "8 weeks",
      level: "Beginner",
      price: "$349",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      students: 2750
    },
    {
      id: 5,
      title: "Mobile App Development",
      description: "Build native and cross-platform mobile apps with React Native and Flutter.",
      duration: "14 weeks",
      level: "Intermediate",
      price: "$599",
      category: "Development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      students: 1980
    },
    {
      id: 6,
      title: "Cybersecurity Fundamentals",
      description: "Learn essential cybersecurity skills to protect systems and networks.",
      duration: "12 weeks",
      level: "Beginner to Intermediate",
      price: "$549",
      category: "Security",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      students: 1650
    }
  ];

  const categories = [
    "All Courses",
    "Development",
    "Data Science",
    "Design",
    "Marketing",
    "Business",
    "Security"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Full-Stack Developer",
      text: "The Web Development Bootcamp transformed my career. Landed a job within 2 months!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      course: "Web Development Bootcamp"
    },
    {
      name: "Michael Chen",
      role: "Data Scientist",
      text: "The AI course gave me practical skills that I use daily at my job. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      course: "Data Science & AI"
    },
    {
      name: "Priya Sharma",
      role: "UI/UX Designer",
      text: "From beginner to professional designer in 10 weeks. The curriculum is comprehensive.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      course: "UI/UX Design Masterclass"
    }
  ];

  return (
    <div className="courses-page">
      {/* Hero Section */}
      <section className="courses-hero" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center min-vh-80">
            <div className="col-lg-6">
              <div className="hero-content">
                <span className="badge bg-primary-subtle text-primary mb-3">🎓 Transform Your Career</span>
                <h1 className="display-4 fw-bold mb-4">
                  Master <span className="text-gradient">In-Demand</span> Skills
                </h1>
                <p className="lead mb-4">
                  Join 10,000+ students who've transformed their careers with our industry-leading courses. 
                  Learn from experts, build real projects, and get job-ready.
                </p>
                <div className="d-flex gap-3">
                  <button className="btn btn-primary btn-lg px-4">
                    Explore Courses
                  </button>
                  <button className="btn btn-outline-primary btn-lg px-4">
                    Watch Demo
                  </button>
                </div>
                <div className="mt-4 d-flex align-items-center gap-4">
                  <div className="d-flex align-items-center">
                    <div className="avatar-group">
                      {[1,2,3,4,5].map(i => (
                        <img 
                          key={i}
                          src={avatar}
                          alt={`Student ${i}`}
                          className="avatar"
                        />
                      ))}
                    </div>
                    <span className="ms-3 ">10K+ Students Enrolled</span>
                  </div>
                  <div className="rating">
                    <span className="stars">★★★★★</span>
                    <span className="ms-2 ">4.8/5.0 Rating</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <div className="floating-card card-1">
                    <h6>Web Development</h6>
                    <p className="small">12 Weeks Course</p>
                </div>
                <div className="floating-card card-2">
                    <h6>Data Science</h6>
                    <p className="small">16 Weeks Course</p>
                </div>
                <div className="floating-card card-3">
                    <h6>UI/UX Design</h6>
                    <p className="small">10 Weeks Course</p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Students learning"
                  className="img-fluid rounded-3 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="categories-section py-5" data-aos="fade-up">
        <div className="container">
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {categories.map((category, index) => (
              <button 
                key={index}
                className={`btn ${index === 0 ? 'btn-primary' : 'btn-outline-primary'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="featured-courses py-5" data-aos="fade-up">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Featured Courses</h2>
            <p className="">Hand-picked courses to kickstart your learning journey</p>
          </div>
          
          <div className="row g-4">
            {courses.filter(course => course.featured).map((course) => (
              <div key={course.id} className="col-lg-6" data-aos="zoom-in">
                <div className="course-card featured h-100">
                  <div className="row g-0 h-100">
                    <div className="col-md-5">
                      <div className="course-image">
                        <img src={course.image} alt={course.title} className="img-fluid" />
                        <span className="badge bg-primary position-absolute top-0 end-0 m-3">
                          Featured
                        </span>
                      </div>
                      
                        
                    </div>
                    <div className="col-md-7">
                      <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-start">
                          <span className="badge bg-light text-dark">{course.category}</span>
                          <span className="text-warning">★ {course.rating}</span>
                        </div>
                        <h5 className="fw-bold my-4">{course.title}</h5>
                        <p className=" mb-4">{course.description}</p>

                        <div className="course-meta mb-4">
                          <div className="d-flex gap-4">
                            <div>
                              <span className='badge bg-dark'>{course.duration}</span>
                            </div>
                            <div>
                              <span className='badge bg-dark'>{course.students} students</span>
                            </div>
                            <div>
                              <span className='badge bg-dark'>{course.level}</span>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <h4 className="text-primary mb-0">{course.price}</h4>
                          <button className="btn btn-primary">
                            Enroll Now
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Courses Grid */}
      <section className="all-courses py-8 mx-4" data-aos="fade-up">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Explore All Courses</h2>
            <p className="">Choose from our comprehensive catalog</p>
          </div>
          
          <div className="row g-4">
            {courses.map((course) => (
              <div key={course.id} className="col-md-6 col-lg-4" data-aos="flip-up">
                <div className="course-card h-100">
                  <div className="course-image">
                    <img src={course.image} alt={course.title} className="img-fluid" />
                    <span className="badge bg-dark position-absolute top-0 end-0 m-3">
                      {course.category} - <span className='text-warning'>★ {course.rating}</span>
                    </span>
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-2">        
                    </div>
                    <h5 className="fw-bold mb-3">{course.title} - <span className="text-warning">{course.price}</span> </h5>
                    <p className=" mb-4">{course.description}</p> 
     
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-dark text-secondary">{course.duration}</span>
                      <span className="badge bg-dark text-secondary">{course.students}</span>
                      <span className="badge bg-dark text-secondary">{course.level}</span>
                      <span className="text-warning"> - </span>

                      <button className="btn btn-outline-secondary">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose py-5" data-aos="fade-up">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Why Choose SoulKind Courses?</h2>
            <p className="">We're different from traditional learning platforms</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4" data-aos="zoom-in">
              <div className="feature-card text-center p-4 h-100">
                <div className="feature-icon mb-4">
                  <div className="icon-wrapper">
                    <i className="bi bi-laptop text-primary fs-1"></i>
                  </div>
                </div>
                <h4 className="fw-bold mb-3">Project-Based Learning</h4>
                <p className="">
                  Learn by building real-world projects that you can showcase in your portfolio.
                </p>
              </div>
            </div>
            
            <div className="col-md-4" data-aos="zoom-in" data-aos-delay="100">
              <div className="feature-card text-center p-4 h-100">
                <div className="feature-icon mb-4">
                  <div className="icon-wrapper">
                    <i className="bi bi-people text-primary fs-1"></i>
                  </div>
                </div>
                <h4 className="fw-bold mb-3">Industry Mentors</h4>
                <p className="">
                  Get guidance from industry professionals working at top tech companies.
                </p>
              </div>
            </div>
            
            <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="feature-card text-center p-4 h-100">
                <div className="feature-icon mb-4">
                  <div className="icon-wrapper">
                    <i className="bi bi-briefcase text-primary fs-1"></i>
                  </div>
                </div>
                <h4 className="fw-bold mb-3">Career Support</h4>
                <p className="">
                  Resume reviews, interview prep, and job placement assistance included.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials py-5 bg-dark text-white" data-aos="fade-up">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Student Success Stories</h2>
            <p className="text-light">See what our students have to say</p>
          </div>
          
          <div className="row g-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-md-4" data-aos="flip-left">
                <div className="testimonial-card h-100">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="rounded-circle me-3"
                        width="50"
                        height="50"
                      />
                      <div>
                        <h6 className="mb-0">{testimonial.name}</h6>
                        <small className="text-light">{testimonial.role}</small>
                      </div>
                    </div>
                    <p className="mb-4">"{testimonial.text}"</p>
                    <div className="course-badge">
                      <span className="badge bg-primary">{testimonial.course}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5" data-aos="fade-up">
        <div className="container">
          <div className="cta-card rounded-4 p-5 text-center text-white">
            <h2 className="fw-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="mb-4">
              Join thousands of successful graduates who transformed their careers with our courses.
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <button className="btn btn-light btn-lg px-5">
                Browse All Courses
              </button>
              <button className="btn btn-outline-light btn-lg px-5">
                Schedule a Call
              </button>
            </div>
            <p className="mt-4 mb-0 small">
              <i className="bi bi-shield-check me-1"></i>
              <span>30-day money-back guarantee • Flexible payment options</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;