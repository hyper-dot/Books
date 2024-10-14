"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { H2 } from "./ui/typography";

const testimonials = [
  {
    id: 1,
    content:
      "This product has completely transformed our workflow. It's intuitive, powerful, and a joy to use every day.",
    author: "Alex Johnson",
    role: "CTO, TechCorp",
    avatar:
      "https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg",
  },
  {
    id: 2,
    content:
      "I can't imagine running my business without this tool. It's been a game-changer for our team's productivity.",
    author: "Samantha Lee",
    role: "Founder, InnovateCo",
    avatar:
      "https://images.squarespace-cdn.com/content/v1/62825e9aa7250d0b1a485423/11437100-71d2-4ab5-bdab-01c3ab9aada8/Kamau_3000_geo.jpg",
  },
  {
    id: 3,
    content:
      "The customer support is outstanding. They've gone above and beyond to ensure our success with the platform.",
    author: "Michael Chen",
    role: "Operations Manager, GlobalTech",
    avatar:
      "https://images.squarespace-cdn.com/content/v1/5ec689480cc22c2d441e152f/9cbf4e0b-926f-431b-b27a-11c5ac3bd8df/corporate-headshots-professional-photography-connecticut-ct-photo-studio-nlalor-what-to-wear-women.jpg",
  },
];

export default function TestimonialCarousel() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="space-y-4 text-center">
        <p className="text-green-500 font-bold">Testimonials</p>
        <H2>What Our Clients Say</H2>
        <p className="max-w-[600px] text-muted-foreground mx-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
          Find answers to common questions about our products and services.
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="">
              <div className="p-1 flex flex-col items-center justify-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage
                    className="object-cover object-top"
                    src={testimonial.avatar}
                    alt={testimonial.author}
                  />
                  <AvatarFallback>
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <blockquote className="text-lg text-center mb-4">
                  &quot;{testimonial.content}&quot;
                </blockquote>
                <div className="text-center">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:block" />
        <CarouselNext className="hidden md:block" />
      </Carousel>
    </div>
  );
}
