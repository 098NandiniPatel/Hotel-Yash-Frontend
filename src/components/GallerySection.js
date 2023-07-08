import './GallerySection.css'
import { useState } from 'react'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  AiOutlineCloseCircle,
  AiFillCaretLeft,
  AiFillCaretRight
} from 'react-icons/ai'


const GallerySection = () => {
  const galleryImages = [
    {
      ht: '200px',
      img: "https://hotelemojiinn.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-29-at-6.11.39-PM.jpeg"
    },
    {
      ht: '400px',
      img: "https://hotelemojiinn.com/wp-content/uploads/2018/07/WhatsApp-Image-2022-08-23-at-11.07.20-AM.jpeg"
    },
    {
      ht: '300px',
      img: "https://hotelemojiinn.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-29-at-6.11.37-PM.jpeg"
    },
    {
      ht: '200px',
      img: "https://hotelemojiinn.com/wp-content/uploads/2018/07/WhatsApp-Image-2022-08-23-at-11.07.20-AM.jpeg"
    },
    {
      ht: '300px',
      img: "https://hotelemojiinn.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-29-at-6.11.37-PM.jpeg"
    },
    {
      ht: '400px',
      img:'https://hotelemojiinn.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-29-at-6.11.39-PM.jpeg'
    },
    {
      ht: '400px',
      img: "https://hotelemojiinn.com/wp-content/uploads/2018/07/WhatsApp-Image-2022-08-23-at-11.07.20-AM.jpeg"
    },
    {
      ht: '400px',
      img: "https://hotelemojiinn.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-29-at-6.11.37-PM.jpeg"
    },
    {
      ht: '500px',
      img: "https://hotelemojiinn.com/wp-content/uploads/2018/07/WhatsApp-Image-2022-08-23-at-11.07.20-AM.jpeg"
    },
    {
    ht: '200px',
    img: "https://hotelemojiinn.com/wp-content/uploads/2018/07/WhatsApp-Image-2022-08-23-at-11.07.20-AM.jpeg"
  },

  ]
  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1)
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1)
  }

  return (
    <div>

      {openModal &&
        <div className='sliderWrap'>
          <AiOutlineCloseCircle className='btnClose' onClick={handleCloseModal} />
          <AiFillCaretLeft className='btnPrev' onClick={prevSlide} />
          <AiFillCaretRight className='btnNext' onClick={nextSlide} />
          <div className='fullScreenImage'>
            <img src={galleryImages[slideNumber].img} alt='' />
          </div>
        </div>
      }

      <div className='galleryWrap'>
        {
          galleryImages && galleryImages.map((slide, index) => {
            return (
              <div
                className='single'
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide.img} alt='' height={slide.ht} />
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default GallerySection