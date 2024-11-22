import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    age: z.preprocess((val) => (val ? Number(val) : undefined), z.number().min(1, "Age must be a positive number.")),
    address: z.string().min(5, 'Address must be at least 5 characters'),
    height: z.preprocess((val) => (val ? Number(val) : undefined), z.number().min(20).max(300)),
    email: z.string().email('Invalid email address')
})

function ProfileForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            age: "",
            address: "",
            height: "",
            email: ""
        },
        })
    
      // Logica de validación de formulario
    function onSubmit(data) {
        console.log(data)
    }

    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 scroll-x-auto gap-2 font-DynaPuff text-plantation">
        <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
            <FormItem className="col-span-3 sm:col-span-6">
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                <Input className="text-xxs" placeholder="Ejemplo: Dobby" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
            </FormItem>
        )}
        />

        <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
            <FormItem className="col-span-1 sm:col-span-3">
                <FormLabel>Edad</FormLabel>
                <FormControl>
                <Input type="number" className="text-xs" min="1" placeholder="Edad en años" {...field} />   
                </FormControl>
                <FormMessage className="text-xs" />
            </FormItem>
        )}
        />
        
                <FormField
                    control={form.control}
                    name="height"
                    render={({ field }) => (
                    <FormItem className="col-span-1 sm:col-span-3">
                        <FormLabel>Estatura (cm)
                        </FormLabel>
                        <FormControl>
                        <Input type="number" min="20"  className="text-xs" placeholder="Altura en centimetros" {...field} />   
                        </FormControl>
                        <FormMessage className="text-xs" />
                        </FormItem>
                )}
                />

        <FormField 
            control={form.control}
            name="address"
            render={({ field }) => (
            <FormItem className="col-span-3 sm:col-span-6">
                <FormLabel>Dirección</FormLabel>
                <FormControl>
                <Input className="text-xs" placeholder="Ejemplo: Bosque Encantado #123" {...field} />   
                </FormControl>
                <FormMessage className="text-xs" />
            </FormItem>
        )}
        />

    <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
            <FormItem className="col-span-3 sm:col-span-6">
                <FormLabel>Correo Electronico</FormLabel>
                <FormControl>
                <Input type="email" className="text-xs" placeholder="duende@santa.com" {...field} />   
                </FormControl>
                <FormMessage className="text-xs" />
            </FormItem>
        )}
        />

        {/* Boton que debe incluir la funcionalidad de enviar el formulario y cerrar el modal */}
        <Button className="col-span-1 sm:col-span-3" type="submit">Registrar</Button>

    </form>
    </Form>
    )
}
export default ProfileForm