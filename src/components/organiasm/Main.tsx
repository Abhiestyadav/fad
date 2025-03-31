import React from 'react'
import HearoSection from '../molecules/HearoSection'
import { Separator } from '@/components/ui/separator'
import { DatingSiteGrid }  from '@/components/molecules/BentoSection'
import { Footer } from '@/components/molecules/Footer'
function Main() {
  return (
    <div>
      <div className='px-6 items-center justify-center flex md:px-4'>
        <HearoSection />
      </div>
      <Separator />
      <DatingSiteGrid />
      <Separator />
      <Footer/>
    </div>
  )
}

export default Main