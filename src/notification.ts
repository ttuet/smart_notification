export type BasicNotification = {
  user_id: string;
  type: "completed" | "failed" | "initial";
  content: string;
  write_at: number;
  read_at: number;
  report_url: string;
};

// modern
interface ModernNotification {
  user_id: string;
  type: string;
  write_at: number;
  read_at: number;
  data: NotificationData;
  noti_key: string;
}

enum NotificationType {
  LIKED,
  COMMENTED,
  TAGGED,
}

export interface Subject {
  id: string;
  name: string;
  type: string;
  image: string;
}

interface NotificationData {
  subjects: Array<Subject>;
  subject_count: number;
  di_object: Subject;
  in_object: Subject;
  pr_object: {
    relation: string;
    obj: Subject;
  };
}

interface NotificationResult {
  user_id: string;
  type: string;
  write_at: number;
  read_at: number;
  data: NotificationData;
  noti_key: string;
}

// =>>> build for notification
///   get Notification Data => complie => send to user
// {
//     content: "HELLLPPPPP",
//     ranges: {
//         hilights: [offset: 10, length: 10]
//     }
// }

export {
  NotificationType,
  NotificationResult,
  NotificationData,
  ModernNotification,
};
