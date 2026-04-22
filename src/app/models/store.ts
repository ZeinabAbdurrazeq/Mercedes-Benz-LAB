// export class Store {
//     name: string;
//     branches: string[];
//     logo: string;

//     constructor(name:string, branches: string[], logo:string){
//         this.name = name;
//         this.branches = branches ;
//         this.logo = logo;
//     }
// }


export class Store {
    constructor(
    public Name: string,
    public Branches: string[],
    public Logo: string,
  ) {}

}
