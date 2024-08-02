import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './HomePage.css'; // Import CSS file

const HomePage = () => {
  const features = [
    {
      title: "Task Creation and Organization",
      description: "Create tasks and organize them into categories, projects, or folders. Add details such as task names, descriptions, due dates, priorities, and assignees.",
      link: "/dashboard?tab=add" // Link to 'Add Task' tab on Dashboard
    },
    {
      title: "Task Prioritization and Scheduling",
      description: "Prioritize tasks based on urgency or importance. Set deadlines, schedule reminders, and allocate estimated durations to ensure timely completion.",
      link: "/dashboard?tab=prioritization" // Link to 'Task Prioritization' tab on Dashboard
    },
    {
      title: "Task Assignment and Collaboration",
      description: "Assign tasks to team members and track their progress. Collaborate through comments, file attachments, or real-time messaging to keep everyone aligned.",
      link: "/dashboard?tab=assignment" // Link to 'Task Assignment' tab on Dashboard
    },
    {
      title: "Task Progress Tracking",
      description: "Track task progress, update statuses, mark tasks as complete, and monitor time spent. Identify bottlenecks and adjust as needed to enhance productivity.",
      link: "/dashboard?tab=tracking" // Link to 'Task Progress Tracking' tab on Dashboard
    },
    {
      title: "Calendar and Timeline Views",
      description: "Visualize tasks and deadlines in calendar or timeline views. See your workload at a glance and plan accordingly.",
      link: "/dashboard?tab=calendar" // Link to 'Calendar' tab on Dashboard
    },
    {
      title: "Time Tracking and Reporting",
      description: "Log time spent on tasks or projects. Monitor work hours for accurate tracking and reporting.",
      link: "/dashboard?tab=tracking" // Link to 'Task Progress Tracking' tab on Dashboard
    },
    {
      title: "Reminders and Notifications",
      description: "Receive reminders and notifications for upcoming deadlines, task assignments, and status changes to stay informed and on track.",
      link: "/dashboard?tab=reminders" // Link to 'Reminders' tab on Dashboard
    }
  ];

  return (
    <div className="homepage">
      <h1>Welcome to Tasknow</h1>
      <p>Your one-stop solution for effective task and time management.</p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <Link to={feature.link} key={index} className="feature-card">
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </Link>
        ))}
      </div>
      <Link to="/login" className="start-button">Let's Start</Link>
    </div>
  );
};

export default HomePage;
