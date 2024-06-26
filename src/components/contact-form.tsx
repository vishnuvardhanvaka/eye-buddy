"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SheetsAPI } from "@/server-actions/use-sheets";
import { toast } from "sonner"
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

const contactFormSchema = z.object({
    email: z.string().email( "Please enter a valid email")
})


export default function ContactForm() {
    // const [email, setEmail] = useState<string>('')

    const contactForm = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            email: ''
        }
    })

    async function handleSignup(value: z.infer<typeof contactFormSchema>) {
        SheetsAPI(value.email)
        toast.success('Thank you for signing up!', {
            description: 'Have a nice day!'
        })
        contactForm.reset()
    }


    return (
        <Form {...contactForm}>
            <form className="flex space-x-2 justify-center" onSubmit={contactForm.handleSubmit(handleSignup)}>
                <FormField
                    control={contactForm.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Enter your email" className="max-w-lg flex-1" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Sign Up</Button>
            </form>
        </Form>
    )
}