export default function FAQ() {
  const faqs = [
    {
      question: "What services does Ityav Systems offer?",
      answer: "We offer custom website development, Microsoft Excel solutions, Microsoft Word document management, and data analysis and visualization services."
    },
    {
      question: "How long does it take to build a website?",
      answer: "The timeline for website development varies depending on the complexity of the project. A simple website might take 2-4 weeks, while more complex projects can take 8-12 weeks or more."
    },
    {
      question: "Can you help with Microsoft Excel spreadsheets?",
      answer: "Yes, we specialize in creating custom Excel solutions, including complex formulas, macros, and data analysis tools to help streamline your business processes."
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Yes, we provide ongoing support and maintenance for all our services to ensure your solutions continue to work efficiently and effectively."
    }
  ]

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

