import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How accurate is the waste identification system?",
      answer: "Our AI-powered waste identification system has an accuracy rate of over 94%. It uses advanced machine learning algorithms trained on thousands of waste images to provide reliable identification results."
    },
    {
      question: "What types of waste can the system identify?",
      answer: "The system can identify various types of waste including paper, plastic, glass, metal, textiles, cardboard, organic waste, and electronic items. We're continuously expanding our database to include more waste categories."
    },
    {
      question: "Are the conversion ideas suitable for beginners?",
      answer: "Yes! Our conversion ideas are categorized by difficulty levels - easy, medium, and hard. Each idea includes step-by-step instructions, required materials, and estimated time to complete the project."
    },
    {
      question: "How can I join or create a community initiative?",
      answer: "You can browse existing community initiatives in your area through our Community section. To create a new initiative, simply click on 'Create Community' and fill out the required information about your project."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Currently, Trash2Treasure is available as a web application that works seamlessly on mobile browsers. We're working on dedicated mobile apps for iOS and Android, which will be available soon."
    },
    {
      question: "How do you ensure the safety of the conversion projects?",
      answer: "All our conversion ideas include safety guidelines and warnings where necessary. We recommend adult supervision for projects involving tools or potentially hazardous materials. Always prioritize safety over creativity."
    },
    {
      question: "Can I share my own conversion ideas?",
      answer: "Absolutely! We encourage users to share their creative projects and ideas with the community. You can submit your own conversion ideas through your user profile once you're logged in."
    },
    {
      question: "What happens to my uploaded images?",
      answer: "Your uploaded images are processed for waste identification and then securely stored in your personal account. We respect your privacy and never share your images without your explicit consent."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="text-center mb-12">
        <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
          <HelpCircle className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about Trash2Treasure and how to make the most of our platform.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openFAQ === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-green-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our support team is here to help!
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;