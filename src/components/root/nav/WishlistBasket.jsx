import { RxCross2 } from "react-icons/rx";


const WishlistBasket= ({ wishListItem, deletefromCart }) => {

    const { product_image, product_title, price, product_id } = wishListItem;
    return (
        <div className="flex items-center gap-3 w-full justify-between ">
            <img src={product_image} className="w-[100px]   bg-gray-200 rounded p-1" alt="" />
            <h6 className="">{product_title}</h6>
            <h6 className="font-bold">${price}</h6>

            <button onClick={() => deletefromCart(product_id)} className="border border-black rounded-full"><RxCross2 className="text-black text-xl"></RxCross2></button>


        </div>
    );
};

export default WishlistBasket;