# 提示词模板 Prompt Templates

第 9 步组装最终提示词时使用本模板。结构固定，方括号内容按当次照片填充。

> 本文件的 `[CANVAS]/[TOP]/[BOTTOM]` 骨架用于 **50/50 分割版（可选模式**，用户点名"上下分屏 / 保留实拍"时**）**。默认融入式全板使用 [board-variant.md](board-variant.md) 的版面骨架 + 本文件的填充规范与实测防御条款。

## 英文完整骨架（推荐直接用）

```text
[CANVAS] A premium brand packaging identity presentation board as a 3:4
vertical poster, strict 50/50 horizontal division: top half is the
original photograph, bottom half is the packaging identity system on a
clean studio background.

[TOP] Preserve the original photograph exactly: subject identity,
structure, pose, real texture, natural light and original color
atmosphere unchanged. Apply only a subtle fine-art color grade, art
magazine and exhibition photography quality. Naturally extend the
{天空/地面/墙面/水面/虚化环境} to fit the 3:4 frame. Do not stretch,
warp, repaint or alter the subject.

[GRAPHIC SYSTEM] Derive one core illustrated mark from the most
recognizable feature of the photo subject: {核心图形描述}. Supporting
elements: {辅助元素 1–2}. A repeating pattern derived from the core
mark: {纹样描述}.

[CARRIERS] {N} coordinated packaging items arranged as a modular
presentation — exactly these carriers, no duplicates: 1) ★ {主包装 + 短语 + 主色 + 图形用法}; 2) {载体 + 短语 +
用法}; 3) ……

[LAYOUT] Clear grid with edge alignment, strong scale contrast between
large and small items, generous negative space, at most 2–3 subtle
overlaps (a sticker on a box corner, a tag resting on the bag).

[PALETTE] Soft desaturated system: powder blue, mist blue, sky blue,
airy cold blue, with ivory white, cream, light beige, soft grey-green
and architectural neutrals; small dusty rose accents only ({位置}).
One palette family across all items.

[MATERIAL] Matte paper, fine textured cardstock, translucent glassine,
embossing, die-cut edges, folded structures, kiss-cut stickers; soft
natural light revealing paper thickness, folds and material
differences only.

[TYPOGRAPHY] {逐条文字：内容 + 载体 + 排法，参照 typography.md 的写法示例}.
Only two type families. All text exactly as specified, no other
invented text.

[NEGATIVE] no multi-photo collage, no stretching or warping of the
subject, no e-commerce product display, no cluttered mockup dump, no
plastic gloss, no strong reflections, no exaggerated 3D rendering, no
neon or fluorescent colors, no random gibberish text, no watermark.
```

## 中文骨架（给不支持英文提示词的工具）

```text
画幅：3:4 竖版品牌包装系统提案板海报，画面严格水平对分——上半为原照片，
下半为包装视觉系统，背景为干净的{象牙白}影棚底。

上半区：完整保留原照片的主体身份、结构、姿态、真实质感、自然光影与原有
色彩氛围，仅做轻微高级摄影调色（艺术杂志 / 展览摄影质感）；向{方向}自然
延展背景以适配画幅；禁止拉伸、扭曲、重绘主体。

品牌图形：从主体最具识别性的{特征}提炼一个核心插画图形（{描述}），辅以
{辅助元素}，并衍生一套{纹样}用于大面积载体。

载体清单：①★{主包装，颜色，图形用法}；②{载体，用法}；③……共 {N} 件，
大小横竖错开成模块化组合。

版面：清晰网格，边缘对齐，强烈尺度反差，大面积留白，层叠不超过 3 处。

色彩：浅粉蓝、雾蓝、天空蓝、空气感冷调蓝为主，配象牙白、奶油白、浅米色、
柔和灰绿与建筑中性色，仅{位置}使用少量灰玫瑰跳点；全部物料同一套色板。

材质：哑光纸、细纹厚卡、半透明硫酸纸、压纹、模切、折叠结构、贴纸；柔和
自然光只用于表现纸张厚度、折痕与材质差异。

文字：{逐条列确切文案 + 载体 + 排法}；全画面仅两种字体；所有文字严格按
上述内容呈现，不得生成其他文字。

禁止：多图拼接、拉伸变形主体、电商陈列感、杂乱 mockup 堆叠、塑料感、强
反光、夸张 3D、荧光色、乱码文字、水印。
```

## 按主体类型的变体钩子

| 主体 | 核心图形取向 | 纹样取向 | 加分载体 |
|---|---|---|---|
| 人物 / 宠物 | 姿态剪影、轮廓线描 | 爪印 / 发丝曲线 / 衣纹 | 徽章、卡片组 |
| 植物 / 花艺 | 单株线描、叶片负形 | 叶脉重复 / 散点小花 | 种子袋、养护卡 |
| 食物 / 饮品 | 剖面图形、器皿轮廓 | 格纹 / 圆点 / 手绘配料 | 杯套、火柴盒 |
| 建筑 / 空间 | 立面剪影、屋顶线 | 窗格 / 砖缝 / 拱形 | 门票、折页 |
| 器物 / 产品 | 产品轮廓、剖面结构 | 螺纹 / 网格 / 等高线 | 内衬盒、说明卡 |
| 交通 / 旅行 | 侧影剪影、路线线 | 虚线路线 / 票格 | 行李牌、登机牌 |
| 自然景观 | 天际线、波纹、山形线 | 等高线 / 波浪 / 云纹 | 邮折、挂画卡 |

## 常见失误对照

| 失误提示词写法 | 修正写法 |
|---|---|
| a set of branded merchandise | 逐件列出载体与用法（模型会画成商品陈列） |
| logo on every item | title appears fully at most twice; others use No. and category |
| beautiful blue packaging | powder blue / mist blue / sky blue 点名 + 面积关系 |
| realistic 3D render | matte paper craft, soft natural light only |
| put the photo on top and design below | strict 50/50 division + [TOP] 区完整保真条款 |

## 实测防御条款（首轮 50/50 实测新增，生成前检查提示词是否已包含）

| 症状 | 防御句 |
|---|---|
| 载体超编、重复（如清单 1 个杯子生成了 3 个） | 载体清单结尾加：`exactly these carriers as listed, no duplicates, one cup only` |
| 主标题印满所有载体（连杯身、小物料都有） | `the wordmark appears ONLY on the bag and the box; every other carrier carries graphics, numbers or the seal only — no text` |
| 票卡/卡片正文出现成行乱码假字 | 卡片类只留编号与图形：`the card carries only the number "No.XXXX" and small graphics, no body text lines` |
| 小物料上品牌名拼错（如 CHACKE） | 小物料一律不带文字；必须带时逐件写 `spelled exactly` 并在自检时放大核对 |
| 印章字没实现（只出现了图形红章） | 印章写法具体到字与载体：`a small red square seal with the single character "姬" on the hang tag and the envelope only` |
| 参考图串染（锚图/照片里的吉祥物、品牌元素长进新图，重点在贴纸组） | `no mascots or brand elements carried over from the reference image; the sticker sheet contains ONLY the listed motifs, no characters other than listed`；锚图必须是无品牌纯版式板，带品牌元素的锚直接换掉 |
