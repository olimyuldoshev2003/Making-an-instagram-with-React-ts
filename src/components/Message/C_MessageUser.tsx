import { C_MsUsers } from '../../Types/types';

const C_MessageUser = ({ user, setIdx }: C_MsUsers) => {
  return (
    <div
      onClick={() => setIdx(user.id)}
      className="hover:bg-gray-100/70 py-[8px] cursor-pointer md:flex items-center pl-[20px] gap-[14px] pr-[20px] dark:text-[#fff]  sm:w-[100px] lg:w-[240px]"
    >
      {/* img */}
      <div className="w-[60px] h-[60px] rounded-full relative">
        <img src={user.img} className="w-full h-full rounded-full" />
        {user.online ? (
          <div className="p-[6px] bg-green-500 absolute rounded-full bottom-[2px] right-[2px] border-white border-[2.5px]"></div>
        ) : null}
      </div>
      {/* txt */}
      <div className="hidden lg:flex lg:flex-col">
        <p className='dark:text-[#fff]'>{user.name}</p>
        {user.online ? (
          <p className="text-[14px] text-gray-500 dark:text-[#fff]">Online now</p>
        ) : (
          <p className="text-[14px] text-gray-500 dark:text-[#fff]">
            {user.status}
          </p>
        )}
      </div>
    </div>
  );
}

export default C_MessageUser