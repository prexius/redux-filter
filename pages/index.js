import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import Tags from "../components/filter/Tags";
import { fetchProducts } from "../redux/products";
import Types from '../components/filter/Types';

function Home() {
	const dispatch = useDispatch()

	const { products, isLoading, isError, error } = useSelector(state => state.products)
	const { tags, types } = useSelector((state) => state.filter);

	useEffect(() => {
		dispatch(fetchProducts({ tags, types }))
	}, [dispatch, tags, types])

	let content;
	if (isLoading) content = "Loading"
	if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
	if (!isLoading && !isError && products?.length === 0) {
		content = <div className="col-span-12">No products Found</div>
	}
	if (!isLoading && !isError && products?.length > 0) {
		content = products.map((product, i) => (
			<ProductItem product={product} key={i} />
		))
	}

	return (
		<>
			<div className="container mx-auto">
				<Tags />
				<Types />
			</div>
			<section className="pt-12">
				<div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
					{content}
				</div>
			</section>
		</>
	);
}

export default Home;
