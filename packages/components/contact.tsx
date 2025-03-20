import { useState, ChangeEvent, FormEvent } from 'react';
import { H1, H3, H5 } from '../ui/typography';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

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
        setStatus('Message sent successfully!');
      } else {
        setStatus(`Error: ${data.message}`);
      }
    } catch (error) {
      setStatus(`Error sending email: ${error}`);
    }
  };
  
  return (
    <div className="min-w-[250px] max-w-[500px] flex flex-col gap-5 shadow-2xl p-10 rounded-2xl" id='foreground'>
      <H3>Kontakt mig</H3>
      <span>Er du interesseret? Udfyld formularen, så vender jeg tilbage til dig hurtigst muligt. Jeg ser frem til at høre fra dig!</span>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          className='w-full h-[50px] border-1 rounded-xs p-3'
          type="text"
          name="name"
          placeholder="Dit Navn"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className='w-full h-[50px] border-1 rounded-xs p-3 '
          type="email"
          name="email"
          placeholder="Din Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className='w-full h-[100px] border-1 rounded-xs p-3 '
          maxLength={250}
          name="message"
          placeholder="Din Besked"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button className='w-2/4 self-center mt-10 font-bold' type="submit" id='accent'>Send Mail</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
