"use client";
import { Header } from '@/packages/ui/header';
import { H1, H2, H3, H4, H5 } from '@/packages/ui/typography';
import text from '@/packages/json/text.json'
import { Footer, Section, Section2Col, Section3Col } from '@/packages/ui/section';

export default function Home() {
  return (
    <>
      <Header className='flex flex-col items-center top-10'>
        <H4 className='text-[25px]'>Undervisning</H4>
        <H3 className='text-[50px]'>i dit tempo</H3>
      </Header>
      
      <main className='relative flex flex-col mt-50 h-screen mx-[20px] items-center gap-10'>
        <Section >
          <H1 className='text-center text-clip'>{text.frontpage.threepillartitle}</H1>
          <Section3Col

            className='flex flex-wrap justify-center gap-10 mt-10' 
            left = {
              <div className='flex flex-col w-50 gap-10'>
                <h3 className='text-[25px]'>{text.frontpage.pillar1title1}</h3>
                <span>{text.placeholders['1s']}</span>
                {text.frontpage.pillar1}
              </div>
            }
            middle = {
              <div className='flex flex-col w-50 gap-10'>
                <h3 className='text-[25px]'>{text.frontpage.pillar1title2}</h3>
                <span>{text.placeholders['1s']}</span>
                {text.frontpage.pillar2}
              </div>
            }
            
            right = {
              <div className='flex flex-col w-50 gap-10'>
                <h3 className='text-[25px]'>{text.frontpage.pillar1title3}</h3>
                <span>{text.placeholders['1s']}</span>
                {text.frontpage.pillar3}
              </div>
            }
          />
        </Section>

        <Section divider={{position: "start"}} title='Hvordan foregår det?'>
          <Section2Col className='flex flex-wrap items-start justify-center gap-10'
            left = {
              <div className='flex flex-col gap-10 min-w-[320px] w-1/3'>
                <span>{text.placeholders['3s']}</span>
              </div>
            }
            
            right = {
              <div className='flex flex-row flex-wrap items-center justify-self text-center gap-10 min-w-[320px] w-1/3'>
                <div className='flex flex-col gap-5'>
                    {text.frontpage.contentgrid1}
                    <a href='_blank' className='hover:font-bold'> Find din ordbog her </a>
                  </div>
                  <div className='flex flex-col gap-5'>
                    {text.frontpage.contentgrid2}
                    <a href='_blank' className='hover:font-bold'> Sådan laver du et demokit </a>
                  </div>
              </div>
            }
          />
        </Section>

        <Section divider={{position: "start"}} title={text.frontpage.contentquestion} className='pb-50'>
          <Section2Col
            className='flex flex-wrap gap-10'
            left={
              <div className='flex flex-col gap-10 items-center min-w-[320px] w-1/3'>
                placeholder image
                
              </div>
            }
            right={
              <div className='flex flex-col gap-5 min-w-[320px] w-1/3'>
                <span>{text.frontpage.content}</span>
              </div>
            }
          />
        </Section>
        
      </main>

    </>
  )
}