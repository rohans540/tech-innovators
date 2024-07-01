import { useRef, useState } from "react"
import { smallSphere, stars } from "../assets"
import Button from "./Button"
import Heading from "./Heading"
import Section from "./Section"

const initialState = {
  name: '',
  email: ''
}


const Contact = () => {
    const formRef = useRef(null);
    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState(initialState);

    const randomAutoCompleteValue = Math.random().toString(36).substring(2, 15);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
        setErrors({ ...errors, [name]: '' });
      }

      const handleBlur = (event) => {
        const { name, value } = event.target;
        let error = '';
    
        if (name === 'name') {
          const nameRegex = /^[A-Za-z\s]+$/;
          if (!nameRegex.test(value)) {
            error = 'Name should contain only alphabets';
          }
        } else if (name === 'email') {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            error = 'Invalid email address';
          }
        }
    
        setErrors({ ...errors, [name]: error });
      };

    const handleSubmit = (event) => {
      event.preventDefault();
      if (!errors.name && !errors.email && form.name && form.email) {
        alert(`Sent details Name: ${form.name} and email: ${form.email}`);
      } else {
        alert('Please fill the form correctly');
      }
    }

  return (
    <Section crosses id="contact" className="overflow-hidden">
        <div className="container relative z-2">
            <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                <img src={smallSphere} className="relative z-1" width={255} height={255} alt="Sphere" />
                <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none" >
                    <img src={stars} className="w-full" width={950} height={400} alt="Stars" />
                </div>
            </div>
            <Heading tag="Contact us" title="Get in touch" />
            <div className="relative lg:w-[50rem]">
            <form 
                ref={formRef}
                onSubmit={handleSubmit}
                className='mt-12 flex flex-col gap-8'
            >
          <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your name</span>
              <input 
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Full name"
                className='bg-n-9 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
              {errors.name && <span className="text-red-500 mt-2">{errors.name}</span>}
          </label>
          <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your email</span>
              <input 
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email"
                autoComplete={randomAutoCompleteValue}
                className='bg-n-9 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
              {errors.email && <span className="text-red-500 mt-2">{errors.email}</span>}
          </label>

          <div className='flex justify-around'>
            <Button disabled={errors.name || errors.email}>Send</Button>
          </div>
        </form>
            </div>
        </div>
    </Section>
  )
}

export default Contact