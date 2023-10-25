const Contact = () => {
  return (
    <div className=" py-12 px-12  my-8">
      <div className=" my-7">
        <h4 className=" text-white text-4xl">Contact information</h4>
      </div>
      <div className=" grid grid-cols-3 gap-3">
        <div className=" grid gap-10 grid-cols-auto  bg-box-gray overflow-hidden px-8 py-8 rounded-2xl">
          <div className=" my-1  flex justify-between">
            <p className=" text-white text-xl font-normal">Country:</p>
            <p className=" text-gray-500 text-xl font-normal">Canada</p>
          </div>
          <div className=" my-1  flex justify-between">
            <p className=" text-white text-xl font-normal">City:</p>
            <p className=" text-gray-500 text-xl font-normal">Toronto</p>
          </div>
          <div className=" my-1  flex justify-between">
            <p className=" text-white inline-block  text-2xl">Streat:</p>
            <p className=" text-gray-500 inline-block  text-2xl">
              20 Dellbank Rd
            </p>
          </div>
        </div>
        <div className=" grid gap-10 grid-cols-auto  bg-box-gray overflow-hidden px-8 py-8 rounded-2xl">
          <div className=" my-1  flex justify-between">
            <p className=" text-white text-xl font-normal">Email:</p>
            <p className=" text-gray-500 text-xl font-normal">
              carter.inbox@mail.com
            </p>
          </div>
          <div className=" my-1  flex justify-between">
            <p className=" text-white text-xl font-normal">Telegram:</p>
            <p className=" text-gray-500 text-xl font-normal">@arter</p>
          </div>
          <div className=" my-1  flex justify-between">
            <p className=" text-white inline-block  text-2xl">Skype:</p>
            <p className=" text-gray-500 inline-block  text-2xl">Arter</p>
          </div>
        </div>
        <div className=" grid gap-10 grid-cols-auto  bg-box-gray overflow-hidden px-8 py-8 rounded-2xl">
          <div className=" my-1  flex justify-between">
            <p className=" text-white text-xl font-normal">Support service:</p>
            <p className=" text-gray-500 text-xl font-normal">
              +78 (098) 333 11 22
            </p>
          </div>
          <div className=" my-1  flex justify-between">
            <p className=" text-white text-xl font-normal">Office:</p>
            <p className=" text-gray-500 text-xl font-normal">
              +78 (098) 326 11 22
            </p>
          </div>
          <div className=" my-1  flex justify-between">
            <p className=" text-white inline-block  text-2xl">Personal:</p>
            <p className=" text-gray-500 inline-block  text-2xl">
              +78 (077) 114 26 53
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
