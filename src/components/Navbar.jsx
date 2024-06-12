import MaxWidth from './MaxWidth'
import LogoPhoto from '../../public/Logo.png'
import { CiLocationOn } from 'react-icons/ci'
import { CiSettings } from 'react-icons/ci'
import { TbBrandSpeedtest } from 'react-icons/tb'
import Button1 from './Button1'
import { MdPhoneCallback } from 'react-icons/md'
import { BiPhoneCall } from 'react-icons/bi'
import { RiMenu2Fill } from 'react-icons/ri'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { LuClock } from 'react-icons/lu'
import ModalZakaz from './ModalZakaz'

const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState(false)
  const [zakaz, setZakaz] = useState(false)

  return (
    <MaxWidth className="text-white pt-4 pb-4">
      <div className="flex md:gap-7 gap-3 items-center">
        <img
          className="md:w-[54px] md:h-[70px] w-[31px] h-[40px]"
          src={LogoPhoto}
          alt="Logo"
        />
        <div className="flex flex-col w-full">
          <div className="md:flex hidden border-b-2 border-white/20 pb-2 justify-between items-center">
            <div className="flex items-center gap-1 text-sm  text-[#939697]">
              <CiLocationOn className="w-[20px] h-[20px]" />
              <p className="font-medium">
                Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)
              </p>
            </div>
            <div className="flex items-centere gap-12">
              <p className="flex items-center gap-1">
                <CiSettings className="text-[#FF9549] w-[20px] h-[20px]" />
                <p className="text-white text-sm font-medium">
                  Записаться на сервис
                </p>
              </p>
              <p className="flex items-center gap-1">
                <TbBrandSpeedtest className="text-[#FF9549] w-[20px] h-[20px]" />
                <p className="text-white text-sm font-medium">Тест-драйв</p>
              </p>
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="md:flex-row flex-col flex md:items-center h-full md:gap-3">
              <p className="flex gap-1 text-white md:font-bold font-medium xl:text-3xl md:text-xl text-sm md:leading-[33px]">
                АВТОРУСЬ TANK{' '}
                <span className="md:hidden flex ">Лосиный Остров</span>
              </p>
              <div className="w-[1.5px] h-[33px] md:flex hidden bg-white/20" />
              <p className="text-white font-light md:text-lg text-xs">
                Официальный дилер
              </p>
            </div>
            <div className="md:flex hidden gap-5 mt-1 items-center">
              <div className="flex flex-col">
                <p className="font-semibold lg:text-xl text-lg text-white">
                  +7 (999) 999-99-99
                </p>
                <p className="flex  gap-1 text-[#939697] items-center justify-end">
                  {' '}
                  <span className="bg-[#00D154] w-[6px] h-[6px] rounded-full" />{' '}
                  Мы на связи
                </p>
              </div>
              <Button1 onClick={() => setZakaz((prev) => !prev)} className="flex text-black font-medium text-sm items-center gap-2">
                <MdPhoneCallback className="w-[20px] h-[20px]" />
                <p>Заказать звонок</p>
              </Button1>
            </div>

            {/* Zakaz modal */}
            {zakaz && <ModalZakaz setZakaz={setZakaz} />}
            {/* Zakaz Modal */}

            <div className="md:hidden flex items-center gap-2">
              <BiPhoneCall className="cursor-pointer text-white w-[20px] h-[20px]" />
              {burgerMenu ? (
                <IoMdClose
                  onClick={() => setBurgerMenu((prev) => !prev)}
                  className="cursor-pointer text-white w-[20px] h-[20px]"
                />
              ) : (
                <RiMenu2Fill
                  onClick={() => setBurgerMenu((prev) => !prev)}
                  className="cursor-pointer text-white w-[20px] h-[20px]"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`h-[calc(100vh-70px)] md:hidden ${
          !burgerMenu ? 'hidden' : ''
        } w-full text-white`}
      >
        <div className="pt-10">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-1">
              <h1 className="text-white font-bold text-xl">
                АВТОРУСЬ TANK Лосиный Остров
              </h1>
              <p className="text-[#939697] font-light text-sm">
                Официальный дилер
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-white font-bold text-xl">
                +7 (999) 999-99-99
              </h1>
              <p className="text-[#939697] flex items-center gap-1 font-light text-sm">
                {' '}
                <span className="bg-[#00D154] w-[6px] h-[6px] rounded-full" />{' '}
                Мы на связи
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-1">
                <CiLocationOn className="mt-[3px] w-[20px] h-[20px]" />
                <p className="text-[#939697] font-medium text-base">
                  Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)
                </p>
              </div>
              <div className="flex text-[#939697] gap-1">
                <LuClock className="mt-[4px] w-[20px] h-[20px]" />
                <p className="font-medium text-base">
                  Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-16 w-full mt-8">
              <Button1 onClick={() => setZakaz((prev) => !prev)} className="flex text-black justify-center font-medium text-sm items-center gap-2">
                <MdPhoneCallback className="w-[20px] h-[20px]" />
                <p>Заказать звонок</p>
              </Button1>
              <div className='flex flex-col gap-6 w-full'>
                <p className="flex items-center justify-center gap-1">
                  <CiSettings className="text-[#FF9549] w-[20px] h-[20px]" />
                  <p className="text-white text-sm font-medium">
                    Записаться на сервис
                  </p>
                </p>
                <p className="flex items-center gap-1 justify-center">
                  <TbBrandSpeedtest className="text-[#FF9549] w-[20px] h-[20px]" />
                  <p className="text-white text-sm font-medium">Тест-драйв</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidth>
  )
}

export default Navbar
