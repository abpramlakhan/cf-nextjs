import Image from "next/image"
import Link from "next/link"

export const HeaderInner = () => {
    return (
        <header className="container-fluid headerinner">
            <div className="container d-flex justify-content-between">
                <div>
                    <Link href={'/'}>
                        <Image
                            className="logoimg"
                            width={133}
                            height={74}
                            src={"https://cdn.abpweddings.com/documents/8d8a8a59f510ccc87cb314fc6acf64b0/1749119825787.webp"}
                            alt="ABP Weddings Logo | Matrimony Site For Bengali and Marathi People" />
                    </Link>
                </div>
                <div></div>
            </div>
        </header>
    )
}
