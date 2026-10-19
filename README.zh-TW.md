<div align="center">

<img src="assets/banner.jpg" alt="qwen-image-local —— 在 NVIDIA GPU 上本機執行 Qwen-Image-2.1 的文字生圖與照片編輯；這張橫幅由模型在 RTX 3060 上先生成、再編輯而成。" width="100%"/>

**語言：** 繁體中文 · [简体中文](README.zh-CN.md) · [English](README.md)

**輸入一句提示詞，或最多拖入 10 張照片：Qwen-Image-2.1 在你 8 GB 顯示記憶體的顯示卡上約 35 秒出圖，全程不上傳，內容完全不會離開這台電腦。**

[![狀態](https://img.shields.io/badge/status-beta-d29922?style=flat-square)](CHANGELOG.md)
[![Windows](https://img.shields.io/badge/windows-10%20%7C%2011-0078D4?style=flat-square&logo=windows&logoColor=white)](https://github.com/Mats2208/qwen-image-local/releases)
[![Stars](https://img.shields.io/github/stars/Mats2208/qwen-image-local?style=flat-square&logo=github&color=e3b341)](https://github.com/Mats2208/qwen-image-local/stargazers)
[![模型](https://img.shields.io/badge/model-Qwen--Image--2.1-615CED?style=flat-square)](https://huggingface.co/Qwen/Qwen-Image-2.1)
[![基準測試](https://img.shields.io/badge/benchmark-vs%20gpt--image--2-4051B5?style=flat-square)](https://mats2208.github.io/qwen-image-local/)
[![授權條款](https://img.shields.io/github/license/Mats2208/qwen-image-local?style=flat-square&color=green)](LICENSE)

<br/>

<table>
<tr>
<td align="center"><strong>8 GB</strong><br/><sub>顯示記憶體，每個階段完整在 GPU 上執行</sub></td>
<td align="center"><strong>35 秒</strong><br/><sub>一張 1024² 圖片，RTX 3060</sub></td>
<td align="center"><strong>10</strong><br/><sub>每次編輯可參考的照片數</sub></td>
<td align="center"><strong>20</strong><br/><sub>對比 gpt-image-2 的測試，全部公開</sub></td>
<td align="center"><strong>0</strong><br/><sub>零上傳：提示詞和照片都留在本機</sub></td>
</tr>
</table>

**📊 基準測試：** [mats2208.github.io/qwen-image-local](https://mats2208.github.io/qwen-image-local/) &nbsp;•&nbsp; **🛠️ 自行建置：** [一行指令](#安裝) &nbsp;•&nbsp; **⭐ [給個 Star](https://github.com/Mats2208/qwen-image-local/stargazers)**：如果你的顯示卡跑得動，按個 Star，其他小顯存的使用者才找得到它。

</div>

---

Qwen-Image-2.1 於 2026 年 9 月 20 日發布。它是第一個既**好用**又**輕巧**的開放權重圖像模型：生成器只有 7B，而大多數優秀的開源模型都在 10–20B。這個專案就是替沒有 24 GB 顯示卡的人補上缺少的那一塊：一鍵安裝的桌面應用程式加上命令列工具，幫你裝好、塞進顯示記憶體，然後不打擾你。

<sub>非官方專案，與阿里巴巴或 Qwen 團隊無關。模型權重不可商用，詳見[授權條款](#授權條款)。</sub>

## 成果展示

<p align="center"><img src="assets/screen-edit.png" alt="Qwen Image Local 把一張生成的書店圖片改成雪夜；可見參考圖、指令、快速編輯按鈕和歷史紀錄列" width="100%"/></p>
<p align="center"><sub><b>圖片模式。</b>歷史紀錄列右側那張書店圖原本是用文字生成的；按「編輯這張圖」把它當作參考圖送回，再點一下<b>雪夜</b>，53 秒後雪景和冷色光線就出現了，而樓梯、燈和貓都還在原位。</sub></p>

<table>
<tr>
<td width="50%">
<p align="center"><img src="assets/screen-setup.png" alt="首次執行的安裝畫面，顯示偵測到的 RTX 3060、建議的顯示記憶體配置和待安裝檔案清單" width="100%"/></p>
<p align="center"><sub>首次執行。它會讀取你的 GPU、驅動程式和剩餘硬碟空間，建議一種配置，下載前把每個檔案都列清楚。已經有權重了？指定那個資料夾就能直接使用。</sub></p>
</td>
<td width="50%">
<p align="center"><img src="assets/screen-working.png" alt="生成過程中的畫面，顯示第 4/20 步、每步 1.8 秒、剩餘 29 秒，顯示記憶體用量 11.3/12 GB" width="100%"/></p>
<p align="center"><sub>生成中。步數、每步耗時和剩餘時間都來自引擎本身；右上角的量表是你實際的顯示記憶體用量（<b>11.3 / 12 GB</b>）。</sub></p>
</td>
</tr>
</table>

<p align="center"><img src="assets/banner-edit-before-after.jpg" alt="修改前後對比：模型清掉了自己橫幅裡亂碼的小字，其餘部分保持不變" width="720"/></p>
<p align="center"><sub>最上面那張橫幅也是模型做的。標題文字完美，但它在圖片下方自己編了一些亂碼小字（左）；在圖片模式裡再下一句 <i>「移除底部所有小字……」</i>，就乾淨了（右）。</sub></p>

## 功能

| | 功能 | 說明 |
|---|---|---|
| **創作** | 文字生圖 | 草稿 1024² · 標準 1.6 MP · 最高原生 2K，七種畫面比例，可鎖定種子 |
| **速度** | Turbo 極速 | 蒸餾而成的 8 步權重，取樣快約 3–4 倍；可搭配任一種顯示記憶體配置 |
| **模型** | 官方 / 無審查 | 在安裝畫面或主畫面切換圖像模型；編碼器和 VAE 共用，只需換一個檔案 |
| **透明** | 原生 RGBA | 模型直接輸出真正的 alpha 通道，不是靠事後去背 |
| **編輯** | 1–10 張參考圖 | 重新打光、改變風格、移除物體或人物、改寫招牌文字、合成主體；第一張圖是畫布 |
| **標註** | 圖片編輯器 | 參考圖送進模型前可以先畫、圈選、框選、加箭頭、擦除或裁切；支援復原、縮放和 90° 旋轉 |
| **隨機驚喜** | 創意產生器 | 風格 × 主體 × 地點 × 光線，或一個精選創意；可填主題 |
| **安裝** | 一行指令建置 + 一次性安裝 | 固定版本的 ComfyUI、Python 3.12、PyTorch CUDA 13，權重支援續傳與 SHA-256 驗證 |
| **命令列** | `qil` | `doctor` · `setup` · `generate` · `edit` · `surprise` · `bench` · `config` |
| **隱私** | 全程本機 | 提示詞和照片只會送往 `127.0.0.1` 上的引擎。每張圖都會附帶一個記錄提示詞、種子和參數的 `.json` |

## 誠實的基準測試：哪裡贏、哪裡輸

20 條提示詞，**每個模型只跑一次，不挑好看的**。Qwen-Image-2.1 在 RTX 3060 12 GB 上（int8，40 步，原生 2K），對比雲端的 gpt-image-2。編輯類測試使用 Wikimedia Commons 的真實照片。

| 類別 | Qwen 勝 | 平手 | gpt-image-2 勝 |
|---|---:|---:|---:|
| 攝影（6） | 0 | 1 | 5 |
| 創意（6） | 0 | 0 | 6 |
| **照片編輯（8）** | **1** | **7** | **0** |
| **合計** | **1** | **8** | **11** |

**編輯照片時，它和 gpt-image-2 不相上下**，而且免費、私密、不限次數。**文字生圖則比不上**：長提示詞遵循得沒那麼準確，世界知識也少一些（請它畫瑪黛茶杯，它兩次都畫成中國葫蘆）。每張圖、每條提示詞、每個判定都在[基準測試頁面](https://mats2208.github.io/qwen-image-local/)上。

<table>
<tr>
<td width="33%"><p align="center"><img src="docs/img/bench/in_vidriera.webp" alt="Solar Roast Coffee 招牌的輸入照片" width="100%"/></p><p align="center"><sub>輸入：一家真實的店面</sub></p></td>
<td width="33%"><p align="center"><img src="docs/img/bench/E3_cartel_texto_qwen.webp" alt="Qwen-Image-2.1 把招牌改成 LA PORTEÑA CAFÉ" width="100%"/></p><p align="center"><sub><b>Qwen，本機：</b>「LA PORTEÑA / CAFÉ」，Ñ 和重音符號都在，金色襯線字體一致，商標沒動</sub></p></td>
<td width="33%"><p align="center"><img src="docs/img/bench/E3_cartel_texto_gpt.webp" alt="gpt-image-2 改寫同一塊招牌" width="100%"/></p><p align="center"><sub><b>gpt-image-2：</b>一樣乾淨。平手。</sub></p></td>
</tr>
<tr>
<td width="33%"><p align="center"><img src="docs/img/bench/in_bici.webp" alt="靠牆的綠色腳踏車輸入照片" width="100%"/></p><p align="center"><sub>輸入：「去除背景」</sub></p></td>
<td width="33%"><p align="center"><img src="docs/img/bench/E7_bici_recorte_qwen.webp" alt="Qwen 以原尺寸去背，保留透明背景的腳踏車" width="100%"/></p><p align="center"><sub><b>Qwen 勝：</b>就是原本那台腳踏車，位置和大小不變，可直接拿去合成</sub></p></td>
<td width="33%"><p align="center"><img src="docs/img/bench/E7_bici_recorte_gpt.webp" alt="gpt-image-2 把腳踏車畫得更大並去除背景" width="100%"/></p><p align="center"><sub>gpt-image-2 把它重畫得更大，後貨架也改了</sub></p></td>
</tr>
<tr>
<td width="33%"><p align="center"><sub>文字生圖：<br/><i>「資訊圖表『Cómo preparar mate』（如何沖瑪黛茶），6 個編號步驟……」</i></sub></p></td>
<td width="33%"><p align="center"><img src="docs/img/bench/C3_infografia_mate_qwen.webp" alt="Qwen 的資訊圖表，小字說明拼字有誤" width="100%"/></p><p align="center"><sub><b>Qwen 輸：</b>大標題完美，小字說明拼錯（「Inclinar <b>enj</b> mate」），畫的是一般杯子而不是瑪黛茶杯</sub></p></td>
<td width="33%"><p align="center"><img src="docs/img/bench/C3_infografia_mate_gpt.webp" alt="gpt-image-2 的資訊圖表，說明正確且有瑪黛茶圖示" width="100%"/></p><p align="center"><sub><b>gpt-image-2 勝：</b>每條說明都正確，畫的是真正的瑪黛茶杯</sub></p></td>
</tr>
</table>

## 如何塞進 12 GB 顯示記憶體

三個模型加起來放不下：文字編碼器 8.9 GB + 圖像模型 6.9 GB + VAE 0.6 GB = 16.4 GB。所以它們**一次只跑一個階段，每個階段完整載入顯示記憶體**，其餘的在系統記憶體裡等待。沒有任何模型被拆成一半在 CPU、一半在 GPU，這正是低顯存方案通常很慢的原因。引擎記錄檔可以證實（三個階段都是 `loaded completely … full load: True`），速度也能證實：1024² 每步 1.35 秒，在 RTX 3060 上受限的是運算能力而不是顯示記憶體。

有兩個選擇比其他一切都重要：

- **int8「convrot」權重，而不是 GGUF。** Ampere 及更新的顯示卡有 int8 張量核心，ComfyUI 為這種格式內建原生運算核心，所以比即時反量化 GGUF 更快，而且幾乎無損。
- **為 CUDA 13 編譯的 PyTorch。** 使用 CUDA 12.8 版本時，ComfyUI 會在不提示的情況下關閉它最佳化過的 CUDA 後端。安裝程式會選對版本，並檢查你的驅動程式（R580 或更新）。

## 安裝

**系統需求：** Windows 10/11 · NVIDIA 顯示卡，8 GB（精簡配置）或 12 GB（均衡配置）· 驅動程式 580+ · 約 25 GB 硬碟空間 · 32 GB 記憶體（這是實測環境；16 GB 未測試）。

### 方案 A · 自行編譯（建議，約 5 分鐘）

在你自己電腦上編譯出來的執行檔不帶「從網路下載」的標記，所以 Windows SmartScreen 不會攔阻，而且你清楚知道自己執行的是什麼。

**1. 安裝必要工具（只需一次）。** 貼到任一終端機：

```powershell
winget install Rustlang.Rustup
winget install OpenJS.NodeJS.LTS
winget install Microsoft.VisualStudio.2022.BuildTools --override "--quiet --add Microsoft.VisualStudio.Workload.VCTools --includeRecommended"
```

裝好後關掉終端機再重新開啟，讓它載入新工具。

**2. 複製專案並建置。** 依你使用的終端機選擇對應的指令：

<table>
<tr><th>終端機</th><th>指令</th></tr>
<tr><td><b>PowerShell 5.1</b><br/><sub>Windows 內建的那個</sub></td><td>

```powershell
git clone https://github.com/Mats2208/qwen-image-local; cd qwen-image-local
powershell -ExecutionPolicy Bypass -File .\build.ps1
```

</td></tr>
<tr><td><b>PowerShell 7</b><br/><sub>pwsh，Windows Terminal 預設</sub></td><td>

```powershell
git clone https://github.com/Mats2208/qwen-image-local; cd qwen-image-local
pwsh -ExecutionPolicy Bypass -File ./build.ps1
```

</td></tr>
<tr><td><b>CMD</b><br/><sub>命令提示字元</sub></td><td>

```bat
git clone https://github.com/Mats2208/qwen-image-local && cd qwen-image-local
.\build.cmd
```

</td></tr>
<tr><td><b>Git Bash · Warp</b><br/><sub>Windows 上任一 bash</sub></td><td>

```bash
git clone https://github.com/Mats2208/qwen-image-local && cd qwen-image-local
./build.sh
```

</td></tr>
<tr><td><b>不想用終端機</b></td><td>

下載[原始碼 zip](https://github.com/Mats2208/qwen-image-local/archive/refs/heads/main.zip)，解壓縮後**雙擊 `build.cmd`**。

</td></tr>
</table>

這五種方式最後都是執行同一個 `build.ps1`：先檢查必要工具（缺什麼會告訴你確切的安裝指令），然後在 `out\` 產生 `qwen-image-local.exe` 和 `qil.exe`。加上 `-Installer` 還會一併建置安裝程式 `.exe`。已在 PowerShell 5.1、PowerShell 7.6、CMD 和 Git Bash 上測試過。

**3. 執行** `out\qwen-image-local.exe`。第一次啟動會安裝引擎，並一次性下載約 **19.5 GB**：引擎、Python、PyTorch，以及從 [Hugging Face](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) 下載的權重。下載中斷可以續傳，並以 SHA-256 驗證。

### 方案 B · 預先建置的安裝程式

從 [Releases](https://github.com/Mats2208/qwen-image-local/releases/latest) 下載 `Qwen.Image.Local_x.y.z_x64-setup.exe` 執行即可；它只會安裝在你自己的使用者帳戶下，不需要系統管理員權限。由於沒有程式碼簽章（憑證要付費），第一次執行時 SmartScreen 會跳出警告：**其他資訊 → 仍要執行**。

不論哪種方式，所有東西都在 exe 旁邊：`config.json`、`runtime\` 資料夾和存放生成圖片的 `output\` 資料夾（模型可以放到其他磁碟），解除安裝就是刪掉這個資料夾。exe 要放在可以寫入的資料夾，不要放在 `C:\Program Files`。舊版本安裝好的環境會繼續使用 `%LOCALAPPDATA%\qwen-image-local`。

## 快速上手（命令列）

`qil.exe` 來自同一次建置（或 release 壓縮檔），和應用程式共用同一份安裝。

```text
> qil doctor
GPU        RTX 3060 · 12.0 GB VRAM · driver 610.88 (ok)
profile    balanced (12 GB+ (int8 encoder))
speed      base (Standard (20–40 steps))
  [x] uv 0.12.18 (Python manager)
  [x] ComfyUI engine
  [x] Python 3.12
  [x] PyTorch (CUDA 13) + engine packages
  [x] qwen_image_2.1_int8_convrot.safetensors (6.76 GB)
  [x] qwen3vl_8b_int8_convrot.safetensors (8.71 GB)
  [x] qwen_image_2.1_vae_bf16.safetensors (644 MB)
Ready. Try: qil generate "a red fox asleep in the snow" --preset draft
```

```bash
qil setup                                             # 安裝；依你的顯示記憶體自動選擇配置
qil config --speed turbo                              # 任一種配置都可以搭配 8 步蒸餾取樣
qil generate "一隻在雪地裡睡著的紅狐狸" --preset draft
qil generate "瑪黛茶杯貼紙" --transparent --aspect 1:1
qil edit "把場景改成下雪的冬夜" -i street.jpg --preset standard
qil edit "把 <image2> 裡的狗放到 <image1> 的腳踏車旁邊" -i bike.jpg -i dog.jpg
qil surprise --theme capybaras
qil bench --suite bench/suite.json --preset max       # 重現公開的基準測試
```

加上 `--keep-engine` 可以讓引擎在多次呼叫之間保持執行，省下每次的啟動時間。

## 顯示記憶體配置

| 配置 | 文字編碼器 | 顯示記憶體峰值（含桌面） | 1024²，20 步 | 狀態 |
|---|---|---:|---:|---|
| **均衡** | int8，8.9 GB | 11.4 GB | 32 秒 | 已在 RTX 3060 12 GB 實測 |
| **精簡** | w4a8，6.3 GB | 7.2 GB | 33 秒 | 已在 RTX 5060 Laptop 8 GB 實測 |

精簡配置在速度不變的情況下，把顯示記憶體峰值降低約 2.5 GB，並已在真正的 8 GB 顯示卡上驗證（RTX 5060 Laptop，含桌面峰值 7.2 GB）。如果你手上有 10 或 16 GB 的顯示卡，在 [bench/tiers](bench/tiers) 跑一次 `qil bench`，對這個專案仍然是很有價值的貢獻。

## 它（暫時）不做的事

- **只支援 Windows 上的 NVIDIA。** 如果你用的是 AMD、Intel、Apple Silicon，或顯示記憶體不到 8 GB，請改用 [nihui/qwenimage-ncnn-vulkan](https://github.com/nihui/qwenimage-ncnn-vulkan)：一個能在任何 Vulkan GPU 上執行的命令列工具，以速度換取顯示記憶體。
- **取樣時沒有即時預覽**；你看到的是最終成品。
- **沒有遮罩和筆刷。** 局部編輯靠文字描述；模型本身支援遮罩和標記，只是應用程式還沒開放。
- **沒有提示詞擴寫。** Qwen 官方的改寫模型是另一個 9B 模型，在 12 GB 上無法和主模型同時執行。
- **權重在 Qwen Research License 下不可商用。**

## 常見問題

**RTX 3060 這種 12 GB 顯示卡能跑什麼 AI 圖像模型？** 使用 int8 權重、一次只載入一個階段的 Qwen-Image-2.1。這個應用程式幫你把這套配置裝好：一張 1024² 圖約 35 秒，原生 2K 約 7 分鐘。

**Qwen-Image-2.1 比得上 gpt-image-2 嗎？** 編輯照片時，依我們的測試是不相上下（8 次中 7 次平手、1 次勝）。文字生圖則比不上（12 次中 gpt-image-2 贏了 11 次）。

**可以使用我現有的 ComfyUI 模型資料夾嗎？** 可以。在安裝畫面選擇它，或執行 `qil setup --models-dir <資料夾>`。大小相符的檔案不會重複下載。

## 專案結構

```
crates/qil-core   安裝程式、引擎生命週期、生成用戶端、GPU 偵測（Rust）
crates/qil-cli    qil 命令列
app/              Tauri 2 桌面應用程式（Rust + 純 HTML/CSS/JS，英文／西班牙文／簡體中文／繁體中文）
bench/            suite.json、附作者標示的輸入照片、結果、判定、網站建置腳本
docs/             GitHub Pages 基準測試網站
```

`build.ps1` / `build.cmd` / `build.sh` 包裝了兩個建置步驟：`cargo build --release -p qil-cli`，以及在 `app/` 裡執行 `npx tauri build`。

## 幫忙推廣

這個專案之所以存在，是因為 12 GB 顯示卡的使用者不該只得到「去買一張 4090」這種建議。如果你的顯示卡也跑得動：

- **⭐ [幫專案按 Star](https://github.com/Mats2208/qwen-image-local/stargazers)。** 這是讓 GitHub 和搜尋引擎把專案推薦給下一個小顯存使用者最有效的方法。
- **分享出去**，到大家會問「我這張卡能跑什麼」的地方：[r/StableDiffusion](https://www.reddit.com/r/StableDiffusion/)、[r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/)、[X / Twitter](https://twitter.com/intent/tweet?text=Qwen-Image-2.1%20running%20fully%20in%20VRAM%20on%20a%2012%20GB%20GPU%2C%20desktop%20app%20%2B%20honest%20benchmark%20vs%20gpt-image-2&url=https%3A%2F%2Fgithub.com%2FMats2208%2Fqwen-image-local)、你的 Discord。
- **分享你的測試數據。** 有 10 或 16 GB 的顯示卡？執行 `bash bench/tiers/run.sh`，把 `results.json` 貼到新的 issue。

## 致謝

[Qwen-Image-2.1](https://github.com/QwenLM/Qwen-Image-2.1) 由阿里巴巴 Qwen 團隊推出 · [ComfyUI](https://github.com/comfyanonymous/ComfyUI) 與 [Comfy-Org](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) 的 int8 重新打包 · [uv](https://github.com/astral-sh/uv) · [Tauri](https://tauri.app)。基準測試照片來自 Wikimedia Commons；作者與授權資訊見 [bench/inputs/credits.json](bench/inputs/credits.json)。

## 授權條款

本專案程式碼採用 [MIT](LICENSE) 授權。應用程式從 Hugging Face 下載的 Qwen-Image-2.1 權重採用 [Qwen Research License](https://huggingface.co/Qwen/Qwen-Image-2.1/blob/main/LICENSE)，**不允許商業用途**。ComfyUI 採用 GPL-3.0，以獨立程序執行。對 CC BY-SA 基準測試照片所做的編輯採用 CC BY-SA 4.0。
