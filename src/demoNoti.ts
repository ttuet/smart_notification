import { ModernNotification, Subject } from "./notification";
import { nanoid } from "nanoid";
import moment from "moment";

export const demoNotiStart = (executor: any) => {
  const x = setInterval(() => {
    executor(randomDataNoti());
  }, 1000);
};

const randomSubject = (): Subject => {
  return {
    id: nanoid(),
    image: "http facel",
    name: nanoid(),
    type: "human",
  };
};

const randomDataNoti = (): ModernNotification => {
  let notiType = "LIKED";
  const type = Math.round(Math.random() * 100);
  if (type % 3 === 0) {
    notiType = "COMMENT";
  } else if (type % 3 === 1) {
    notiType = "LIKED";
  } else notiType = "TAGGED";

  return {
    user_id: nanoid(),
    data: {
      di_object: randomSubject(),
      subject_count: Math.round(Math.random() * 100),
      subjects: [randomSubject()],
      in_object: randomSubject(),
      pr_object: { obj: randomSubject(), relation: "in" },
    },
    type: notiType,
    write_at: moment().date(),
    read_at: moment().date() + 1000,
    noti_key: "",
  };
};
