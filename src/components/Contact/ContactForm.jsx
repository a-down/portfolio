import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea
} from '@chakra-ui/react'
import { motion, useScroll } from "framer-motion"


export default function ContactForm() {
  const { scrollYProgress } = useScroll();


  return (
    // <form 
    // action='https://forms.gle/Pmwti1ST2F1BiuMy7'
    // method='POST'
    // className='w-full md:w-2/3 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 rounded-md text-navy p-4 flex flex-col gap-4 text-sm font-serif' style={{filter: `drop-shadow(0px 2px 3px #999999`}}>
    //   <FormControl>
    //     <label >Name:</label>
    //     <Input type='text' style={{border: '1px solid #1B2032', fontWeight: '500'}}/>
    //   </FormControl>
    //   <FormControl>
    //     <label>Email:</label>
    //     <Input type='email' style={{border: '1px solid #1B2032'}}/>
    //   </FormControl>
    //   <FormControl>
    //     <label>Message:</label>
    //     <Textarea type='text' style={{border: '1px solid #1B2032'}}/>
    //   </FormControl>
    //   <button className='bg-navy border border-navy text-slate-50 hover:bg-gradient-to-r from-navy  to-slate-600 hover:text-white active:bg-accent  py-1 px-2 rounded-md my-2 font-sans text-lg'>
    //     Send
    //   </button>
    // </form>

    <motion.div
      initial={{ width: '400px' }}
      whileInView={{ width: '500px' }}
    >
      <form
      action='https://forms.gle/Pmwti1ST2F1BiuMy7'
      method='POST'
      className='w-full md:w-[500px] bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 rounded-md text-navy p-4 flex flex-col gap-4 text-sm font-serif' style={{filter: `drop-shadow(0px 2px 3px #999999`}}>
        <fieldset className='flex flex-col gap-1'>
          <label className='text-navy text-md '>Name:</label>
          <input 
            type="text" 
            placeholder='John Doe'
            className='py-1.5 px-2.5 rounded-md shadow-sm text-navy border border-slate-200'
            name='entry.369267883'/>
        </fieldset>

        <fieldset className='flex flex-col gap-1'>
          <label className='text-navy text-md '>Email:</label>
          <input 
            type="email" 
            placeholder='name@email.com'
            className='py-1.5 px-2.5 rounded-md shadow-sm text-navy border border-slate-200'
            name='entry.1793406575'/>
        </fieldset>

        <fieldset className='flex flex-col gap-1'>
          <label className='text-navy text-md '>Message:</label>
          <textarea 
            type="text" 
            placeholder='Type your message here...'
            className='py-1.5 px-2.5 rounded-md shadow-sm text-navy border border-slate-200'
            rows='5'
            name='entry.1413381921'/>
        </fieldset>
        <button 
          className='bg-navy border border-navy text-slate-50 hover:bg-gradient-to-r from-navy  to-slate-600 hover:text-white active:bg-accent  py-1 px-2 rounded-md my-2 font-sans text-lg'>
          Send
        </button>
      </form>
    </motion.div>

  )
}
