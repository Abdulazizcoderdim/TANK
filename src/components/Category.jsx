import MaxWidth from '../components/MaxWidth'
import Button1 from '../components/Button1'
import { FaChevronRight } from 'react-icons/fa'
import TankPhoto from '../../public/TankPhoto.png'
import { GoTag } from 'react-icons/go'
import { IoGiftOutline } from 'react-icons/io5'
import Image000 from '../../public/Image000.png'

const Category = () => {
  return (
    <div className="text-white pt-14 pb-10">
      <MaxWidth>
        <div className="flex flex-col gap-5">
          <h1 className="uppercase text-center text-[40px]">
            ПОДБЕРИТЕ КОМПЛЕКТАЦИЮ
          </h1>
          <div className="flex lg:flex-nowrap flex-wrap gap-2 items-center">
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="cars"
                className="text-[#939697] font-light text-sm"
              >
                Модель
              </label>
              <select
                id="cars"
                className="bg-[#252C2C] h-[52px] w-full px-2 border border-[#939697] rounded-md"
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="cars"
                className="text-[#939697] font-light text-sm"
              >
                Комплектация
              </label>
              <select
                id="cars"
                className="bg-[#252C2C] h-[52px] w-full px-2 border border-[#939697] rounded-md"
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="cars"
                className="text-[#939697] font-light text-sm"
              >
                Двигатель
              </label>
              <select
                id="cars"
                className="bg-[#252C2C] h-[52px] w-full px-2 border border-[#939697] rounded-md"
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div className="border border-[#939697] rounded-md w-full p-5">
            <div className="flex lg:flex-row flex-col justify-between items-center">
              <img src={TankPhoto} alt="" />
              <div className="flex flex-col gap-5 w-full">
                <div className="flex md:gap-0 gap-5 md:flex-row flex-col justify-between">
                  <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-3xl">TANK 300</h1>
                    <p className="text-[#939697] font-light text-lg">
                      2.0 л. Бензин, Полный, <br className="md:hidden flex" />{' '}
                      Автоматическая
                    </p>
                    <p className="text-2xl mt-5 font-bold">3 649 000 ₽</p>
                  </div>

                  {/*  */}
                  <div className="flex items-start md:hidden md:flex-row flex-col gap-5">
                    <p className="text-base flex items-center gap-1 font-medium">
                      <GoTag className="w-[24px] h-[24px] text-[#FF9549]" />
                      Выгода по Trade-in до 450 000 ₽{' '}
                    </p>
                    <p className="text-base font-medium flex items-center gap-1">
                      <IoGiftOutline className="w-[24px] h-[24px] text-[#FF9549]" />
                      Керамическое покрытие в подарок!
                    </p>
                  </div>
                  {/*  */}

                  <div className="flex flex-col gap-4">
                    <Button1 className="text-black h-[48px] flex items-center gap-1 rounded-md">
                      Получить предложение
                      <FaChevronRight />
                    </Button1>
                    <button className="text-white border px-3 border-[#FF9549] flex items-center gap-1 h-[48px] rounded-md">
                      Тест-драйв
                      <FaChevronRight />
                    </button>
                  </div>
                </div>
                <div className="md:flex hidden md:flex-row flex-col items-center gap-5">
                  <p className="text-base flex items-center gap-1 font-medium">
                    <GoTag className="w-[24px] h-[24px] text-[#FF9549]" />
                    Выгода по Trade-in до 450 000 ₽{' '}
                  </p>
                  <p className="text-base font-medium flex items-center gap-1">
                    <IoGiftOutline className="w-[24px] h-[24px] text-[#FF9549]" />
                    Керамическое покрытие в подарок!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-[#939697] rounded-md w-full p-5">
            <div className="flex lg:flex-row flex-col justify-between items-center">
              <img src={TankPhoto} alt="" />
              <div className="flex flex-col gap-5 w-full">
                <div className="flex md:gap-0 gap-5 md:flex-row flex-col justify-between">
                  <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-3xl">TANK 300</h1>
                    <p className="text-[#939697] font-light text-lg">
                      2.0 л. Бензин, Полный, <br className="md:hidden flex" />{' '}
                      Автоматическая
                    </p>
                    <p className="text-2xl mt-5 font-bold">3 649 000 ₽</p>
                  </div>

                  {/*  */}
                  <div className="flex items-start md:hidden md:flex-row flex-col gap-5">
                    <p className="text-base flex items-center gap-1 font-medium">
                      <GoTag className="w-[24px] h-[24px] text-[#FF9549]" />
                      Выгода по Trade-in до 450 000 ₽{' '}
                    </p>
                    <p className="text-base font-medium flex items-center gap-1">
                      <IoGiftOutline className="w-[24px] h-[24px] text-[#FF9549]" />
                      Керамическое покрытие в подарок!
                    </p>
                  </div>
                  {/*  */}

                  <div className="flex flex-col gap-4">
                    <Button1 className="text-black h-[48px] flex items-center gap-1 rounded-md">
                      Получить предложение
                      <FaChevronRight />
                    </Button1>
                    <button className="text-white border px-3 border-[#FF9549] flex items-center gap-1 h-[48px] rounded-md">
                      Тест-драйв
                      <FaChevronRight />
                    </button>
                  </div>
                </div>
                <div className="md:flex hidden md:flex-row flex-col items-center gap-5">
                  <p className="text-base flex items-center gap-1 font-medium">
                    <GoTag className="w-[24px] h-[24px] text-[#FF9549]" />
                    Выгода по Trade-in до 450 000 ₽{' '}
                  </p>
                  <p className="text-base font-medium flex items-center gap-1">
                    <IoGiftOutline className="w-[24px] h-[24px] text-[#FF9549]" />
                    Керамическое покрытие в подарок!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-[#939697] rounded-md w-full p-5">
            <div className="flex lg:flex-row flex-col justify-between items-center">
              <img src={TankPhoto} alt="" />
              <div className="flex flex-col gap-5 w-full">
                <div className="flex md:gap-0 gap-5 md:flex-row flex-col justify-between">
                  <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-3xl">TANK 300</h1>
                    <p className="text-[#939697] font-light text-lg">
                      2.0 л. Бензин, Полный, <br className="md:hidden flex" />{' '}
                      Автоматическая
                    </p>
                    <p className="text-2xl mt-5 font-bold">3 649 000 ₽</p>
                  </div>

                  {/*  */}
                  <div className="flex items-start md:hidden md:flex-row flex-col gap-5">
                    <p className="text-base flex items-center gap-1 font-medium">
                      <GoTag className="w-[24px] h-[24px] text-[#FF9549]" />
                      Выгода по Trade-in до 450 000 ₽{' '}
                    </p>
                    <p className="text-base font-medium flex items-center gap-1">
                      <IoGiftOutline className="w-[24px] h-[24px] text-[#FF9549]" />
                      Керамическое покрытие в подарок!
                    </p>
                  </div>
                  {/*  */}

                  <div className="flex flex-col gap-4">
                    <Button1 className="text-black h-[48px] flex items-center gap-1 rounded-md">
                      Получить предложение
                      <FaChevronRight />
                    </Button1>
                    <button className="text-white border px-3 border-[#FF9549] flex items-center gap-1 h-[48px] rounded-md">
                      Тест-драйв
                      <FaChevronRight />
                    </button>
                  </div>
                </div>
                <div className="md:flex hidden md:flex-row flex-col items-center gap-5">
                  <p className="text-base flex items-center gap-1 font-medium">
                    <GoTag className="w-[24px] h-[24px] text-[#FF9549]" />
                    Выгода по Trade-in до 450 000 ₽{' '}
                  </p>
                  <p className="text-base font-medium flex items-center gap-1">
                    <IoGiftOutline className="w-[24px] h-[24px] text-[#FF9549]" />
                    Керамическое покрытие в подарок!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button className="flex text-sm hover:border-[#FF9549] hover:text-[#FF9549] transition-all duration-200 font-medium border border-[#939697] rounded-md w-[155px] h-[48px] justify-center items-center">
              Загрузить еще
            </button>
          </div>

          <div className="mt-20">
            <div className="flex lg:flex-row flex-col items-center gap-4">
              <img src={Image000} alt="" />
              <div className="flex flex-col gap-5">
                <h1 className="font-bold lg:text-[40px] text-[28px]">
                  ОБМЕН ПО TRADE-IN <br />
                  НА ВЫГОДНЫХ УСЛОВИЯХ
                </h1>
                <Button1
                  className={
                    'text-black h-[48px] md:w-[207px] justify-center flex items-center gap-1 rounded-md'
                  }
                >
                  Отправить заявку
                  <FaChevronRight />
                </Button1>
              </div>
            </div>
          </div>
        </div>
      </MaxWidth>
    </div>
  )
}

export default Category
