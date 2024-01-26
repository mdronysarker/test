import * as Yup from "yup";

export const Input = Yup.object({
  name: Yup.string().required("please fill up the name"),
  status: Yup.string().required("required"),
});
