export interface Product{
    name:string,
    price: number;
    icon: string;
}

export const products: Product[] = [
    {name: 'Coca-Cola', price: 10, icon: '🥤'},
    {name: 'Cookies', price: 3, icon: '🍪'},
    {name: 'Sprite', price: 9, icon: '🥤'},
    {name: 'Fanta', price: 8, icon: '🥛'},
    {name: 'Chips', price: 5, icon: '🍟'},
    {name: 'Water', price: 6, icon: '💧'},
    {name: 'Chocolate', price: 12, icon: '🍫'},
    {name: 'Ice Cream', price: 15, icon: '🍦'},
    {name: 'Sandwich', price: 20, icon: '🥪'},
    {name: 'Juice', price: 11, icon: '🧃'},
    {name: 'Coffee', price: 7, icon: '☕'},
    {name: 'Tea', price: 6, icon: '🫖'},
    {name: 'Muffin', price: 9, icon: '🧁'}
];
