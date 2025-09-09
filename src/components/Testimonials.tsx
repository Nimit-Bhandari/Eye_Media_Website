import React from 'react';
import { Star } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "motion/react"


interface Testimonial {
  id: number;
  name: string;
  role:string
  message: string;
}

const testimonial_data: Testimonial[] = [
  {
    id: 1,
    name: "Mr. Puneet",
    role: "Marketing Manager @ Winzo",
    message: "Really pleased by the service they give. Hoping to collab soon!"
  },
  {
    id: 2,
    name: "Mr.Krishna Prashob",
    role: "CTO - @coinsberg",
    message: "Incredible team and kudos to the efforts they put!"
  },
  {
    id: 3,
    name: "Chiku Gaming",
    role: "Youtuber",
    message: "Brought me many deals and excited to work together in future!"
  },
]

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <motion.div initial={{ opacity: 0, y: 200 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7
                  }} className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonial_data.map((item) => (
            <Card key={item.id} className='text-center'>
              <CardHeader>
                <CardTitle className='flex flex-col gap-5 items-center justify-content-center'>
                  <Avatar className='h-auto w-3/12'>
                    <AvatarImage src="https://www.bing.com/images/search?view=detailV2&ccid=%2Bn6mzk6Q&id=9E95F1A2B7435220E4E70C83A1D6163EAA4C971C&thid=OIP.-n6mzk6Qt5Tu-I3ek1It1gHaHa&mediaurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F036%2F280%2F650%2Fnon_2x%2Fdefault-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg&exph=980&expw=980&q=Empty+Profile+Picture&simid=608020486634955576&FORM=IRPRST&ck=95F6F1BCF47337C95CE84CC7EAB19609&selectedIndex=0&itb=0&cw=1218&ch=643&ajaxhist=0&ajaxserp=0" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  {item.name}
                </CardTitle>
                <CardDescription>{item.role}</CardDescription>
              </CardHeader>
              <CardContent className='flex justify-center items-center gap-2'>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </CardContent>
              <CardContent>
                <h2>{item.message}</h2>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>

          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;

