export default function argumentMap(args:string[]):any {
  let a = [...args]
  a.shift();
  let _r = {};
  for (let i = 0; i < a.length; i+=2) {
    const key = a[i];
    const value = a[i + 1];
    _r[key.replace('--', '')] = value
  } 
  return _r;
}