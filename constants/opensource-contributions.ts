export type Repository = {
  org: string;
  name: string;
  url: string;
  avatar: string;
};

export const repositiories: { [repoId: string]: Repository } = {
  "@makeplane-plane": {
    org: "makeplane",
    name: "plane",
    url: "https://github.com/makeplane/plane",
    avatar: "https://avatars.githubusercontent.com/u/115727700?v=4",
  },
  "@makeplane-plane-mobile": {
    org: "makeplane",
    name: "plane-mobile",
    url: "https://github.com/makeplane/plane-mobile",
    avatar: "https://avatars.githubusercontent.com/u/115727700?v=4",
  },
  "@1akhanBaheti-FlutterKanbanBoard": {
    org: "1akhanBaheti",
    name: "FlutterKanbanBoard",
    url: "https://github.com/1akhanBaheti/FlutterKanbanBoard",
    avatar: "https://pub.dev/favicon.ico",
  },
  "@AppFlowy-IO-AppFlowy-IO": {
    org: "AppFlowy-IO",
    name: "AppFlowy",
    url: "https://github.com/AppFlowy-IO/AppFlowy",
    avatar: "https://avatars.githubusercontent.com/u/86002201?s=48&v=4",
  },
  "@AppFlowy-IO-appflowy-editor": {
    org: "AppFlowy-IO",
    name: "appflowy-editor",
    url: "https://github.com/AppFlowy-IO/appflowy-editor",
    avatar: "https://avatars.githubusercontent.com/u/86002201?s=48&v=4",
  },
};
