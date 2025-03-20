import { useState, ChangeEvent, FormEvent } from 'react';
import { H3 } from '../ui/typography';
import text from '@/packages/json/contact.json'
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(text.status.loading);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus(text.status.success);
      } else {
        setStatus(text.status.error);
        console.log(data.message)
      }
    } catch (error) {
      setStatus(text.status.error);
      console.log(error)
    }
  };
  
  return (
    <div className="min-w-[250px] max-w-[500px] flex flex-col gap-5 shadow-2xl p-10 rounded-2xl" id='foreground'>
      <H3 className='flex flex-row items-center gap-3'>
        <Mail />
        {text.title}
      </H3>
      <span className='whitespace-pre-line'>{text.content}</span>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          className='w-full h-[50px] border-1 rounded-xs p-3'
          type="text"
          name="name"
          placeholder={text.placeholder.name}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className='w-full h-[50px] border-1 rounded-xs p-3 '
          type="email"
          name="email"
          placeholder={text.placeholder.email}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className='w-full h-[100px] border-1 rounded-xs p-3 '
          maxLength={250}
          name="message"
          placeholder={text.placeholder.message}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button className='w-2/4 items-center justify-center flex flex-row gap-3 self-center mt-10 font-bold' type="submit" id='accent'>
          <Send />
          Send Mail
        </button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
