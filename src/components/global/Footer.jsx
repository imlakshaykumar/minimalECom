export const Footer = () => {
  return (
    <div className="container max-w-full bg-black h-[11rem] flex flex-col justify-center items-center text-center">
      <div className="footer-content max-w-[1200px] w-full mx-auto px-5">
        <div className="footer-link flex flex-col justify-center items-center gap-7 w-[58%] mx-auto text-sm">
          <ul className="nav-items-list flex w-full justify-evenly uppercase items-center text-white">
            <li className="item cursor-pointer hover:underline font-medium">About</li>
            <li className="item cursor-pointer hover:underline font-medium">Store locator</li>
            <li className="item cursor-pointer hover:underline font-medium">FAQs</li>
            <li className="item cursor-pointer hover:underline font-medium">News</li>
            <li className="item cursor-pointer hover:underline font-medium">Careers</li>
            <li className="item cursor-pointer hover:underline font-medium">Contact US</li>
          </ul>
          <span className="text-white">Design by Someone</span>
        </div>
      </div>
    </div>
  );
};
