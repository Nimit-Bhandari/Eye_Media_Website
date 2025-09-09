import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "motion/react"

interface Faq_Data {
    id: number;
    qus: string;
    ans: string;
}

const faq_data: Faq_Data[] = [
    {
        id: 1,
        qus: "At what cost do our services start?",
        ans: "Our services starts from just ₹1000, depending on the scope and complexity of the project. Feel free to reach out to know more about the pricing details. ",
    },
    {
        id: 2,
        qus: "How do we get started with Eye Media Solutions?",
        ans: "Simply contact us through our whatsapp, website or email and schedule a free consultation to discuss your requirements.",
    },
    {
        id: 3,
        qus: "How do you handle payments?",
        ans: "We require an initial deposit before starting work, with the balance paid in milestones or upon project completion. Payment options include bank transfer, UPI, and online payment gateways.(PayPal, Wise) ",
    },
    {
        id: 4,
        qus: "Do you work with small businesses and startups?",
        ans: "Absolutely! We offer tailored solutions for businesses of all sizes, helping startups establish a strong digital presence.",
    },
    {
        id: 5,
        qus: "Are We Trustworthy?",
        ans: "Yes, Eye Media Solutions prides itself on building transparent and reliable relationships with our clients. We ensure consistent communication, provide detailed insights, and deliver measurable results. Our track record of satisfied clients speaks for itself.",
    },
    {
        id: 6,
        qus: "How Do We Curate the Lowest Prices from Influencers?",
        ans: "Our strong network of influencers allows us to negotiate competitive rates without compromising quality. By leveraging data-driven insights, we identify influencers who align with your brand and budget, ensuring cost-effective campaigns that maximize ROI.",
    },
    {
        id: 7,
        qus: "What Will Be the Process of Service?",
        ans: "Consultation: Understand your goals and target audience. \nStrategy: Craft personalized influencer marketing strategies tailored to your needs. \nExecution: Connect you with the right influencers and oversee campaign implementation.\nReporting: Provide analytics and reports to measure campaign success.",
    },
    {
        id: 8,
        qus: "Why Trust Us?",
        ans: "Eye Media Solutions combines expertise, a proven methodology, and a customer-first approach to ensure your campaigns succeed. Our commitment to transparency, affordability, and excellence makes us the ideal partner for your marketing needs.",
    },
];


const Faq: React.FC = () => {
    return (
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
            <motion.div initial={{ opacity: 0, y: 200 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7
                  }} className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Frequently Asked Questions!</h2>
                {faq_data.map((item) => {
                    return (
                        <Accordion type="single" collapsible key={item.id}>
                            <AccordionItem key={item.id} value="item-1">
                                <AccordionTrigger>{item.qus}</AccordionTrigger>
                                <AccordionContent>
                                    {item.ans}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    )
                })}


            </motion.div>
        </section>
    );
};

export default Faq;

