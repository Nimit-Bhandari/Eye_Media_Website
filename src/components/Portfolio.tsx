import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { motion } from "motion/react"

interface Card {
  id: number;
  title: string;
  description: string;
}


const card_data: Card[] = [
  {
    id: 1,
    title: "Content Creation Services",
    description: "Social Media Content\nBlog Articles & Copywriting",
  },
  {
    id: 2,
    title: "Influencer marketing",
    description: "This is the second card",
  },
  {
    id: 3,
    title: "Smm and brand building",
    description: "This is the third card",
  },
  {
    id: 4,
    title: "Advertising",
    description: "This is the first card",
  },
  {
    id: 5,
    title: "Website Building",
    description: "This is the second card",
  },
  {
    id: 6,
    title: "Consultancy",
    description: "This is the third card",
  },
];


const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
      <motion.div initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7
        }}
        className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Strengths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {card_data.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle className='text-center text-3xl'>{item.title}</CardTitle>
                {/* <CardDescription>{item.description}</CardDescription> */}
              </CardHeader>
              <CardContent>
                {/* <p>{item.description}</p> */}
              </CardContent>
              <CardFooter>
                {/* <p>Card Footer</p> */}
              </CardFooter>
            </Card>

          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;

