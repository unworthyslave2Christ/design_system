import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from "@/components/ui/card"

import {Button} from "@/components/ui/button"

import { 
    Field,
    FieldLabel,
    FieldDescription
 } from "@/components/ui/field"

 import {Input} from "@/components/ui/input"


export function SignUpForm({...props}: React.ComponentProps<typeof Card>){
    return(
        <Card className="min-w-md">
                <CardHeader className="text-center space-y-3">
                    <CardTitle>Create an account</CardTitle>
                    <CardDescription>
                        Enter your information below to create your account
                    </CardDescription>
                 </CardHeader>
                <CardContent >
                    <form className="space-y-4">  
                        <Field>
                            <FieldLabel htmlFor="name">Full Name</FieldLabel>
                            <Input type="text" id="name"  placeholder="John Christ"/>
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="pass1">Password</FieldLabel>
                            <Input type="password" id="pass1" />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="userEmail">Email</FieldLabel>
                            <Input type="email" id="userEmail" />
                        </Field>

                        <CardFooter className="flex flex-col gap-4">
                            <Button type="submit">
                                Create account
                            </Button>
                            
                            <Button type="submit" variant={"outline"}>
                                Sign up with Google
                            </Button>
                        </CardFooter>
                        
                    </form>
                    
                </CardContent>
        </Card>
    )
}