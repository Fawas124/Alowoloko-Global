import { FaPhone, FaEnvelope, FaUserTie, FaMapMarkerAlt } from "react-icons/fa";

const AgentContact = () => {
  const agents = [
    {
      id: 1,
      name: "Mr Semilore",
      position: "Senior Property Agent",
      phone: "+234 803 491 4580",
      email: "semilorealowoloko@gmail.com",
    },
    {
      id: 2,
      name: "Mr Omotayo",
      position: "Land Acquisition Specialist",
      phone: "+234 706 788 5054",
      email: "omotayoalowoloko@gmail.com",
    },
    {
      id: 3,
      name: "Baba Oyo",
      position: "Property Valuation Expert",
      phone: "+234 904 175 4737",
      email: "babaoyoalowoloko@gmail.com",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact Our Property Agents</h1>

        <div className="mb-8">
          <img
            src="/images/agents-team.png"
            alt="Our Property Agents"
            className="w-full h-[29rem] object-cover rounded-lg"
          />
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">
            Dedicated Property Professionals
          </h2>
          <p className="mb-6">
            Our team of experienced property agents is ready to assist you with
            all your land and real estate needs. Whether you're looking to buy,
            sell, or get professional advice, contact one of our specialists
            below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {agents.map((agent) => (
              <div
                key={agent.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <FaUserTie className="text-orange-500 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{agent.name}</h3>
                    <p className="text-gray-600">{agent.position}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <FaPhone className="text-orange-500 mr-3" />
                    <a
                      href={`tel:${agent.phone}`}
                      className="text-gray-700 hover:text-orange-500"
                    >
                      {agent.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="text-orange-500 mr-3" />
                    <a
                      href={`mailto:${agent.email}`}
                      className="text-gray-700 hover:text-orange-500"
                    >
                      {agent.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">
              General Property Inquiries
            </h3>
            <p className="mb-4">
              For general questions or to be connected with the best agent for
              your needs, please contact our main office.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+2348038105698"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded text-center flex items-center justify-center"
              >
                <FaPhone className="mr-2" /> Call Office
              </a>

              <a
                href="mailto:alowolokoglobalcompany@gmail.com?subject=Property Inquiry&body=Hello Alowoloko Global Team,%0D%0A%0D%0AI would like to inquire about..."
                onClick={(e) => {
                  if (!navigator.userAgent.match(/mailto:/i)) {
                    e.preventDefault();
                    window.open(
                      "https://mail.google.com/mail/?view=cm&fs=1&to=alowolokoglobalcompany@gmail.com&su=Property Inquiry&body=Hello Alowoloko Global Team,%0D%0A%0D%0AI would like to inquire about..."
                    );
                  }
                }}
                className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-6 rounded text-center flex items-center justify-center border border-gray-300"
              >
                <FaEnvelope className="mr-2" /> Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentContact;
