import { ModernNotification } from "./notification";

export const compile = (noti: ModernNotification) => {
  const { subjects, subject_count, di_object, in_object, pr_object } =
    noti.data;
  let action = "";
  switch (noti.type) {
    case "LIKED":
      action = " đã thích ";
      break;
    case "TAGGED":
      action = "đã gắn thẻ ";
      break;
    default:
      action = " đã comment vào ";
  }

  return `${subjects[0].name} ${
    subject_count > 1 ? `và ${subject_count - 1} người khác ` : ""
  } ${action} ${di_object.name}`;
};
