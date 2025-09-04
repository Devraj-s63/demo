-- Database Setup for EduInstitute MERN Application with MySQL

-- Create Database
CREATE DATABASE IF NOT EXISTS eduinstitute;
USE eduinstitute;

-- Contact Messages Table
CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) DEFAULT '',
    message TEXT NOT NULL,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('new', 'read', 'responded') DEFAULT 'new'
);

-- Applications Table
CREATE TABLE IF NOT EXISTS applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) DEFAULT '',
    course_id VARCHAR(100) NOT NULL,
    course_name VARCHAR(255) NOT NULL,
    education ENUM('high-school', 'associate', 'bachelors', 'masters', 'phd', 'other') DEFAULT 'high-school',
    qualifications TEXT,
    resume_url VARCHAR(500) DEFAULT '',
    message TEXT,
    application_status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Courses Table (For course data management)
CREATE TABLE IF NOT EXISTS courses (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    duration VARCHAR(100),
    price DECIMAL(10, 2),
    category VARCHAR(100),
    featured BOOLEAN DEFAULT FALSE,
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Sample Course Data
INSERT INTO courses (id, name, description, duration, price, category, featured) VALUES
('web-dev', 'Full Stack Web Development',
 'Learn to build modern web applications from scratch using React, Node.js, and databases. Cover everything from frontend UI to backend APIs and deployment.',
 '6 months', 2999.00, 'IT', true),

('data-science', 'Data Science & Analytics',
 'Master data analysis, machine learning, and visualization with Python, R, and modern data tools. Work on real datasets and build predictive models.',
 '8 months', 3499.00, 'IT', true),

('digital-marketing', 'Digital Marketing Mastery',
 'Comprehensive digital marketing course covering SEO, social media, content marketing, PPC advertising, and email marketing strategies.',
 '4 months', 1999.00, 'Management', true),

('ux-design', 'UX/UI Design Principles',
 'Learn user-centered design principles, prototyping tools like Figma, wireframing, usability testing, and modern design trends.',
 '5 months', 2499.00, 'Design', false),

('mobile-dev', 'Mobile App Development',
 'Build native mobile apps using React Native and Flutter. Learn app architecture, APIs, database integration, and app store deployment.',
 '7 months', 3299.00, 'IT', false),

('project-mgmt', 'Project Management',
 'Learn Agile and Scrum methodologies, project planning, risk management, team leadership, and project management certifications.',
 '4 months', 2499.00, 'Management', false);

-- Create indexes for better performance
CREATE INDEX idx_contact_email ON contact_messages(email);
CREATE INDEX idx_contact_status ON contact_messages(status);
CREATE INDEX idx_applications_email ON applications(email);
CREATE INDEX idx_applications_status ON applications(application_status);
CREATE INDEX idx_applications_course ON applications(course_id);
CREATE INDEX idx_courses_category ON courses(category);
CREATE INDEX idx_courses_featured ON courses(featured);

-- Admin user table (for basic admin functionality)
CREATE TABLE IF NOT EXISTS admin_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(500) NOT NULL,
    role ENUM('admin', 'manager') DEFAULT 'admin',
    last_login TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Session tracking
CREATE TABLE IF NOT EXISTS admin_sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    session_token VARCHAR(500) NOT NULL,
    expired_at TIMESTAMP NOT NULL,
    FOREIGN KEY (user_id) REFERENCES admin_users(id) ON DELETE CASCADE
);

-- Basic analytics
CREATE TABLE IF NOT EXISTS analytics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type ENUM('page_view', 'contact_submit', 'application_submit') NOT NULL,
    page VARCHAR(200),
    user_agent TEXT,
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Newsletter subscriptions
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/*
Setup Instructions:
1. Run this SQL script in your MySQL database
2. Update environment variables in your Next.js app:
   - DB_HOST=your_mysql_host
   - DB_USER=your_mysql_user
   - DB_PASSWORD=your_mysql_password
   - DB_NAME=eduinstitute
   - DB_PORT=3306

3. Configure email settings for notifications:
   - EMAIL_HOST=smtp.gmail.com
   - EMAIL_USER=your-email@gmail.com
   - EMAIL_PASSWORD=your-app-password
   - EMAIL_PORT=587

4. Set admin email for notifications:
   - ADMIN_EMAIL=admin@eduinstitute.com

Note: For Gmail SMTP, you may need to enable "Less Secure App" access
or generate an App Password if you have 2FA enabled.

*/