import Button1 from './Button1'
import MaxWidth from './MaxWidth'
import { FaChevronRight } from 'react-icons/fa'
import Women from '../../public/Women.png'
import { IoIosArrowUp } from 'react-icons/io'
import { CiLocationOn } from 'react-icons/ci'
import { VscCallIncoming } from 'react-icons/vsc'
import { AiOutlineSetting } from 'react-icons/ai'
import { TbBrandSpeedtest } from 'react-icons/tb'

const Karta = () => {
  return (
    <div>
      <MaxWidth className={'pt-10 text-white'}>
        <div className="flex flex-col gap-20">
          <div className="p-7 rounded-md flex md:flex-row md:gap-0 gap-10 flex-col items-center justify-between bg-[#1C2121]">
            <div className="flex flex-col gap-5">
              <h1 className="font-bold uppercase md:text-3xl text-[28px]">
                Индивидуальное предложение <br />
                для корпоративных клиентов
              </h1>
              <Button1
                className={
                  'flex h-[48px] md:w-[207px] justify-center items-center gap-2 text-black text-sm font-medium'
                }
              >
                <p>Отправить заявку</p>
                <FaChevronRight />
              </Button1>
            </div>
            <div className="flex gap-5 md:w-auto w-full items-center">
              <img
                className="sm:w-auto sm:h-auto w-[90px] h-[90px]"
                src={Women}
                alt=""
              />
              <div className="flex flex-col gap-1">
                <h1 className="uppercase md:text-2xl text-lg font-bold">
                  Татьяна Санникова
                </h1>
                <p className="text-base font-light">
                  Отдел корпоративных <br />
                  продаж АВТОРУСЬ
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <iframe
              className="rounded-md md:h-[451px] h-[370px]"
              width="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=451&amp;hl=en&amp;q=%D0%AF%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D1%81%D0%BA%D0%BE%D0%B5%20%D1%88%D0%BE%D1%81%D1%81%D0%B5,%20%D0%B2%D0%BB%D0%B0%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5%202%20%D0%92,%20%20%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%B8%D0%B5%203%20(%D0%9C%D0%9A%D0%90%D0%94,%2095%20%D0%BA%D0%BC)+(%D0%90%D0%92%D0%A2%D0%9E%D0%A0%D0%A3%D0%A1%D0%AC%20TANK)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
            <div className="md:absolute md:bottom-4 md:-mt-0 left-4 right-4 min-h-[116px] rounded-md bg-[#1C2121] p-4">
              <div className="w-full flex md:flex-row flex-col lg:gap-0 gap-5 justify-between items-center">
                <div className="flex md:w-auto w-full flex-col gap-1">
                  <p className="text-sm font-light">Адрес</p>
                  <p className="text-xl font-medium">
                    Ярославское шоссе, владение 2 В, <br /> строение 3 (МКАД, 95
                    км)
                  </p>
                </div>
                <div className="flex md:w-auto w-full flex-col gap-1">
                  <p className="text-sm font-light">Телефон</p>
                  <p className="text-xl font-medium">+7 (999) 999-99-99</p>
                  <div className="flex items-center gap-1">
                    <span className="w-[6px] h-[6px]" />
                    <p className="text-[#939697] ">Мы на связи</p>
                  </div>
                </div>
                <div className="flex md:w-auto w-full flex-col gap-1">
                  <p className="text-[#939697] text-sm font-light">
                    Режим работы
                  </p>
                  <p className="text-xl font-medium">
                    Ежедневно <br />с 09:00 до 21:00
                  </p>
                </div>
                <Button1
                  className={
                    'text-black h-[48px] md:w-auto w-full justify-center flex items-center gap-2'
                  }
                >
                  <p className="text-sm font-medium">Заказать звонок</p>
                  <FaChevronRight />
                </Button1>
              </div>
            </div>
          </div>

          <div className="flex gap-10 flex-col">
            <p className="flex cursor-pointer items-center font-medium text-base gap-3">
              Дисклеймер <IoIosArrowUp />
            </p>
            <p className="text-base max-w-[1296px] font-light text-[#939697]">
              TANK 300 за 3 799 000руб с учетом поддержек. Цена на модель TANK
              (ТЭНК) 300 в комплектации Adventure (Эдвенчер) с двигателем 2,0T
              4WD, 2023 года производства, цвет автомобиля: белый, с учетом
              выгоды по трейд-ин 300 000 рублей. В трейд-ин принимаются
              автомобили с пробегом со сроком владения и регистрации (постановки
              на учет) в органах ГИБДД не менее 6 месяцев (в отношении
              автомобилей бренда TANK, Haval, Great Wall – 3 месяца) до сдачи
              автомобиля в трейд-ин. В качестве документов, подтверждающих срок
              владения сдаваемого в трейд-ин автомобиля, собственнику необходимо
              предоставить копию ПТС или СТС или карточку учета ТС из ГИБДД с
              печатью и подписью. Подробности уточняйте у менеджеров отдела
              продаж TANK АВТОРУСЬ. Предложение ограничено, не является офертой
              и действует с 01.04.2024г. <br /> <br /> TANK 500 за 5 349 000 руб
              с учетом поддержек. Цена на модель TANK (ТЭНК) 500 в комплектации
              Adventure (Эдвенчер) с двигателем 3,0T 4WD, 2023 года
              производства, цвет автомобиля: белый, с учетом прямой выгоды в 950
              000 рублей. Подробности уточняйте у менеджеров отдела продаж TANK
              АВТОРУСЬ. Предложение ограничено, не является офертой и действует
              с 01.04.2024г.
            </p>
            <div className="w-full h-[1px] bg-[#939697]" />
            <div className="flex md:flex-row flex-col md:gap-0 gap-5 justify-between">
              <div className="flex flex-col">
                <h1>АВТОРУСЬ TANK Лосиный Остров</h1>
                <p className="text-[#939697]">Официальный дилер</p>
              </div>
              <div className="flex md:flex-row flex-col items-center gap-5">
                <div className="flex md:w-auto w-full flex-col">
                  <h1 className="text-xl font-medium">+7 (999) 999-99-99</h1>
                  <p className="flex md:justify-end gap-1 items-center">
                    {' '}
                    <span className="w-[6px] h-[6px] rounded-full bg-[#00D154]" />{' '}
                    Мы на связи
                  </p>
                </div>
                <Button1 className={'flex w-full md:w-auto justify-center text-[#181818] items-center gap-2'}>
                  <VscCallIncoming />
                  <p className="font-medium text-sm">Заказать звонок</p>
                </Button1>
              </div>
            </div>
            <div className="flex md:flex-row flex-col justify-between items-center ">
              <div className="flex items-center gap-1">
                <CiLocationOn className='w-[20px] h-[20px]' />
                <p className="text-[#939697] font-medium text-sm">
                  Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)
                </p>
              </div>
              <div className="flex md:flex-row flex-col items-center md:gap-10 gap-5 md:mt-0 mt-3">
                <p className="flex items-center gap-1">
                  <AiOutlineSetting className="w-[20px] h-[20px] text-[#FF9549]" />
                  Записаться на сервис
                </p>
                <p className="flex items-center gap-1">
                  <TbBrandSpeedtest className="w-[20px] h-[20px] text-[#FF9549]" />
                  Тест-драйв
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-light text-sm text-[#939697]">
                Официальный дилер
              </p>
              <h1 className="text-base font-light ">
                ООО А АВТОРУСЬ МЫТИЩИ | ОГРН - 1147746695161, ИНН - 7728881903
              </h1>
            </div>

            <div className="mt-5 mb-5 flex gap-5 flex-col">
              <div className="w-full h-[1px] bg-[#939697]" />
              <div className='md:flex items-center justify-between'>
                <p className="text-[#939697] text-base font-light">
                  © {new Date().getFullYear()}, АВТОРУСЬ ТАНК
                </p>
                <div className='flex gap-10 text-[#939697] items-center'>
                    <p className='text-base font-light'>Правовая информация</p>
                    <p className='text-base font-light'>Условия акции</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidth>
    </div>
  )
}

export default Karta
