# Introduction

This tool allows you to create a multidimensional tilemap

![IMG](https://github.com/biud436/Initial2D/raw/master/docs/img/new_editor.png)

# Environment

|         Platform Type         |    Status     |
| :---------------------------: | :-----------: |
|           Electron            | Stable (100%) |
| Chrome 85.0.4183.121 (64 Bit) | UnStable (0%) |
|     Firebox 79.0 (64 Bit)     | UnStable (0%) |

# How to setup

```bat
npm install -D
```

# How to start InitialEditor

Open the Visual Studio Code and Press key called `F5` on platform such as Windows.

In case of platform such as OSX, try these steps.

```sh
chmod +x ./build.sh
./build.sh
npm run start
```

![IMG](./Call.png)

This tool includes an event emitter on all sub windows. The window is splitted `Controller` and `View` and `Model`. and the Model has a data only and passed to as `Controller`.

![IMG](./diagram.png)

![IMG](./event.png)

# License

This tool is under the MIT License.

-   jQuery - MIT License.
-   jQuery UI - MIT License.
-   pixi.js - MIT License.
-   prefixfree.min.js - MIT License.
-   Electron - MIT Liccense.

---

But some icon and javascript and stylesheets and images included at this tool have their own licenses.

-   Font Awesome Free - https://fontawesome.com/license/free
-   FSM Tile (2k_town05.png) - http://refmap-l.blog.jp/archives/8632768.html
-   FSM Tile (2k_town05-01.png) - http://refmap-l.blog.jp/archives/8632768.html
-   Tuxemon Tileset - https://opengameart.org/content/tuxemon-tileset
