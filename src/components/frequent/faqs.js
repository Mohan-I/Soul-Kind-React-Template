import Accordion from 'react-bootstrap/Accordion';

function Faqs() {
  const faqItems = [
    {
      question: "What makes Soul Kind different from other creative studios?",
      answer: "Soul Kind combines artistic creativity with web3 technology and community-driven storytelling. We're not just a studio - we're a movement that empowers artists through our fund and involves our community in the creative process."
    },
    {
      question: "How does the Soul Kind Fund support artists?",
      answer: "Our fund provides financial freedom for artists to focus on their craft without economic dependencies. We offer grants, resources, and mentorship to help visionary creators bring their most ambitious projects to life."
    },
    {
      question: "What is community-driven storytelling?",
      answer: "Community-driven storytelling means our audience helps shape the narratives, characters, and worlds we create. Through our platform, fans can contribute ideas, vote on story directions, and become active participants in the creative journey."
    },
    {
      question: "How does web3 technology enhance your storytelling?",
      answer: "Web3 enables true ownership of digital assets, decentralized governance of our creative universe, and new ways for fans to engage with our stories through NFTs, DAOs, and immersive metaverse experiences."
    },
    {
      question: "Can I join the Soul Kind creative community?",
      answer: "Absolutely! We welcome artists, writers, designers, and storytellers from all backgrounds. Join our Discord community, participate in our creative challenges, or apply for opportunities through our careers page."
    },
    {
      question: "What formats will Soul Kind stories be available in?",
      answer: "We're developing stories across multiple formats including animated series, graphic novels, games, immersive AR/VR experiences, and interactive web3 platforms to create a truly interconnected universe."
    }
  ];

  return (
    <Accordion className="soulkind-accordion">
      {faqItems.map((item, index) => (
        <Accordion.Item key={index} eventKey={index.toString()} className="soulkind-accordion-item" data-aos="fade-up">
          <Accordion.Header className="soulkind-accordion-header" data-aos="fade-right">
            {item.question}
          </Accordion.Header>
          <Accordion.Body className="soulkind-accordion-body">
            {item.answer}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default Faqs;