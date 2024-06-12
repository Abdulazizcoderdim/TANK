import CreditPhoto from '../../public/Credit.png'
import MaxWidth from '../components/MaxWidth'
import Button1 from '../components/Button1'
import { FaChevronRight } from 'react-icons/fa'

const Credit = () => {
  return (
    <div className="relative text-white">
      <img className="h-[400px] object-fill " src={CreditPhoto} alt="" />
      <MaxWidth className="absolute md:top-[15%] top-5">
        <div className="flex flex-col gap-3">
          <h1 className="md:text-[40px] text-[28px] uppercase font-bold">
            Оставьте заявку <br />
            на кредит
          </h1>
          <p className="text-lg">и получите одобрение за 1 день!</p>

          <form className="flex md:flex-row flex-col gap-3 items-end mt-4">
            <div className="flex flex-col md:w-auto w-full">
              <p className="text-[#939697] text-sm font-light">Телефон</p>
              <input
                type="text"
                placeholder="+7 (___) ___-__-__"
                className="border h-[52px] md:w-[300px] w-full px-2 rounded-md font-medium border-[#939697] bg-[#252C2C]"
              />
            </div>
            <Button1 className="text-[#181818] justify-center mb-[2px] h-[48px] md:w-auto w-full flex items-center gap-2">
              Отправить заявку
              <FaChevronRight className="mt-1" />
            </Button1>
          </form>
          <div className="flex items-center gap-1">
            <input type="checkbox" />
            <p className="text-[12px] font-light">
              Согласен на обработку персональных данных.
            </p>
          </div>
        </div>
      </MaxWidth>
    </div>
  )
}

export default Credit
