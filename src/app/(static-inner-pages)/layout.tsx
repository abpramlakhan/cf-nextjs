import type { Metadata } from "next";
import { HeaderInner } from "../_components/innerpages/HeaderInner";
import { FooterInner } from "../_components/innerpages/FooterInner";
import '../styles/innerpages.css';

export const metadata: Metadata = {
    title: "About",
    description: ""
};

export default function StaticInnerPagesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <HeaderInner />
            <main>
                {children}
            </main>
            <FooterInner />
        </>
    );
}
