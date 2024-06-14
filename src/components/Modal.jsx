import { useRef } from 'react'
import ModalImg1 from '../../public/ModalImg1.png'
import ModalImg2 from '../../public/ModalImg2.png'
import ModalImg3 from '../../public/ModalImg3.png'
import ModalImg4 from '../../public/ModalImg4.png'
import ModalImg5 from '../../public/ModalImg5.png'
import ModalImg6 from '../../public/ModalImg6.png'
import { IoMdClose } from "react-icons/io";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Modal = ({ setModal }) => {
  const modalRef = useRef(null)
  const closeModal = (e) => {
    if (e.target === modalRef.current) setModal(false)
  }

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed flex justify-center items-center z-[1002] inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
    >
      <div className="">
        <div className="flex md:mx-0 mx-3 flex-col gap-2">
          <LazyLoadImage effect='blur' className='md:w-[1076px] w-full md:h-[500px] h-[194px]' src={ModalImg1} alt="" />

          <div className="flex gap-2 items-center justify-between">
            <LazyLoadImage width={"100%"} effect='blur' className='md:w-full h-[100px]' src={ModalImg2} alt="" />
            <LazyLoadImage width={"100%"} effect='blur' className='md:w-full h-[100px]' src={ModalImg3} alt="" />
            <LazyLoadImage width={"100%"} effect='blur' className='md:w-full h-[100px]' src={ModalImg4} alt="" />
            <LazyLoadImage width={"100%"} effect='blur' className='md:w-full h-[100px]' src={ModalImg5} alt="" />
            <LazyLoadImage width={"100%"} effect='blur' className='md:w-full h-[100px]' src={ModalImg6} alt="" />
          </div>
        </div>
      </div>

      <div className='text-white text-4xl cursor-pointer md:right-10 right-2 top-1 absolute'>
        <IoMdClose onClick={() => setModal(false)} className='w-[24px] h-[24px]'/>
      </div>
    </div>
  )
}

export default Modal
