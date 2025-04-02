import {SearchQuery} from "../../../@types";
import ApiError from "../../../utils/ApiError";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import {IProduct} from "../product.interface";
import { fetchProduct } from "../service";

export const getProduct = catchAsync(async (req, res) => {
	const query: SearchQuery = {};
	const id = req.params.id;
	if(id) query._id = id;
	
	const data = await fetchProduct(query)
	
	if(!data || data.length !> 0) throw new ApiError(404, "Data not found")
	
		sendResponse<IProduct[]>(res, {
			success: true,
			statusCode: 200,
			message: "Products retrieved successfully",
			data
		})
})
