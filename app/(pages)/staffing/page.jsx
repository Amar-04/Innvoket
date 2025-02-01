import React from "react";
import Image from "next/image";
import TechStackCategory from "../../components/staffing/TechStackCategory"; // Adjust the path based on your file structure

const Staffing = () => {
  // Tech Stack Data
  const techStackData = [
    {
      title: "Frontend Technologies",
      technologies: [
        { name: "ReactJs", image: "/assets/react-icon.png" },
        { name: "VueJs", image: "/assets/vue-icon.png" },
        { name: "NextJs", image: "/assets/next-icon.png" },
        { name: "Angular", image: "/assets/angular-icon.png" },
      ],
    },
    {
      title: "Backend Technologies",
      technologies: [
        { name: "NodeJs", image: "/assets/node-icon.png" },
        { name: "Django", image: "/assets/django-icon.png" },
        { name: "Flask", image: "/assets/python-icon.png" },
        { name: "Spring Boot", image: "/assets/spring-icon.png" },
      ],
    },
    {
      title: "Database",
      technologies: [
        { name: "PostgreSQL", image: "/assets/postgresql-icon.png" },
        { name: "MongoDB", image: "/assets/mongodb-icon.png" },
        { name: "Firebase", image: "/assets/firebase-icon.png" },
      ],
    },
    {
      title: "Data Engineering",
      technologies: [
        { name: "Apache Spark", image: "/assets/apache-icon.png" },
        { name: "Kafka", image: "/assets/kafka-icon.png" },
        { name: "Airflow", image: "/assets/airflow-icon.png" },
        { name: "PostgreSQL", image: "/assets/postgresql-icon.png" },
        { name: "AWS Redshift", image: "/assets/redshift-icon.png" },
      ],
    },
    {
      title: "Data Science & AI Development",
      technologies: [
        { name: "Python", image: "/assets/python-icon.png" },
        { name: "TensorFlow", image: "/assets/tensor-icon.png" },
        { name: "PyTorch", image: "/assets/torch-icon.png" },
        { name: "Scikit-Learn", image: "/assets/scikit-icon.png" },
        { name: "Pandas", image: "/assets/pandas-icon.png" },
      ],
    },
    {
      title: "Data Analysis",
      technologies: [
        { name: "Power BI", image: "/assets/power-icon.png" },
        { name: "Tableau", image: "/assets/table-icon.png" },
        { name: "SQL", image: "/assets/sql-icon.png" },
        { name: "Excel", image: "/assets/excel-icon.png" },
        { name: "Google Analytics", image: "/assets/analytics-icon.png" },
      ],
    },
  ];

  return (
    <div
      className="relative bg-dark text-white px-6 py-8"
      style={{ fontFamily: "Unbounded, sans-serif" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <Image
          src="/ellipse.png"
          alt="Background Ellipse"
          width={1000}
          height={500}
          className="w-full max-w-5xl opacity-50"
        />
      </div>

      {/* Hero Section */}
      <section className="text-center my-16">
        <p className="text-[#E17622] text-lg mb-4 satoshi">
          Dedicated Developer Hiring & Staff Augmentation
        </p>
        <h1 className="text-xl md:text-4xl font-medium mb-4 leading-tight">
          Empowering Your Business with
          <br />
          <span className="inline-block bg-[#E17622] text-black py-2 px-6 rounded-lg mt-4">
            Expert Development Teams
          </span>
        </h1>
        <p className="mt-6 mx-auto max-w-xl text-gray-300 satoshi mb-8">
          We believe in combining innovative design, sustainable practices, and
          exceptional craftsmanship to bring your vision to life.
        </p>
        <button
          href="/pages/contact"
          className="bg-[#FF7A30] py-3 px-7 rounded-full transition-colors text-black hover:bg-[#e06822]"
        >
          CONTACT US ↗
        </button>
      </section>

      {/* Services Section */}
      <section className="my-16">
        <h2 className="text-center text-3xl font-semibold satoshi mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#E17622] text-dark p-6 rounded-xl shadow-lg">
            <h5 className="text-xl font-semibold mb-4">
              Dedicated Developer Hiring
            </h5>
            <p className="text-gray-800">
              Hire experienced developers who focus exclusively on your project.
              Our developers become an extension of your in-house team, ensuring
              commitment and project ownership.
            </p>
          </div>
          <div className="bg-gray-800 text-gray-300 p-6 rounded-xl shadow-lg">
            <h5 className="text-xl font-semibold mb-4 text-[#E17622]">
              Staff Augmentation
            </h5>
            <p>
              Scale your team efficiently with our on-demand developer
              augmentation services. Fill skill gaps and meet project deadlines
              by accessing experienced professionals without full-time hiring.
            </p>
          </div>
          <div className="bg-gray-800 text-gray-300 p-6 rounded-xl shadow-lg">
            <h5 className="text-xl font-semibold mb-4 text-[#E17622]">
              Dedicated Team Contracting
            </h5>
            <p>
              Build full development teams - including project managers,
              developers, data scientists, and QA specialists - under contract.
              These teams work exclusively on your project, providing end-to-end
              development services.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="my-16">
        <h2 className="text-center text-3xl font-semibold satoshi mb-8">
          Our Tech Stack
        </h2>
        <section className=" py-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card bg-[#1f1f1f] shadow-lg rounded-lg p-6 text-center">
              <div className="text-5xl font-extrabold text-[#E17622]">35+</div>
              <div className="text-xl font-semibold text-gray-300">
                Developers
              </div>
            </div>
            <div className="card bg-[#1f1f1f] shadow-lg rounded-lg p-6 text-center">
              <div className="text-5xl font-extrabold text-[#E17622]">4+</div>
              <div className="text-xl font-semibold text-gray-300">
                Experience
              </div>
            </div>
          </div>
        </section>
        {techStackData.map((category, index) => (
          <TechStackCategory
            key={index}
            title={category.title}
            technologies={category.technologies}
          />
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center mt-16 text-gray-400 satoshi"></footer>
    </div>
  );
};

export default Staffing;
