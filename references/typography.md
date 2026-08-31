# 文字系统 Typography

文字是包装结构的一部分。所有文字内容必须在生成前定稿并逐条写进提示词，杜绝模型随机生成乱码。

## 文字角色（每张海报 3–5 条，总量克制）

| 角色 | 数量 | 示例 |
|---|---|---|
| 主标题 Title | 1 | `MIST CAT`、`NO.7 KILN`、`FIELD 12` |
| 副标题 Subtitle | 0–1 | `A quiet companion`、`slow baked, small batch` |
| 编号 No. | 1 | `No.01`、`Edition 24`、`EST. 2026` |
| 品类名 Category | 1–2 | `PAPER GOODS`、`BAKERY`、`BOTANICAL` |
| 微型说明 Micro note | 0–2 | `Handle with care`、`Keep in a cool place` |

主标题提炼规则：从主体名称、主题、情绪、功能或象征意义中来；1–2 个单词；全大写；可发音；避免生造词和直译腔。

## 主字体的两种气质（按主题选一）

| 气质 | 适用主体 | 英文描述短语 |
|---|---|---|
| 细衬线 / 老式衬线 | 人文、自然、器物、食物、植物 | refined serif with moderate contrast |
| 几何无衬线 | 建筑、交通、空间、现代产品、科技感 | clean geometric sans-serif |

辅助小字一律用小号无衬线或等宽体（mono for numbers and codes）。全画面不超过两种字族。

## 排法库（每件物料换着用）

| 排法 | 英文短语 | 常用载体 |
|---|---|---|
| 竖排 | set vertically down the tag | 吊牌、书签、行李牌 |
| 沿边延伸 | running along the box edge | 盒、套盒、封套 |
| 环绕排 | curved around the circular label | 圆标、瓶标、徽章 |
| 跨面排 | crossing the box lid and side faces | 方盒、内衬盒 |
| 隐于图形 | tucked between illustrated elements | 包装纸、海报封套 |
| 封口结构 | printed on the seal sticker that closes the fold | 封口贴、腰封 |
| 撕线分断 | interrupted by the perforation line | 票券、登机牌 |
| 折页错位 | offset across accordion folds | 折页、地图 |

## 出现频率规则

- 主标题完整出现不超过 2 次/画面：一次给主包装（最大、最正式），另一次给某件小载体（换排法、换尺寸）。
- 其余物料用编号、品类小字、纹样或辅助图形识别，不重复贴标题。
- 品类名与编号可出现多次（如每张卡片角上都有 `No.01`），因为它们是系统指纹，不是标题。

## 提示词写法示例

```text
Typography: title "MIST CAT" in refined serif, printed large across the
shopping bag front; the same title set vertically in small size on the
hang tag; round label carries the category "PAPER GOODS" curved along
its edge; ticket stub numbered "No.01 / 24" in mono; micro note
"handle with care" on the seal sticker. Only two type families total.
All text exactly as specified, no other invented text.
```

末尾一句 `All text exactly as specified, no other invented text` 必须保留，压制乱码。
