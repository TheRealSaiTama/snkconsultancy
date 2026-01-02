"use client";

import { useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Building, User, Linkedin, Instagram, Facebook, MessageCircle, Bot } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import AnimatedSection from "../animated-section";
import { submitInquiry, type State } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";


const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  inquiryType: z.enum(["job-seeker", "employer"]),
  goal: z.string().min(10, { message: "Please describe your goal in at least 10 characters." }),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const initialState: State = {
  status: "idle",
  message: "",
  recommendation: null,
};

export default function ContactSection() {
  const [state, formAction] = useActionState(submitInquiry, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      inquiryType: "job-seeker",
      goal: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Inquiry Sent!",
        description: state.message,
      });
      if (state.recommendation) {
        setIsDialogOpen(true);
      }
      form.reset();
    } else if (state.status === "error") {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast, form]);

  return (
    <>
    <section id="contact" className="content-section bg-primary text-primary-foreground scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Connect Globally?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
            Whether you're seeking talent or opportunities, we're here to help. Fill out the form below to start the conversation.
          </p>
        </AnimatedSection>
        
        <div className="mt-12 grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
                <AnimatedSection delay="delay-200">
                <Card>
                    <CardContent className="p-6 md:p-8">
                    <Form {...form}>
                        <form ref={formRef} action={formAction} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="you@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="inquiryType"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>I am a...</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                    <SelectValue placeholder="Select your role" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="job-seeker"><User className="inline-block mr-2 h-4 w-4"/>Job Seeker</SelectItem>
                                    <SelectItem value="employer"><Building className="inline-block mr-2 h-4 w-4"/>Employer</SelectItem>
                                </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="goal"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>What is your primary goal?</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="e.g., 'Find a skilled construction job in Dubai' or 'Hire 10 experienced welders for a project in Europe'" {...field} />
                                </FormControl>
                                 <FormMessage />
                                </FormItem>
                            )}
                            />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Additional Message (Optional)</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Any other details you'd like to share?" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                        <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={state.status === "pending"}>
                            {state.status === "pending" ? "Sending..." : "Send Inquiry"}
                        </Button>
                        </form>
                    </Form>
                    </CardContent>
                </Card>
                </AnimatedSection>
            </div>
             <div className="md:col-span-2 space-y-8">
                 <AnimatedSection delay="delay-400">
                    <div className="bg-primary text-primary-foreground rounded-lg border p-6 shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                        <div className="space-y-4">
                            <a href="mailto:info@snkglobalindia.com" className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/90 transition-colors">
                                <div className="bg-primary-foreground/20 p-2 rounded-full">
                                    <Mail className="w-5 h-5 text-primary-foreground"/>
                                </div>
                                <div>
                                    <div className="text-sm text-primary-foreground/80">Email</div>
                                    <div className="font-medium text-primary-foreground">info@snkglobalindia.com</div>
                                </div>
                            </a>
                            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/90 transition-colors">
                                <div className="bg-primary-foreground/20 p-2 rounded-full">
                                    <Phone className="w-5 h-5 text-primary-foreground"/>
                                </div>
                                <div>
                                    <div className="text-sm text-primary-foreground/80">Primary Contact</div>
                                    <a href="tel:+918700348338" className="text-lg font-bold hover:text-accent transition-colors">+91 8700348338</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/90 transition-colors">
                                <div className="bg-primary-foreground/20 p-2 rounded-full">
                                    <Phone className="w-5 h-5 text-primary-foreground"/>
                                </div>
                                <div>
                                    <div className="text-sm text-primary-foreground/80">Secondary Contact</div>
                                    <a href="tel:+919911103791" className="text-lg font-medium hover:text-accent transition-colors">+91 9911103791</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-primary/90 transition-colors">
                                <div className="bg-primary-foreground/20 p-2 rounded-full mt-1">
                                    <MapPin className="w-5 h-5 text-primary-foreground"/>
                                </div>
                                <div>
                                    <div className="text-sm text-primary-foreground/80">Location</div>
                                    <div className="font-medium text-primary-foreground">Block B, Badarpur Border, New Delhi, India</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
                <AnimatedSection delay="delay-500">
                    <div className="aspect-video w-full">
                       <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.596686392538!2d77.28716003776687!3d28.521779663135213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce6b690af5aed%3A0xe80013796cc8438f!2sBlock%20B%2C%20Mohan%20Cooperative%20Industrial%20Estate%2C%20Badarpur%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1767380098547!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </AnimatedSection>
                <AnimatedSection delay="delay-600">
                    <div className="flex items-center gap-4">
                        <Button asChild variant="outline" size="icon" className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10 visited:text-primary-foreground focus:text-primary-foreground active:text-primary-foreground">
                            <a href="https://www.linkedin.com/company/snk-global-india/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin />
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="icon" className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10 visited:text-primary-foreground focus:text-primary-foreground active:text-primary-foreground">
                            <a href="https://www.instagram.com/snk.global/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <Instagram />
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="icon" className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10 visited:text-primary-foreground focus:text-primary-foreground active:text-primary-foreground">
                            <a href="https://www.facebook.com/people/SNK-Global/61581280836236/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <Facebook />
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="icon" className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10 visited:text-primary-foreground focus:text-primary-foreground active:text-primary-foreground">
                            <a href="https://wa.me/919911103791?text=Hi%20there!%20I%27d%20love%20to%20learn%20more%20about%20SNK%20Global." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <MessageCircle />
                            </a>
                        </Button>
                    </div>
                </AnimatedSection>
             </div>
        </div>
      </div>
    </section>

    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
                <Bot className="text-primary"/> AI Service Recommendation
            </DialogTitle>
            <DialogDescription>
              Based on your goal, here are the services we recommend to get you started.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground">{state.recommendation}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
