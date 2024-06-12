import BannerPhoto from '../../public/Banner.png'
import Button1 from './Button1'
import MaxWidth from './MaxWidth'
import { FaAngleRight } from 'react-icons/fa6'
import Ellipse1 from '../../public/MaskEllipse.png'
import Ellipse2 from '../../public/Mask group (1).png'
import Ellipse3 from '../../public/Mask group (2).png'
import Ellipse4 from '../../public/Mask group (3).png'
import Award1 from '../../public/award1.png'
import Award2 from '../../public/award2.png'
import Award3 from '../../public/award3.png'
import Tank1 from '../../public/Tank1.png'
import Tank2 from '../../public/Tank2.png'

const Banner = () => {
  return (
    <div>
      <div className="relative">
        <img
          src={BannerPhoto}
          className="w-full md:min-h-[700px] object-center min-h-[300px]"
          alt=""
        />
        <MaxWidth className="md:absolute md:top-1/4">
          <div className="flex md:mt-0 mt-2 flex-col gap-10">
            <div className="flex text-white flex-col">
              <p className="md:text-[28px] text-[18px] font-medium">
                Улучшим любые условия
              </p>
              <h1 className="md:text-[60px] text-[40px] font-bold">TANK 500</h1>
              <p className="md:text-[28px] text-[18px] font-medium">
                Осталось всего 5 автомобилей!
              </p>
            </div>
            <Button1 className="text-black h-[52px] md:w-[246px] w-full flex items-center justify-center gap-1">
              <p className="text-[14px] font-medium">Получить предложение</p>
              <FaAngleRight className="w-[15px] mt-1 h-[15px]" />
            </Button1>
          </div>
        </MaxWidth>
      </div>
      <div className="py-2 md:mt-0 mt-5 text-white pb-10">
        <MaxWidth>
          <div className="flex flex-col gap-16">
            <div className="flex  md:gap-0 gap-5 lg:flex-row flex-col p-5 md:px-10 bg-[#252C2C] rounded-lg md:items-center items-start justify-between w-full">
              <div className="uppercase md:text-3xl text-[28px] font-bold">
                Срок действия <br />
                спецпредложения:
              </div>
              <div className="flex gap-1 items-center ">
                <div className="relative">
                  <img
                    src={Ellipse1}
                    className="md:h-[90px] h-[70px] md:w-[90px] w-[70px]"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent w-full h-full flex items-center justify-center flex-col">
                    <p className="md:text-[34px] text-[24px] font-bold">3</p>
                    <span className="text-[12px] font-light">дня</span>
                  </div>
                </div>
                <span className="text-[38px] font-bold">:</span>
                <div className="relative">
                  <img
                    src={Ellipse2}
                    className="md:h-[90px] h-[70px] md:w-[90px] w-[70px]"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent w-full h-full flex items-center justify-center flex-col">
                    <p className="md:text-[34px] text-[24px] font-bold">03</p>
                    <span className="text-[12px] font-light">дня</span>
                  </div>
                </div>
                <span className="text-[38px] font-bold">:</span>
                <div className="relative">
                  <img
                    src={Ellipse3}
                    className="md:h-[90px] h-[70px] md:w-[90px] w-[70px]"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent w-full h-full flex items-center justify-center flex-col">
                    <p className="md:text-[34px] text-[24px] font-bold">14</p>
                    <span className="text-[12px] font-light">дня</span>
                  </div>
                </div>
                <span className="text-[38px] font-bold">:</span>
                <div className="relative">
                  <img
                    src={Ellipse4}
                    className="md:h-[90px] h-[70px] md:w-[90px] w-[70px]"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent w-full h-full flex items-center justify-center flex-col">
                    <p className="md:text-[34px] text-[24px] font-bold">55</p>
                    <span className="text-[12px] font-light">дня</span>
                  </div>
                </div>
              </div>
              <div className="md:w-auto w-full">
                <Button1 className="flex rounded-lg h-[52px] items-center justify-center text-black gap-1">
                  <p className="font-medium text-[14px]">
                    Узнать цену с выгодами
                  </p>
                  <FaAngleRight className="w-[15px] h-[15px]" />
                </Button1>
              </div>
            </div>

            <div className="w-full flex md:flex-row flex-col justify-between gap-5">
              <div className="border-[2px] w-full border-[#939697] rounded-md p-4">
                <div className="flex gap-4">
                  <img src={Award1} className="w-[36.67px] h-[44px]" alt="" />
                  <div className="flex flex-col gap-4">
                    <p className="uppercase font-bold text-[20px] ">
                      Официальный дилер
                    </p>
                    <p className="md:flex hidden text-[16px] font-light">
                      Гарантируем высокое качество <br />
                      обслуживания.
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-[2px] w-full border-[#939697] rounded-md p-4">
                <div className="flex gap-4">
                  <img src={Award2} className="w-[36ppx] h-[33px]" alt="" />
                  <div className="flex flex-col gap-4">
                    <p className="uppercase font-bold text-[20px] ">
                      ПОКУПКА АВТО ЗА 1 ДЕНЬ
                    </p>
                    <p className="md:flex hidden text-[16px] font-light">
                      Удобный процесс покупки, включая <br /> оформление всех
                      документов.
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-[2px] w-full border-[#939697] rounded-md p-4">
                <div className="flex gap-4">
                  <img src={Award3} className="w-[36.67px] h-[40px]" alt="" />
                  <div className="flex flex-col gap-4">
                    <p className="uppercase font-bold text-[20px] ">
                      ВСЕ КОМПЛЕКТАЦИИ <br /> В НАЛИЧИИ
                    </p>
                    <p className="md:flex hidden text-[16px] font-light">
                      Широкий выбор комплектаций, c полным пакетом документов
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-center flex-col gap-5">
              <p className="uppercase md:text-[40px] text-[28px] font-bold text-center">
                ЗАБРОНИРУЙТЕ Автомобиль СЕГОДНЯ И ПОЛУЧИТЕ <br /> ДОПОЛНИТЕЛЬНУЮ
                ВЫГОДУ 100 000 ₽
              </p>
              <div className="flex gap-10 items-center">
                <div className="flex flex-col justify-center items-center">
                  <img src={Tank1} alt="" />
                  <p className="text-[16px] gap-2 font-medium">TANK 300</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <img src={Tank2} alt="" />
                  <p className="text-[16px] font-medium">TANK 500</p>
                </div>
              </div>
            </div>
          </div>
        </MaxWidth>
      </div>
    </div>
  )
}

export default Banner
