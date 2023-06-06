import '../style/globals.css'
import {Montserrat} from 'next/font/google'
import NavBar from "@/components/NavBar";

const montserrat = Montserrat({subsets: ['latin']})

export const metadata = {
    title: 'Portfolio',
    description: 'Ramez Personal Portfolio',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={montserrat.className + " text-white bg-[#17181C]"}>
        <NavBar/>
        {children}
        </body>
        </html>
    )
}
