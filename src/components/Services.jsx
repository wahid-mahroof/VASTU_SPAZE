import React from "react";

const SERVICE_CONTENT = [
  {
    id: 1,
    title: "Living Room Renovation",
    description:
      "Update your living room with our expert revonation services.We offer custon design, new flooring options and stylish lighting solutions to create a warm and inviting space for your family and guests.",
    image:
      "https://img.freepik.com/premium-photo/office-furniture_664434-218.jpg?w=1060",
  },
  {
    id: 2,
    title: "Bathroom Renovation",
    description:
      "Update your Bathroom with our expert revonation services.We offer custon design, new flooring options and stylish lighting solutions to create a warm and inviting space for your family and guests.",
    image:
      "https://img.freepik.com/premium-photo/3d-rendering-classic-modern-bathroom-with-luxury-tile-decor_105762-996.jpg?w=1800",
  },
  {
    id: 3,
    title: "Drawing Renovation",
    description:
      "Update your Drawing room with our expert revonation services.We offer custon design, new flooring options and stylish lighting solutions to create a warm and inviting space for your family and guests.",
    image:
      "https://img.freepik.com/free-photo/table-sofa-rug-office_23-2147650961.jpg?t=st=1732780903~exp=1732784503~hmac=121b78a9c5c8b699091525512cdda17c9a36f60619dd62bfc0c9519e953b0a67&w=826",
  },
  {
    id: 4,
    title: "Lobby Renovation",
    description:
      "Update your Lobby with our expert revonation services.We offer custon design, new flooring options and stylish lighting solutions to create a warm and inviting space for your family and guests.",
    image:
      "https://img.freepik.com/free-photo/room-interior-design_23-2148899443.jpg?t=st=1732780935~exp=1732784535~hmac=f42de11f98ad465c3a3dc95a11efcd8b1a91c28717c7ac0359ce5f8ee76d97f1&w=1800",
  },
];

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2" id="services">
      <div className="my-20">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-20">
          Our Home Renovation Services
        </h2>

        {SERVICE_CONTENT.map((service, index) => (
          <div key={index} className="mb-12 mx-4 flex flex-col lg:flex-row">
            <div
              className={`lg:w-1/2 mb-4 lg:mb-0 ${
                index % 2 === 0 ? "" : "lg:order-2"
              }`}
            >
              <img
                src={service.image}
                alt=""
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div
              className={`lg:w-1/2 flex flex-col ${
                index % 2 === 0 ? "lg:pl-12 " : "lg:pr-12"
              }`}
            >
              <h3 className="text-xl lg:text-2xl font-medium mb-2">
                {service.title}
              </h3>
              <p className="mb-4 lg:tracking-wide text-md text-gray-400 lg:text-xl lg:leading-9">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
