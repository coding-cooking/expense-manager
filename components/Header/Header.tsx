'use client'

import styles from './Header.module.css'
import Logo from '../../public/logo.svg'
import Image from 'next/image'
import { Group, Button } from '@mantine/core'
import Link from 'next/link'

export default function Header() {
    const loginUrl = `${process.env.NEXT_PUBLIC_STAGE_API_BASE_URL}/api/auth/github`
    return (
        <Group maw={500} h={100} justify='space-between' align='center' className={styles.container}>
            <Link href='/' className={styles.logoContainer}>
                <Image src={Logo} alt='' width={40} height={40} />
            </Link>
            <Link href={loginUrl} className={styles.login}>
                <Button size='sm' variant="gradient"
                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>log in</Button>
                {/* if log in, show 'log out' */}
                {/* <Text fw={500} size='lg'>log out</Text> */}
            </Link>

        </Group>
    )
}