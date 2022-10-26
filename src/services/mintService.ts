const mintService = (data: any) => {
  const { id, amount } = data;

  if (id != undefined && amount) {
    console.log("data: ", data);
    return {
      code: 200,
      json: {
        status: true,
        message: "success",
        data: {},
      },
    };
  } else {
    console.log("invalid request");
    return {
      code: 400,
      json: {
        status: false,
        message: "failed, request data not full-filled",
        data: {},
      },
    };
  }

  console.log("mint service");
};

export default mintService;
