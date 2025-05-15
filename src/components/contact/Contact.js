import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Section from "../common/Section";
import { useTheme } from "../../context/ThemeContext";

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      // Replace with your EmailJS credentials
      await emailjs.send(
        "service_qaooy8l",
        "template_nhn0uxu",
        formData,
        "4doXFbd4rqoXU0Wez"
      );

      setStatus({
        type: "success",
        message: "Message sent successfully! I will get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus({
        type: "danger",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: "ahmeddhhshjf@gmail.com",
      link: "mailto:ahmeddhhshjf@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      content: "+201158410131",
      link: "tel:+201158410131",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      content: "Egype/Sohag",
      link: "https://maps.google.com/?q=Egypt/Sohag",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/ahmed2302",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      url: "www.linkedin.com/in/ahmed-hamdy-khalafallah",
      label: "LinkedIn",
    }
  ];

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Let's discuss your next project">
      <Container>
        <Row className="g-4">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}>
              <h3 className="h4 mb-4">Contact Information</h3>
              <p className="mb-4">
                Feel free to reach out to me for any questions or opportunities.
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              <div className="mb-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="d-flex align-items-center mb-3">
                    <div
                      className={`rounded-circle p-2 me-3 ${
                        isDarkMode ? "bg-secondary" : "bg-primary"
                      }`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="h6 mb-1">{info.title}</h4>
                      <a
                        href={info.link}
                        className={`text-decoration-none ${
                          isDarkMode ? "text-light" : "text-dark"
                        }`}>
                        {info.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="d-flex gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`fs-4 ${
                      isDarkMode ? "text-light" : "text-dark"
                    }`}
                    aria-label={link.label}>
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}>
              <Form onSubmit={handleSubmit}>
                {status.message && (
                  <Alert variant={status.type} className="mb-4">
                    {status.message}
                  </Alert>
                )}

                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Your message"
                  />
                </Form.Group>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Contact;
