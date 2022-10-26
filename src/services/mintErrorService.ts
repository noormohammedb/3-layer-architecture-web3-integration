import { mintErrorIntegration } from "../integration";

const mintErrorService = async (data: any) => {
  console.log("data: ", data);
  const { id, amount } = data;

  if (id != undefined && amount) {
    const integationResponse = await mintErrorIntegration(id, amount);
    return {
      code: 200,
      json: {
        status: true,
        message: "success",
        data: {},
      },
    };
  } else {
    return {
      code: 400,
      json: {
        status: false,
        message: "failed, request data not full-filled",
        data: {},
      },
    };
  }
};

export default mintErrorService;
