import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea
} from '@chakra-ui/react'


export default function ContactForm() {


  return (
    <form className='w-full md:w-2/3 bg-gradient-to-br from-slate-50 via-blue-100 to-blue-200 rounded-md text-navy p-4 flex flex-col gap-4 text-sm font-serif' style={{filter: `drop-shadow(0px 2px 3px #999999`}}>
      <FormControl>
        <label >Name:</label>
        <Input type='text' style={{border: '1px solid #1B2032', fontWeight: '500'}}/>
      </FormControl>
      <FormControl>
        <label>Email:</label>
        <Input type='email' style={{border: '1px solid #1B2032'}}/>
      </FormControl>
      <FormControl>
        <label>Message:</label>
        <Textarea type='text' style={{border: '1px solid #1B2032'}}/>
      </FormControl>
      <button className='bg-navy border border-navy text-slate-50 hover:bg-gradient-to-r from-slate-600  to-navy hover:text-white active:bg-accent  py-1 px-2 rounded-md my-2 font-sans text-lg'>
        Send
      </button>
    </form>
  )
}
