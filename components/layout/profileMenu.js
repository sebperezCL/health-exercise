const ProfileMenu = () => {
  return (
    <div className="relative rounded-full w-10 h-10 mx-5 ml-8">
      <div className="absolute left-0 top-0 w-full h-full rounded-full object-cover bg-blue-500 flex justify-center items-center">
        <span role="button" className="text-white font-bold">
          JO
        </span>
      </div>
      <div className="absolute rounded-full -right-2 -top-2 w-6 h-6 bg-red-600 border-2 border-white flex justify-center items-center">
        <span className="text-white font-bold text-xs">2</span>
      </div>
    </div>
  );
};

export default ProfileMenu;
