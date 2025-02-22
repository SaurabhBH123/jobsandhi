import icon_1 from "@/assets/images/icon/icon_08.svg";
import icon_2 from "@/assets/images/icon/icon_09.svg";
import icon_3 from "@/assets/images/icon/icon_10.svg";
import icon_W_1 from "@/assets/images/icon/icon_43.svg";
import icon_W_2 from "@/assets/images/icon/icon_45.svg";
import icon_W_3 from "@/assets/images/icon/icon_46.svg";
import { how_works_type } from "../types/how-it-works-type";

export const how_works_data: how_works_type[] = [
  {
    id: 1,
    icon: icon_1,
    icon_white: icon_W_1,
    title: "Open Form",
    sub_title: "Accessing the form is easy, so you can quickly begin your job.",
  },
  {
    id: 2,
    icon: icon_2,
    icon_white: icon_W_2,
    title: "Complete your Form",
    sub_title:
      "Complete your form with all necessary details to capture the attentions of potential client.",
  },
  {
    id: 3,
    icon: icon_3,
    icon_white: icon_W_3,
    title: "Apply job",
    sub_title:
      "Apply for a jobs that fit your preferance and requirements to client the role you want.",
  },
];