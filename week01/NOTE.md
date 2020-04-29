探究前端知识边界这个题目比较大，前端的所属领域从开始的切图工到现今不断向后扩张甚至到了一些软件测试，Node, 微服务领域等本不属于传统前端的领域，随着信息技术不断飞速发展，前端岗位细分的也十分厉害。下面我们从传统的前端技术为始发点，以脑图作为辅助工具，顺着脑图的每一个分支来梳理前端技术体系，试试探索出前端技术的边界。

首先，在传统的前端技术我们很自然的会想到前端技术的三驾马车：HTML, CSS, JavaScript，和API，因为API是特定环境的产物，因此我们把API也归为前端技术的一类。

先来看一下HTML: 所谓横看成岭侧成峰，远近高低各不同，我们也会从三个不同的维度来看一下HTML。

通用的计算机语言
SGML
XML
通用的计算机语言分为两部分：语法和词法，它们可以使得计算机可以识别HTML并且可以对其进行编译；通用计算机我们可以在whatwg找到一份词法资料和一份语法资料从中我们可以了解到关于HTML规定了那些词法规则并且还可以知道语法是如何将词组织串联起来的。

在描述SGML之前可以参考一份比较来自w3的资料和一份来自whatwg关于XML词法的资料。关于SGML我们要知道两个：

DTD：DTD的字面意思是文档类型定义，如果漏写DTD声明,Firefox仍然会按照标准模式来解析网页,但在IE中(包括IE6,IE7,IE8)就会出发怪异模式.
entity：这篇小文章有解释entity(实体)，大致讲的是，字符实体引用（或简称为实体）提供了一种输入字符的方法，这些字符无法用文档的字符编码表示或不能轻易在键盘上输入。
关于XML，老样子我们还是先来一篇文章介绍XML词法
，主要有两大块构成（namespace，tag）

namespace
tag
namespace：在w3中对namespace的解释，命名空间提供避免元素命名冲突的方法。举个栗子：
一个XML文档中使用

标签
<table>
   <tr>
   <td>Apples</td>
   <td>Bananas</td>
   </tr>
</table>
另一个XML文档也使用了这个标签

<table>
   <name>African Coffee Table</name>
   <width>80</width>
   <length>120</length>
</table>
假如这两个 XML 文档被一起使用，由于两个文档都包含带有不同内容和定义的

元素，就会发生命名冲突。XML 解析器无法确定如何处理这类冲突。解决这一问题的答案在这里 。一般namespace有下面几个：
svg
xmlns
mathml
aria
tag：我们可以通过这条线索可以知道具体有哪些标签，以及总的数量。

以上我们从三个维度来对HTML进行总结，接下来，我们再来看看JavaScript。

我们分别从语法（Grammer），语义（Semantics），运行时（Runtime）的角度来看一下JavaScript。
语法（这里的语法指的是比较大的概念）：它由词法（Lex）和语法（syntax）组成。

词法（Lex）：有分为以下几种：

WhiteSpace（空白符）
LineTerminator（换行符）
Comment（注释）
Token
前面三种我们成为没有效的输入（因为会被忽略），而Token称之为有效的输入，位于JavaScript语言的最底层，我们可以把这几类统称为原子（Atom）。它主要成分包括：

Identifier
Keywords
Punctuator
NumericLiteral
StringLiteral
RegularExpressionLiteral
Template
总体概括一下，就是说Token由标识符，关键字，文字量（字符串，字符和数字文字量）等组成。

语法（syntax）：有分以下几种：
Atom（原子）
Expression（表达式）
Statement （语句）
Structure（结构体）
Module&Script（模块和脚本）

因此即便是JavaScript最复杂的结构也不过是有这几部分构成。

而语义（Semantics）与语法（Grammer）一一对应

在运行时（Runtime）中 类型（Type）和 执行过程显得尤为重要：

类型（Type）：在 V10 版本中一共有七种类型，分别为：

Number
String
Boolean
Undefined
Null
Object
Symbol
执行过程（我们可以在ECMA标准中找到答案），它分为下面几个执行步骤：

runJob（初始化内置对象(Realm)）
Job
Module&Script
Structure
Promise
Function
Statement
Expression
Literial
Identifier
以上我们从语法（Grammar），语义（Semantics）和运行时（Runtime）三个维度来对HTML进行总结，接下来，我们再来看看CSS。

CSS的标准比较零散但我们可以参考以下 CSS V2.1版本，虽然不是最新版本，但整体大的结构还是比较完整的。

我们可以从这几个部分来分析CSS：

词法/语法
@Rule
普通规则
机制
我们重点来看一下普通规则：一条普通的 CSS 语句有三个部分组成 举个栗子 .className { color: red } 其三部分分别是：

选择器
Property
Value
而选择器由分为：

简单选择器：常见的简单选择器有 .cls，#id，tagName，*，attr=v
复合选择器
复杂选择器
选择器列表
Property和value就不用过多讲解。

关于CSS机制：排版，伪元素，动画，优先级。

API：将其分成下面几种主流类型：

Browser
Node.js
Electron
小程序
Browser可以分为DOM，BOM；
而DOM由Nodes，Ranges，Events 所组成。
