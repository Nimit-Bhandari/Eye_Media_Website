import React from 'react';
import { Code, Paintbrush, Camera } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { motion } from "motion/react"


const Services: React.FC = () => {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Services</h2>
        <div className="overflow-hidden flex flex-col gap-9">
          {/* <div className="flex flex-col items-center bg-blue-500">
            <Code className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Content Creation Services</h3>
            <p className="text-gray-500 dark:text-gray-400">Custom websites tailored to your needs</p>
          </div> */}
          <motion.div initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7
            }}>
            {/* First-Left Card */}
            <Card className='max-w-screen-lg'>
              <CardHeader>
                <CardTitle className='text-5xl'>Content Creation Services</CardTitle>
              </CardHeader>
              <CardContent>

                {/* Inner Cards */}
                <div className='flex flex-wrap gap-2'>
                  <Card className='bg-background text-foreground max-w-[300px]'>
                    <CardHeader>
                      <CardTitle>
                        Social Media Content
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      Engaging posts, stories, and reels that amplify your online presence and foster audience interaction.
                    </CardContent>
                  </Card>
                  <Card className='bg-background text-foreground max-w-[300px]'>
                    <CardHeader>
                      <CardTitle>
                        Blog Articles & Copywriting
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      Informative, SEO-optimized articles and website copy that enhance your brand’s visibility and authority.
                    </CardContent>
                  </Card>
                  <Card className='bg-background text-foreground max-w-[300px]'>
                    <CardHeader>
                      <CardTitle>
                        Video Production
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      Professionally edited promotional, explainer, AI and testimonial videos to captivate your audience.
                    </CardContent>
                  </Card>
                  <Card className='bg-background text-foreground max-w-[300px]'>
                    <CardHeader>
                      <CardTitle>
                        Graphic Design
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      Eye-catching visuals, infographics, and banners that leave a lasting impression, thumbnails.
                    </CardContent>
                  </Card>
                  <Card className='bg-background text-foreground max-w-[300px]'>
                    <CardHeader>
                      <CardTitle>
                        YouTube Management
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      Everything related to youtube. Content strategy and planning according to trends.
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Second-Right Card */}
          <motion.div className='self-end' initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7
            }}>
            <Card className='max-w-screen-lg'>
              <CardHeader>
                <CardTitle className='text-5xl'>Influencer Marketing</CardTitle>
                <CardDescription className='max-w-screen-xl'></CardDescription>
              </CardHeader>
              <CardContent>
                {/* Inner Cards */}
                <h1 className='text-4xl'>For Brands</h1>
                <div className='flex flex-wrap gap-2'>
                  <Card className='bg-background text-foreground max-w-[300px]'>
                    <CardHeader>
                      <CardTitle>
                      Campaign Planning
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                    From conceptualizing creative ideas to defining clear objectives, we design tailored influencer campaigns that deliver measurable outcomes.
                    </CardContent>
                  </Card>
                  <Card className='bg-background text-foreground max-w-[300px]'>
                    <CardHeader>
                      <CardTitle>
                      End-to-End Management
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                    We handle every aspect of the process—negotiations, contracts, content approvals, and performance tracking—to ensure a seamless experience.
                    </CardContent>
                  </Card>
                  <Card className='bg-background text-foreground max-w-[300px]'>
                    <CardHeader>
                      <CardTitle>
                      Cross-Platform Expertise
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                    Whether it’s Instagram, YouTube, TikTok, or any other platform, we create impactful collaborations that maximize your online presence.
                    </CardContent>
                  </Card>
                  <Card className='bg-background text-foreground max-w-[300px]'>
                    <CardHeader>
                      <CardTitle>
                      Performance Analytics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                    Detailed reporting and insights help you track ROI, engagement rates, and campaign effectiveness for continuous optimization.
                    </CardContent>
                  </Card>
                </div>

                <h1 className='text-4xl mt-5'>For Influencer</h1>
                <div className='flex flex-wrap gap-2'>
                  <Card className='bg-background text-foreground max-w-[300px]'>
                    <CardHeader>
                      <CardTitle>
                      Onboarding with Precision
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                    We carefully onboard influencers by assessing their niche, audience demographics, engagement metrics, and growth potential to ensure they align with our partner brands.
                    </CardContent>
                  </Card>
                  <Card className='bg-background text-foreground max-w-[300px]'>
                    <CardHeader>
                      <CardTitle>
                      Personalized Growth Strategies
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                    Tailored guidance and strategic roadmaps to help influencers enhance their personal brand, boost audience engagement, and grow their following.
                    </CardContent>
                  </Card>
                  <Card className='bg-background text-foreground max-w-[300px]'>
                    <CardHeader>
                      <CardTitle>
                      Collaboration Opportunities
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                    We connect influencers with premium brands that resonate with their values, ensuring authentic partnerships and lucrative opportunities.
                    </CardContent>
                  </Card>
                  <Card className='bg-background text-foreground max-w-[300px]'>
                    <CardHeader>
                      <CardTitle>
                      Performance Monitoring
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                    Data-driven analysis to track influencer growth, engagement, and campaign results, enabling continuous improvement and success.
                    </CardContent>
                  </Card>
                  <Card className='bg-background text-foreground max-w-[300px]'>
                    <CardHeader>
                      <CardTitle>
                      Training and Support
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                    Ongoing training in storytelling, audience interaction, and platform algorithms to keep influencers ahead of the curve.
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7
            }}>
            {/* Third-Left Card */}
            <Card className='max-w-screen-lg'>
              <CardHeader>
                <CardTitle className='text-5xl'>SMM and Brand Building</CardTitle>
              </CardHeader>
              <CardContent>
            
                {/* Inner Cards */}
                <div className='flex flex-wrap gap-2'>
                  <Card className='bg-background text-foreground max-w-[300px]'>
                    <CardHeader>
                      <CardTitle>
                        Platform-Specific Strategies
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      Customized plans for platforms like Instagram, Facebook, LinkedIn, Twitter, and more to maximize impact.
                    </CardContent>
                  </Card>
                  <Card className='bg-background text-foreground max-w-[300px]'>
                    <CardHeader>
                      <CardTitle>
                        Content Planning & Scheduling
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      Creating, curating, and scheduling high-quality posts to maintain a consistent and professional online presence.
                    </CardContent>
                  </Card>
                  <Card className='bg-background text-foreground max-w-[300px]'>
                    <CardHeader>
                      <CardTitle>
                        Community Engagement
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      Actively interacting with followers through comments, messages, and campaigns to foster a loyal and engaged audience.
                    </CardContent>
                  </Card>
                  <Card className='bg-background text-foreground max-w-[300px]'>
                    <CardHeader>
                      <CardTitle>
                        Paid Advertising
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      Strategically planned ad campaigns that drive traffic, increase conversions, and deliver high ROI.
                    </CardContent>
                  </Card>
                  <Card className='bg-background text-foreground max-w-[300px]'>
                    <CardHeader>
                      <CardTitle>
                        Analytics & Insights
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      Regular performance reports with actionable insights to refine strategies and achieve better results.
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Fourth-Right Card */}
          <motion.div className='self-end' initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7
            }}>
            <Card className='max-w-screen-lg'>
              <CardHeader>
                <CardTitle className='text-5xl'>Advertising</CardTitle>
                <CardDescription className='max-w-screen-xl'></CardDescription>
              </CardHeader>
              <CardContent>
                {/* Inner Cards */}
                <h1 className='text-4xl mb-2'>Online Advertising</h1>
                <div className='flex flex-wrap gap-2'>
                  <Card className='bg-background text-foreground max-w-[300px]'>
                    <CardHeader>
                      <CardTitle>
                      Meta Ads Management
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                    From conceptualizing creative ideas to defining clear objectives, we design tailored influencer campaigns that deliver measurable outcomes.
                    </CardContent>
                  </Card>
                  <Card className='bg-background text-foreground max-w-[300px]'>
                    <CardHeader>
                      <CardTitle>
                      Google Ads Management
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                    We handle every aspect of the process—negotiations, contracts, content approvals, and performance tracking—to ensure a seamless experience.
                    </CardContent>
                  </Card>
                </div>

                <h1 className='text-4xl mt-5 mb-2'>Offline Advertising</h1>
                <div className='flex flex-wrap gap-2'>
                  <Card className='bg-background text-foreground max-w-[300px]'>
                    <CardHeader>
                      <CardTitle>
                      Newspaper Advertising
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                    We carefully onboard influencers by assessing their niche, audience demographics, engagement metrics, and growth potential to ensure they align with our partner brands.
                    </CardContent>
                  </Card>
                  <Card className='bg-background text-foreground max-w-[300px]'>
                    <CardHeader>
                      <CardTitle>
                      Hoarding Advertising
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                    Tailored guidance and strategic roadmaps to help influencers enhance their personal brand, boost audience engagement, and grow their following.
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

