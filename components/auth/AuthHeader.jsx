import React from 'react'
import Logo from '@/public/images/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/buttons/Button';

const AuthHeader = ({ label, link }) => {

  return (
    <div className="sticky  bg-white z-50 top-0 flex items-center justify-between px-4 sm:px-10 md:px-16 py-3 mx-auto">

        <Image src={Logo} width={28} height={28} />

        <Link href={link}>
            <Button className="btn-primary py-1"> { label } </Button>
        </Link>

    </div>
  )
}

export default AuthHeader