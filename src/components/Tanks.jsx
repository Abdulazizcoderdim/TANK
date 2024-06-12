import Button1 from './Button1'
import MaxWidth from './MaxWidth'
import { IoWarningOutline } from 'react-icons/io5'
import { FaChevronRight } from 'react-icons/fa'
import Tank11 from '../../public/Tank11.png'
import Tank22 from '../../public/Tank22.png'
import Tank33 from '../../public/Tank33.png'
import Tank44 from '../../public/Tank44.png'
import Tank55 from '../../public/Tank5.png'
import { FaCheck } from 'react-icons/fa6'
import { useState } from 'react'
import { LuClipboardCheck } from 'react-icons/lu'
import { AiOutlineSafetyCertificate } from 'react-icons/ai'
import Gray1 from '../../public/Gray1.png'
import Gray2 from '../../public/Gray2.png'
import Gray3 from '../../public/Gray3.png'
import Gray4 from '../../public/Gray4.png'
import Gray5 from '../../public/Gray5.png'
import Gray21 from '../../public/Gray2-1 .png'
import Gray22 from '../../public/Gray2-2.png'
import Gray23 from '../../public/Gray2-3.png'
import Gray24 from '../../public/Gray2-4.png'
import Modal from './Modal'

const Tanks = () => {
  const [colors, setColors] = useState(
    JSON.parse(localStorage.getItem('colors')) || 'red'
  )
  const [colors2, setColors2] = useState(
    JSON.parse(localStorage.getItem('colors2')) || 'gray'
  )

  const [modal, setModal] = useState(false)

  const saveColor = (color) => {
    setColors(color)
    localStorage.setItem('colors', JSON.stringify(color))
  }
  const saveColor2 = (color) => {
    setColors2(color)
    localStorage.setItem('colors2', JSON.stringify(color))
  }

  const imagePhoto = () => {
    switch (colors2) {
      case 'lightred':
        return Tank22
      case 'grey':
        return Tank33
      case 'black':
        return Tank44
      case 'white':
        return Tank55
      default:
        return Tank11
    }
  }
  const imagePhoto2 = () => {
    switch (colors2) {
      case 'grey':
        return Gray23
      case 'black':
        return Gray24
      case 'white':
        return Gray22
      default:
        return Gray21
    }
  }

  return (
    <>
      <div className="bg-[#1C2121] text-white z-50">
        <MaxWidth className="py-10 flex flex-col gap-10">
          <div className="flex md:flex-row flex-col-reverse items-center md:gap-0 gap-5 justify-between">
            <div className="flex flex-col md:w-auto w-full gap-4">
              <p className="md:text-xl text-sm font-medium text-[#FF9549]">
                Только в АВТОРУСЬ!
              </p>
              <h1 className="md:text-[40px] text-[28px] font-bold">TANK 300</h1>
              <p className="uppercase md:text-[30px] text-[24px] font-medium">
                Выгода по Trade-In <br /> до 450 000 ₽{' '}
              </p>
              <div className="flex items-center p-2 rounded-lg justify-center w-[264px] bg-[#FF2B00]">
                <IoWarningOutline />
                <p className="text-sm font-medium">Ограниченное предложение!</p>
                <IoWarningOutline />
              </div>
              <div className="mt-5 flex flex-col gap-3">
                <Button1 className="flex items-center gap-1 text-black">
                  Узнать стоимость по акции
                  <FaChevronRight />
                </Button1>
                <button className="flex items-center gap-1 justify-center text-white py-2 border-[2px] border-[#FF9549] rounded-lg">
                  Тест-драйв
                  <FaChevronRight />
                </button>
                <button className="flex items-center gap-1 justify-center text-white py-2 border-[2px] border-[#FF9549] rounded-lg">
                  Рассчитать кредит
                  <FaChevronRight />
                </button>
              </div>
            </div>
            <div className="">
              <div className="flex  md:flex-row flex-col items-center gap-4">
                <div className="relative">
                  <img className="object-fill" src={imagePhoto()} alt="" />
                  <div className="absolute top-5 text-center right-12 text-black bg-[#FF9549] rounded-md p-2 md:text-[16px] text-[12px] font-medium md:leading-5 leading-3 rotate-[15deg]">
                    Осталось <br /> 5 автомобилей <br /> по спец цене
                  </div>
                </div>
                <div className="flex md:flex-col gap-2">
                  <span
                    onClick={() => saveColor('red')}
                    className={`w-[30px] cursor-pointer h-[30px] bg-[#EF2929] rounded-full flex items-center justify-center text-white`}
                  >
                    {colors === 'red' && <FaCheck />}
                  </span>
                  <span
                    onClick={() => saveColor('lightred')}
                    className="w-[30px] cursor-pointer h-[30px] bg-[#DF4C30] rounded-full flex items-center justify-center text-white"
                  >
                    {colors === 'lightred' && <FaCheck />}
                  </span>
                  <span
                    onClick={() => saveColor('grey')}
                    className="w-[30px] cursor-pointer h-[30px] bg-[#C6C9CE] rounded-full flex items-center justify-center text-white"
                  >
                    {colors === 'grey' && <FaCheck />}
                  </span>
                  <span
                    onClick={() => saveColor('black')}
                    className="w-[30px] cursor-pointer h-[30px] bg-[#212329] border border-[#939697] rounded-full flex items-center justify-center text-white"
                  >
                    {colors === 'black' && <FaCheck />}
                  </span>
                  <span
                    onClick={() => saveColor('white')}
                    className="w-[30px] cursor-pointer h-[30px] bg-[#E6E7E8] rounded-full flex items-center justify-center text-white"
                  >
                    {colors === 'white' && <FaCheck />}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-nowrap flex-wrap items-center gap-6 justify-between">
            <div className="w-full flex bg-[#181818] rounded-md h-[58px] px-4 items-center gap-2">
              <LuClipboardCheck className="text-[#FF9549] w-[30px] h-[30px]" />
              <p className="text-[16px] font-medium">
                Автомобили в наличии <br />с ПТС
              </p>
            </div>
            <div className="w-full flex bg-[#181818] rounded-md h-[58px] px-4 items-center gap-2">
              <AiOutlineSafetyCertificate className="text-[#FF9549] w-[30px] h-[30px]" />
              <p className="text-[16px] font-medium">
                Сервисная поддержка <br />
                до 5 лет / 150 000 км
              </p>
            </div>
            <div className="w-full flex bg-[#181818] rounded-md h-[58px] px-4 items-center gap-2">
              <LuClipboardCheck className="text-[#FF9549] w-[30px] h-[30px]" />
              <p className="text-[16px] font-medium">
                Улучшим любое <br />
                предложение
              </p>
            </div>
            <div className="w-full flex bg-[#181818] rounded-md h-[58px] px-4 items-center gap-2">
              <LuClipboardCheck className="text-[#FF9549] w-[30px] h-[30px]" />
              <p className="text-[16px] font-medium">Кредит 0,01%</p>
            </div>
          </div>
          <div className="flex gap-5 items-center overflow-x-hidden">
            <img
              className="md:max-w-[240px] md:max-h-[200px] max-w-[120px] min-h-[100px]"
              src={Gray1}
              alt=""
            />
            <img
              className="md:max-w-[240px] md:max-h-[200px] max-w-[120px] min-h-[100px]"
              src={Gray2}
              alt=""
            />
            <img
              className="md:max-w-[240px] md:max-h-[200px] max-w-[120px] min-h-[100px]"
              src={Gray3}
              alt=""
            />
            <img
              className="md:max-w-[240px] md:max-h-[200px] max-w-[120px] min-h-[100px]"
              src={Gray4}
              alt=""
            />
            <img
              className="md:max-w-[240px] md:max-h-[200px] max-w-[120px] min-h-[100px]"
              src={Gray5}
              alt=""
            />
          </div>
        </MaxWidth>
      </div>
      <div className="bg-[#252C2C] text-white z-50">
        <MaxWidth className="py-10 flex flex-col gap-10">
          <div className="flex md:flex-row flex-col-reverse items-center md:gap-0 gap-5 justify-between">
            <div className="">
              <div className="flex md:flex-row flex-col-reverse items-center gap-4">
                <div className="flex md:flex-col gap-2">
                  <span
                    onClick={() => saveColor2('gray')}
                    className={`w-[30px] cursor-pointer h-[30px] bg-[#B0A798] rounded-full flex items-center justify-center text-white`}
                  >
                    {colors2 === 'gray' && <FaCheck />}
                  </span>
                  <span
                    onClick={() => saveColor2('white')}
                    className="w-[30px] cursor-pointer h-[30px] bg-[#E6E7E8] rounded-full flex items-center justify-center text-white"
                  >
                    {colors2 === 'white' && <FaCheck />}
                  </span>
                  <span
                    onClick={() => saveColor2('grey')}
                    className="w-[30px] cursor-pointer h-[30px] bg-[#A2A4AB] rounded-full flex items-center justify-center text-white"
                  >
                    {colors2 === 'grey' && <FaCheck />}
                  </span>
                  <span
                    onClick={() => saveColor2('black')}
                    className="w-[30px] cursor-pointer h-[30px] bg-[#212329] border border-[#939697] rounded-full flex items-center justify-center text-white"
                  >
                    {colors2 === 'black' && <FaCheck />}
                  </span>
                </div>
                <div className="relative">
                  <img
                    onClick={() => setModal(true)}
                    className="object-fill"
                    src={imagePhoto2()}
                    alt=""
                  />
                  <div className="absolute top-5 text-center right-12 text-black bg-[#FF9549] rounded-md p-2 md:text-[16px] text-[12px] font-medium md:leading-5 leading-3 rotate-[15deg]">
                    Осталось <br /> 5 автомобилей <br /> по спец цене
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:w-auto w-full gap-4">
              <p className="md:text-xl text-sm font-medium text-[#FF9549]">
                Только в АВТОРУСЬ!
              </p>
              <h1 className="md:text-[40px] text-[28px] font-bold">TANK 300</h1>
              <p className="uppercase md:text-[30px] text-[24px] font-medium">
                Выгода по Trade-In <br /> до 450 000 ₽{' '}
              </p>
              <div className="flex items-center p-2 rounded-lg justify-center w-[264px] bg-[#FF2B00]">
                <IoWarningOutline />
                <p className="text-sm font-medium">Ограниченное предложение!</p>
                <IoWarningOutline />
              </div>
              <div className="mt-5 flex flex-col gap-3">
                <Button1 className="flex items-center gap-1 text-black">
                  Узнать стоимость по акции
                  <FaChevronRight />
                </Button1>
                <button className="flex items-center gap-1 justify-center text-white py-2 border-[2px] border-[#FF9549] rounded-lg">
                  Тест-драйв
                  <FaChevronRight />
                </button>
                <button className="flex items-center gap-1 justify-center text-white py-2 border-[2px] border-[#FF9549] rounded-lg">
                  Рассчитать кредит
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-nowrap flex-wrap items-center gap-6 justify-between">
            <div className="w-full flex bg-[#1C2121] rounded-md h-[58px] px-4 items-center gap-2">
              <LuClipboardCheck className="text-[#FF9549] w-[30px] h-[30px]" />
              <p className="text-[16px] font-medium">
                Автомобили в наличии <br />с ПТС
              </p>
            </div>
            <div className="w-full flex bg-[#1C2121] rounded-md h-[58px] px-4 items-center gap-2">
              <AiOutlineSafetyCertificate className="text-[#FF9549] w-[30px] h-[30px]" />
              <p className="text-[16px] font-medium">
                Сервисная поддержка <br />
                до 5 лет / 150 000 км
              </p>
            </div>
            <div className="w-full flex bg-[#1C2121] rounded-md h-[58px] px-4 items-center gap-2">
              <LuClipboardCheck className="text-[#FF9549] w-[30px] h-[30px]" />
              <p className="text-[16px] font-medium">
                Улучшим любое <br />
                предложение
              </p>
            </div>
            <div className="w-full flex bg-[#1C2121] rounded-md h-[58px] px-4 items-center gap-2">
              <LuClipboardCheck className="text-[#FF9549] w-[30px] h-[30px]" />
              <p className="text-[16px] font-medium">Кредит 0,01%</p>
            </div>
          </div>
          <div className="flex gap-5 items-center overflow-x-hidden">
            <img
              className="md:max-w-[240px] md:max-h-[200px] max-w-[120px] min-h-[100px]"
              src={Gray1}
              alt=""
            />
            <img
              className="md:max-w-[240px] md:max-h-[200px] max-w-[120px] min-h-[100px]"
              src={Gray2}
              alt=""
            />
            <img
              className="md:max-w-[240px] md:max-h-[200px] max-w-[120px] min-h-[100px]"
              src={Gray3}
              alt=""
            />
            <img
              className="md:max-w-[240px] md:max-h-[200px] max-w-[120px] min-h-[100px]"
              src={Gray4}
              alt=""
            />
            <img
              className="md:max-w-[240px] md:max-h-[200px] max-w-[120px] min-h-[100px]"
              src={Gray5}
              alt=""
            />
          </div>
        </MaxWidth>
      </div>

      {/* Modal */}
      {modal && <Modal setModal={setModal} />}
    </>
  )
}

export default Tanks
