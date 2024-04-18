"use client"
import React from 'react'
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "../_assets/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../_assets/EyeSlashFilledIcon";
import {Button} from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginForm({ dictionary }: { dictionary: any }) {
    const toggleVisibility = () => setIsVisible(!isVisible);
    const [isVisible, setIsVisible] = React.useState(false);
    // const { data: session } = useSession()

    // if (session) {
    //     return (
    //         <>
    //             Signed in as {session.user.email} <br />
    //             <button onClick={() => signOut()}>Sign out</button>
    //         </>
    //     )
    // }

    return (
        <>
            <div>
                <p className='text-2xl'>{dictionary.login}</p>
            </div>
            <div className='w-100'>
                <Input
                    isRequired
                    color='default'
                    type="text"
                    variant='flat'
                    label="Sicil No"
                    labelPlacement="outside"
                />
            </div>
            <div className='w-100'>
                <Input
                    isRequired
                    color='default'
                    type={isVisible ? "text" : "password"}
                    variant='flat'
                    label="Şifre"
                    labelPlacement="outside"
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                            {isVisible ? (
                                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            )}
                        </button>
                    }
                />
            </div>
            <div className='w-100'>
                <Button type='submit' radius="md" className="min-w-full bg-gradient-to-tr from-cyan-600 to-blue-400 text-white shadow-lg mt-3">
                    {dictionary.login}
                </Button>
            </div>
        </>
    )
}
