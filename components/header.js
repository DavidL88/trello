import Image from "next/image"

function Header() {
    return (
        <header className="bg-black/40">
            <p className="logo">
                <Image src="/spidey.png" width={40} height={40} alt="Logo de Spiderman" />
                <a className="uppercase text-logo" href="https://github.com/NeK88?tab=repositories" target="_blank">Nek.com</a>
            </p>
        </header>
    )
}

export default Header
