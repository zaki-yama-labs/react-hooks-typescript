
### [4. 副作用フックの利用法](https://ja.reactjs.org/docs/hooks-effect.html)

- 副作用(effect): データの取得、購読の設定、あるいは React コンポーネント内の手動での変更
- `useEffect` フック: `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` がまとまったもの
- なぜ `useEffect` で副作用を記述するのか
  - 関心のある処理を1箇所にまとめるため
  - 従来の class では `componentDidMount` などのライフサイクルメソッドに同じような処理を書かなければならなかった
- React コンポーネントにおける副作用
  1. クリーンアップコードを必要としない副作用
  2. 〃 必要とする副作用
- `useEffect` はクリーンアップ用の関数を返すことができる。関数は次の副作用を実行する前に毎回呼ばれる
- 特定の値が変わっていない場合には `useEffect` をスキップしたい場合、第二引数に配列として渡す

```javascript
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes
```

### [5. フックのルール](https://ja.reactjs.org/docs/hooks-rules.html)

- フックを呼び出すのはトップレベルのみ。ループや条件分岐、ネストされた関数内での呼び出しは不可
- React の関数コンポーネント内　or カスタムフック内のみで呼び出す

なぜか？ -> `useState` の呼び出しがどの state に対応するのか、はフックが呼ばれる順番に依存しているから
