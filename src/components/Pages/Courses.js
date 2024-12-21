import React, { useState } from "react";
import GoogleFormEmbed from "./GoogleForm/googleform";
import "./Courses.css";
import Header from "../Header";
import Footer from "../home/footer";


export const PythonCourse = ({ onClose }) => {
  const [showForm, setShowForm] = useState(false); 
  const handleFormOpen = () => setShowForm(true);
  const handleFormClose = () => { setShowForm(false); }; 
  
  return (
    <div className="course-page">
      <Header />
      <main>
        <div className="course-details">
          <h2 className="course-title">Python Course Details</h2>
          <p className="course-description">
            Python is in demand, and if you're looking for a promising and exciting career in coding, this is one of the best languages to learn. 
            The main reason it is so popular and valuable is that, while it is beginner-friendly, it can handle a wide range of tasks.
          </p>
          
          <h3 className="course-section-title">Course Curriculum</h3>
          <div className="topics">
          <h4>Week 1-2: Introduction to Python</h4>
          <ul>
            <li>Getting Started with Python</li>
            <li>Installation and setup of Python</li>
            <li>Introduction to Python IDLE</li>
            <li>Setting up the Development Environment</li>
            <li>Installing VS Code or PyCharm</li>
            <li>Introduction to IDE features</li>
            <li>Writing Your First Python Program</li>
            <li>Understanding Basic Syntax and Structure</li>
          </ul>
          <h4>Week 3-4: Basic Topics</h4>
            <ul>
              <li>Data Types and Variables</li>
              <li>Numeric data types: int, float, complex</li>
              <li>Text data type: str</li>
              <li>Boolean data type: bool</li>
              <li>Basic Operators</li>
              <li>Arithmetic, comparison, logical, and assignment operators</li>
              <li>Control Structures</li>
              <li>If-else statements</li>
              <li>Loops: for and while loops</li>
              <li>Basic Data Structures</li>
              <li>Lists, tuples, and dictionaries</li>
              <li>Functions</li>
              <li>Modules and Packages</li>
            </ul>
          <h4>Week 5-6: Intermediate Topics</h4>
            <ul>
              <li>List Comprehensions</li>
              <li>Advanced Functions (e.g., lambda, decorators)</li>
              <li>File Handling</li>
              <li>Error and Exception Handling</li>
              <li>Classes and Object-Oriented Programming (OOP)</li>
              <li>Intermediate Data Structures</li>
              <li>Working with External Libraries</li>
            </ul>
          <h4>Week 7-8: Advanced Topics and Applications</h4>
            <ul>
              <li>Web Development with Django/Flask</li>
              <li>Data Analysis and Visualization with Pandas and Matplotlib</li>
              <li>Machine Learning Foundations</li>
            </ul>
          </div>
          
          {/* <h3 className="course-section-title">Course Features</h3>
          <h3 className="course-section-title">Course Features</h3> */}
          <div className="course-info">
            <div>
              <ul>
              <h4>Course Features</h4>
                <li><strong>Lectures:</strong> 12</li>
                <li><strong>Quizzes:</strong> 5</li>
                <li><strong>Duration:</strong> 8 weeks</li>
                <li><strong>Assessments:</strong> Yes, comprehensive assessments to track your progress</li>
              </ul>
            </div>
            <div>
              <h4>Additional Resources</h4>
              <ul>
                <li>Access to online forums and community support</li>
                <li>Downloadable resources and cheat sheets</li>
                <li>Weekly live Q&A sessions with instructors</li>
              </ul>
            </div>
          </div>
          <p className="course-banner-subtitle">Your journey to becoming a Python expert starts here.</p>
          <button className="register-button" onClick={handleFormOpen}>Enroll Now </button>
          
        </div>
        {/* <div className="course-banner"> */}
          {/* <h1 className="course-banner-title">Master Python Programming</h1> */}
          {/* <h2 className="course-section-title">Why Enroll in This Course?</h2> */}
          {/* <p>
            This course is beginner-friendly, offers a comprehensive curriculum, includes hands-on learning opportunities, and opens doors 
            to exciting career opportunities in web development, data science, and machine learning. 
            Join a community of learners and take the first step towards mastering Python!
          </p> */}
        {/* </div> */}
        <GoogleFormEmbed showForm={showForm} onClose={handleFormClose} />
      </main>
      <Footer />
    </div>
  );
};




export const JavaCourse = ({ onClose }) => {
  const [showForm, setShowForm] = useState(false);
  const handleFormOpen = () => setShowForm(true);
  const handleFormClose = () => { setShowForm(false);  };

  return (
    <div>
    <div  style={{position:'fixed',display: 'contents'}}>
     <Header />
     </div>
    <main>
      <div className="course-details">
      <h2 className="course-title">Java Course Overview</h2>
        <p className="course-description">
          Java is one of the most powerful and widely-used programming languages in the world. Known for its versatility and performance, Java is the backbone of many enterprise-level applications, mobile apps, and large systems. Whether you're aiming for a career in software development, Android app development, or enterprise solutions, mastering Java will provide you with the skills needed to excel in these fields.
        </p>

        <h3 className="course-section-title">Course Curriculum</h3>
        <div className="topics">
          <h4>Week 1-2: Introduction to Java</h4>
          <ul>
            <li>Understanding the basics of Java</li>
            <li>Setting up the Java development environment</li>
            <li>Writing and running your first Java program</li>
            <li>Basic syntax and structure of Java programs</li>
          </ul>

          <h4>Week 3-4: Core Java Concepts</h4>
          <ul>
            <li>Data types, variables, and operators</li>
            <li>Control flow statements: if-else, switch-case, loops</li>
            <li>Arrays and strings</li>
            <li>Functions and methods: defining and calling methods</li>
          </ul>

          <h4>Week 5-6: Object-Oriented Programming (OOP)</h4>
          <ul>
            <li>Classes and objects</li>
            <li>Inheritance and polymorphism</li>
            <li>Encapsulation and abstraction</li>
            <li>Interfaces and abstract classes</li>
          </ul>

          <h4>Week 7-8: Advanced Java Topics</h4>
          <ul>
            <li>Exception handling and debugging</li>
            <li>Collections framework: lists, sets, maps</li>
            <li>File I/O: reading from and writing to files</li>
            <li>Introduction to Java threads and concurrency</li>
            <li>Working with databases using JDBC</li>
          </ul>
        </div>
        <h3 className="course-section-title">Course Features</h3>
        <h3 className="course-section-title">Course Features</h3>
        <div className="course-info">
          <div>
            <ul>
              <li><strong>Lectures:</strong> 12</li>
              <li><strong>Quizzes:</strong> 5</li>
              <li><strong>Duration:</strong> 8 weeks</li>
              <li><strong>Assessments:</strong> Yes, comprehensive assessments to track your progress and ensure understanding</li>
            </ul>
          </div>
          <div>
            <h4>Additional Resources</h4>
            <ul>
              <li>Access to live coding sessions and forums</li>
              <li>Downloadable Java cheat sheets and coding templates</li>
              <li>Weekly live Q&A sessions with instructors</li>
            </ul>
          </div>
        </div>

        {/* <h3>Why Enroll in This Course?</h3>
        <p>
          This course is designed to equip you with the essential skills to become proficient in Java programming. Whether you want to pursue a career in software development, web development, or Android app development, mastering Java will give you a solid foundation in the world of programming.
        </p> */}
        <p className="course-banner-subtitle">Your journey to becoming a Java expert starts here.</p>
        <button className="register-button" onClick={handleFormOpen}>Enroll Now</button>
      </div>
      <GoogleFormEmbed showForm={showForm} onClose={handleFormClose} />
      </main>
      <Footer />
    </div>
  );
};

export const WebDevelopmentCourse = ({ onClose }) => {
  const [showForm, setShowForm] = useState(false); 
  const handleFormOpen = () => setShowForm(true);
  const handleFormClose = () => { setShowForm(false);  };

  return(
    <div>
      <div  style={{position:'fixed',display: 'contents'}}>
     <Header />
     </div>
    <main>
    <div className="course-details">
      <h2 className="course-title">HTML, CSS, and JavaScript Course Details</h2>
      <p className="course-description">
        In today's digital world, mastering HTML, CSS, and JavaScript is essential for anyone interested in web development. 
        These foundational technologies enable you to create responsive, interactive, and visually appealing websites. 
        Whether you're aiming for a career in web design, front-end development, or simply want to enhance your coding skills, 
        this course provides a comprehensive introduction to these key technologies.
      </p>
      
      <h3 className="course-section-title">Course Curriculum</h3>
      <div className="topics">
        <h4>Week 1-2: Introduction to HTML</h4>
        <ul>
          <li>Getting started with HTML</li>
          <li>Understanding the structure of web pages</li>
          <li>Writing your first HTML document</li>
          <li>Common HTML elements: headings, paragraphs, lists, links, images, and tables</li>
        </ul>

        <h4>Week 3-4: Introduction to CSS</h4>
        <ul>
          <li>What is CSS and how it works with HTML</li>
          <li>Applying styles to HTML elements</li>
          <li>Understanding CSS syntax and selectors</li>
          <li>Working with colors, fonts, and text styles</li>
          <li>Box model and layout techniques: margins, padding, borders, and display properties</li>
        </ul>

        <h4>Week 5-6: Advanced CSS Techniques</h4>
        <ul>
          <li>Flexbox and Grid Layout for responsive design</li>
          <li>Advanced selectors and pseudo-classes</li>
          <li>Animations and transitions</li>
          <li>CSS preprocessors: SASS basics</li>
          <li>Best practices for responsive and adaptive design</li>
        </ul>

        <h4>Week 7-8: Introduction to JavaScript</h4>
        <ul>
          <li>Basics of JavaScript: variables, data types, and operators</li>
          <li>Control structures: conditionals and loops</li>
          <li>Functions and scope</li>
          <li>Manipulating the DOM: selecting and modifying elements</li>
          <li>Event handling: adding interactivity to web pages</li>
          <li>Introduction to ES6 features: let, const, arrow functions, and template literals</li>
        </ul>
      </div>

      <h3 className="course-section-title">Course Features</h3>
          <h3 className="course-section-title">Course Features</h3>
      <div className="course-info">
        <div>
          <ul>
            <li><strong>Lectures:</strong> 10</li>
            <li><strong>Quizzes:</strong> 4</li>
            <li><strong>Duration:</strong> 8 weeks</li>
            <li><strong>Assessments:</strong> Yes, comprehensive assessments to track your progress and ensure understanding</li>
          </ul>
        </div>
        <div>
          <h4>Additional Resources</h4>
          <ul>
            <li>Access to online forums and community support</li>
            <li>Downloadable resources and cheat sheets</li>
            <li>Weekly live Q&A sessions with instructors</li>
          </ul>
        </div>
      </div>

      {/* <h3>Why Enroll in This Course?</h3>
      <p>
        This course is beginner-friendly, offers a comprehensive curriculum, includes hands-on learning opportunities, 
        and opens doors to exciting career opportunities in web development. 
        Learn the core technologies behind every modern website and take the first step towards becoming a front-end developer!
      </p> */}
      <p className="course-banner-subtitle">Your journey to becoming a WebDevelopement expert starts here.</p>
      <button className="register-button" onClick={handleFormOpen}>Enroll Now</button>
    </div>
    <GoogleFormEmbed showForm={showForm} onClose={handleFormClose} /> 
    </main>
      <Footer />
    </div>
  );
};

export const CommunicationSkills = ({ onClose }) => {
  const [showForm, setShowForm] = useState(false); 
  const handleFormOpen = () => setShowForm(true);
  const handleFormClose = () => { setShowForm(false); };

  return(
    <div>
     <div  style={{position:'fixed',display: 'contents'}}>
     <Header />
     </div>
    <main>
    <div className="course-details">
      <h2 className="course-title">Communication Skills Course Details</h2>
      <p className="course-description">
        Effective communication is crucial for success in both personal and professional life. 
        This course focuses on developing the essential skills needed to convey ideas clearly and confidently. 
        Whether you're preparing for presentations, engaging in group discussions, or enhancing your interpersonal skills, 
        mastering communication techniques can significantly boost your career prospects and personal growth.
      </p>
      
      <h3>Course Curriculum</h3>
      <div className="topics">
        <h4>Week 1-2: Introduction to Communication</h4>
        <ul>
          <li>Understanding the basics of communication</li>
          <li>Different types of communication: verbal, non-verbal, written, and visual</li>
          <li>The communication process and its components</li>
          <li>Overcoming communication barriers</li>
        </ul>

        <h4>Week 3-4: Verbal and Non-Verbal Communication</h4>
        <ul>
          <li>Techniques for effective verbal communication</li>
          <li>Body language and its importance in communication</li>
          <li>Listening skills: active listening and feedback</li>
          <li>Public speaking tips and overcoming stage fright</li>
        </ul>

        <h4>Week 5-6: Written Communication</h4>
        <ul>
          <li>Fundamentals of writing clear and concise emails</li>
          <li>Crafting impactful reports and presentations</li>
          <li>Persuasive writing techniques</li>
          <li>Grammar and style: common mistakes to avoid</li>
        </ul>

        <h4>Week 7-8: Advanced Communication Skills</h4>
        <ul>
          <li>Interpersonal communication: building rapport and relationships</li>
          <li>Conflict resolution and negotiation skills</li>
          <li>Cultural sensitivity and communication in a global context</li>
          <li>Professional communication: networking and interview techniques</li>
        </ul>
      </div>

      <h3 className="course-section-title">Course Features</h3>
          <h3 className="course-section-title">Course Features</h3>
      <div className="course-info">
        <div>
          <ul>
            <li><strong>Lectures:</strong> 10</li>
            <li><strong>Quizzes:</strong> 5</li>
            <li><strong>Duration:</strong> 8 weeks</li>
            <li><strong>Assessments:</strong> Yes, comprehensive assessments to track your progress and ensure understanding</li>
          </ul>
        </div>
        <div>
          <h4>Additional Resources</h4>
          <ul>
            <li>Access to online forums and community support</li>
            <li>Downloadable resources and cheat sheets</li>
            <li>Weekly live Q&A sessions with instructors</li>
          </ul>
        </div>
      </div>

      {/* <h3>Why Enroll in This Course?</h3>
      <p>
        This course is designed to help you develop essential communication skills for both personal and professional growth. 
        It covers all aspects of effective communication, including verbal, non-verbal, and written forms. 
        You'll engage in hands-on learning through practical exercises, role-playing, and gain valuable insights into communication in a global context.
      </p> */}
      <p className="course-banner-subtitle">Your journey to becoming a Communicatingexpert starts here.</p>
      <button className="register-button" onClick={handleFormOpen}>Enroll Now</button>
    </div>
    <GoogleFormEmbed showForm={showForm} onClose={handleFormClose} /> 
    </main>
      <Footer />
    </div>
  );
};

export const AptitudeSkills = ({ onClose }) => {
  const [showForm, setShowForm] = useState(false); 
  const handleFormOpen = () => setShowForm(true);
  const handleFormClose = () => { setShowForm(false);  };

  return(
    <div>
     <div  style={{position:'fixed',display: 'contents'}}>
     <Header />
     </div>
    <main>
    <div className="course-details">
      <h2 className="course-title"x>Aptitude Skills Course Details</h2>
      <p className="course-description">
        Aptitude skills are essential for success in various competitive exams, job placements, and career advancements. 
        This course focuses on developing critical thinking, problem-solving abilities, and numerical proficiency. 
        Whether you're preparing for campus placements, competitive exams, or simply want to enhance your logical reasoning skills, 
        this course provides a comprehensive introduction to key aptitude areas.
      </p>
      
      <h3 className="course-section-title">Course Curriculum</h3>
      <div className="topics">
        <h4>Week 1-2: Numerical Aptitude</h4>
        <ul>
          <li>Understanding basic arithmetic operations</li>
          <li>Working with percentages, ratios, and proportions</li>
          <li>Solving problems related to averages, mixtures, and alligation</li>
          <li>Time, speed, and distance calculations</li>
        </ul>

        <h4>Week 3-4: Logical Reasoning</h4>
        <ul>
          <li>Introduction to logical reasoning</li>
          <li>Analytical puzzles and pattern recognition</li>
          <li>Blood relations and direction sense</li>
          <li>Syllogisms and logical deductions</li>
        </ul>

        <h4>Week 5-6: Verbal Aptitude</h4>
        <ul>
          <li>Basics of verbal reasoning</li>
          <li>Sentence completion and para jumbles</li>
          <li>Synonyms, antonyms, and vocabulary building</li>
          <li>Reading comprehension techniques</li>
        </ul>

        <h4>Week 7-8: Data Interpretation and Analysis</h4>
        <ul>
          <li>Introduction to data interpretation</li>
          <li>Working with tables, graphs, and charts</li>
          <li>Data sufficiency and analysis</li>
          <li>Practicing real-world data interpretation problems</li>
        </ul>
      </div>

      <h3 className="course-section-title">Course Features</h3>
      <h3 className="course-section-title">Course Features</h3>
      <div className="course-info">
        <div>
          <ul>
            <li><strong>Lectures:</strong> 10</li>
            <li><strong>Quizzes:</strong> 5</li>
            <li><strong>Duration:</strong> 8 weeks</li>
            <li><strong>Assessments:</strong> Yes, comprehensive assessments to track your progress and ensure understanding</li>
          </ul>
        </div>
        <div>
          <h4>Additional Resources</h4>
          <ul>
            <li>Access to online forums and community support</li>
            <li>Downloadable resources and cheat sheets</li>
            <li>Weekly live Q&A sessions with instructors</li>
          </ul>
        </div>
      </div>

      {/* <h3>Why Enroll in This Course?</h3>
      <p>
        This course is designed to help you develop essential aptitude skills for success in competitive exams and job placements. 
        With a comprehensive curriculum covering numerical, logical, and verbal aptitude, you'll engage in hands-on learning and 
        gain the skills required to excel in various competitive scenarios.
      </p> */}
      <p className="course-banner-subtitle">Your journey to becoming a problem solving expert starts here.</p>
      <button className="register-button" onClick={handleFormOpen}>Enroll Now</button>
    </div>
    <GoogleFormEmbed showForm={showForm} onClose={handleFormClose} /> 
    </main>
      <Footer />
    </div>
  );
};

export const SQLCourse = ({ onClose }) => {
  const [showForm, setShowForm] = useState(false);
  const handleFormOpen = () => setShowForm(true);
  const handleFormClose = () => { setShowForm(false);  };

  return (
    <div>
    <div  style={{position:'fixed',display: 'contents'}}>
     <Header />
     </div>
    <main>
      <div className="course-details">
        <h2 className="course-title">SQL Course Overview</h2>
        <p className="course-description">
          SQL (Structured Query Language) is a fundamental skill for anyone working with databases. As the most widely-used database language, SQL is essential for data management, analysis, and reporting. Whether you're aiming for a career in data science, software development, or business analytics, mastering SQL will give you the ability to efficiently manage and query databases, making you an invaluable asset to any team.
        </p>

        <h3 className="course-section-title">Course Curriculum</h3>
        <div className="topics">
          <h4>Week 1-2: Introduction to SQL</h4>
          <ul>
            <li>Understanding databases and their importance</li>
            <li>Basic concepts of SQL</li>
            <li>Setting up a database environment</li>
            <li>Writing and executing basic SQL queries</li>
          </ul>

          <h4>Week 3-4: Database Design and Table Management</h4>
          <ul>
            <li>Creating and managing tables</li>
            <li>Understanding data types and constraints</li>
            <li>Inserting, updating, and deleting data</li>
            <li>Designing normalized databases</li>
          </ul>

          <h4>Week 5-6: Querying Data</h4>
          <ul>
            <li>Basic SELECT statements</li>
            <li>Filtering data with WHERE clauses</li>
            <li>Sorting and ordering data</li>
            <li>Using aggregate functions (SUM, AVG, COUNT, etc.)</li>
            <li>Grouping data with GROUP BY</li>
          </ul>

          <h4>Week 7-8: Advanced SQL Concepts</h4>
          <ul>
            <li>Joining tables: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN</li>
            <li>Subqueries and nested queries</li>
            <li>Using views and indexes</li>
            <li>Transactions and stored procedures</li>
            <li>Error handling and optimization techniques</li>
          </ul>
        </div>

        <h3 className="course-section-title">Course Features</h3>
        <h3 className="course-section-title">Course Features</h3>
        <div className="course-info">
          <div>
            <ul>
              <li><strong>Lectures:</strong> 12</li>
              <li><strong>Quizzes:</strong> 4</li>
              <li><strong>Duration:</strong> 8 weeks</li>
              <li><strong>Assessments:</strong> Yes, comprehensive assessments to track your progress and ensure understanding</li>
            </ul>
          </div>
          <div>
            <h4>Additional Resources</h4>
            <ul>
              <li>Access to online forums and community support</li>
              <li>Downloadable SQL cheat sheets and resources</li>
              <li>Weekly live Q&A sessions with instructors</li>
            </ul>
          </div>
        </div>

        {/* <h3>Why Enroll in This Course?</h3>
        <p>
          This course is designed to equip you with the essential skills for managing and querying databases using SQL. With a well-rounded curriculum, you'll learn both basic and advanced SQL techniques, apply your knowledge through real-world assignments, and enhance your career prospects in fields such as data science, business analytics, and software development.
        </p> */}
        <p className="course-banner-subtitle">Your journey to becoming a SQL expert starts here.</p>
        <button className="register-button" onClick={handleFormOpen}>Enroll Now</button>
      </div>
      <GoogleFormEmbed showForm={showForm} onClose={handleFormClose} />
      </main>
      <Footer />
    </div>
  );
};


