import { MainMenuItemProps } from "./MainMenuItem/MainMenuItem";
export const mainMenuData: MainMenuItemProps[] = [
   {
      text: "New Game",
      style: {
         backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSle2lbVa9lZ7orib4xbxymv2hZl-uNrr9eaFfzgZPq24g_bT3g)"
      },
      path: "/new-game"
   },
   {
      text: "Load Game",

      style: {
         backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCIKY1rWZ-Z6dhCxbMedgRruyKCT15GV04Dc8t2eAN2HY9sErP)"
      },
      path: "/load-game"
   },

   {
      text: "Map Editor",
      style: {
         backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBJS-jpg3g8UQGaHfpVio1f36a0WvnHVGyIdTBHtj0bCx_MJGv)"
      },
      path: "/map-editor"
   },
   {
      text: "How to Play",
      style: {
         backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDFyXaWvwxMzghzNU18NERhe2rwRG15Vq2rJiC7aZnWhubz7__)"
      },
      path: "/how-to-play"
   },
   {
      text: "Quit",

      style: {
         backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlWgwhLzJtjhKg9n-kz9EZH5x9x_jBv21fMCg8MoFUt67WXh8-)"
      }
   }
];
