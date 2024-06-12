import { useRef } from 'react'
import { IoCloseOutline } from 'react-icons/io5'

const ModalZakaz = ({ setZakaz }) => {
  const modalRef = useRef(null)
  const closeModal = (e) => {
    if (e.target === modalRef.current) setZakaz(false)
  }

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed flex text-white justify-center items-center z-[1002] inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
    >
      <div className="md:min-w-[555px] w-[430px] bg-[#1C2121] min-h-[520px] p-3">
        <div className="flex flex-col mx-10">
          <div className="w-full flex justify-end ">
            <IoCloseOutline
              onClick={() => setZakaz(false)}
              className="w-[24px] cursor-pointer flex justify-end  h-[24px]"
            />
          </div>
          <div className="flex flex-col justify-center itce gap-5">
            <h1 className="uppercase w-full text-3xl text-center font-bold">
              Получить предложение
            </h1>
            <p className="text-center w-full text-base font-light">
              Пожалуйста, укажите свои данные. <br /> Наш менеджер свяжется с
              вами в течение 15 минут.
            </p>
            <form className="flex flex-col gap-10">
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
              <div className="flex flex-col md:w-auto w-full">
                <p className="text-[#939697] text-sm font-light">Телефон</p>
                <input
                  type="text"
                  placeholder="+7 (___) ___-__-__"
                  className="border h-[52px] w-full px-2 rounded-md font-medium border-[#939697] bg-[#252C2C]"
                />
              </div>
              <button
                type="submit"
                className="text-[#181818] h-[52px] rounded-md flex items-center justify-center hover:bg-[#FF9549]/80 bg-[#FF9549]"
              >
                <p className="text-sm font-medium ">Получить предложение</p>
              </button>
              <div className="flex gap-2 items-center">
                <input type="checkbox" />
                <p className="text-[14px] font-light">
                  Согласен на обработку персональных данных.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalZakaz
