/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';


const ProductItem = ({ product = {} }) => {
// console.log(product);
    const { _id, jobTitle, thumbnail, } = product;
    return (
        <>
            <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
                <div className="w-full flex flex-col">
                    <div className="relative">
                        {/* <Link href={`${id}`}>
                            <a>
                                <img src={thumbnail} className="w-full h-auto" alt="Some product jobTitle" />
                            </a>
                        </Link> */}

                        <Link href={`${_id}`}>
                            <a>
                                <p className="text-slate-900 text-sm font-semibold">
                                    {jobTitle}
                                </p>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductItem;












