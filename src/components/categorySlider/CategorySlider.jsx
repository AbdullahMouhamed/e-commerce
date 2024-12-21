import axios from "axios";
import { useEffect, useState } from "react"
import Loading from "../loading/Loading";
import { Link } from "react-router-dom";

export default function CategorySlider() {
    const [categories, setCategories] = useState(null);







    async function getCategories() {
        const options = {
            url: "https://ecommerce.routemisr.com/api/v1/categories",
            method: "GET"
        }
        const { data } = await axios.request(options)
        setCategories(data.data)
    }
    useEffect(() => {
        getCategories()
    }, [])

    return (
        <>

            {categories ? <section className="pt-4 pb-16">
                <div className="flex justify-center items-center"> <h2 className=" text-center pb-2 mb-10 text-blue-600 text-[22px] font-bold header-lines">Shop Popular Categories</h2></div>
                <div>

                    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3">
                        {categories.map((category) =>
                            <Link to={`/categories`} className="inline-block " key={category._id}>
                                <img key={category._id} className="w-full h-[250px] object-cover" src={category.image} alt="" />
                                <h3 className="text-center pt-2 font-semibold text-blue-600">{category.name}</h3>
                            </Link>
                        )}
                    </div>
                </div>

            </section > : <Loading />
            }



        </>
    )
}
