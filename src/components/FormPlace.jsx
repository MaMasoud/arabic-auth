import bro from "../assets/bro.svg"


export default function FormPlace({ children }) {
  return (
    <div className='w-[980px] bg-white border-border border h-[550px] rounded-3xl relative flex'>
      <div className='border-border border-r absolute top-0 w-0 h-full right-2/4'></div>
      <div className='w-1/2 p-8'>
        {children}
      </div>
      <div className='w-1/2 flex items-center p-8 flex-col'>
        <h1 className='text-4xl font-semibold text-primary'>تسجيل الدخول</h1>
        <img src={bro} className='mt-8'/>
      </div>
    </div>
  )
}
