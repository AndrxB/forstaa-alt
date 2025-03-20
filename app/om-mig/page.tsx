"use client"

import { Header } from "@/packages/ui/header"
import { Main, Section, Section2Col } from "@/packages/ui/section"
import { H1, H3 } from "@/packages/ui/typography"
import text from '@/packages/json/aboutme.json'
import Contact from "@/packages/components/contact"

export default function OmMig() {
    return(
        <>
            <Header />

            <Main>
                <Section
                    divider={{position: "start"}}
                    title="Om mig"
                    outerClassName="mt-10 max-w-[1000px]"
                    className="flex flex-wrap gap-10 items-start justify-center"
                >
                    <div className="p-2 rounded min-w-[400px] self-center min-h-[400px] drop-shadow-2xl my-10" id="foreground" />
                    <div className="flex flex-col p-2 rounded gap-10 min-w-[250px] max-w-[400px]">
                        <H3>Jeg hedder Allan, en underviser inden for emnet dansk.</H3>
                        <span className="whitespace-pre-line">{text.info.text}</span>
                    </div>
                </Section>
                <Contact />
            </Main>
        </>
    )
}