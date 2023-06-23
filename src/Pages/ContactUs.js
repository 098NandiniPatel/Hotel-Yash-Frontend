import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './contact.css'
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
    toast('Form sent!', {
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
            <div className='contactForm'>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1 of form */}
                <div className=''>
                  <div className=''>
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
                      className=''
                      placeholder='Your Name'
                    ></input>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  <div className=''>
                    <input
                      type='number'
                      name='phone'
                      {...register('phone', {
                        required: true,
                        pattern:
                        /[6-9]{1}[0-9]{9}/
                      })}
                      className=''
                      placeholder='Your Phone'
                    ></input>
                    {errors.phone && <span className='errorMessage'>Please enter a valid mobile number</span>}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className=''>
                <div className=''>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className=''
                      placeholder='Your Email'
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                  </div>
                  <div className=''>
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
                      className=''
                      placeholder='Subject'
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className=''>
                  <div className=''>
                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        required: true
                      })}
                      className=''
                      placeholder='Your Message'
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                  </div>
                </div>
                {/* Row 4 of form */}
                <div className=''>
                  <div className=''>
                    <input
                      type='checkbox'
                      name='check'
                      {...register('check', {
                        required: true
                      })}
                      className=''
                    ></input>Accept Terms and Conditions
                    {errors.check && <span className='errorMessage'>Please check the box</span>}
                  </div>
                </div>
                <button className='submit-btn' disabled={disabled} type='submit'>
                  Submit
                </button>
              </form>
            </div>
            <ToastContainer />
         
    </>
  );
};
export default ContactUs
