export default function simpleArraySum(ar: number[]): number {
    // Write your code here
    let suma:number = 0;
    ar.forEach(element => {
    suma += element;
  });
  return suma;
}
