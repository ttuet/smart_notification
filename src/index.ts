// import Handlebars from "handlebars";
import { compile } from "./compileNoti";
import { demoNotiStart } from "./demoNoti";
import { ModernNotification, NotificationData } from "./notification";

// const template = Handlebars.compile("Name: {{name}}");
// console.log("template: ", template({ name: "Tung" }));
console.log("Hello world");

export const PushLikeExecutor = (noti: ModernNotification) => {
  console.log("noti: ", compile(noti));
};

demoNotiStart(PushLikeExecutor);
