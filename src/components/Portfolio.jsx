import React from "react";

const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "Basement Conversion",
    description:
      "Converted an unused basement into  a modern, multi-functional space including a home theater,gym,and giest bedroom.",
    image:
      "https://media.istockphoto.com/id/1307122988/photo/new-canadian-luxury-house.jpg?s=1024x1024&w=is&k=20&c=-7AmsBXtYhhzTBlDWGUN8ZgCi9z3RTBPDKvVbFDdlVg=",
  },
  {
    id: 2,
    title: " Luxurious Bathroom Remodel",
    description:
      "Transform an outdated bathroom inti a spa-like retreat with marble tilling,a glass shower and modern fixtures.",
    image:
      "https://img.freepik.com/free-photo/modern-bathroom-with-big-mirror_1203-1497.jpg?t=st=1732782634~exp=1732786234~hmac=e1aa3e4d3591ea48b98925be6a3ad5e914d6bddc7a220cdb3e0572d1d3345a68&w=1800",
  },
  {
    id: 3,
    title: "Outdoor Living Space",
    description:
      "Designed a beautiful outdoor living arrea,complete with a pergola,fire pit and cozy seating for entertainment.",
    image:
      "https://img.freepik.com/free-photo/table-chair-with-white-umbrella-outdoor-patio_74190-1917.jpg?t=st=1732782735~exp=1732786335~hmac=2fdaca0357c64e3f707f844c5175081595a82929a514cf75ea8f228af451293a&w=1800",
  },
  {
    id: 4,
    title: "Home Office Transformation",
    description:
      "Created a sleek and functional home office,optimzing space with ergonomic furniture,ample storage,and modern decor.",
    image:
      "https://img.freepik.com/free-photo/online-school-equipment-home_23-2149041145.jpg?t=st=1732782857~exp=1732786457~hmac=92d9951bf75f32d6766a7110d72331296bac1a768935ce4fa053f3450e1a95ec&w=1800",
  },
  {
    id: 5,
    title: " Office Transformation",
    description:
      "Created a sleek and functional home office,optimzing space with ergonomic furniture,ample storage,and modern decor.",
    image:
      "https://img.freepik.com/free-photo/high-angle-desk-arrangement_23-2149013954.jpg?t=st=1732790153~exp=1732793753~hmac=05ebe1e5a5ee6a7eeb7aafdf2ff160f63678c2558d533e76956d073c9bae920c&w=1800",
  },
  {
    id: 6,
    title: "table room",
    description:
      "Created a sleek and functional home office,optimzing space with ergonomic furniture,ample storage,and modern decor.",
    image:
      "https://img.freepik.com/premium-photo/minimal-background-image-home-office-workplace-with-laptop-white-airy-interior-copy-space_236854-27496.jpg?w=1800",
  },
];

const Portfolio = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 " id="portfolio">
      <div className="mb-20">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mt-20 mb-12">
          Portfolio
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-3xl mx-4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500  group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
                <h3 className="mb-2 text-xl font-lg">{project.title}</h3>
                <p className="mb-12 p-4">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
