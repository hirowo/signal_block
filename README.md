# 信号機モジュール(Groveコネクタ付き)
## 信号機モジュール(Groveコネクタ付き)とは？

Groveコネクタに接続できる、信号機モジュールです。Groveインターフェースで接続できるため
1枚のMicro:bitで複数の本モジュールが駆動できます。しやがって、1枚のMicro:bitで交差点の
動作を実現できます。


## Groveコネクタ
信号アサインは以下の通り  
1 SIG1  
2 SIG2   
3 VCC(2V ～ 6V) 3.3Vを推奨  
4 GND  

## 動作論理　
SIG1   SIG2  　動作  
LOW    LOW      緑点灯  
HIGH   LOW      黄点灯  
LOW    HIGH     赤点灯  
HIGH   HIGH     全消灯  


