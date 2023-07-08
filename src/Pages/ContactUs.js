import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './contact.css'

import BreadCrumbs from '../components/BreadCrumbs'

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast('Submitted Successfully!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    // Destrcture data object
    // const { name,phone, email, subject, message ,checkbox} = data;
    try {
      // Disable form while processing submission
      setDisabled(true);
      // Use emailjs to email contact form data

      // Reset contact form fields after submission
      reset();
      toastifySuccess();
      setDisabled(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <BreadCrumbs name="Contact Us" />

<section>
      <div className='contactForm'>
        <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Row 1 of form */}
          <div className='row'>
            <div className='col'>
              <input
                type='text'
                name='name'
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Please enter your name'
                  },
                  maxLength: {
                    value: 30,
                    message: 'Please use 30 characters or less'
                  }
                })}
                className='input-field'
                placeholder='Your Name'
              ></input>
              {errors.name && <div className='errorMessage'>{errors.name.message}</div>}
            </div>
            <div className='col'>
              <input
                type='number'
                name='phone'
                {...register('phone', {
                  required: true,
                  pattern:
                    /[6-9]{1}[0-9]{9}/
                })}
                className='input-field'
                placeholder='Your Phone'
              ></input>
              {errors.phone && <div className='errorMessage'>Please enter a valid mobile number</div>}
            </div>
          </div>
          {/* Row 2 of form */}
          <div className='row'>
            <div className='col'>
              <input
                type='email'
                name='email'
                {...register('email', {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                })}
                className='input-field'
                placeholder='Your Email'
              ></input>
              {errors.email && (
                <div className='errorMessage'>Please enter a valid email address</div>
              )}
            </div>
            <div className='col'>
              <input
                type='text'
                name='subject'
                {...register('subject', {
                  required: {
                    value: true,
                    message: 'Please enter a subject'
                  },
                  maxLength: {
                    value: 75,
                    message: 'Subject cannot exceed 75 characters'
                  }
                })}
                className='input-field'
                placeholder='Subject'
              ></input>
              {errors.subject && (
                <div className='errorMessage'>{errors.subject.message}</div>
              )}
            </div>
          </div>
          {/* Row 3 of form */}
          <div className='row'>
            <div className='text-col'>
              <textarea
                rows={3}
                name='message'
                {...register('message', {
                  required: true
                })}
                className='input-field-long input-field'
                placeholder='Your Message'
              ></textarea>
              {errors.message && <div className='errorMessage'>Please enter a message</div>}
            </div>
          </div>
          {/* Row 4 of form */}
          <div className='row'>
            <div className='col'>
              <input
                type='checkbox'
                name='check'
                {...register('check', {
                  required: true
                })}
                className=''
              ></input> Accept Terms & Conditions
              {errors.check && <div className='errorMessage'>Please check the box</div>}
            </div>
          </div>
          <button className='btn' disabled={disabled} type='submit'>
            SEND YOUR MESSAGE NOW
          </button>
        </form>
      </div>
</section>
      <ToastContainer />

    </>
  );
};
export default ContactUs
