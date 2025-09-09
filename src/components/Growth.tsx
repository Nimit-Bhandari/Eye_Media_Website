import React from 'react';
import { Bar, BarChart, XAxis } from "recharts"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { motion } from "motion/react"

const chartData = [
    { month: "January", customers: 50, projects: 40 },
    { month: "February", customers: 60, projects: 50 },
    { month: "March", customers: 65, projects: 69 },
    { month: "April", customers: 61, projects: 55 },
    { month: "May", customers: 79, projects: 48 },
    { month: "June", customers: 81, projects: 79 },
]

const chartConfig = {
    customers: {
        label: "customers",
        color: "#2563eb",
    },
    projects: {
        label: "projects",
        color: "#60a5fa",
    },
} satisfies ChartConfig

const Growth: React.FC = () => {
    return (
        <section id="growth" className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-800">
            <motion.div initial={{ opacity: 0, y: 200 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7
                  }} className="container px-4 md:px-6 flex flex-col items-center justify-content-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Growth since recent months</h2>
                <ChartContainer config={chartConfig} className="min-h-[100px] lg:w-2/4 w-full">
                    <BarChart accessibilityLayer data={chartData}>
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="customers" fill="var(--color-customers)" radius={4} />
                        <Bar dataKey="projects" fill="var(--color-projects)" radius={4} />
                    </BarChart>
                </ChartContainer>
            </motion.div>
        </section>
    );
};

export default Growth;

