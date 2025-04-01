import React from 'react'
import Support from '../pages/Support'
import Hosting from '../pages/Hosting'
import Airbnb from '../pages/Airbnb'


const thelist = [
  { list:'Aberfeldy'}]
function Footer() {
  return (
    // footer bdgings 👇👇
    <div className='h-[850px] w-full border-2 border-blue-500 mt-8 mb-20'>
      <div className='ml-20 leading-6'>
      <section className='text-2xl pt-5'>inspiration for future getaways</section>

      {/* first section 👇👇*/}
      <section className='flex gap-7 pt-8'>
        <div className='cursor-pointer hover:font-medium hover:border-b-2 border-black'>Popular</div>
        <div className='cursor-pointer hover:font-medium hover:border-b-2 border-black'>Historic</div>
        <div className='cursor-pointer hover:font-medium hover:border-b-2 border-black'>Coastal</div>
        <div className='cursor-pointer hover:font-medium hover:border-b-2 border-black'>Islands</div>
        <div className='cursor-pointer hover:font-medium hover:border-b-2 border-black'>Lakes</div>
        <div className='cursor-pointer hover:font-medium hover:border-b-2 border-black'>Unique stays</div>
        <div className='cursor-pointer hover:font-medium hover:border-b-2 border-black'>Categories</div>
        <div className='cursor-pointer hover:font-medium hover:border-b-2 border-black'>Things to do</div>
      </section>

      {/* second section 👇👇 */}

      <section>
      {thelist.map((item, index) => (
          <div key={index}>

            <div className='flex gap-20 pt-8'>
     <div className='font-medium'>{item.list} <br /><span className='opacity-30'>Holidays rentals</span></div>
     <div className='font-medium'>{item.list} <br /><span className='opacity-30'>Flat rentals</span></div>
     <div className='pl-7 font-medium'>{item.list} <br /><span className='opacity-30'>Villa rentals</span></div>
     <div className='ml-9 font-medium'>{item.list} <br /><span className='opacity-30'>Flat rentals</span></div>
     <div className='ml-9 font-medium'>{item.list} <br /><span className='opacity-30'>Cottage rentals</span></div>
     <div className='font-medium'>{item.list} <br /><span className='opacity-30'>Flat rentals</span></div> 
     </div>
            <div className='flex gap-20 pt-5'>
     <div className='font-medium'>{item.list} <br /><span className='opacity-30'>Cottage rentals</span></div>
     <div className='font-medium'>{item.list} <br /><span className='opacity-30'>Holidays rentals</span></div>
     <div className='font-medium'>{item.list} <br /><span className='opacity-30'>Holidays rentals</span></div>
     <div className='pl-2 font-medium'>{item.list} <br /><span className='opacity-30'>Flat rentals</span></div>
     <div className='pl-7 font-medium'>{item.list} <br /><span className='opacity-30'>Holidays rentals</span></div>
     <div className='pl-1 font-medium'>{item.list} <br /><span className='opacity-30'>Villa rentals</span></div>
     </div>
           <div className='flex gap-20 pt-5'>
     <div className='font-medium'>{item.list} <br /><span className='opacity-30'>Holidays rentals</span></div>
     <div className='font-medium'>{item.list} <br /><span className='opacity-30'>Flat rentals</span></div>
     <div className='pl-7 font-medium'>{item.list} <br /><span className='opacity-30'>House rentals</span></div>
     <div className='pl-6 font-medium'>{item.list} <br /><span className='opacity-30'>Holidays rentals</span></div>
     <div className='font-medium'>{item.list} <br /><span className='opacity-30'>Holidays rentals</span></div>
     <button>Show more ›</button>
     </div>

     <hr className='w-[1080px] border-1 mt-10 opacity-30'/>
     {/* third section 👇👇*/}
     <section className='flex gap-35'>
     <Support/>
     <Hosting/>
     <Airbnb/>
     </section>

     {/* fourth section 👇👇 */}
     <section className='flex mt-10'>

     <div>© 2023 Airbnb. inc </div>

      <div className='flex gap-5 pl-3'>
      <div>. privacy </div>
      <div>. Terms </div>
      <div>. Sitemap</div> 
      <div>. UK Modern Slavery Act </div>
      <div>. Company details</div>
      </div>

      {/* fifth section 👇👇 */}
     <div className='gap-3 flex pl-35'>
         <div>🌐</div>
         <strong>English (GB)</strong>
         <strong>£</strong>
         <strong>GBP</strong>
         <div>🛐</div>
         <div>🛐</div>
         <div>🛐</div>
         </div>
         </section>
         {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4532.264022458966!2d7.116412314396149!3d6.246549627767844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1743518677242!5m2!1sen!2sng" width="600" height="450"style="" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
         <button className='h-10 w-24 text-white bg-black rounded-full flex ml-[500px] pl-3 pt-1 mt-8'>show map</button>
     </div>
         ))}
      </section>
      </div>
    </div>
  )
}

export default Footer