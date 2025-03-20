"use client"

import { Header } from "@/packages/ui/header"
import { Main, Section, Section2Col } from "@/packages/ui/section"
import { H3, H4, } from "@/packages/ui/typography"

import text from '@/packages/json/coaching.json'
import { ArrowRight } from "lucide-react"
import AutoScrollCards from "@/packages/ui/coaching/card"
import {Card} from "@/packages/ui/coaching/card"

export default function Coaching() {
    return(
        <div>
            <Header />
            
            <Main>
                <Section title={text.coaching.title} divider={{position: "start"}} className="flex flex-col gap-10" >
                    <H3>{text.coaching.subtitle}</H3>
                    <span>{text.coaching.subcontent}</span>
                    <AutoScrollCards />
                </Section>
                <Section title={text.hero.title} divider={{position: "start"}}>
                    <Section2Col className="gap-10 mx-10 flex flex-col items-center"
                        left= {
                            <div className="flex flex-col gap-10 max-w-100">
                                <H3>{text.hero.subtitle}</H3>
                                <span className="whitespace-pre-line">{text.hero.content}</span>
                            </div>
                        }
                        right= {
                            <button className="w-50 shadow-2xl font-bold"> Se priser her </button>
                        }
                    />
                </Section>
                <Section title={text.reading.title} divider={{position: "start"}} className="mb-50">
                    <Section2Col className="gap-10"
                        left= {
                            <div className="flex flex-col gap-10 max-w-100">
                                <span className="whitespace-pre-line">{text.reading.content}</span>
                                <H4 className="whitespace-pre-line">{text.reading.subtitle}</H4>
                                <span className="whitespace-pre-line">{text.reading.subcontent}</span>
                            </div>
                        }
                        right= {
                            <Card className="max-w-150" shadow={true}>
                                <ul className="flex flex-col gap-7">
                                    <li className="flex flex-col gap-3">
                                        <div className="flex flex-row items-center gap-4">
                                            <ArrowRight />
                                            <H3>{text.reading.methods.text.title}</H3>
                                        </div>
                                        <span>{text.reading.methods.text.content}</span>
                                    </li>
                                    <li className="flex flex-col gap-3">
                                        <div className="flex flex-row items-center gap-4">
                                            <ArrowRight />
                                            <H3>{text.reading.methods.ressources.title}</H3>
                                        </div>
                                        <span>{text.reading.methods.ressources.content}</span>
                                    </li>
                                    <li className="flex flex-col gap-3">
                                        <div className="flex flex-row items-center gap-4">
                                            <ArrowRight />
                                            <H3>{text.reading.methods.demonstration.title}</H3>
                                        </div>
                                        <span>{text.reading.methods.demonstration.content}</span>
                                    </li>
                                </ul>
                            </Card>
                            
                        }
                    />
                </Section>
                
            </Main>
        
        </div>
    )
}



