import React from 'react';
import Autoplay from "embla-carousel-autoplay"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { motion } from "motion/react"

interface Card {
    id: number;
    title: string;
    description: string;
    src: string
}


const card_data: Card[] = [
    {
        id: 1,
        title: "Card 1",
        description: "This is the first card",
        src: "/assets/images/partners/p1.png",
    },
    {
        id: 2,
        title: "Card 2",
        description: "This is the second card",
        src: "/assets/images/partners/p2.png",
    },
    {
        id: 3,
        title: "Card 3",
        description: "This is the third card",
        src: "/assets/images/partners/p3.png",
    },
    {
        id: 4,
        title: "Card 1",
        description: "This is the first card",
        src: "/assets/images/partners/p4.png",
    },
    {
        id: 5,
        title: "Card 2",
        description: "This is the second card",
        src: "/assets/images/partners/p5.png",
    },
    {
        id: 6,
        title: "Card 3",
        description: "This is the third card",
        src: "/assets/images/partners/p6.png",
    },
    {
        id: 7,
        title: "Card 3",
        description: "This is the third card",
        src: "/assets/images/partners/p7.png",
    },
];


const Works: React.FC = () => {
    return (
        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-800">
            <motion.div initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.7
                }} className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Partners</h2>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                >
                    <CarouselContent>
                        {card_data.map((partner, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                                <div className="p-1">
                                    <Card className='bg-transparent border-none'>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <img src={partner.src}/>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='hidden lg:flex'/>
                    <CarouselNext className='hidden lg:flex'/>
                </Carousel>
            </motion.div>
        </section>
    );
};

export default Works;

