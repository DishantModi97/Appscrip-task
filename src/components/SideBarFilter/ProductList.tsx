import Image from "next/image";
import React from "react";
import { productList } from "./MockData";
import { CiHeart } from "react-icons/ci";

const ProductList = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productList?.map((product) => (
          <div key={product?.id} className="bg-white overflow-hidden">
            <div className="relative w-full h-48">
              <Image src={product.image} alt={product.title} layout="fill" objectFit="contain" />
            </div>
            <div className="p-2">
              <h2 className="text-base font-semibold truncate">{product.title}</h2>
              <div className="flex items-center text-xs text-gray-600">
                <p className="text-[11px] text-gray-600">
                  <span className="underline">Sign In</span> or create an account to see pricing
                </p>
                <CiHeart className="ml-auto" size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
