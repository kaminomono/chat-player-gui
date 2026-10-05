# chatplayer 操作面板

為 [ting1322/chat-player](https://github.com/ting1322/chat-player) 製作的 Windows 圖形化操作介面。
不需要手打命令列，用點選的方式就能設定 `chatplayer.exe` 的參數，把 yt-dlp 下載的 `live_chat.json` 轉成可離線播放的聊天室 `.htm`。

> 本專案是第三方的非官方 GUI 外殼，只負責組合參數並呼叫 `chatplayer.exe`，轉檔功能全部由原專案提供。

![主畫面](docs/screenshot.png)

## 功能

- 手動選擇主程式 `chatplayer.exe`，或一鍵下載最新版並自動解壓
- 選擇單一影片檔或整個資料夾（資料夾模式會處理其中所有 `.mp4` / `.webm`）
- 選好影片後自動帶入同名的 `.live_chat.json` 與同目錄的 `set-list.txt`
- 圖形化設定全部參數，並即時顯示完整指令預覽（過長自動換行，可一鍵複製）
- 轉換過程的輸出會顯示在視窗下方的記錄區
- 完成後可自動開啟輸出資料夾
- 自動記住上次的設定
- 單一 exe，免安裝 Python

## 下載與執行

1. 到 [Releases](https://github.com/你的帳號/你的倉庫/releases) 下載 `chatplayer操作面板.exe`。
2. 直接雙擊執行。
3. 第一次使用時，按「選擇」指定 `chatplayer.exe`，或按「下載最新版」自動取得。

系統需求：Windows 10 / 11（64 位元）。

## 使用方式

### 事前準備

先用 [yt-dlp](https://github.com/yt-dlp/yt-dlp) 下載影片與聊天室紀錄，需加上參數：
--write-subs --sub-langs live_chat

會得到類似下面的檔案：
2022-04-07.mp4
2022-04-07.live_chat.json

注意：影片只支援 `mp4` 與 `webm`，`mkv` 無法在瀏覽器播放。

### 操作步驟

1. 設定「主程式」：選擇 `chatplayer.exe`，或按「下載最新版」。
2. 設定「影片檔 / 資料夾」：按「檔案」選單支影片，或按「資料夾」處理整個目錄。
3. 視需要調整其他參數（見下表）。
4. 按「開始轉換」。
5. 轉換完成後，用瀏覽器（建議 Firefox）開啟產生的 `.htm` 檔。

## 欄位說明

| 欄位 | 對應參數 | 說明 |
|---|---|---|
| 主程式 | — | `chatplayer.exe` 的位置。「版本」按鈕會執行 `-version` 顯示版本 |
| 影片檔 / 資料夾 | 最後一個位置參數 | 可選單一檔案或資料夾 |
| chat json | `-chat-json` | 聊天室 json。留空則自動找「影片檔名 + .live_chat.json」 |
| 時間軸 txt | `-set-list` | 時間軸文字檔。留空則自動讀取影片旁的 `set-list.txt` |
| 輸出目錄 | `-out-dir` | 留空 = 影片檔同目錄（不建議修改） |
| 輸出檔名 | `-output` | 留空 = 與影片檔同檔名（副檔名 `.htm`） |
| 時間偏移秒 | `-offset` | 見下方說明 |
| 強制深色 | `-force-dark` | 強制黑底配色，預設依瀏覽器自動判斷 |
| 不下載貼圖 | `-no-download-pic` | 不把聊天室貼圖存到本機，網頁改用線上圖片 |
| 分離 js/css | `-split-res` | 把 JavaScript 與 CSS 獨立成檔案，預設嵌入 html |
| 完成後開啟輸出資料夾 | — | 轉換成功後自動開啟輸出位置 |

### 時間偏移（-offset）

- 負數，例如 `-offset -15959`：在直播開始前 15959 秒就開始抓 `live_chat.json`。
- 正數：在直播開始後才開始抓 `live_chat.json`。

負數偏移需要 chat-player v1.0.5 以上的版本。

### 資料夾模式的限制

選擇資料夾時，會有以下限制，這些都來自原專案：

- 不支援 `-chat-json` 與 `-set-list`，這兩欄會自動停用。
- 不建議指定 `-output`，否則所有影片都會輸出成同一個檔名而互相覆蓋，執行前會跳出警告。
- 每支影片會各自尋找同名的 `.live_chat.json`。

### 貼圖

貼圖預設會下載到 `images` 目錄供離線使用，多個 `.htm` 可以共用。
不建議關閉，因為會員貼圖可能被刪除。

## 設定檔

設定會自動儲存在 exe 旁邊的 `chatplayer_gui.json`。
如果要重置，直接刪除這個檔案即可。

請不要把 exe 放在需要管理員權限的位置（例如 `C:\Program Files`），否則無法儲存設定。

## 從原始碼執行

```bash
git clone [https://github.com/你的帳號/你的倉庫.git](https://github.com/你的帳號/你的倉庫.git)
cd 你的倉庫
python gui.py
```

需要 Python 3.9 以上（程式使用了 `dict | dict` 語法）。僅使用標準函式庫，不需要額外安裝套件。

## 自行打包

```bat
pip install pyinstaller
pyinstaller -F --noconsole --icon neko33suki.ico --add-data "neko33suki.ico;." --name "chatplayer操作面板" gui.py
```

或直接執行專案內的 `Da-Bao-exe.bat`，會自動打包並清理暫存檔，最後在目前目錄留下 exe。

`--add-data` 是為了把圖示一併包進 exe，執行時視窗與工作列才會顯示自訂圖示。

## 常見問題

**按「開始轉換」後顯示「找不到主程式」？**
請確認「主程式」欄位指向的是 `chatplayer.exe`，且檔案存在。

**轉換完沒有看到 htm？**
預設輸出在影片檔同一個資料夾。若有修改輸出目錄，請到該目錄找。

**聊天室沒有跟影片同步？**
檢查「時間偏移秒」。若是在直播開始前就開始抓聊天室，需填負數。

**mkv 檔案為什麼不能用？**
瀏覽器只能播放 `mp4` 與 `webm`，這是原專案的限制。

**Windows 顯示「已保護您的電腦」？**
這是因為程式沒有數位簽章，PyInstaller 打包的 exe 常被 SmartScreen 或防毒軟體誤判。
可以自行閱讀 `gui.py` 原始碼並自行打包。

## 致謝

- [ting1322/chat-player](https://github.com/ting1322/chat-player)：實際負責轉檔的原專案
- [yt-dlp](https://github.com/yt-dlp/yt-dlp)：下載影片與聊天室紀錄

## 授權

請填入你選擇的授權條款（例如 MIT），並在倉庫中加入 `LICENSE` 檔案。
