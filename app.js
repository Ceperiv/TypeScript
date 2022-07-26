"use strict";
// const x = (a:number,b:string):number|string => {
// return 555
// }
// x(55, 'ssls')
exports.__esModule = true;
// const user: { name: string, age: number, status: boolean } = {age: 35, name: 'vasya', status: true};
//
// interface IUser {
//     name: string;
//     age: number,
//     status: boolean
// }
//
// const user22: Partial<IUser> = {age: 56, name: 'llll'};
//
//
// interface IUser33<T, M> {
//     name: string;
//     age: number,
//     status: boolean
//     data: T,
//     asd: M
//     address: IAddress
// }
//
// const user33: Partial<IUser33<number[], number>> = {age: 33, status: false, data: [1, 2, 3, 4, 5], asd: 999}
// const user44: IUser33<number[], number> = {
//     name: 'qqq', age: 33, status: false, data: [1, 2, 3, 4, 5], asd: 999,
//     address: {city: 'Lviv', street:'qwe', house:['lkmk',55,true]}
// }
//
// interface IAddress {
//     city: string
//     street: string
//     house: [string, number, boolean]
// }
// type UserID = number;
//
// interface IMyArray{
//
// }
//
// type useStateType = [string,(a:number, b:string)=>string]
// const useState:useStateType = ['qwerty', (a, b) =>  {
//     return `${a}--${b}`
// }]
//
// let [user, setUser] = useState;
// setUser()
// user.
// class User {
//     constructor(public id: number, public name: string, private age: number) {
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
// }
//
//
// let user55 = new User(22,'Ivan',55)
//
// user55.name
// const x = (a: number, b: string): void => {
//     console.log(a + b)
// }
//
// x(55, '55')
// interface IShapeActions {
//     area: () => number;
//     perimeter: () => number;
// }
//
// interface IGreeting {
//     hello: () => void;
// }
//
// class Rectangle implements IShapeActions, IGreeting {
//     constructor(private a: number, private b: number) {
//     }
//
//     area(): number {
//         return this.a * this.b;
//     }
//
//     hello(): void {
//         console.log('hello world');
//     }
//
//     perimeter(): number {
//         return (this.a + this.b) * 2;
//     }
//
// }
//
// console.log(new Rectangle(10, 5).area());
// console.log(new Rectangle(10, 5).perimeter());
// console.log(new Rectangle(10, 5).hello());
//
// class Triangle implements IShapeActions {
//     constructor(private a: number, private b: number, private c: number, private h: number) {
//     }
//
//     area(): number {
//         return this.a * this.h * .5;
//     }
//
//     perimeter(): number {
//         return this.a + this.b + this.c;
//     }
//
// }
//
// let triangle = new Triangle(3,4,5,5);
// console.log(triangle.area());
// console.log(triangle.perimeter());
//
// const shapes:IShapeActions[]=[new Rectangle(12,20), new Triangle(3,4,5,5,)]
//
// for (const shape of shapes) {
//     console.log(shape.area());
//     console.log(shape.perimeter());
// }
// import {userService} from "./services";
//
// userService.getAll().then(({data})=> console.log(data.map(value => value.address.zipcode)))
// userService.getById(5).then(({data})=> console.log(data.address.geo))
// const x = () => {
//     return 'qwerty'
// }
//
// type MyType = ReturnType<typeof x>
//
// const aaa:MyType = 'dlkm'
//
// console.log(typeof (x()))
// console.log(aaa)
var my_enum_1 = require("./enum/my.enum");
console.log(my_enum_1.MyEnum.OK);
