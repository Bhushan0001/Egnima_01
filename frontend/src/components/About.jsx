import React from 'react'

const About = () => {
    return (
        <div className="about-container">
            <header className="about-header">
                <h1>About Us</h1>
            </header>

            <main className="about-content">
                <section className="about-section">
                    <h2>Welcome to Job Portal</h2>
                    <p>
                        At Job Portal, we connect talented individuals with their dream jobs. Our platform provides a wide range of job listings from top companies across various industries. Whether you're looking for a new career opportunity or just exploring your options, we're here to help you every step of the way.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to simplify the job search process and make it easier for job seekers to find opportunities that match their skills and interests. We strive to provide an intuitive and user-friendly platform that helps both job seekers and employers connect effectively.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Contact Us</h2>
                    <p>
                        Have questions or feedback? Feel free to reach out to us at <a href="mailto:info@jobportal.com">info@jobportal.com</a>.
                    </p>
                </section>
            </main>
        </div>
    )
}

export default About
