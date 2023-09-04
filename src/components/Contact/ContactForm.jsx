import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea
} from '@chakra-ui/react'


export default function ContactForm() {


  return (
    <form className='w-full md:w-1/2 bg-slate-100 rounded-md text-navy p-4 flex flex-col gap-4 text-sm font-serif' style={{filter: `drop-shadow(0px 2px 3px #999999`}}>
      <FormControl>
        <label >Name:</label>
        <Input type='text' style={{border: '1px solid #cbd5e1', fontWeight: '500'}}/>
      </FormControl>
      <FormControl>
        <label>Email:</label>
        <Input type='email' style={{border: '1px solid #cbd5e1'}}/>
      </FormControl>
      <FormControl>
        <label>Message:</label>
        <Textarea type='text' style={{border: '1px solid #cbd5e1'}}/>
      </FormControl>
      <button className='bg-accent text-navy hover:bg-gradient-to-r from-accent via-blue-200 to-blue-100 hover:text-navy py-1 px-2 rounded-sm my-2 font-sans text-lg'>
        Send
      </button>
    </form>
  )
}