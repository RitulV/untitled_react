import MenuSummary from "./Cart/MenuSummary";
// const MenuSummary = lazy(() => import("./Cart/MenuSummary"));

const Cart = () => {

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col justify-self-center justify-center mx-[100px]">
        <div className="h-[10px]"></div>

        <div className="w-[1275px] mt-[15px] mb-[15px] mx-[0px]">
          <div className="grid grid-cols-3 gap-7">
            <div className="col-span-2 flex flex-col items-center">
              <div className="h-[20px]"></div>
              <div className="bg-white border border-black h-[350px] w-[700px] mb-[100px]">
                Address
              </div>
              <div className="h-[30px]"></div>
              <div className="bg-white border border-black h-[100px] w-[700px]">
                Payments
              </div>
              <div className="h-[20px]"></div>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-[20px]"></div>
              <div className="bg-white rounded-xl shadow-[0px_5px_15px_rgba(0,0,0,0.25)] h-[520px] w-[480px] mb-[100px]">
                <MenuSummary />
              </div>
              <div className="h-[20px]"></div>
              <div className="bg-white border border-black h-[150px] w-[480px]">
                Reviews
              </div>
              <div className="h-[20px]"></div>
            </div>
          </div>
        </div>

        <div className="h-[10px]"></div>
      </div>
    </div>
  );
};

export default Cart;
