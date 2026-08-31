# 实测防御条款与失误对照

版面骨架见 [board-variant.md](board-variant.md)（三段式融入式全板，唯一模式）。本文件收录全部实测防御条款与常见失误对照——自行改写提示词时必须保留。

## 常见失误对照

| 失误提示词写法 | 修正写法 |
|---|---|
| a set of branded merchandise | 逐件列出载体与用法（模型会画成商品陈列） |
| logo on every item | title appears fully at most twice; others use No. and category |
| beautiful blue packaging | powder blue / mist blue / sky blue 点名 + 面积关系 |
| realistic 3D render | matte paper craft, soft natural light only |

## 实测防御条款（生成前检查提示词是否已包含）

| 症状 | 防御句 |
|---|---|
| 载体超编、重复（如清单 1 个杯子生成了 3 个） | 载体清单结尾加：`exactly these carriers as listed, no duplicates, one cup only` |
| 主标题印满所有载体（连杯身、小物料都有） | `the wordmark appears ONLY on the bag and the box; every other carrier carries graphics, numbers or the seal only — no text` |
| 票卡/卡片正文出现成行乱码假字 | 卡片类只留编号与图形：`the card carries only the number "No.XXXX" and small graphics, no body text lines` |
| 小物料上品牌名拼错（如 CHACKE） | 小物料一律不带文字；必须带时逐件写 `spelled exactly` 并在自检时放大核对 |
| 印章字没实现（只出现了图形红章） | 印章写法具体到字与载体：`a small red square seal with the single character "姬" on the hang tag and the envelope only` |
| 参考图串染（锚图/照片里的吉祥物、品牌元素长进新图，重点在贴纸组） | `no mascots or brand elements carried over from the reference image; the sticker sheet contains ONLY the listed motifs, no characters other than listed`；锚图必须是无品牌纯版式板，带品牌元素的锚直接换掉 |
